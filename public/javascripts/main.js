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
					if(data.clean) {
						$('#messageText').addClass('text-info').text('Congratulations! No issues found with job spec!');
						$('#message').removeClass('hide');
					}
					else {
						vm.populate(data);
						$('#results').removeClass('hide');
					}
				})
				.fail(function(jqXHR) {
					console.error(jqXHR.responseText);
					$('#messageText').addClass('text-error').text('An error has occured while analyzing spec');
					$('#message').removeClass('hide');
				})
				.always(function() {
					
				});
		};

		var clearForm = function(e) {
			e.preventDefault();
			$('textarea').val('');
			$('#results').addClass('hide');
			$('#message').addClass('hide');
			$('#messageText').removeClass().text();
		};

		$(function() {
			$('#submitForm').on('click', submitForm);
			$('#clearForm').on('click', clearForm);
		});
	}
);