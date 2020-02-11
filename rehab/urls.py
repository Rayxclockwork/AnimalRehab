from django.urls import path
from .views import (
    MedicineList,
    AnimalList,
    LogList,
    UserAnimalsList,
    UserCreateAnimal,
    AnimalDetail,
    AnimalLogs,
    ArchiveAnimal,
)
    

urlpatterns = [
    path('medicine/', MedicineList.as_view(), name = 'medicine_list'),
    path('animals/', AnimalList.as_view(), name = 'animal_list'),
    path('animals/<int:uid>/', UserAnimalsList.as_view(), name = 'user_animals_list'),
    path('animals/<int:uid>/create/', UserCreateAnimal.as_view(), name = 'user_create_animal'),
    path('animals/<int:aid>/detail/', AnimalDetail.as_view(), name = 'animal_detail'),
    path('animals/<int:aid>/logs/', AnimalLogs.as_view(), name = 'animal_logs'),
    path('animal/<int:aid>/archive/', ArchiveAnimal.as_view(), name = 'archive_animal'),
]