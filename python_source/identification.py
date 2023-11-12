from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

def verify_message_contents(message_content):
    if message_content == "":
        return False
    else:
        if sentimentAnalyzer(message_content) is True:
            return True
        else:
            return False

def sentimentAnalyzer(testToBeAnalyzed:str)->bool:
    tokenizer = AutoTokenizer.from_pretrained('nlptown/bert-base-multilingual-uncased-sentiment')
    model = AutoModelForSequenceClassification.from_pretrained('nlptown/bert-base-multilingual-uncased-sentiment')
    tokens = tokenizer.encode(testToBeAnalyzed, return_tensors='pt')
    result = model(tokens)
    outOfFiveStars = int(torch.argmax(result.logits))+1
    if outOfFiveStars > 3:
        return True
    return False
