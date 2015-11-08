/*** Created by Gaurav on 8/17/2015.*/
$(document).ready(function() {

    shortIT('lblControl','lblFirstName','label');
    shortIT('inputControl','txtNotes','input');
    shortIT('btnControl','btnsubmit','button');
    shortIT('lbloutput','lblrev','label');

    $('#btnsubmit').bind('click', showNotes );
});
function showNotes()
{
    var name = $('#txtNotes').val();
    alert('Hi My Name is : ' + name);

    var reverse = name.split('').reverse().join('');
    $('#lblrev').text(reverse);

}

function shortIT(name,id,type){

    var name=getControlObject();
    name.id=id;
    name.type=type;
    if(type=='button'){
        name.text="Click here: ";
    }
    else if (type=='label' && id=='lblrev'){
        name.text = " ";
    }
    else if (type=='label'){
        name.text = "Enter text here: ";
    }
    name.style.color="blue";
    name.appendTo='#container';
    createControl(name);

}

function getControlObject()
{
    var control= {
        id: '',
        type:'',
        text:'',
        style: {
            color: ''
        },
        appendTo:''

    };
return control;
}

function createControl(input){
    switch(input.type){
        case 'input':
            var cntrl=$('<input/>');
            cntrl.attr('id',input.id);
            cntrl.text(input.text);
            cntrl.css('color',input.style.color);
            break;
        case 'button':
            var cntrl=$('<button/>');
            cntrl.attr('id',input.id);
            cntrl.text(input.text);
            cntrl.css('color',input.style.color);
            break;
        case 'label':
            var cntrl=$('<label/>');
            cntrl.attr('id',input.id);
            cntrl.text(input.text);
            cntrl.css('color',input.style.color);
            break;
    }
    $(input.appendTo).append(cntrl);

}