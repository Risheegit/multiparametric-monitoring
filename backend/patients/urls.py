from django.urls import path
from . import views
from .views import getPatients, getPatient, getModule, getModules, updateModule, getCriticalModules, createModule, deleteModule

urlpatterns = [
    path("modules/", views.getModules, name="modules"),
    path("modules/critical", views.getCriticalModules, name="critical-module"),  
    path("modules/add/", views.createModule, name="create-module"),
    path("modules/<str:pk>/update", views.updateModule, name="update-module"),  
    path("modules/<str:pk>/delete/", views.deleteModule, name="delete-module"),
    path("modules/<str:pk>/", views.getModule, name="module"),
]