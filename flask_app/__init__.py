from flask import Flask

def create_app():
    app = Flask(__name__)

    from flask_app.routes.main_routes import bp
    app.register_blueprint(bp)
    

    return app
