function attachEventsListeners() {

    let ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    function convert(value, from) {
        const valueInDays = value / ratios[from];
        return {
            days: valueInDays * ratios.days,
            hours: valueInDays * ratios.hours,
            minutes: valueInDays * ratios.minutes,
            seconds: valueInDays * ratios.seconds
        };
    }

    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', convertDays);
    document.getElementById('hoursBtn').addEventListener('click', convertHours);
    document.getElementById('minutesBtn').addEventListener('click', convertMinutes);
    document.getElementById('secondsBtn').addEventListener('click', convertSeconds);

    function convertDays(e) {
        let value = Number(days.value);
        let convertedvalue = convert(value, 'days');
        display(convertedvalue);
    }

    function convertHours(e) {
        let value = Number(hours.value);
        let convertedvalue = convert(value, 'hours');
        display(convertedvalue);
    }

    function convertMinutes(e) {
        let value = Number(minutes.value);
        let convertedvalue = convert(value, 'minutes');
        display(convertedvalue);
    }

    function convertSeconds(e) {
        let value = Number(seconds.value);
        let convertedvalue = convert(value, 'seconds');
        display(convertedvalue);
    }

    function display(values) {
        days.value = values.days;
        hours.value = values.hours;
        minutes.value = values.minutes;
        seconds.value = values.seconds;

    }


}