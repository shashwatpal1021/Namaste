from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

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


# One to Many Relationship


class ChaiReview(models.Model):
    chai = models.ForeignKey(
        ChaiVarity, on_delete=models.CASCADE, related_name="reviews"
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()
    date_added = models.DateTimeField(default=timezone.now)

    def __str__(self) -> str:
        return f'{self.user.username} review for {self.chai.name}'
    

# Many to Many

class Store(models.Model):
    name = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    chai_varity = models.ManyToManyField(ChaiVarity,related_name="stores")

    def __str__(self):
        return self.name
    
# One to One

class ChaiCertificate(models.Model):
    chai = models.OneToOneField(ChaiVarity, on_delete=models.CASCADE, related_name="certificate")
    certificate_number = models.CharField(max_length=50)
    issued_date = models.DateField(default=timezone.now)
    valid_untill = models.DateField()


    def __str__(self):
        return f'Certicate for {self.name.chai}'