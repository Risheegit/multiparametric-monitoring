from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Patient
from .serializers import PatientSerializer

# Create your views here.
@api_view(['GET'])
def getPatients(request):
    patients = Patient.objects.all()
    serializer = PatientSerializer(patients, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getPatient(request, pk):
    patients = Patient.objects.get(id = pk)
    serializer = PatientSerializer(patients, many=False)
    return Response(serializer.data)