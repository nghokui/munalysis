from django.db import models
from datetime import datetime
# Create your models here.
class SpotifyAuth(models.Model):
	auth_name = models.CharField(max_length=6, default="client")
	auth_code = models.CharField(max_length=500)
	auth_date = models.DateField(auto_now_add=True)