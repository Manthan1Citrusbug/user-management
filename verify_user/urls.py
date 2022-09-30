from django.urls import path
from verify_user.views import *

urlpatterns = [
    path('', register, name='register'),
]