from flask import Flask

app = Flask(__name__)

@app.route("/get_messages")
def main_view():
    return "Test"