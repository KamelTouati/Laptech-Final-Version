# Generated by Django 4.2.7 on 2023-12-05 15:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('laptops', '0002_remove_laptop_brand_laptop_company_laptop_display_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='laptop',
            name='updated',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
