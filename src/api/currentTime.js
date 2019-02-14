function formatTime(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let date_time={};
    date_time.format_time=[year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':');
    date_time.format_ymd=[year, month, day].map(formatNumber).join('-');
    date_time.format_hm=[hour, minute].map(formatNumber).join(':');
    return date_time;
}

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

module.exports = {
    formatTime : formatTime,
}
  