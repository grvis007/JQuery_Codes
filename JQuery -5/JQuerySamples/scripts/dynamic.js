/**
 * Created by Harsha on 8/14/2015.
 */

$(document).ready( function(){
    createControls();
    $('#btnSubmit').bind('click', displayNotes )
});

function createControls() {

   var controltxt = $('<input/>')
    controltxt.attr('type', 'text');
    controltxt.attr('id','txtNotes');
    controltxt.css('color', 'blue'),
    $('#container').append(controltxt);

 var constrol = $('<button/>')
    constrol.attr('id','btnSubmit');
    constrol.text("Click Me");
    constrol.css('color', 'red'),
    //constrol.css('backgroundColor', 'yellow');
  $('#container').append(constrol);

}

function displayNotes(){

    var notes = $('#txtNotes').val();

    alert( 'Notes :' +  notes  );
}