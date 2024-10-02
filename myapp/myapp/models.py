from django.db import models

class UserProfile(models.Model):
    degree = models.CharField(max_length=100)
    income = models.CharField(max_length=100)
    gender = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.degree} - {self.income} - {self.gender}"

class Scholarship(models.Model):
    name = models.CharField(max_length=200)
    link = models.URLField(max_length=500)
    degree = models.CharField(max_length=100)
    income = models.CharField(max_length=100)
    gender = models.CharField(max_length=20)

    def __str__(self):
        return self.name
