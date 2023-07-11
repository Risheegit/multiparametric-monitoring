from django.urls import path
from . import views
from .views import getPatients, getPatient

urlpatterns = [
    path("patients/", views.getPatients, name="patients"),
    path("patients/<str:pk>", views.getPatient, name="patient"),
]