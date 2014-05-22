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
    var formulas = ['button.btn.btn-primary.btn-lg[data-toggle="modal"][data-target="#elmodal"]{Abrir modal}', '.modal.fade#elmodal[tabindex="-1"][role="dialog"][aria-hidden="true"]>.modal-dialog>.modal-content>.modal-header>(button[type="button"].close[data-dismiss="modal"][aria-hidden="true"]{&times}+h4.modal-title)+^.modal-body>p^.modal-footer>button[type="button"].btn.btn-default[data-dismiss="modal"]{Close}+button[type="button"].btn.btn-primary{Save Changes}', 'button[type="button"].btn.btn-default[data-toggle="tooltip"][data-placement="left"][title="Tooltip on left"]{Tooltip on left}', 'button[type="button"].btn.btn-default[data-toggle="tooltip"][data-placement="right"][title="Tooltip on right"]{Tooltip on right}', 'button[type="button"].btn.btn-default[data-toggle="tooltip"][data-placement="top"][title="Tooltip on top"]{Tooltip on top}', 'button[type="button"].btn.btn-default[data-toggle="tooltip"][data-placement="bottom"][title="Tooltip on bottom"]{Tooltip on bottom}', '#carousel-example.carousel.slide[data-ride="carousel"]>ol.carousel-indicators>li[data-target="#carousel-example"].active[data-slide-to="0"]+li[data-target="#carousel-example"][data-slide-to="1"]^.carousel-inner>.item.active>img[src="http://placepuppy.it/800/500"]+.carousel-caption^.item>img[src="http://placepuppy.it/800/500&n=2"]+.carousel-caption^^a.left.carousel-control[href="#carousel-example"][data-slide="prev"]>span.glyphicon.glyphicon-chevron-left^a.right.carousel-control[href="#carousel-example"][data-slide="next"]>span.glyphicon.glyphicon-chevron-right'];

    // Asignar formulas al value de cada input
    $('.una-formula.f-bmodal .snippet').attr('value', formulas[0]);
    $('.una-formula.f-modal .snippet').attr('value', formulas[1]);
    $('.una-formula.tooltipleft .snippet').attr('value', formulas[2]);
    $('.una-formula.tooltipright .snippet').attr('value', formulas[3]);
    $('.una-formula.tooltiptop .snippet').attr('value', formulas[4]);
    $('.una-formula.tooltipbottom .snippet').attr('value', formulas[5]);
    $('.una-formula.f-carousel .snippet').attr('value', formulas[6]);

    $('.copiar').addClass('btn');

    // Contador de caracteres
    $('.caracteres').each(function() {
        $(this).html($(this).parent().find('.snippet').val().length + ' characters');
        $(this).prepend('<br>');
    });

});