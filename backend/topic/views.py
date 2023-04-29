from rest_framework import generics

from topic.models import Topic, Vote
from topic import serializers


class TopicListCreateAPIView(generics.ListCreateAPIView):
    queryset = Topic.objects.all()
    serializer_class = serializers.TopicSerializer


class CreateVoteAPIView(generics.CreateAPIView):
    queryset = Vote.objects.all()
    serializer_class = serializers.VoteSerializer
