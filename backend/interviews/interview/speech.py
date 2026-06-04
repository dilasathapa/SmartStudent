import asyncio
import tempfile

import edge_tts

from django.http import FileResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response


VOICE = "en-US-JennyNeural"


@api_view(["POST"])
def speak(request):

    try:

        text = request.data.get("text")

        if not text:

            return Response({
                "error": "Text is required"
            }, status=400)

        temp_audio = tempfile.NamedTemporaryFile(
            delete=False,
            suffix=".mp3"
        )

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

    except Exception as e:

        print("SPEECH ERROR:", e)

        return Response({
            "error": str(e)
        }, status=500)