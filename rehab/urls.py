from django.urls import path
from .views import MedicineList, AnimalList, LogList

urlpatterns = [
    path('medicine/', MedicineList.as_view(), name = 'medicine_list'),
    path('animals/', AnimalList.as_view(), name = 'animal_list')

]