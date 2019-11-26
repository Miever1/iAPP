from django.db import models
import datetime

# Create your models here.
# User
class User(models.Model):
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    username = models.CharField(verbose_name='用户名', max_length=20)
    password = models.CharField(verbose_name='密码', max_length=20)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default='M')

    class Meta:
        verbose_name = '用户'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.username

class Journal(models.Model):
    title = models.CharField(verbose_name='标题', max_length=50)
    content = models.CharField(verbose_name='内容', max_length=2000)
    publishtime = models.DateTimeField(verbose_name='发布日期', auto_now=True)
    createdBy = models.IntegerField(verbose_name='发布用户', null=True)

    class Meta:
        verbose_name = '日记'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.title
    
class Calendar(models.Model):
    memoryname = models.CharField(verbose_name='纪念日名称', max_length=50)
    memorycontent = models.CharField(verbose_name='纪念日意义', max_length=2000)
    memorydate = models.DateField(verbose_name='纪念日时间', default=datetime.datetime.today)
    createdBy = models.IntegerField(verbose_name='创建用户', null=True)

    class Meta:
        verbose_name = '纪念日'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.memoryname
    
class LoveTree(models.Model):
    treename = models.CharField(verbose_name='树名', max_length=50)
    watersize = models.IntegerField(default=0, verbose_name='水量')
    growingtime = models.DateTimeField(verbose_name='种植日期', auto_now=True)
    createdBy = models.IntegerField(verbose_name='创建用户', null=True)

    class Meta:
        verbose_name = '爱情树'
        verbose_name_plural = verbose_name

    def add_water(self):
        self.watersize += 20

    def __str__(self):
        return self.treename

