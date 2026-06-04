from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import FileResponse

import json
import tempfile
import edge_tts
import asyncio

from interviews.interview.context import (
    INTERVIEW_CONTEXT
)

from interviews.services.llm import llm

from interviews.interview.followup import (
    generate_followup_question
)

from interviews.interview.new_question import (
    generate_new_question
)

from interviews.interview.strategy import (
    decide_question_strategy
)

from interviews.interview.evaluation.evaluator import (
    evaluate_answer
)

VOICE = "en-US-JennyNeural"

@api_view(["POST"])
def setup_interview(request):


    data = request.data

    INTERVIEW_CONTEXT.clear()

    INTERVIEW_CONTEXT.update({

        "role":
            data.get("role"),

        "experience":
            data.get("experience"),

        "interview_goal":
            data.get("interview_goal"),

        "difficulty_level":
            data.get("difficulty_level"),

        "focus_areas":
            data.get("focus_areas", []),

        "selected_rubrics":
            data.get("selected_rubrics", []),

        "custom_rubrics":
            data.get("custom_rubrics", [])
    })

    print("🔥 INTERVIEW CONTEXT UPDATED:", INTERVIEW_CONTEXT)
    print("🔥 FOCUS AREAS:", INTERVIEW_CONTEXT.get("focus_areas"))

    return Response({

        "message":
            "Interview configured successfully",

        "context":
            INTERVIEW_CONTEXT
    })


@api_view(["POST"])
def start_interview(request):

    print("🔥 STARTING INTERVIEW WITH CONTEXT:", INTERVIEW_CONTEXT)

    role = INTERVIEW_CONTEXT.get(
        "role",
        "Software Engineer"
    )

    experience = INTERVIEW_CONTEXT.get(
        "experience",
        ""
    )

    goal = INTERVIEW_CONTEXT.get(
        "interview_goal",
        ""
    )

    difficulty = INTERVIEW_CONTEXT.get(
        "difficulty_level",
        "medium"
    )

    focus_areas = INTERVIEW_CONTEXT.get(
        "focus_areas",
        []
    )

    selected_rubrics = INTERVIEW_CONTEXT.get(
        "selected_rubrics",
        []
    )

    custom_rubrics = INTERVIEW_CONTEXT.get(
        "custom_rubrics",
        []
    )

    prompt = f"""
    You are an expert AI interviewer.

    Generate the FIRST interview question for a live AI interview session.

    ====================================
    INTERVIEW CONFIGURATION
    ====================================

    ROLE:
    {role}

    EXPERIENCE:
    {experience}

    INTERVIEW GOAL:
    {goal}

    DIFFICULTY:
    {difficulty}

    FOCUS AREAS:
    {focus_areas}

    SELECTED RUBRICS:
    {selected_rubrics}

    CUSTOM RUBRICS:
    {custom_rubrics}

    ====================================
    IMPORTANT RULES
    ====================================

    Analyze the interview configuration carefully.

    Infer:

    what kind of interview this is
    what skills should be evaluated
    what style of questions are appropriate
    how technical or conversational the interview should feel

    The interview may be:

    technical
    conceptual
    communication-based
    behavioral
    analytical
    research-oriented
    problem-solving
    domain-specific
    mixed-format

    You must adapt naturally.

    Generate questions that align with:

    the role
    the focus areas
    the interview goal
    the expected skill set

    If the configuration suggests:

    communication skills → ask conversational and fluency-oriented questions
    coding/problem solving → ask logical and technical questions
    science/research → ask conceptual and analytical questions
    behavioral assessment → ask situational questions

    The question style should naturally match the interview context.

    Ask ONLY ONE question
    Sound like a real interviewer
    Be conversational and natural
    Avoid robotic phrasing
    Avoid generic questions
    Avoid unrelated topics
    Keep the interview engaging

    Return ONLY valid JSON.

    Example:

    {{
    "question": "Can you explain how polymorphism works in Java with a real-world example?",
    "rubrics": [
    "conceptual_depth",
    "technical_accuracy",
    "communication"
    ]
    }}

    """

    response = llm.invoke(prompt)

    raw_content = response.content.strip()

    print("🔥 RAW LLM RESPONSE:")
    print(raw_content)

    try:

        cleaned = (
            raw_content
            .replace("```json", "")
            .replace("```", "")
            .strip()
        )

        parsed = json.loads(cleaned)

        return Response(parsed)

    except Exception as e:

        print("JSON PARSE ERROR:", e)

        return Response({
            "question":
                "Alright, let's begin with something simple — can you introduce yourself and walk me through your recent projects?",

            "rubrics": [
                "conceptual_depth",
                "confidence"
            ]
        })

