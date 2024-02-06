from django.urls import path
from . import views

urlpatterns = [
    path('laptops/predictPrice', views.predictPriceView)
]
