function masinfo() {
  $(".jumbotron").animate({height: '500px'});
  $('.button').hide();
  $(".lead").text("Soy de Montevideo Uruguay, tengo 16 años, disfruto el mundo de la computación y la tecnología. En mi tiempo libre me gusta intentar diseñar sitios web y aprender edición digital junto con programación. Mi programa favorito para editar imagenes es Photoshop y para crear contenido suelo utilizar Illustrator. Tengo un dominio del ingles avanzado y deberia dar el examen de cambridge PROF este año (2017).");
  $('.segundo').fadeIn();
  $('.entraimg')

};

$('document').ready(function(){

    $("#cita1").animate({marginRight: '25%'},1000);
    $("#cita2").animate({marginLeft: '30%'},1200);
    $("#cita3").animate({marginLeft: '10%'},1400);
    $("#cita4").animate({marginLeft: '30%'},1200);

});

function idioma() {
  $(".lead").text("Im from Montevideo, Uruguay, im 16 years old, i enjoy working with compters & technology. On my free time y like atempting to design websites, learning design and programming. To edit images im acustomd to use Photoshop and to create contet i use Illustrator. I have and Advanced English level and i should do PROF exam this year (2017).");

}
