from django.contrib import admin
from .models import ChaiVarity,ChaiReview,ChaiCertificate,Store


# Register your models here.
class ChaiReviewInline(admin.TabularInline):
  model = ChaiReview
  extra=2

class ChaiVarityAdmin(admin.ModelAdmin):
  list_display = ('name','type','date_added')
  inlines = [ChaiReviewInline]

class StoreAdmin(admin.ModelAdmin):
  list_display = ('name','location')
  filter_horizontal=('chai_varity',)


class ChaiCertificateAdmin(admin.ModelAdmin):
  list_display = ('chai','certificate_number','issued_date','valid_untill',)

admin.site.register(ChaiVarity,ChaiVarityAdmin)
admin.site.register(ChaiReview)
admin.site.register(ChaiCertificate,ChaiCertificateAdmin)
admin.site.register(Store,StoreAdmin)



admin.site.register(ChaiVarity)
