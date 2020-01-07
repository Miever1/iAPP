from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from lovesystem.models import *
from django.http import HttpResponse, JsonResponse
from .MyCalendar import *


def login(request):
    if request.method == "GET":
        return render(request, "login.html")
    elif request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        response_json = {}
        user = User.objects.filter(username=username)
        if len(user) == 0:
            response_json = {'status': 'fail', 'message': '用户名不存在'}
        elif user.first().password != password:
            response_json = {'status': 'fail', 'message': '密码错误'}
        else:
            response_json = {'status': 'success', 'message': '登录成功', 'user': {
                'id': user[0].id,
                'username': user[0].username,
            }}
        return JsonResponse(response_json)


def signup(request):
    if request.method == "GET":
        return render(request, "signup.html")
    elif request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        response_json = {}
        if len(User.objects.filter(username=username)) > 0:
            response_json = {'status': 'fail', 'message': '用户名已存在'}
            print("fail")
        else:
            new_user = User(username=username)
            new_user.save()
            response_json = {'status': 'success', 'message': '注册成功'}
            print("success")
        return JsonResponse(response_json)


def logout(request):
    if request.method == "GET":
        id = request.GET['id']
        user = User.objects.get(id=id)
        user.delete()
        response_json = {'status': 'success', 'message': '注销成功'}
        return JsonResponse(response_json)


def index(request):
    return render(request, "index.html")


def reset(request):
    if request.method == "GET":
        return render(request, "reset.html")
    elif request.method == "POST":
        id = request.POST['id']
        origin_password = request.POST['origin_password']
        new_password = request.POST['new_password']
        response_json = {}
        if len(User.objects.filter(id=id, password=origin_password)) > 0:
            user = User.objects.get(id=id)
            user.password = new_password
            user.save()
            response_json = {'status': 'success', 'message': '修改成功'}
        else:
            response_json = {'status': 'fail', 'message': '原密码错误'}
        return JsonResponse(response_json)

# ------------- 日志 ------------- #

# 显示日志


def journal(request):
    user_id = request.COOKIES.get('user_id')
    journals = Journal.objects.filter(createdBy=user_id)
    return render(request, "blog.html", {'journals': journals})

# 创建日志


def createJournal(request):
    if request.method == "GET":
        return render(request, "createJournal.html")
    elif request.method == "POST":
        title = request.POST['title']
        content = request.POST['content']
        user_id = request.POST['user_id']
        new_journal = Journal(title=title, content=content, createdBy=user_id)
        new_journal.save()
        response_json = {'status': 'success', 'message': '发布成功'}
        return JsonResponse(response_json)

# 编辑日志


def editJournal(request):
    if request.method == "POST":
        id = request.POST['id']
        journal = Journal.objects.get(id=id)
        journal.title = request.POST['title']
        journal.content = request.POST['content']
        if int(journal.createdBy) != int(request.POST['user_id']):
            response_json = {'status': 'fail', 'message': '没有权限修改'}
        else:
            journal.save()
            response_json = {'status': 'success', 'message': '修改成功'}
        return JsonResponse(response_json)

# 删除日志


def deleteJournal(request):
    if request.method == "GET":
        id = request.GET['id']
        journal = Journal.objects.get(id=id)
        if int(journal.createdBy) != int(request.GET['user_id']):
            response_json = {'status': 'fail', 'message': '没有权限删除'}
        else:
            journal.delete()
            response_json = {'status': 'success', 'message': '删除成功'}
        return JsonResponse(response_json)

# ------------- 纪念日 -------------- #

# 显示纪念日


def calendar(request):
    if request.method == "GET":
        user_id = request.COOKIES.get('user_id')
        calendars = Calendar.objects.filter(createdBy=user_id)
        my_calendars = []
        for calendar in calendars:
            my_calendars.append(MyCalendar(calendar))
        response = render(request, "timecapsule.html",
                          {'calendars': my_calendars})
        return response

# 创建纪念日


def createCalendar(request):
    if request.method == "POST":
        memoryname = request.POST['memoryname']
        memorycontent = request.POST['memorycontent']
        memorydate_timestamp = request.POST['memorydate']
        memorydate = timestamp_to_date(memorydate_timestamp)
        user_id = request.POST['user_id']
        calendar = Calendar(memoryname=memoryname, memorycontent=memorycontent,
                            memorydate=memorydate, createdBy=user_id)
        calendar.save()
        response_json = {'status': 'success', 'message': '创建成功'}
        return JsonResponse(response_json)

# 编辑纪念日


def editCalendar(request):
    if request.method == "POST":
        id = request.POST['id']
        calendar = Calendar.objects.get(id=id)
        calendar.memoryname = request.POST['memoryname']
        calendar.memorycontent = request.POST['memorycontent']
        calendar.memorydate = timestamp_to_date(request.POST['memorydate'])
        if int(calendar.createdBy) != int(request.POST['user_id']):
            response_json = {'status': 'fail', 'message': '没有权限修改'}
        else:
            calendar.save()
            response_json = {'status': 'success', 'message': '修改成功'}
        return JsonResponse(response_json)

# 删除纪念日


def deleteCalendar(request):
    if request.method == "GET":
        id = request.GET['id']
        calendar = Calendar.objects.get(id=id)
        if int(calendar.createdBy) != int(request.GET['user_id']):
            response_json = {'status': 'fail', 'message': '没有权限删除'}
        else:
            calendar.delete()
            response_json = {'status': 'success', 'message': '删除成功'}
        return JsonResponse(response_json)


def timestamp_to_date(timestamp):
    return datetime.date.fromtimestamp(int(timestamp))
