# Generated by Django 4.1.6 on 2024-01-06 13:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('laptops', '0003_laptop_updated'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='favoritelaptop',
            unique_together=None,
        ),
        migrations.RemoveField(
            model_name='favoritelaptop',
            name='laptop',
        ),
        migrations.RemoveField(
            model_name='favoritelaptop',
            name='user',
        ),
        migrations.RemoveField(
            model_name='laptop',
            name='seller',
        ),
        migrations.AlterUniqueTogether(
            name='rating',
            unique_together=None,
        ),
        migrations.RemoveField(
            model_name='rating',
            name='laptop',
        ),
        migrations.RemoveField(
            model_name='rating',
            name='user',
        ),
        migrations.DeleteModel(
            name='Comment',
        ),
        migrations.DeleteModel(
            name='FavoriteLaptop',
        ),
        migrations.DeleteModel(
            name='Laptop',
        ),
        migrations.DeleteModel(
            name='Rating',
        ),
    ]
