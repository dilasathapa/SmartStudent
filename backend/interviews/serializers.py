from rest_framework import serializers


class CustomRubricSerializer(
    serializers.Serializer
):

    title = serializers.CharField()
    description = serializers.CharField()


class InterviewSetupSerializer(
    serializers.Serializer
):

    role = serializers.CharField()

    experience = serializers.CharField()

    interview_goal = serializers.CharField()

    difficulty_level = serializers.CharField()

    focus_areas = serializers.ListField(
        child=serializers.CharField(),
        required=False
    )

    selected_rubrics = serializers.ListField(
        child=serializers.CharField(),
        required=False
    )

    custom_rubrics = CustomRubricSerializer(
        many=True,
        required=False
    )


class EvaluationSerializer(
    serializers.Serializer
):

    question = serializers.CharField()

    student_answer = serializers.CharField()

    topic = serializers.CharField()

    interview_goal = serializers.CharField(
        required=False
    )

    focus_areas = serializers.ListField(
        child=serializers.CharField(),
        required=False
    )

    selected_rubrics = serializers.ListField(
        child=serializers.CharField(),
        required=False
    )

    custom_rubrics = serializers.ListField(
        child=serializers.DictField(),
        required=False
    )

    conversation_history = serializers.ListField(
        child=serializers.DictField(),
        required=False
    )


class SpeechSerializer(
    serializers.Serializer
):

    text = serializers.CharField()