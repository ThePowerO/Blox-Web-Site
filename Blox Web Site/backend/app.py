from flask import Flask, render_template, request, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = 'vcx8vok1mk7csmvok2n3e4g43'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nickname = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/dashboard")
def dashboard():
    user_nickname = session.get('user_nickname')
    return render_template("dashboard.html", user_nickname=user_nickname)

@app.route('/create_combo')
def create_combo():
    return render_template("create_combo.html")

@app.route('/create_acc', methods=["POST", "GET"])
def create_acc():
    if request.method == "POST":
        nickname = request.form['nickname']
        password = request.form['password']
        confirm_password = request.form['confirm_password']

        if password == confirm_password:
            new_user = User(nickname=nickname, password=password)
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for("register"))
        else:
            return "Passwords do not match. Account creation failed."

    return render_template("create_acc.html")

@app.route('/register', methods=["POST", "GET"])
def register():

    if request.method == "POST":
        nickname = request.form['nickname']
        password = request.form['password']

        user = User.query.filter_by(nickname=nickname, password=password).first()

        if user:
            session['user_nickname'] = user.nickname
            return redirect(url_for("dashboard"))
        else:
            return "Login failed. Invalid credentials."

    return render_template('layout.html')

@app.route('/delete_combo/<int:id>', methods=['POST'])
def delete_combo(id):
    combo_to_delete = Combo.query.get(id)

    if combo_to_delete:
        db.session.delete(combo_to_delete)
        db.session.commit()
    else:
        pass

    return redirect(url_for('view_combo'))

@app.route('/edit_combo/<int:id>', methods=['POST', 'GET'])
def edit_combo(id):
    combo_to_edit = Combo.query.get(id)

    if request.method == 'POST':
        print(request.form)
        # Retrieve edited combo data from form
        new_fruit = request.form['fruit']
        new_fighting_style = request.form['fighting_style']
        new_sword = request.form['sword']
        new_gun = request.form['gun']
        new_combo_name = request.form['combo_name']


if __name__ == '__main__':
    app.run(debug=True)
