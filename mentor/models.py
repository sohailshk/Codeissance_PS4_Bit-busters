from django.db import models

class Mentor(models.Model):
    name = models.CharField(max_length=100)
    qualification = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='photos/')  # This will handle image uploads
    availability = models.BooleanField(default=True)  # True if mentor is available

    def __str__(self):
        return self.name
