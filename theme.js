<script>
// ===== NAVBAR ===== //
$(window).scroll(function() {
  
  let position    =   $(this).scrollTop();
    if (position >= 250) {
      $('.nav-menu').addClass('costum-navbar');
    } else {
      $('.nav-menu').removeClass('costum-navbar');
    }
  
});


// ===== HAMBURGER BUTTON ===== //
$(document).ready(function() {
  
  $('.nav-button').click(function() {
    $('.nav-button').toggleClass('change');
  })
    
});

$(".htmlCSS").animate({width:"95%"},2100);
$(".jsjqaj").animate({width:"74%"},2100);
$(".rwd").animate({width:"86%"},2100);
$(".seo").animate({width:"65%"},2100);
$(".cssF").animate({width:"44%"},2100);
$(".wpVC").animate({width:"60%"},2100);
$(".bdt").animate({width:"85%"},2100);
$(".bAT").animate({width:"38%"},2100);
$(".phpMSQL").animate({width:"40%"},2100)
$(".typo").animate({width:"95%"},2100);
$(".acs").animate({width:"65%"},2100);
$(".ld").animate({width:"80%"},2100);

</script>
