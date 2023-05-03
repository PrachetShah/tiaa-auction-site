from flask import Flask, request
from flask.json import jsonify
import pandas as pd
import numpy as np
from contentBased import *
import random 
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Places Recommender
@app.route('/recommend', methods=['POST'])
def hello():
    if request.method == 'POST':
        data = request.json

        df = pd.read_csv('products.csv')
        items = data['item']
        output = []
        for item in items:
            if item in df['Product'].unique():
                # print(df_places[df_places['Place']==place]['PlaceID'])
                suggested = recommend_products(item)
                for x in suggested:
                    output.append({"name":x, "imageUrl":"http://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Shure-AONIC-40-Black-1.jpg?v=1641452151&width=2048", "price":18})
        return jsonify(output)


if __name__ == '__main__':
    app.run(debug=True)