// C'EST BIEN FAIT LE JAVASCRIPT !!!

function main(){

    document.getElementById("94768-200.png").innerHTML;
    document.getElementById("usbko.png").innerHTML;
    document.getElementById("usbok.png").innerHTML;
    document.getElementById("fa fa-arrow-up").innerHTML;
    document.getElementById("fa fa-check-circle").innerHTML;

}

// USB SLIDE

$( document.body ).click(function() {
  if ( $( "div:first" ).is( ":hidden" ) ) {
    $( '.usbconnex' ).show( "slow" );
  } else {
    $( '.usbconnex' ).slideUp();
  }
});

// MARIO APPEARANCE + BRICK ACTION

function byId(e){return document.getElementById(e);}

window.addEventListener('load', mInit, false);

function mInit()
{
    var tgt = byId('.brick');
    tgt.secondSource = 'smb3_bloc-question.gif';
}

function byId(e){return document.getElementById(e);}

function action()
{
    var tgt = byId('smb3_bloc-question.gif');
    var tmp = tgt.src;
    tgt.src = tgt.secondSource;
    tgt.secondSource = tmp;
};

function action2()
{
    var tgt = byId('.usbconnex');
    var tmp = tgt.src;
    tgt.src = tgt.getAttribute('.brick');
    tgt.setAttribute('smb3_bloc-question.gif', tmp);

};
