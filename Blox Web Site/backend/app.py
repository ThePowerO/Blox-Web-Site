from flask import Flask, render_template, request, redirect, url_for, g
import sqlite3

app = Flask(__name__)

DATABASE = 'users.db'

def get_db():
    db = getattr(g, '_database', None)
