$(document).ready(function(){
  $(".nav a").click(function(){
    $(".sidebar-nav").animate({width:'toggle'},50);
  });
});