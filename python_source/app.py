from flask import Flask, request

import message

app = Flask(__name__)

@app.route("/get_messages")
def messages_view():
    return message.load_messages_to_json()


@app.route("/send_message", methods=["POST"])
def message_send():
    message_content = request.form.get("message_content")
    message_time = request.form.get("message_time")

    message.add_message_to_json(message.Message(message_content, message_time)) 

    return "200"