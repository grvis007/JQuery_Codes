/**
 * Created by Gaurav on 8/25/2015.
 */

$(document).ready(function(){

    $('#btnAnswer').bind('click',addit)
    });

function addit(){

    var input=$("#input").val();
    var temp= input.split(',');
    var ans=0;
    for(var i=0;i<temp.length;i++)
    {
        ans += temp[i] << 0;
    }

    $("#answer").text(ans).show();

}
