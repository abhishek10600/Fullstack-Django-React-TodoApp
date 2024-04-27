from django.contrib.auth.models import User
from rest_framework import serializers


class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "email", "password"]
        extra_kwargs = {
            "password": {"write_only": True}
        }

    def save(self):
        if User.objects.filter(email=self.validated_data["email"]).exists():
            raise serializers.ValidationError(
                {"error": "User with this email already exists."})
        account = User(
            email=self.validated_data["email"],
            username=self.validated_data["username"]
        )
        account.set_password(self.validated_data["password"])
        account.save()
        return account
