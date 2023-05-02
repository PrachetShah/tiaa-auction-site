from flask import Flask, request
import pandas as pd
import numpy as np
from contentBased import *
import random 

app = Flask(__name__)

# Places Recommender
@app.route('/recommend', methods=['POST'])
def hello():
    if request.method == 'POST':
        data = request.json

        df = pd.read_csv('products.csv')
        items = data['item']
        output = {}
        for item in items:
            if item in df['Product'].unique():
                # print(df_places[df_places['Place']==place]['PlaceID'])
                output[item] = recommend_products(item)
        return output


if __name__ == '__main__':
    app.run(debug=True)