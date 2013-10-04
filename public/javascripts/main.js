'use strict';

requirejs.config({
    shim: {
        'bootstrap': {
            deps: ['jquery']
        }
    },
    paths: {
        'jquery': [
            '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
            'vendors/jquery-1.10.2.min'
        ],
        'knockout': 'vendors/knockout-2.3.0',
        'bootstrap': 'vendors/bootstrap.min'
    }
});
require(
    [
        'jquery',
        'knockout',
        'viewmodels/resultsVM',
        'bootstrap'
    ],
    function($, ko, resultsVM) {
        var vm = new resultsVM;
        ko.applyBindings(vm);

        var submitForm = function(e) {
            e.preventDefault();
            $.post('/lint', $('form').serialize())
                .done(function(data) {
                    console.log(data);
                    vm.populate(data);
                })
                .fail(function(jqXHR) {
                    console.error(jqXHR.responseText);
                })
                .always(function() {
                    $('#results').removeClass('hide');
                });
        };

        $(function() {
            $('#submit').on('click', submitForm);
            $('#clear').on('click', function(e) {
                e.preventDefault();
                $('textarea').val('');
            });
        });
    }
);