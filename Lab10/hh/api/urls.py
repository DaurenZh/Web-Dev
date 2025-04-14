# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import CompanyViewSet, VacancyViewSet


# urlpatterns = [
#     path('companies/', CompanyViewSet.company_list),
#     path('companies/<int:pk>/', CompanyViewSet.company_detail),
#     path('vacancies/', VacancyViewSet.vacancy_list),
#     path('vacancies/<int:pk>/', VacancyViewSet.vacancy_detail),
# ]

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'vacancies', views.VacancyViewSet)

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:pk>/', views.company_detail),
    path('companies/<int:pk>/vacancies/', views.company_vacancies),
    path('', include(router.urls)),
]