from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import pickle

app = Flask(__name__)
CORS(app) 

# Load your data and similarity matrix here
try:
    foods_dict = pickle.load(open('food_dict.pkl','rb'))
    foods = pd.DataFrame(foods_dict)
    similarity = pickle.load(open('similarity.pkl','rb'))
except Exception as e:
    print(f"Error loading pickle files: {str(e)}")

@app.route('/api/foods', methods=['GET'])
def get_foods():
    try:
        # Get the food names from the DataFrame and convert to a list
        food_names = foods['name'].tolist()
        return jsonify(food_names)
    except Exception as e:
        return {"error": str(e)}, 500

@app.route('/api/recommend', methods=['POST'])
def recommend():
    try:
        food = request.json['food']
        food_index = foods[foods['name'] == food].index[0]
        distances = similarity[food_index]
        food_list = sorted(list(enumerate(distances)), reverse=True, key=lambda x: x[1])[1:6]
        recommended_foods = [{'name': foods.iloc[i[0]]['name'], 'Price': int(foods.iloc[i[0]]['Price']), 'rate': int(foods.iloc[i[0]]['rate']), 'image_link': foods.iloc[i[0]]['image_link']} for i in food_list]
        return jsonify(recommended_foods)
    except Exception as e:
        return {"error": str(e)}, 500
if __name__ == '__main__':
    app.run(port=5001)