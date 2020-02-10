from django.test import TestCase
from .models import Animal, Log, Medicine

class AnimalTestCase(TestCase):
    """Testing to see if animal works."""
    def setUp(self):
        """Adding the animals to be tested"""
        Animal.objects.create(name ="cheetah", weight = 10)
        Animal.objects.create(name="armadillo", weight = 3)


    def test_animals_weight(self):
        """Weight of animals checked"""
        cheetah = Animal.objects.get(name = "cheetah")
        armadillo = Animal.objects.get(name = "armadillo")
        self.assertEqual(cheetah.weight, 10)
        self.assertEqual(armadillo.weight, 3)


