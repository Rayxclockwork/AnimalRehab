from django.urls import path
from .views import MedicineList, AnimalList, LogList, UserAnimalsList

urlpatterns = [
    path('medicine/', MedicineList.as_view(), name = 'medicine_list'),
    path('animals/', AnimalList.as_view(), name = 'animal_list'),
    path('animals/<int:uid>/', UserAnimalsList.as_view(), name = 'user_animals_list'),
]