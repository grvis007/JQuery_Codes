

$('#btnSubmit').click(function(){
   $("p").hide("slow", function(){

       alert('Hi all I am from Callback');

   });

})

$('#btnSubmit1').click (function(){

    $("P").hide();
    alert ('Hi All.. I am from with out call back ');
});

$('#btnSubmitGet').click(function(){

    $.get("demo_test.asp",  function( data, status){
        alert("Data: " + data + "\n \n  Status : " + status);
    } );

});

$('#btnSubmitGet').click(function(){

    $.post("demo_test.asp",
        {
          Name: Krishna,
          City : Reston
        },
        function( data, status){
        alert("Data: " + data + "\n \n  Status : " + status);
    } );

});

$('#btnSubmitChain').click(function(){
   $('#paraInfo').css("color", "black")
       .slideUp(3000)
       .slideDown(3000)
});


$('#btnSubmitEmpty').click( function(){
  //$('#Emptydiv1 p ').first().css("color", "red" );

    $('#Emptydiv1 p ').last().css("color", "red" );


});


$('#btnSubmitRemove').click(function(){
    $("#paraEmpty1").remove()
});

//