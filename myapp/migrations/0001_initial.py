from django.db import migrations, models

class Migration(migrations.Migration):

    initial = True

    dependencies = [
        # Define any dependencies if applicable
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('degree', models.CharField(max_length=100)),
                ('income', models.CharField(max_length=100)),
                ('gender', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Scholarship',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('link', models.URLField(max_length=500)),
                ('degree', models.CharField(max_length=100)),
                ('income', models.CharField(max_length=100)),
                ('gender', models.CharField(max_length=20)),
            ],
        ),
    ]
