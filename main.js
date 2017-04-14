
$(function () {



    var links = [];
    $("#Add-btn").on('click',addListItem);

    function addListItem() {

        var linkName = $("#newlink").val();
        var category = $("#category").val();

        var link = {
            link : linkName ,
            category : category
        };

        links.push(link);

        // var data = JSON.stringify(links);


        // var newData = data.push(link);
        // window.localStorage.setItem("links", data);


        pop();
    }

    function printToHtml(data, location){
        var html = "";
        for(var i = 0; i < data.length; i++){
            var li = "<li>"+data[i].link+"</li>"
            html += li;
        }
        $(location).find("ul").html(html);
    }



    function pop(){


        var wraps = $(".all").find(".box");



        wraps.each(function(wrap){
            var currentCategory = $(this).attr("id");

            var singleCategory = links.filter(function(link) {
                return link.category == currentCategory;
            });



            printToHtml(singleCategory, "#"+currentCategory);


        })

        /*
         var code = links.filter(function(link) {
         return link.category == "code";
         });


         var fun = links.filter(function(link) {
         return link.category == "fun";
         });

         printToHtml(code, "#code");
         printToHtml(fun, "#fun");

         */

    }






    pop();






});
