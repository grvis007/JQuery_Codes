


$(document).ready(function(){

    //hidepages();
    //showseledPage();
    $('#home, #profile, #messages').bind('click', loadpages )

    getWeatherReport();

});

var hidepages = function(){
    $('#homePage, #profilePage, #messagesPage').hide();
    //$('#profilePage,#messagesPage').hide();
};

var loadpages = function(){

  //console.log($(this));
   var selectedPage = $(this).attr('id');
    console.log(selectedPage);
    showseledPage(selectedPage);

};


var showseledPage  = function (pagename){
    hidepages();
    switch (pagename) {

        case 'home':
            $('#homePage').show();
            break;
        case 'profile':
            $('#profilePage').show();
            break;
        case 'messages':
            $('#messagesPage').show();
            break;
        default :
            $('#homePage').show();
            break;
    }
};

var getWeatherReport = function (){

  var url = "http://api.openweathermap.org/data/2.5/weather?q=London";

$.ajax
({
        url: url,
        method:"GET" // POST, PUT, DELETE, GET
    }
)
    .success( function (response){

        console.log(response);
        $('#hydweatherReport').text(response.weather[0].description);
        $('#hydweatherReportforHumidity').text(response.wind.deg);

    })

    .error(function (response){

        console.log(response);

    });

};


