import random

def get_sentiment(sentence):

    file = open('data.txt')

    lines = file.readlines()

    lib = {}

    for line in lines:
        tokens = line.split()
        if tokens[2] != '0' and tokens[1] != 'positive' and tokens[1] != 'negative':
            if not tokens[0] in lib:
                lib[tokens[0]] = []
            lib[tokens[0]].append((tokens[1], int(tokens[2])))

    words = sentence.split()
    sentiment = {}

    for word in words:
        if word in lib:
            for (emotion, score) in lib[word]:
                if not emotion in sentiment:
                    sentiment[emotion] = 0
                sentiment[emotion] += score
                
    if not sentiment:
        return 'none'

    ranked = sorted(sentiment.items(), key=lambda x: x[1])
    top_score = ranked[0][1]
    top_emotions = [emotion for (emotion, score) in ranked if score == top_score]

    return random.choice(top_emotions)
