from django.shortcuts import render, redirect
from .forms import QuestionForm
from .models import Question
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def ask_question(request):
    if request.method == 'POST':
        body_unicode = json.loads(request.body.decode('utf-8'))
        print(body_unicode["title"])
        print(body_unicode["content"])
        question = Question(title=body_unicode["title"], content=body_unicode["content"])
        question.save()
    return JsonResponse({"status": "success"}, safe=False)


def questions(request):
    questions = Question.objects.all()
    data = [{'title': question.title, 'author': question.author, 'content': question.content, "created_at": question.created_at} for question in questions]
    return JsonResponse(data, safe=False)
