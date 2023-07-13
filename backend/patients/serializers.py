from rest_framework.serializers import ModelSerializer
from .models import Patient, Module

class PatientSerializer(ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'

class ModuleSerializer(ModelSerializer):
    class Meta:
        model = Module
        fields = '__all__'