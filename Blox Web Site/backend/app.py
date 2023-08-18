from flask import Flask, render_template, request, redirect, url_for, g
import sqlite3

app = Flask(__name__)

DATABASE = 'users.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/create_acc', methods=["POST", "GET"])
def create_acc():
    if request.method == "POST":
        nickname = request.form['nickname']
        password = request.form['password']
        confirm_password = request.form['confirm_password']

        if password == confirm_password:
            db = get_db()
            cursor = db.cursor()
            cursor.execute('INSERT INTO users (nickname, password) VALUES (?, ?)', (nickname, password))
            db.commit()
            return "Account created successfully!"
        else:
            return "Passwords do not match. Account creation failed."

    return render_template("create_acc.html")

@app.route('/register', methods=["POST", "GET"])
def register():
    if request.method == "POST":
        nickname = request.form['nickname']
        password = request.form['password']

        db = get_db()
        cursor = db.cursor()
        cursor.execute('SELECT * FROM users WHERE nickname = ? AND password = ?', (nickname, password))
        user = cursor.fetchone()

        if user:
            return "Login successful!"
        else:
            return "Login failed. Invalid credentials."

    return render_template('layout.html')

@app.teardown_appcontext
def close_db_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

if __name__ == '__main__':
    app.run(debug=True)
