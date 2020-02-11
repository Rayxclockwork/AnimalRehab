from rest_framework import serializers
from .models import Medicine, Animal, Log

class MedicineSerializer(serializers.ModelSerializer):
    """Serialize medicine model."""
    class Meta:
        """Create medicine serialization."""
        model = Medicine
        fields = ['id', 'name', 'category','description']

class AnimalSerializer(serializers.ModelSerializer):
    """Serialize animal model."""
    class Meta:
        """Create animal serialization."""
        model = Animal
        fields = ['id','vet', 'name', 'weight', 'entry_at','exit_at', 'details', 'is_archived']

class LogSerializer(serializers.ModelSerializer):
    """Serialize log model."""
    class Meta:
        """Create log serialization."""
        model = Log
        fields = ['id', 'animal', 'created_at', 'updated_at', 'description']