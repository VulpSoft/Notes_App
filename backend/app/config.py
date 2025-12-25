from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache
from dotenv import find_dotenv, load_dotenv

@lru_cache
def get_env_vars():
    ENV_FILE = find_dotenv(".env")
    load_dotenv(ENV_FILE)
    
get_env_vars()
