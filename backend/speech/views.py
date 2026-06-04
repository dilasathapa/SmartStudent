from django.shortcuts import render

from rest_framework.decorators import api_view
from django.http import FileResponse

import edge_tts
import tempfile
import asyncio

VOICE = "en-US-JennyNeural"

@api_view(['POST'])
def speak(request):

    text = request.data.get("text")

    async def generate_audio():

        with tempfile.NamedTemporaryFile(
            delete=False,
            suffix=".mp3"
        ) as temp_audio:

            output_path = temp_audio.name

        communicate = edge_tts.Communicate(

            text=text,

            voice=VOICE
        )

        await communicate.save(output_path)

        return output_path

    output_path = asyncio.run(
        generate_audio()
    )

    return FileResponse(
        open(output_path, "rb"),
        content_type="audio/mpeg"
    )