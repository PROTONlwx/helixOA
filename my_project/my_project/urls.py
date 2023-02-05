from django.urls import include, path
from forum.views import ask_question, questions

urlpatterns = [
    path('ask/', ask_question, name='ask'),
    path('', questions, name='questions'),
]
