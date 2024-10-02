from django.shortcuts import render, redirect
from .forms import MentorForm

def add_mentor(request):
    if request.method == 'POST':
        form = MentorForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('mentor_list')
    else:
        form = MentorForm()
    return render(request, 'mentor/add_mentor.html', {'form': form})

def mentor_list(request):
    mentors = Mentor.objects.all()
    return render(request, 'mentor/mentor_list.html', {'mentors': mentors})
