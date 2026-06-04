import json
import os

from dotenv import load_dotenv
from langchain_openai import ChatOpenAI

load_dotenv()

llm = ChatOpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.getenv("OPENROUTER_API_KEY"),
    model="qwen/qwen-2.5-7b-instruct",
    temperature=0.3
)


def evaluate_answer(
    question,
    student_answer,
    topic,
    interview_goal,
    focus_areas,
    selected_rubrics,
    custom_rubrics,
    conversation_history
):

    rubric_prompt = ""

    all_rubrics = []

    # Default rubrics
    for key in selected_rubrics:

        all_rubrics.append({
            "title": key,
            "description": key
        })

    # Custom rubrics
    all_rubrics.extend(custom_rubrics)

    print("🔥 ALL RUBRICS FINAL:", all_rubrics)

    # Build rubric prompt
    for index, rubric in enumerate(all_rubrics, start=1):

        rubric_key = (
            rubric["title"]
            .lower()
            .replace(" ", "_")
        )

        rubric_prompt += f"""
{index}. {rubric_key}

Description:
{rubric["description"]}

Evaluate strictly.

Scoring Guide:
0-2: Very poor
3-4: Weak
5-6: Average
7-8: Strong
9-10: Excellent

Return format:
"{rubric_key}": {{
    "score": number,
    "remark": "short evaluation"
}}
"""

    prompt = f"""
You are an expert AI interviewer.

Evaluate the candidate response.

====================================
ROLE
====================================

{topic}

====================================
INTERVIEW GOAL
====================================

{interview_goal}

====================================
FOCUS AREAS
====================================

{focus_areas}

====================================
QUESTION
====================================

{question}

====================================
CANDIDATE RESPONSE
====================================

{student_answer}

====================================
CONVERSATION HISTORY
====================================

{conversation_history}

====================================
RUBRICS
====================================

{rubric_prompt}

====================================
IMPORTANT RULES
====================================

- Evaluate ONLY the provided rubrics
- Return ONLY valid JSON
- No markdown
- No explanations
- No triple backticks

Each rubric must contain:
- score
- remark

Also include:

{{
    "overall_score": number,
    "strengths": [],
    "improvement_areas": [],
    "final_feedback": "..."
}}
"""

    response = llm.invoke(prompt)

    try:

        cleaned_response = (
            response.content
            .replace("```json", "")
            .replace("```", "")
            .strip()
        )

        parsed = json.loads(cleaned_response)

        return parsed

    except Exception as e:

        print("🔥 Evaluation Parsing Error:", e)

        fallback = {}

        # IMPORTANT FIX
        for rubric in all_rubrics:

            rubric_key = (
                rubric["title"]
                .lower()
                .replace(" ", "_")
            )

            fallback[rubric_key] = {
                "score": 0,
                "remark": "Evaluation unavailable."
            }

        fallback["overall_score"] = 0

        fallback["strengths"] = []

        fallback["improvement_areas"] = []

        fallback["final_feedback"] = (
            "Evaluation parsing failed."
        )

        return fallback