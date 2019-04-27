// @ts-check


var s11 = document.querySelector('s1');
var s12 = document.querySelector('s2');
var s13 = document.querySelector('s3');

var s14 = document.querySelector('s4');
var s15 = document.querySelector('s5');
var s16 = document.querySelector('s6');

var s17 = document.querySelector('s9');
var s18 = document.querySelector('s7');
var s19 = document.querySelector('s8');

var c = document.querySelector('clock');
var stats = document.querySelector('st')


var pad = function (x) {
    return x < 10 ? '0' + x : x;
}

var ShowClock = function () {
    var d = new Date();
    var h = pad(d.getHours());
    var m = pad(d.getMinutes());
    var s = pad(d.getSeconds());

    c.innerHTML = [h, m, s].join(':');
}

setInterval(ShowClock, 1000);

var myRef = new Firebase('https://aqitest.firebaseio.com/Benachity');

myRef.on('child_changed', function(snapshot){
    data = snapshot.val();
    s11.innerHTML = data.pm1;
    s12.innerHTML = data.pm2;
    s13.innerHTML = data.pm10;

    s14.innerHTML = data.no2;
    s15.innerHTML = data.co;
    s16.innerHTML = data.co2;
    
    s17.innerHTML = data.h2;
    s18.innerHTML = data.temp;
    s19.innerHTML = data.hum;

	
    
});

