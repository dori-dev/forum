from django.urls import path

from topic import views


urlpatterns = [
    path('topics/', views.TopicListCreateAPIView.as_view()),
    path('votes/', views.CreateVoteAPIView.as_view()),
]
