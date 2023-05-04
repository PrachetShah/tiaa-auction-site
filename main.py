from flask import Flask, request
from flask.json import jsonify
import pandas as pd
import numpy as np
from contentBased import *
import random 
from flask_cors import CORS
import requests

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Places Recommender
@app.route('/recommend', methods=['POST'])
def hello():
    if request.method == 'POST':
        data = request.json

        products = requests.get("https://easy-ruby-hen-cap.cyclic.app/products").json()['products']
        print(products)

        df = pd.read_csv('products.csv')
        # items = data['item']
        output = []
        for i in range(len(products)):
            item = products[i]['name']
            if item in df['Product'].unique():
                # print(df_places[df_places['Place']==place]['PlaceID'])
                suggested = recommend_products(item)

                for x in suggested:
                    val = df[df['Product']==x].values[0]
                    print(val)
                    # print(df[df['Product'] == x])
                    # output.append({"name":x[0], "imageUrl":x[1], "price":x[2]})
                    output.append({"id":val[0], "name":val[1], "imageUrl":val[2], "price": val[3]})
        return jsonify(output)


if __name__ == '__main__':
    app.run(debug=True)