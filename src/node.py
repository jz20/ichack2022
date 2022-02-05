from flask import Flask, request, jsonify, render_template

app = Flask(__name__)
SENTIMENT_TO_PLAYLIST ={
    "anger": "2G5inP1EjUb0XK6sEELY0l", "anticipation": "4u4cdIly29BKmrqQClLN2b", "disgust": "7IbEby4yEjlKX9J6tmUf7H", "fear": "739d1Ze6FTBIrxCbNYLM24", "joy": "1p5p2amD3Xuoc64vhg3hv2", "negative": "4sHGDdKN4k9UXCHwG8v5Nj", "positive": "0Pj4JFHttRgW2RKMjvTjGU", "sadness": "6s6jsuowm8DKoeGG3aBOou", "surprise": "3jQhgOxSDeu5GB0SJt2mJg", "trust": "6PESRz1MZWlElXYHkTAvqB"
}

@app.route('/', methods=["POST","GET"])
def index():
    return render_template('index.html')

@app.route('/api/get_playlist', methods=["GET"])
def get_playlist():
    request_data = request.get_json()
    sentence = request_data['sentence']
    sentiment = get_sentiment(sentence)
    playlist_id = SENTIMENT_TO_PLAYLIST[sentiment]
    return jsonify({"playlist_id": playlist_id})
