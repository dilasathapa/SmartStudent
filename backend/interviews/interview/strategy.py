import json

from interviews.services.llm import llm

def decide_question_strategy(


    question_number,

    previous_question,

    student_answer,


):


    normalized_answer = (
        student_answer or ""
    ).strip().lower()

    no_answer_patterns = [

        "",

        "no response recorded",

        "i don't know",

        "dont know",

        "not sure",

        "skip",
    ]

    candidate_did_not_answer = any(

        pattern in normalized_answer

        for pattern in no_answer_patterns
    )

    # ====================================
    # RULE 1
    # FORCE NEW CONCEPT ON ODD QUESTIONS
    # ====================================

    # Q1 -> new concept
    # Q3 -> new concept
    # Q5 -> new concept

    if question_number % 2 != 0:

        return {
            "type": "new_concept"
        }

    # ====================================
    # RULE 2
    # IF NO ANSWER -> MOVE AHEAD
    # ====================================

    if candidate_did_not_answer:

        return {
            "type": "new_concept"
        }

    # ====================================
    # RULE 3
    # AI DECIDES FOR EVEN QUESTIONS
    # ====================================

    prompt = f"""
    You are an expert HUMAN-LIKE interview strategist.

    Your job is to decide how a REAL interviewer would continue the conversation naturally.

    ====================================
    INTERVIEW STATE
    ====================================

    QUESTION NUMBER:
    {question_number}

    PREVIOUS QUESTION:
    {previous_question}

    CANDIDATE ANSWER:
    {student_answer}

    ====================================
    YOUR RESPONSIBILITY
    ====================================

    Decide whether the interviewer should:

    1. Ask a FOLLOW-UP question

    OR

    2. Move to a NEW concept/topic

    Your decision should make the interview feel:
    - smooth
    - conversational
    - natural
    - engaging
    - human-like

    The interview should NEVER feel robotic or like a fixed questionnaire.

    ====================================
    FOLLOW-UP RULES
    ====================================

    Choose:

    {{
        "type": "followup"
    }}

    IF:

    - the answer has useful depth
    - the candidate is trying to explain
    - clarification would improve understanding
    - interviewer can naturally continue same discussion
    - the concept deserves deeper exploration
    - the conversation flow feels natural staying there

    GOOD FOLLOW-UP SITUATIONS:

    - partial but promising answers
    - interesting explanations
    - candidate mentions something worth exploring
    - candidate gives surface-level understanding
    - interviewer can ask "why", "how", or "what if"


    ====================================
    NEW CONCEPT RULES
    ====================================

    Choose:

    {{
        "type": "new_concept"
    }}

    IF:

    - the answer already feels complete
    - continuing would feel repetitive
    - the candidate clearly struggled
    - the answer is irrelevant
    - the answer is extremely weak
    - the topic has already been explored enough
    - interviewer should keep interview dynamic

    IMPORTANT:

    A REAL interviewer does NOT over-focus on failed answers.

    If candidate is struggling:
    move naturally to another topic.

    ====================================
    VERY IMPORTANT CONVERSATION RULE
    ====================================

    Even when moving to a NEW concept,
    the interviewer should STILL sound conversational.

    The next question should NEVER feel abrupt.

    BAD FLOW:
    "What is polymorphism?"

    GOOD FLOW:
    "Alright, let's switch gears a little. How would you explain polymorphism in Java?"

    BAD FLOW:
    "Explain indexing."

    GOOD FLOW:
    "Okay, now I'm curious about databases a bit — how would indexing help performance?"

    The interview should feel like:
    - a flowing conversation
    - not an interrogation
    - not a list of questions

    ====================================
    INTERVIEW FLOW RULES
    ====================================

    - Avoid dragging same topic too long
    - Avoid robotic transitions
    - Keep energy natural
    - Keep conversation moving smoothly
    - Strong answers should usually move ahead
    - Weak answers should not create awkward repetition

    ====================================
    RETURN FORMAT
    ====================================

    Return ONLY valid JSON.

    Example:

    {{
        "type": "followup"
    }}

    OR

    {{
        "type": "new_concept"
    }}

    Do NOT return explanations.
    Do NOT return markdown.
    """

    response = llm.invoke(prompt)

    try:

        cleaned = (
            response.content
            .replace("```json", "")
            .replace("```", "")
            .strip()
        )

        parsed = json.loads(cleaned)

        if parsed["type"] not in [
            "followup",
            "new_concept"
        ]:

            return {
                "type": "new_concept"
            }

        return parsed

    except Exception as e:

        print(
            "Strategy Parsing Error:",
            e
        )

        return {
            "type": "new_concept"
        }

