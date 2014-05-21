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
    var formulas = ['button.btn.btn-primary.btn-lg[data-toggle="modal"][data-target="#elmodal"]{Abrir modal}', '.modal.fade#elmodal[tabindex="-1"][role="dialog"][aria-hidden="true"]>.modal-dialog>.modal-content>.modal-header>(button[type="button"].close[data-dismiss="modal"][aria-hidden="true"]{&times}+h4.modal-title)+^.modal-body>p^.modal-footer>button[type="button"].btn.btn-default[data-dismiss="modal"]{Close}+button[type="button"].btn.btn-primary{Save Changes}', 'button[type="button"].btn.btn-default[data-toggle="tooltip"][data-placement="left"][title="Tooltip on left"]{Tooltip on left}'];

    // Asignar formulas a los inputs
    $('.una-formula.f-bmodal .snippet').attr('value', formulas[0]);
    $('.una-formula.f-modal .snippet').attr('value', formulas[1]);
    $('.una-formula.tooltipleft .snippet').attr('value', formulas[2]);

    // Contador de caracteres
    $('.caracteres').each(function() {
        $(this).html('<span>' + $(this).parent().find('.snippet').val().length + ' caracteres' + '</span>');
    });

});