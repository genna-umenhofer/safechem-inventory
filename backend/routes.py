from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models import Chemical

router = APIRouter()

@router.get("/chemicals")
def get_chemicals(db: Session = Depends(get_db)):
    return db.query(Chemical).all()