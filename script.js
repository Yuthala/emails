window.addEventListener('DOMContentLoaded', function() {

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

setInterval(() => {
    let diff = Date.parse("Mar 31, 2025 23:59:59") - Date.now();
    const days = Math.floor(diff / day);
    diff -= days * day;
    const hours = Math.floor(diff / hour);
    diff -= hours * hour;
    const mins = Math.floor(diff / minute);
    diff -= mins * minute;
    const secs = Math.floor(diff / second);
    document.getElementById("timer").innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${secs}<span>Seconds</span></div>`;
}, 1000);
})