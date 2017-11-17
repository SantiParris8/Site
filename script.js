function masinfo() {
  $(".jumbotron").animate({height: '500px'});
  $('.button').hide();
  $(".lead").text("Soy de Montevideo Uruguay, tengo 16 años, disfruto el mundo de la computación y la tecnología. En mi tiempo libre me gusta intentar diseñar sitios web y aprender edición digital junto con programación. Mi programa favorito para editar imágenes es Photoshop y para crear contenido suelo utilizar Illustrator. Tengo un dominio del inglés avanzado y debería dar el examen de cambridge PROF este año (2017).");
  $('.segundo').fadeIn();
  $('.segundob').fadeIn();



};



function idioma() {
  $(".jumbotron").animate({height: '500px'});
  $('.button').hide();
  $(".lead").text("Im from Montevideo, Uruguay, im 16 years old, i enjoy working with compters and technology. On my free time i like atempting to design websites, learning graphic-design and programming. My favourite program for graphic-design is Photoshop and to create content i like using Illustrator. I have and Advanced English level and i should take Cambridge's profficiency exam (PROF) this year (2017).");
  $('.segundoen').fadeIn();
  $('.segundob').fadeIn();
  $('.segundo').css({"display":"none"});
  $('#espflag').fadeIn();
  $('#engflag').css({"display":"none"});
}


function idiomaesp() {
  $(".jumbotron").animate({height: '500px'});
  $(".lead").text("Soy de Montevideo Uruguay, tengo 16 años, disfruto el mundo de la computación y la tecnología. En mi tiempo libre me gusta intentar diseñar sitios web y aprender edición digital junto con programación. Mi programa favorito para editar imagenes es Photoshop y para crear contenido suelo utilizar Illustrator. Tengo un dominio del ingles avanzado y deberia dar el examen de cambridge PROF este año (2017).");
  $('.segundo').fadeIn();
  $('#engflag').fadeIn();
  $('.segundoen').css({"display":"none"});
  $('#espflag').css({"display":"none"});
}

function pdf() {
  $(".pdfmanto").fadeIn();
}

function noche() {
  $(".jumbotron").animate({backgroundColor:'rgba(0,0,0,0.7)'});
  $("body").animate({color:'white;'});
  $("#noche").css({"display":"none"});
  $('#dia').fadeIn();
}

function dia() {
  $(".jumbotron").animate({backgroundColor:'rgb(255,255,255)'});
  $("#dia").css({"display":"none"});
    $("body").animate({color:'black'});
  $('#noche').fadeIn();
}


function enviado() {
  $(".formcont").fadeOut();
  $(".enviado").fadeIn();
  cursor:pointer;

}


function Citas() {
$(".cajacita").css({"display":"block"})
$(".pcon").css({"display":"none"})

}

function mostrarrita() {
  $(".cajacita").css({"display":"none"})
  $(".rita").fadeOut();
  $(".Rita").css({"display":"block"})
  $(".cita1").animate({marginRight: '25%'},1000);
  $(".cita3").animate({marginLeft: '10%'},1400);

}

function mostrarseba() {
  $(".cajacita").css({"display":"none"})
  $(".seba").fadeOut();
  $(".Seba").css({"display":"block"})
  $(".cita2").animate({marginRight: '25%'},1000);
  $(".cita4").animate({marginLeft: '10%'},1400);


}

function mostrarsanti() {
  $(".cajacita").css({"display":"none"})
  $(".santi").fadeOut();
  $(".Santi").css({"display":"block"})
  $(".cita2").animate({marginRight: '25%'},1000);
  $(".cita4").animate({marginLeft: '10%'},1400);


}

function mostrarfabi() {
  $(".cajacita").css({"display":"none"})
  $(".fabi").fadeOut();
  $(".Fabi").css({"display":"block"})
  $(".cita1").animate({marginRight: '25%'},1000);
  $(".cita3").animate({marginLeft: '10%'},1400);
}
function Consejos() {
  $(".consejos").fadeIn();
  $(".pcon").fadeOut();
}

function mostrartuto(b) {
var b = "#" + b
  $(b).fadeIn();
}

function Effecto(a) {
  var a = "#p" + a
    $(a).animate({fontSize: '22px'}, { duration: 500, queue: false });
    $(a).fadeIn({duration: 900});
}

function EffectoOut(a) {
  var a = "#p" + a
    $(a).animate({fontSize: '6px'}, { duration: 500, queue: false });
    $(a).fadeOut({duration: 900});

}
