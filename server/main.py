from flask import Flask, request, jsonify, render_template
import random
import os
import sys
import pprint
import json

import spotipy
import spotipy.util as util

app = Flask(__name__, static_folder='../build', static_url_path='/')

spotipy_client_id = 'b90634be218e412e957d79437af87d6e'
spotipy_client_secret = '2475db529d8345198090938b18df4715'
spotipy_redirect_uri = 'http://localhost:8080/'
username = 'nataliewux'

scope = 'playlist-modify-public'
token = util.prompt_for_user_token(username, scope, client_id=spotipy_client_id, client_secret=spotipy_client_secret, redirect_uri=spotipy_redirect_uri)
sp = spotipy.Spotify(auth=token)

list_of_songs = []

SENTIMENT_TO_PLAYLIST ={
    "anger": "2G5inP1EjUb0XK6sEELY0l", "anticipation": "4u4cdIly29BKmrqQClLN2b", "disgust": "7IbEby4yEjlKX9J6tmUf7H", "fear": "739d1Ze6FTBIrxCbNYLM24", "joy": "1p5p2amD3Xuoc64vhg3hv2", "negative": "4sHGDdKN4k9UXCHwG8v5Nj", "positive": "0Pj4JFHttRgW2RKMjvTjGU", "sadness": "6s6jsuowm8DKoeGG3aBOou", "surprise": "3jQhgOxSDeu5GB0SJt2mJg", "trust": "6PESRz1MZWlElXYHkTAvqB"
}


def get_sentiment(sentence):

    file = open('../data.txt')

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

def get_sentiment_songs(sentiment):
    result = sp.search(q= sentiment)
    for i in range(10):
        list_of_songs.append(result['tracks']['items'][i]['id'])
    return list_of_songs

def sentiment_to_list(username, playlist_id, items, position=None):
    sp.playlist_replace_items(playlist_id= playlist_id, items= items)
    return playlist_id


@app.route('/')
def index():
    return app.send_static_file("index.html")


@app.route('/api/get_playlist', methods=["POST"])
def get_playlist():
    request_data = request.get_json()

    sentence = request_data['sentence']
    print(sentence)
    sentiment = get_sentiment(sentence)
    print(sentiment)
    items = get_sentiment_songs(sentiment)
    print(items)
    playlist_id = sentiment_to_list(username, SENTIMENT_TO_PLAYLIST[sentiment], items)

    return jsonify({"playlist_id": playlist_id})

if __name__ == "__main__":
    app.run(host='localhost', debug=True, port=8081)