@api_view(["POST"])
def followup(request):

    data = request.data

    # =========================
    # LOAD FULL INTERVIEW CONTEXT
    # =========================

    topic = INTERVIEW_CONTEXT.get(
        "role",
        data.get("topic")
    )

    interview_goal = INTERVIEW_CONTEXT.get(
        "interview_goal",
        ""
    )

    focus_areas = INTERVIEW_CONTEXT.get(
        "focus_areas",
        []
    )

    selected_rubrics = INTERVIEW_CONTEXT.get(
        "selected_rubrics",
        []
    )

    custom_rubrics = INTERVIEW_CONTEXT.get(
        "custom_rubrics",
        []
    )

    difficulty_level = INTERVIEW_CONTEXT.get(
        "difficulty_level",
        "medium"
    )

    # =========================
    # DECIDE QUESTION STRATEGY
    # =========================

    strategy = decide_question_strategy(

        question_number=data.get(
            "question_number"
        ),

        previous_question=data.get(
            "previous_question"
        ),

        student_answer=data.get(
            "student_answer"
        ),
    )

    # =========================
    # FOLLOWUP QUESTION
    # =========================

    if strategy["type"] == "followup":

        question = generate_followup_question(

            topic=topic,

            interview_goal=interview_goal,

            focus_areas=focus_areas,

            selected_rubrics=selected_rubrics,

            custom_rubrics=custom_rubrics,

            difficulty_level=difficulty_level,

            previous_question=data.get(
                "previous_question"
            ),

            student_answer=data.get(
                "student_answer"
            ),

            conversation_history=data.get(
                "conversation_history"
            )
        )

    # =========================
    # NEW CONCEPT QUESTION
    # =========================

    else:

        question = generate_new_question(

            topic=topic,

            interview_goal=interview_goal,

            focus_areas=focus_areas,

            selected_rubrics=selected_rubrics,

            custom_rubrics=custom_rubrics,

            difficulty_level=difficulty_level,

            conversation_history=data.get(
                "conversation_history"
            )
        )

    return Response({

        "question": question,

        "type": strategy["type"]
    })



@api_view(["POST"])
def evaluate(request):


    data = request.data

    result = evaluate_answer(

        question=data.get(
            "question"
        ),

        student_answer=data.get(
            "student_answer"
        ),

        topic=data.get(
            "topic"
        ),

        interview_goal=data.get(
            "interview_goal"
        ),

        focus_areas=data.get(
            "focus_areas",
            []
        ),

        selected_rubrics=data.get(
            "selected_rubrics",
            []
        ),

        custom_rubrics=data.get(
            "custom_rubrics",
            []
        ),

        conversation_history=data.get(
            "conversation_history",
            []
        )
    )

    return Response({
        "data": result
    })


@api_view(["POST"])
def speak(request):

    text = request.data.get("text")

    with tempfile.NamedTemporaryFile(
        delete=False,
        suffix=".mp3"
    ) as temp_audio:

        output_path = temp_audio.name

    async def generate_audio():

        communicate = edge_tts.Communicate(

            text=text,

            voice=VOICE,

            rate="+15%",

            pitch="+4Hz"
        )

        await communicate.save(
            output_path
        )

    asyncio.run(
        generate_audio()
    )

    return FileResponse(

        open(output_path, "rb"),

        content_type="audio/mpeg"
    )