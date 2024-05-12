from rest_framework import routers
from .api import CipherViewSet

router = routers.DefaultRouter()
router.register('/cipher', CipherViewSet, 'cipher')

urlpatterns = router.urls
