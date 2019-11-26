from datetime import date

class MyCalendar:

    def __init__(self, calendar):
        self.memoryname = calendar.memoryname
        self.memorycontent = calendar.memorycontent
        self.memorydate = calendar.memorydate
        self.passedDays = (date.today() - self.memorydate).days

    def __str__(self):
        return self.memoryname
        