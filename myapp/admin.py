# myapp/admin.py

from django.contrib import admin
from .models import UserProfile, Scholarship

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('degree', 'income', 'gender')

@admin.register(Scholarship)
class ScholarshipAdmin(admin.ModelAdmin):
    list_display = ('name', 'link', 'degree', 'income', 'gender')
