from transformers import AutoTokenizer, AutoModelForSequenceClassification, pipeline
import torch

def sentimentAnalyzer(textToBeAnalyzed:str)->bool:
    tokenizer = AutoTokenizer.from_pretrained('nlptown/bert-base-multilingual-uncased-sentiment')
    model = AutoModelForSequenceClassification.from_pretrained('nlptown/bert-base-multilingual-uncased-sentiment')
    tokens = tokenizer.encode(textToBeAnalyzed, return_tensors='pt')
    result = model(tokens)
    outOfFiveStars = int(torch.argmax(result.logits))+1
    if outOfFiveStars > 3:
        return True
    return False

def sentimentManipulator(textToBeManipulated:str)->str:
    prompt = textToBeManipulated
    listOfWords = prompt.split(" ")
    print(listOfWords)
    numberOfWords = len(listOfWords) * 5
    print(numberOfWords)
    generatedText = "bad"
    epochs = 20
    while (sentimentAnalyzer(generatedText)==False and epochs > 0):
        generator = pipeline(task="text2text-generation", model="cffl/bart-base-styletransfer-subjective-to-neutral", max_length=numberOfWords)
        generatedText = (generator(prompt)[0]['generated_text'])
        epochs = epochs - 1
    return generatedText