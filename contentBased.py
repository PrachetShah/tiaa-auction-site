import pandas as pd
import numpy as np

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel, cosine_similarity
from tqdm import tqdm

recommender = pd.read_csv('products.csv')
# print(recommender.head())
data = recommender.reset_index(drop=True)

# we compute a TFIDF on the titles of the places
tf = TfidfVectorizer(analyzer='word', ngram_range=(1, 3), min_df=0, stop_words='english')
tfidf_matrix = tf.fit_transform(data['Product'])
# we get cosine similarities: this takes a lot of time on the real dataset
similarity_matrix = cosine_similarity(tfidf_matrix)

# Make recommendations for a product
def recommend_products(product_name):
    # Check if the data is empty
    if data.empty:
        return []
    
    # Check if the product name exists in the data
    if product_name not in data['Product'].values:
        return []
    
    # Get the index of the product in the data
    product_index = data[data['Product']==product_name].index[0]
    
    # Get the similarity scores of the product with all other products
    product_scores = list(enumerate(similarity_matrix[product_index]))
    
    # Sort the product scores in descending order and return the top 5 recommended products
    product_scores = sorted(product_scores, key=lambda x:x[1], reverse=True)
    product_scores = product_scores[1:6]
    recommended_products = [data.iloc[score[0]]['Product'] for score in product_scores]
    return recommended_products

prods = recommend_products('iPhone')
print(prods)