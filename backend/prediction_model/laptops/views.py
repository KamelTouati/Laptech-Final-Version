from rest_framework.response import Response
from rest_framework.decorators import api_view
from .utils import predictPrice
# Create your views here.

@api_view(['POST'])
def predictPriceView(request):
    return predictPrice(request)
