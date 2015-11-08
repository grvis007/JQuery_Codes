/**
 * Created by Harsha on 8/15/2015.
 */

$(document).ready(function () {

var input = getControlObject();
    input.id = "txtNotes";
    input.type = "input";
    //input.text = "Enter Notes";
    input.style.color='blue';
    input.appendTo = '#container';

 var lblControl = getControlObject();

    lblControl.id = "lblFirstName";
    lblControl.type = "label";
    lblControl.text = "Enter First Name";
    lblControl.style.color='blue';
    lblControl.appendTo = '#container';

    var btnControl = getControlObject();

    btnControl.id = "btnSubmit";
    btnControl.type = "button";
    btnControl.text = "Click Me";
    btnControl.style.color='blue';
    btnControl.appendTo = '#container';


    createControl(lblControl);
    createControl(input);
    createControl(btnControl);


    $('#btnSubmit').bind('click', showNotes )


});

function showNotes()
{
    var name = $('#txtNotes').val();

    alert('Hi My Name is : ' + name)

}

function getControlObject()
{
    var ctrl = {
        id:'',
        type:'',
        text:'',
        style:{
            color:''
        },
        appendTo:''
    };

    return ctrl;
}


function createControl(control){
  switch (control.type)
  {
      case 'input':
        var ctrl = $('<input/>')
          ctrl.attr('id', control.id );
          ctrl.text(control.text);
          ctrl.css('color', control.style.color);
          break;

      case 'label':
          var ctrl = $('<label/>')
          ctrl.attr('id', control.id );
          ctrl.text(control.text);
          ctrl.css('color', control.style.color);
          break;

      case 'button':
          var ctrl = $('<button/>')
          ctrl.attr('id', control.id );
          ctrl.text(control.text);
          ctrl.css('color', control.style.color);


  }
    $(control.appendTo).append(ctrl);

}
