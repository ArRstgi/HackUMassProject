from flask import Flask, request
from flask_cors import CORS, cross_origin

import message
from identification import verify_message_contents, sentimentManipulator

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/get_messages")
@cross_origin()
def messages_view():
    return message.load_messages_to_json()


@app.route("/send_message", methods=["POST"])
@cross_origin()
def message_send():
    message_content = request.form.get("message_content")
    message_time = request.form.get("message_time")


    if verify_message_contents(message_content) is True:
        message.add_message_to_json(message.Message(message_content, message_time)) 
        return "200"
    else:
        new_message = sentimentManipulator(message_content)
        message.add_message_to_json(message.Message(new_message, message_time))
        if new_message is None:
            return "406"
        return "200"