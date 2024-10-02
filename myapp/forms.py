# myapp/forms.py

from django import forms
from .models import Scholarship

class ScholarshipForm(forms.ModelForm):
    class Meta:
        model = Scholarship
        fields = ['name', 'link', 'degree', 'income', 'gender']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'link': forms.URLInput(attrs={'class': 'form-control'}),
            'degree': forms.TextInput(attrs={'class': 'form-control'}),
            'income': forms.TextInput(attrs={'class': 'form-control'}),
            'gender': forms.TextInput(attrs={'class': 'form-control'}),
        }
