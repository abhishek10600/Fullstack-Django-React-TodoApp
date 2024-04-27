from django.urls import path
from .views import Todo_List_View, Todo_Detail_View

urlpatterns = [
    path("list/", Todo_List_View.as_view(), name="todolist"),
    path("<int:pk>/", Todo_Detail_View.as_view(), name="tododetail")
]
