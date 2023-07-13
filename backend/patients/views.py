from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Patient, Module
from .serializers import PatientSerializer, ModuleSerializer

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

@api_view(['GET'])
def getModules(request):
    modules = Module.objects.all()
    serializer = ModuleSerializer(modules, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getModule(request, pk):
    modules = Module.objects.get(id = pk)
    serializer = ModuleSerializer(modules, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getCriticalModules(request):
    modules = Module.objects.filter(critical = True)
    serializer = ModuleSerializer(modules, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
def updateModule(request, pk):
    data = request.data
    module = Module.objects.get(id = pk)
    serializer = ModuleSerializer(instance = module, data = data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def createModule(request):
    name = request.data.get('name')
    optimal = request.data.get('optimal')
    currentValue = request.data.get('currentValue')

    data = request.data
    module = Module.objects.create(name = name, optimal = optimal, currentValue = currentValue)
    serializer = ModuleSerializer(module, many = False)
    
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteModule(request, pk):
    module = Module.objects.get(id = pk)
    module.delete()
    return Response('Module Deleted')