from django.urls import path
from . import views

urlpatterns = [
    path('add/', views.add_mentor, name='add_mentor'),
    path('list/', views.mentor_list, name='mentor_list'),
]