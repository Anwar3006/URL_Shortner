from collections.abc import Iterable
from django.db import models
import uuid
# Create your models here.


class URL(models.Model):
    url = models.CharField(max_length=1000, null=False)
    uuid = models.CharField(
        max_length=10, unique=False, primary_key=True)

    def save(self, *args, **kwargs):
        if not self.uuid:
            self.uuid = str(uuid.uuid4())[:6]
        return super().save(*args, **kwargs)

    # def __str__(self) -> str:
    #     return self.
