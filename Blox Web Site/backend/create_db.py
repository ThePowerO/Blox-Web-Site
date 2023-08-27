from app import db
from app import app

# Make sure you're in the correct app context
with app.app_context():
    # Create the database tables
    db.create_all()
