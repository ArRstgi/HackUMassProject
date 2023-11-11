from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

def sentimentAnalyzer(testToBeAnalyzed:str)->bool:
    tokenizer = AutoTokenizer.from_pretrained('nlptown/bert-base-multilingual-uncased-sentiment')
    model = AutoModelForSequenceClassification.from_pretrained('nlptown/bert-base-multilingual-uncased-sentiment')
    tokens = tokenizer.encode(testToBeAnalyzed, return_tensors='pt')
    result = model(tokens)
    outOfFiveStars = int(torch.argmax(result.logits))+1
    if outOfFiveStars > 3:
        return True
    return False

if __name__ == '__main__':
    print(sentimentAnalyzer('Arush'))