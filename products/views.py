from django.http.response import Http404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import ( mixins, generics, status)
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer
from rest_framework.authentication import BasicAuthentication, SessionAuthentication, TokenAuthentication
from rest_framework.permissions import AllowAny, BasePermission, IsAuthenticated, IsAdminUser

# Create your views here.

@api_view(['GET'])
def CategoryList(request):
    api_urls = {
        'MoCo': "Mobiles & Computers",
        'TVAE': "TV, Appliances & Electronics",
        'RE': "Real Estate",
        'AP': "Art Pieces",
        'Book': "Books",
        'Jewwl': "Jewellery",
    }
    return Response(api_urls)

class CustomPermission(BasePermission):
    def has_permission(self, request, view):
        if request.method == 'GET':
            return True
        return False

class ProductList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # authentication_classes = [TokenAuthentication] 
    # permission_classes = [IsAuthenticated]
    

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class ProductDetail(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class CategoriesList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class CategoryItemsList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        id = Category.objects.filter(short=self.kwargs['pk'])
        return Product.objects.filter(category=id[0])

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class SubCategoryList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    serializer_class = CategorySerializer

    def get_queryset(self):
        if getattr(self, 'swagger_fake_view', False):
        # queryset just for schema generation metadata
            return Category.objects.none()
        return Category.objects.filter(parent=self.kwargs['pk'])

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)