$(document).ready(function(){

    //hidepages();
    //showselectedPage();
    $('#home, #profile, #messages').bind('click', loadpages )

});

var hidepages = function(){
    $('#homePage, #profilePage, #messagesPage').hide();
    //$('#profilePage,#messagesPage').hide();
};

var loadpages = function(){

  //console.log($(this));
   var selectedPage = $(this).attr('id');// $(this) helps in getting all the prroperties of the pages but .attr(id)helps in getting only id
    console.log(selectedPage);
    showselectedPage(selectedPage);
};


var showselectedPage  = function (pagename){
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
