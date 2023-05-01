from django.urls import path
from .views import (
    CategoryItemsList,
    CategoryList,
    ProductList,
    ProductDetail,
    CategoriesList,
    SubCategoryList
)

urlpatterns = [
    path('prod/', ProductList.as_view(), name='Product-List'),
    path('prod/<int:pk>/', ProductDetail.as_view(), name='Product-Detail-View'),
    path('prod/<str:pk>/', CategoryItemsList.as_view(), name='Categories-Items-List'),
    path('maincat/', CategoryList, name='Categories-List'),
    path('subcatlist/', CategoriesList.as_view(), name='Categories-List'),
    path('subcatdetail/<str:pk>/', SubCategoryList.as_view(), name='Sub-Category-List'),
]