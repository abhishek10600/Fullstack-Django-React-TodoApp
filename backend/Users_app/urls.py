from django.urls import path

from rest_framework.authtoken.views import obtain_auth_token
from .views import register_user_view, logout_view

urlpatterns = [
    path("register/", register_user_view, name="register"),
    path("login/", obtain_auth_token, name="login"),
    path("logout/", logout_view, name="logout")
]
