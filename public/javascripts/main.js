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
        var vm;
        ko.applyBindings(vm);

        var submitForm = function(e) {
            e.preventDefault();
            $('#results').hide();
            $.post('/lint', $('form').serialize())
                .done(function(data) {
                    console.log(data);
                    vm = new resultsVM(data);
                })
                .fail(function(jqXHR) {
                    console.error(jqXHR.responseText);
                })
                .always(function() {
                    $('#results').show();
                });
        };

        $(function() {
            $('#submit').on('click', submitForm);
        });


    }
);