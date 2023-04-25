from typing import Optional
from pydantic import BaseModel, Field


class PrayerSchema(BaseModel):
    prayer_times: Optional[dict] = Field(None, description="Prayer times for a specific date")

    class Config:
        schema_extra = {
            "example": {
                "prayer_times": {
                    "23/04/2023": ["5:28", "13:44", "17:29", "20:37", "22:02"]
                }
            }
        }


def ResponseModel(data, message):
    return {
        "data": [data],
        "code": 200,
        "message": message,
    }


def ErrorResponseModel(error, code, message):
    return {"error": error, "code": code, "message": message}
