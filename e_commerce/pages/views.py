from django.shortcuts import render

# Create your views here.
def home(request):
    context = {}
    return render(request, 'pages/homepage.html', context)

def shopping(request):
    context = {}
    return render(request, 'pages/shopping_index.html', context)