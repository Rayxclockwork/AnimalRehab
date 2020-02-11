from django.contrib.auth.models import User
from .models import Medicine, Animal, Log
from .serializers import MedicineSerializer, AnimalSerializer, LogSerializer
from rest_framework import generics
from django.shortcuts import get_object_or_404


# Medicine views

class MedicineList(generics.ListCreateAPIView):
    """Retrieving all medicines."""
    queryset = Medicine.objects.all()
    serializer_class = MedicineSerializer


# Animal views

   
class AnimalList(generics.ListCreateAPIView):
    """Retrieving all animals."""
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer


class UserAnimalsList(generics.ListAPIView):
    """List all animals of user."""
    serializer_class = AnimalSerializer
    
    def get_queryset(self):
        """Set of all animals of user."""
        self.vet = get_object_or_404(User, id=self.kwargs['uid'])
        return Animal.objects.filter(vet=self.vet)


# Log views


class LogList(generics.ListCreateAPIView):
    """Retrieving all logs."""
    quesryset = Log.objects.all()
    serializer_class = LogSerializer
