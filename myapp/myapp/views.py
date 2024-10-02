# myapp/views.py

from django.shortcuts import render, redirect
from .models import UserProfile, Scholarship
from .forms import ScholarshipForm

# Existing view
def userprofile_list(request):
    profiles = UserProfile.objects.all()
    return render(request, 'myapp/userprofile_list.html', {'profiles': profiles})

# New views for Scholarship
def scholarship_list(request):
    scholarships = Scholarship.objects.all()
    return render(request, 'myapp/scholarship_list.html', {'scholarships': scholarships})

def scholarship_create(request):
    if request.method == 'POST':
        form = ScholarshipForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('scholarship_list')
    else:
        form = ScholarshipForm()
    return render(request, 'myapp/scholarship_form.html', {'form': form})
