from .models import Medicine, Animal, Log
from rest_framework import generics


class MedicineList(generics.ListCreateAPIView):
    """Retrieving all medicines."""
    queryset = Medicine.objects.all()

   
class AnimalList(generics.ListCreateAPIView):
    """Retrieving all animals."""
    queryset = Animal.objects.all()


class LogList(generics.ListCreateAPIView):
    """Retrieving all logs."""
    quesryset = Log.objects.all()
