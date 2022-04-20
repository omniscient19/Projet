/*Affiche la barre de navigation quand on scroll*/
$(document).ready(function () {
  $(".navbar").hide();
  /*Fonction pour faire aparaître la barre de navigation si supérieur 100px*/
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".navbar").fadeIn();
      } else {
        $(".navbar").fadeOut();
      }
    });
  });
});
