/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */





function hide(id)
{


       $("#" + id).hide();
    
}

function addborder(id)
{
  $("#" + id).css("border-style", "solid","border-width", "4px");

}







   var i = 14;

$( "li" ).each(function( index ) {
    i = i + 2;
  $( this ).css("font-size", i + "px");
});

    
   $( "li" ).filter( ":even" ).css( "background-color", "red");
   $( "li" ).filter( ":odd" ).css( "background-color", "orange" );
   
    $(".div").click(function ()
    {        
       var clickednumber = this.innerHTML;
       this.innerHTML = poweroftwo(clickednumber);
        

    });
    
 function randomnumber()
 {
     return Math.floor((Math.random() * 5) + 1);;
 }
    
    var urls =
            ["http://static.independent.co.uk/s3fs-public/thumbnails/image/2013/01/24/12/v2-cute-cat-picture.jpg",
        "http://i.telegraph.co.uk/multimedia/archive/03235/potd-husky_3235255k.jpg", "http://cdn-01.belfasttelegraph.co.uk/incoming/article31552045.ece/82fe0/ALTERNATES/w620/US%20Monkey%201550.jpg",
        "http://cdn2-www.dogtime.com/assets/uploads/gallery/25-funny-dog-memes-part-2/14-funny-dog-meme.jpg",
        "http://999konycountry.com/wp-content/uploads/2015/12/funny-videos.jpg"];
    
    
    $( ".shuffleimg" ).click(function () {
   
   $( ".shuffleimg" ).each(function()
   {
    $( this ).attr('src', urls[randomnumber()]);   
   })
  
  
});

function person(name)
{
 this.name = name;  
}

var person1 = new person("kurt");
var person2 = new person("bent");
var person3 = new person("signe");

var persons = [person1, person2, person3];

var content = "<table id='mytable'>"
for(i=0; i<persons.length; i++){
    content += '<tr><td>' + persons[i].name + '</td></tr>';
}
content += "</table>"

$('#tablediv').append(content);



    $( "#tablediv" ).find("td").hover(function () {
   
    $(this).css("font", "bold italic 20px Georgia");
});




    $( ".t1" ).click(function () {
  if($(this).html() === "=") 
  {
   var calculate = eval($("#display").html());
   $("#display").html(calculate);
  }
  else
  {
   $("#display").html($("#display").html() + $(this).html()); 
  }
  
  
  
});
 

    
    
function poweroftwo(number)
{
    return Math.pow(number, 2);  
}
    


function removeborder(id)
{
    $("#" + id).css("border-style", "","border-width", ""); 
}

function incfontsize(id)
{
  $("#" + id).css("font-size", "150%");   
}










