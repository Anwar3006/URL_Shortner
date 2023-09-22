from django.urls import path
from .views import CreateReturnShortner, GotoLink

app_name = 'urlShortnerApi'

urlpatterns = [
    path('create', CreateReturnShortner.as_view(), name='create'),
    path('<str:pk>', GotoLink.as_view(), name='redirect'),
]
