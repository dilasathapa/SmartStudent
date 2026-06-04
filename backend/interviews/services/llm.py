from langchain_openai import ChatOpenAI
from dotenv import load_dotenv
import os

load_dotenv()

llm = ChatOpenAI(
    base_url="https://openrouter.ai/api/v1",


    api_key=os.getenv(
        "OPENROUTER_API_KEY"
    ),

    model="qwen/qwen-2.5-7b-instruct",

    temperature=0.7
)
