let hour = 0;
let minute = 0;
let second = 0;
let milliseconds = 0;

let cron;

function completeZero(num) {
    if(num.length < 2) {
        num = '0' + num;
    }
    return num
}

function start() {
    document.querySelector('.start').setAttribute('id', 'disabled');
    document.querySelector('.reset').setAttribute('id', '');
    document.querySelector('.pause').setAttribute('id', '');
    
    cron = setInterval(() => {
        if (milliseconds < 100) {
            milliseconds++;
        } else if (milliseconds == 100) {
            milliseconds = 0;
            second++;
        }
        
        if (second == 60) {
            second = 0;
            minute++;
        }
        
        if (minute == 60) {
            minute = 0;
            hour++;
        }
        
        document.getElementById('milliseconds').innerText = milliseconds.toString().padStart(3, '0');
        document.getElementById('second').innerText = second.toString().padStart(2, '0');
        document.getElementById('minute').innerText = minute.toString().padStart(2, '0');
        document.getElementById('hour').innerText = hour.toString().padStart(2, '0');
    }, 10)
}

function pause() {
    document.querySelector('.start').setAttribute('id', '');
    document.querySelector('.pause').setAttribute('id', 'disabled');
    clearInterval(cron);
}

function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    milliseconds = 0;
    document.getElementById('milliseconds').innerText = '000';
    document.getElementById('second').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('hour').innerText = '00';
}