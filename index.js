//get actual date
let data = new Date();
let dayOfWeek = data.getDay();
switch (dayOfWeek) {
    case 1:
        $('.date').html("Poniedziałek ");
        break;
    case 2:
        $('.date').html("Wtorek ");
        break;
    case 3:
        $('.date').html("Środa ");
        break;
    case 4:
        $('.date').html("Czwartek ");
        break;
    case 5:
        $('.date').html("Piątek ");
        break;
    case 6:
        $('.date').html("Sobota ");
        break;
    case 0:
        $('.date').html("Niedziela ");
        break;
}
let day = data.getDate();
$('.date').append(day);
//get actual month
let month = data.getMonth();
switch (month) {
    case 0:
        $('.date').append(" Styczeń ");
        break;
    case 1:
        $('.date').append(" Luty ");
        break;
    case 2:
        $('.date').append(" Marzec ");
        break;
    case 3:
        $('.date').append(" Kwiecień ");
        break;
    case 4:
        $('.date').append(" Maj ");
        break;
    case 5:
        $('.date').append(" Czerwiec ");
        break;
    case 6:
        $('.date').append(" Lipiec ");
        break;
    case 7:
        $('.date').append(" Sierpień ");
        break;
    case 8:
        $('.date').append(" Wrzesień ");
        break;
    case 9:
        $('.date').append(" Październik ");
        break;
    case 10:
        $('.date').append(" Listopad ");
        break;
    case 11:
        $('.date').append(" Grudzień ");
        break;
}
//add actual year
let year = data.getFullYear();
$(".date").append(year + " ");

//add actual time
let clock = document.querySelector(".hour");
//add day of week forecast
let tab = ['Niedziela', 'Poniedziałek', 'Wtorek', "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela", 'Poniedziałek', 'Wtorek', "Środa", "Czwartek", "Piątek"];
$('.d1').html(tab[dayOfWeek + 1]);
$('.d2').html(tab[dayOfWeek + 2]);
$('.d3').html(tab[dayOfWeek + 3]);
$('.d4').html(tab[dayOfWeek + 4]);
$('.d5').html(tab[dayOfWeek + 5]);

function foo() {
    var date = new Date();
    var godzina = date.getHours();
    var minuty = date.getMinutes();
    var sek = date.getSeconds();
    if (godzina < 10) {
        godzina = "0" + godzina;
    }
    if (minuty < 10) {
        minuty = "0" + minuty;
    }
    if (sek < 10) {
        sek = "0" + sek;

    }
    clock.innerHTML = godzina + ":" + minuty + ":" + sek;
}
foo();
setInterval(foo, 1000);
//add city and forecast
function lTemp(temp) {
    return Math.floor(temp - 273.15);

    function km(wind) {
        return Math.ceil((wind * 3600) / 1000);
    }
}

function km(wind) {
    return Math.ceil((wind * 3600) / 1000);
}
$('.city').keydown(function (e) {
    if (e.keyCode == 13) {
        $name = $('.city').val().trim().toUpperCase();
        $(".here").html($name);
        $('.city').val('');
        if ($name != "") {
            $.get('http://api.openweathermap.org/data/2.5/weather?q=' + $name + '&APPID=b661e18bc64e4000eac618e90194e845')
                .done(function (response) {
                    $('.temp').html(lTemp(response.main.temp_max) + " &#176;" + "C");
                    $('.pressure').html(response.main.pressure + " hPa");
                    $('.humidity').html(response.main.humidity + " %");
                    $('.clouds').html(response.clouds.all + " %");
                    $('.wind').html(km(response.wind.speed) + " km/h");
                })
            $.get('http://api.openweathermap.org/data/2.5/forecast?q=' + $name + '&APPID=b661e18bc64e4000eac618e90194e845')
                .done(function (response_f) {
                    $('.day1').html(lTemp(response_f.list[7].main.temp_max) + " &#176;" + "C");
                    $('.day2').html(lTemp(response_f.list[15].main.temp_max) + " &#176;" + "C");
                    $('.day3').html(lTemp(response_f.list[23].main.temp_max) + " &#176;" + "C");
                    $('.day4').html(lTemp(response_f.list[31].main.temp_max) + " &#176;" + "C");
                    $('.day5').html(lTemp(response_f.list[39].main.temp_max) + " &#176;" + "C");

                })
        }
    }
});