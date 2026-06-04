from django.urls import path

from . import views

urlpatterns = [


    path(
        "setup-interview",
        views.setup_interview
    ),

    path(
        "start-interview",
        views.start_interview
    ),

    path(
        "followup",
        views.followup
    ),

    path(
        "evaluate",
        views.evaluate
    ),

    path(
        "speak",
        views.speak
    ),

]
