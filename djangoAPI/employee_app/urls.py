from django.urls import path
from . import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
     path('department/',views.departmentApi),
     path('employee/',views.employeeApi),

     path('saveFile/',views.saveFile)
] + static(settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)