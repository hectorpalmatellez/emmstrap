$(document).ready(function() {
    'use strict';
    // Copia el contenido del input[type="text"] al clic en el input[type="submit"]
    $('.una-formula .copiar').zclip({
        path: 'bower_components/jquery-zclip/ZeroClipboard.swf',
        copy: function() {
            return $(this).siblings('.snippet').val();
        },
        afterCopy: function() {
            $(this).attr('value', 'Copiado').addClass('disabled');
        }
    });
    // Las formulas
    var formulas = ['button.btn.btn-primary.btn-lg[data-toggle="modal"][data-target="#elmodal"]{Abrir modal}', '.modal.fade#elmodal[tabindex="-1"][role="dialog"][aria-hidden="true"]>.modal-dialog>.modal-content>.modal-header>(button[type="button"].close[data-dismiss="modal"][aria-hidden="true"]{&times}+h4.modal-title)+^.modal-body>p^.modal-footer>button[type="button"].btn.btn-default[data-dismiss="modal"]{Close}+button[type="button"].btn.btn-primary{Save Changes}', 'button[type="button"].btn.btn-default[data-toggle="tooltip"][data-placement="left"][title="Tooltip on left"]{Tooltip on left}', 'button[type="button"].btn.btn-default[data-toggle="tooltip"][data-placement="right"][title="Tooltip on right"]{Tooltip on right}', 'button[type="button"].btn.btn-default[data-toggle="tooltip"][data-placement="top"][title="Tooltip on top"]{Tooltip on top}', 'button[type="button"].btn.btn-default[data-toggle="tooltip"][data-placement="bottom"][title="Tooltip on bottom"]{Tooltip on bottom}', '#carousel-example.carousel.slide[data-ride="carousel"]>ol.carousel-indicators>li[data-target="#carousel-example"].active[data-slide-to="0"]+li[data-target="#carousel-example"][data-slide-to="1"]^.carousel-inner>.item.active>img[src="http://placepuppy.it/800/500"]+.carousel-caption^.item>img[src="http://placepuppy.it/800/500&n=2"]+.carousel-caption^^a.left.carousel-control[href="#carousel-example"][data-slide="prev"]>span.glyphicon.glyphicon-chevron-left^a.right.carousel-control[href="#carousel-example"][data-slide="next"]>span.glyphicon.glyphicon-chevron-right', '.panel-group#accordion>.panel.panel-default>.panel-heading>h4.panel-title>a[data-toggle="collapse"][data-parent="#accordion"][href="#collapse1"]{Arrested Development quotes}^^#collapse1.panel-collapse.collapse.in>.panel-body>p{I don\'t understand the question, and I won\'t respond to it. Get me a vodka rocks. And a piece of toast. Guy\'s a pro.}+p{As you may or may not know, Lindsay and I have hit a bit of a rough patch. It\'s called "taking advantage." It\'s what gets you ahead in life. Michael! I hear the jury\'s still out on science.}^^^.panel.panel-default>.panel-heading>.panel-title>a[data-toggle="collapse"][data-parent="#accordion"][href="#collapse2"]{Star Wars quotes}^^#collapse2.panel-collapse.collapse>.panel-body>p{Hey, Luke! May the Force be with you. In my experience, there is no such thing as luck. Ye-ha! But with the blast shield down, I can\'t even see! How am I supposed to fight?}+p{Red Five standing by. What!? I can\'t get involved! I\'ve got work to do! It\'s not that I like the Empire, I hate it, but there\'s nothing I can do about it right now. It\'s such a long way from here. She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander. There\'ll be no one to stop us this time! Escape is not his plan. I must face him, alone. I find your lack of faith disturbing.}'];

    // Asignar formulas al value de cada input
    $('.una-formula.f-bmodal .snippet').attr('value', formulas[0]);
    $('.una-formula.f-modal .snippet').attr('value', formulas[1]);
    $('.una-formula.tooltipleft .snippet').attr('value', formulas[2]);
    $('.una-formula.tooltipright .snippet').attr('value', formulas[3]);
    $('.una-formula.tooltiptop .snippet').attr('value', formulas[4]);
    $('.una-formula.tooltipbottom .snippet').attr('value', formulas[5]);
    $('.una-formula.f-carousel .snippet').attr('value', formulas[6]);
    $('.una-formula.f-accordion .snippet').attr('value', formulas[7]);

    $('.copiar').addClass('btn');

    // Contador de caracteres
    $('.caracteres').each(function() {
        $(this).html($(this).parent().find('.snippet').val().length + ' characters');
        $(this).prepend('<br>');
    });

});