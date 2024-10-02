from django.urls import path
from . import views

urlpatterns = [
    # URL for the user profile list view
    path('profiles/', views.userprofile_list, name='userprofile_list'),

    # URLs for Scholarship views
    path('scholarships/', views.scholarship_list, name='scholarship_list'),  # List of scholarships
    path('scholarships/new/', views.scholarship_create, name='scholarship_create'),  # Create a new scholarship
]
