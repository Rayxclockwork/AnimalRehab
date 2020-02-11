from .models import Medicine, Animal, Log
from .serializers import MedicineSerializer, AnimalSerializer, LogSerializer
from rest_framework import generics


class MedicineList(generics.ListCreateAPIView):
    """Retrieving all medicines."""
    queryset = Medicine.objects.all()
    serializer_class = MedicineSerializer

   
class AnimalList(generics.ListCreateAPIView):
    """Retrieving all animals."""
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer


class LogList(generics.ListCreateAPIView):
    """Retrieving all logs."""
    quesryset = Log.objects.all()
    serializer_class = LogSerializer
