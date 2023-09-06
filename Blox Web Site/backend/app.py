from flask import Flask, render_template, request, redirect, url_for, session, flash, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = 'vcx8vok1mk7csmvok2n3e4g43'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)

# Databases
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nickname = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

class Combo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    fruit = db.Column(db.String(50), nullable=False)
    fighting_style = db.Column(db.String(50), nullable=False)
    sword = db.Column(db.String(50), nullable=False)
    gun = db.Column(db.String(50), nullable=False)
    combo_name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)

# Routes pages
@app.route("/")
def index():
    # Initialize combo count in the session
    if 'combo_count' not in session:
        session['combo_count'] = 0

    return render_template("index.html")

@app.route("/dashboard")
def dashboard():
    user_nickname = session.get('user_nickname')
    return render_template("dashboard.html", user_nickname=user_nickname)

@app.route('/create_combo', methods=["POST", "GET"])
def create_combo():
    if request.method == "POST":
        user = User.query.filter_by(nickname=session['user_nickname']).first()
        fruit = request.form['fruit']
        fighting_style = request.form['fighting_style']
        sword = request.form['sword']
        gun = request.form['gun']
        combo_name = request.form['combo_name']
        description = request.form['description']

        # Check if user has reached the combo limit
        if session['combo_count'] >= 14:
            user_nickname = session.get('user_nickname')
            return render_template("create_combo.html", user_nickname=user_nickname)


        new_combo = Combo(user_id=user.id, fruit=fruit, fighting_style=fighting_style, sword=sword, gun=gun, combo_name=combo_name, description=description)
        db.session.add(new_combo)
        db.session.commit()

        # Increment the combo count for the user
        session['combo_count'] += 1

        flash("Combo created successfully!", "success")

        user_nickname = session.get('user_nickname')
        return render_template("create_combo.html", user_nickname=user_nickname)

    user_nickname = session.get('user_nickname')
    return render_template("create_combo.html", user_nickname=user_nickname)


@app.route('/view_combo')
def view_combo():
    user = User.query.filter_by(nickname=session['user_nickname']).first()
    combos = Combo.query.filter_by(user_id=user.id).all()

    user_nickname = session.get('user_nickname')
    return render_template("view_combo.html", user_nickname=user_nickname, combos=combos)

@app.route('/community_combo')
def community_combo():
    page = request.args.get('page', 1, type=int)
    per_page = 10

    if request.method == 'POST':
        query = request.form.get('query')
        combos = Combo.query.filter(Combo.combo_name.ilike(f'%{query}%')).paginate(page=page, per_page=per_page)
    else:
        combos = Combo.query.paginate(page=page, per_page=per_page)

    user_nickname = session.get('user_nickname')
    return render_template("community_combo.html", user_nickname=user_nickname, combos=combos)


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

    session['combo_count'] -= 1

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
        new_description = request.form['description']

        # Update the combo's information in the database
        combo_to_edit.fruit = new_fruit
        combo_to_edit.fighting_style = new_fighting_style
        combo_to_edit.sword = new_sword
        combo_to_edit.gun = new_gun
        combo_to_edit.combo_name = new_combo_name
        combo_to_edit.description = new_description

        db.session.commit()

        # Redirect to the view_combo page after editing
        return redirect(url_for('view_combo'))

    user_nickname = session.get('user_nickname')
    return render_template('edit_combo.html', user_nickname=user_nickname, combo=combo_to_edit)

@app.route('/your_combo/<int:id>', methods=['POST', 'GET'])
def your_combo(id):
    combo_to_edit = Combo.query.get(id)

    if request.method == 'POST':
        print(request.form)
        # Retrieve edited combo data from form
        new_fruit = request.form['fruit']
        new_fighting_style = request.form['fighting_style']
        new_sword = request.form['sword']
        new_gun = request.form['gun']
        new_combo_name = request.form['combo_name']
        new_description = request.form['description']

        # Update the combo's information in the database
        combo_to_edit.fruit = new_fruit
        combo_to_edit.fighting_style = new_fighting_style
        combo_to_edit.sword = new_sword
        combo_to_edit.gun = new_gun
        combo_to_edit.combo_name = new_combo_name
        combo_to_edit.description = new_description

        db.session.commit()

        # Redirect to the view_combo page after editing
        return redirect(url_for('view_combo'))

    user_nickname = session.get('user_nickname')
    return render_template('your_combo.html', user_nickname=user_nickname, combo=combo_to_edit)

@app.route('/search_combos', methods=['GET'])
def search_combos():
    query = request.args.get('query')
    
    combos = Combo.query.filter(Combo.combo_name.ilike(f'%{query}%')).all()
    
    user_nickname = session.get('user_nickname')
    return render_template("community_combo.html", user_nickname=user_nickname, combos=combos)

@app.route('/load_more_combos')
def load_more_combos():
    page = int(request.args.get('page', 1))
    combos_per_page = 10
    
    user = User.query.filter_by(nickname=session['user_nickname']).first()
    
    offset = (page - 1) * combos_per_page
    combos = Combo.query.filter_by(user_id=user.id).offset(offset).limit(combos_per_page).all()

    return render_template('combo_list.html', combos=combos)

# Meunu Route Options
@app.route('/profile')


if __name__ == '__main__':
    app.run(debug=True)
