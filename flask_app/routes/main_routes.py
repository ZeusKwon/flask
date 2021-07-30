from flask import Vlueprint

bp = Blueprint('main', __name__)

@bp.route('/')
def index():
    
    return 'OK', 200