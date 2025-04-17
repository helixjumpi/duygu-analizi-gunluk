from flask import Flask, request, jsonify
from flask_cors import CORS
from textblob import TextBlob
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

def analyze_sentiment(text):
    analysis = TextBlob(text)
    # Get polarity score (-1 to 1)
    polarity = analysis.sentiment.polarity
    
    # Convert to emotion label
    if polarity > 0.1:
        label = 'positive'
    elif polarity < -0.1:
        label = 'negative'
    else:
        label = 'neutral'
    
    return {
        'score': polarity,
        'label': label
    }

@app.route('/analyze', methods=['POST'])
def analyze():
    try:
        data = request.get_json()
        text = data.get('text', '')
        
        if not text:
            return jsonify({'error': 'No text provided'}), 400
        
        result = analyze_sentiment(text)
        return jsonify(result)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5001))
    app.run(host='0.0.0.0', port=port) 