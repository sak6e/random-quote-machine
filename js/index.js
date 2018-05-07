$(document).ready(function(){
  var quotes,authors,ran,newquote,newauthor,colors,newcolor;
    function getquote(){
    quotes=["I'm hopeless and awkward and desperate for love.","I drink and I know things","I'm against having emotions, not against using them"];
    authors=["-Chandler Bing","-Tyrion Lannister","-Harvey Specter"];
    colors=["red","green","blue"];
    ran=Math.floor((Math.random()*4));
    newquote=quotes[ran];
    newauthor=authors[ran];
    newcolor=colors[ran];
    $('#quote').text(<i class="fa fa-quote-left">newquote</i>);
    $('#author').text(newauthor);
    $('body').css("background-color",newcolor);
  }
  $('#new').on("click",function(){
    getquote();
  });
  $('#tweet').on("click",function(){
    window.open("https://twitter.com/intent/tweet?text="+newquote+" "+newauthor);
  });
});