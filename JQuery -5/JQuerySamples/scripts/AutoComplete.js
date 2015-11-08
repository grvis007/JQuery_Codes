/**
 * Created by Harsha on 8/14/2015.
 */

$(document).ready( function(){

    var preFillText = [
        "Alphabet",
        "ASP",
        "C++",
        "C#",
        "Java",
        "jquary"
    ];

    var txtfill = [

        { label: "anders", category: "" },
        { label: "andreas", category: "" },
        { label: "antal", category: "" },
        { label: "annhhx10", category: "Products" },
        { label: "annk K12", category: "Products" },
        { label: "annttop C13", category: "Products" },
        { label: "anders andersson", category: "People" },
        { label: "andreas andersson", category: "People" },
        { label: "andreas johnson", category: "People" }
    ];

      $('#txtSearch').autocomplete({
        //source: preFillText
          source:txtfill
      });

});