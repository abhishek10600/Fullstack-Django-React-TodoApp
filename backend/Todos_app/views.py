from django.shortcuts import render
from .serializers import TodoSerializer
from .models import Todo
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from .permissions import TodoUserOrReadOnlyPermission
from rest_framework import status

# Create your views here.


class Todo_List_View(APIView):

    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        todo = Todo.objects.filter(user=request.user)
        serializer = TodoSerializer(todo, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


class Todo_Detail_View(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [TodoUserOrReadOnlyPermission]
