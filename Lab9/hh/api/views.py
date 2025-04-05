from rest_framework import viewsets, status
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from rest_framework.response import Response
from rest_framework.decorators import action, api_view

class CompanyViewSet(viewsets.ModelViewSet):

    @api_view(['GET', 'POST'])
    def company_list(request):
        if request.method == 'GET':
            companies = Company.objects.all()
            serializer = CompanySerializer(companies, many=True)
            return Response(serializer.data)
    
        elif request.method == 'POST':
            serializer = CompanySerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @api_view(['GET', 'PUT', 'DELETE'])
    def company_detail(request, pk):
        try:
            company = Company.objects.get(pk=pk)
        except Company.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
        if request.method == 'GET':
            serializer = CompanySerializer(company)
            return Response(serializer.data)
    
        elif request.method == 'PUT':
            serializer = CompanySerializer(company, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
        elif request.method == 'DELETE':
            company.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

class VacancyViewSet(viewsets.ModelViewSet):

    @action(detail=False, methods=['get'])
    def top_ten(self, request):
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    
    @api_view(['GET', 'POST'])
    def vacancy_list(request):
        if request.method == 'GET':
            vacancies = Vacancy.objects.all()
            serializer = VacancySerializer(vacancies, many=True)
            return Response(serializer.data)
        
        elif request.method == 'POST':
            serializer = VacancySerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()   
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @api_view(['GET', 'PUT', 'DELETE'])
    def vacancy_detail(request, pk):
        try:
            vacancy = Vacancy.objects.get(pk=pk)
        except Vacancy.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        if request.method == 'GET':
            serializer = VacancySerializer(vacancy)
            return Response(serializer.data)
        
        elif request.method == 'PUT':
            serializer = VacancySerializer(vacancy, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        elif request.method == 'DELETE':
            vacancy.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

