import json

class Message():
    def __init__(self, content, time):
        self.content = content
        self.time = time
        self.__dict__ = {"content":content, "time":time}

def load_messages_to_python_object() -> list: # loads messages from json file and returns as list of messages
    with open("messages.json", "r") as jsonFile:
        jsonContents = jsonFile.read()
        finalMessages = json.loads(jsonContents)
    return finalMessages

def load_messages_to_json() -> list: # loads messages from json file and returns as list of messages
    with open("messages.json", "r") as jsonFile:
        jsonContents = jsonFile.read()
    return jsonContents

def add_message_to_json(message: Message) -> None: # adds messages to json file storing the messages
    with open("messages.json", "r") as jsonFile:
        raw_contents = jsonFile.read()
        if raw_contents == '':
            messages = []
        else:
            messages = json.loads(raw_contents)
    with open("messages.json", "w") as jsonFile:
        messages.append(message.__dict__)
        new_messages = json.dumps(messages)
        jsonFile.write(new_messages)

if __name__ == "__main__":
    add_message_to_json(Message("Message 1", 0))
    print(load_messages_to_python_object())
