from django.db import models

# Create your models here.
class Patient(models.Model):
    patientName = models.CharField(max_length = 50)
    room = models.PositiveIntegerField(blank = True, null = True)
    critical = models.BooleanField(default = False)
    temperature = models.PositiveIntegerField(blank = True, null = True)
    glucose = models.PositiveIntegerField(blank = True, null = True)
    co2 = models.PositiveIntegerField(blank = True, null = True)
    o2 = models.PositiveIntegerField(blank = True, null = True)
    pressure = models.PositiveIntegerField(blank = True, null = True)

    def __str__(self):
        return self.patientName

class Module(models.Model):
    name = models.CharField(max_length = 50)
    currentValue = models.PositiveIntegerField(blank = True, null = True)
    critical = models.BooleanField(default = False)
    optimal = models.PositiveIntegerField(blank = True, null = True)
    deviceImage = models.ImageField(blank = True, null = True)

    def __str__(self):
        return self.name