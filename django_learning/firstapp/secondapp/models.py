from django.db import models
from django.utils import timezone


# Create your models here.
class ChaiVarity(models.Model):
    CHAI_TYPE_CHOICES = [
        ("ML", "MASALA"),
        ("SP", "SPICY"),
        ("V", "VEG"),
        ("N", "NON-VEG"),
    ]
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to="chais/")
    date_added = models.DateTimeField(default=timezone.now)
    type = models.CharField(max_length=2, choices=CHAI_TYPE_CHOICES)
    description = models.TextField(default="", max_length=500)


    def __str__(self):
        return self.name