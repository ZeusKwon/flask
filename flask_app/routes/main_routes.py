from flask import Blueprint, render_template, request
import app.js
bp = Blueprint('main', __name__)

@bp.route('/')
def index():
    return render_template('index.html', app.js=app.js)