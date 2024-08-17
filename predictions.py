from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/predictions', methods=['GET'])
def get_predictions():
    df_predictions = pd.read_pickle("predictions.pkl")
    df_predictions = df_predictions.round()  # Round off decimal values
    return jsonify(df_predictions.to_dict())

if __name__ == '__main__':
    app.run(debug=True)