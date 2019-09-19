let clock = {
    date: {
        year: 0,
        month: 0,
        day: 0,
        weekDay: 0,
        string: function (escape) {
            return this.year + escape + this.month + escape + this.day;
        }
    },
    time: {
        hours: 0,
        minutes: 0,
        seconds: 0,
        string: (escape) => {
            return this.hours + escape + this.minutes + escape + this.seconds;
        }
    },
    timezone: 'GMT'
}


function structClock(timeStamp) {
    let date = new Date(timeStamp);

    clock.date.year = date.getFullYear();
    clock.date.month = date.getMonth();
    clock.date.day = date.getDate();
    clock.date.weekDay = date.getDay();

    clock.time.hours = date.getHours();
    clock.time.minutes = date.getMinutes();
    clock.time.seconds = date.getSeconds();

    return clock;
}

function getStamp(clock) {
    if (clock) return Date.parse(clock.date.string(' ') + clock.time.string(' ') + 'GMT');
    else return Date.parse(clock);
}

// Convert Numbers to texts
function getMonthText(month) {
    switch (month) {
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 3:
            return 'April';
        case 4:
            return 'May';
        case 5:
            return 'June';
        case 6:
            return 'July';
        case 7:
            return 'August';
        case 8:
            return 'September';
        case 9:
            return 'October';
        case 10:
            return 'November';
        case 0:
            return 'December';
    }
}

function getweekDayText(day) {
    switch (day) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesay';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thurday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';

    }
}

// abbreviates give month or week day
function abberviation(value) {
    return value.substr(0, 3) + '.';
}

module.exports = {
    genClock: structClock,
    genStamp: getStamp,
    monthText: getMonthText,
    weekDay: getweekDayText,
    abbv: abberviation
}