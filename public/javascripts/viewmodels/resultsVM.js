'use strict';

define(['knockout'], function(ko) {
	return function(data) {
		this.errors = ko.observableArray(data.errors);
		this.warnings = ko.observableArray(data.warnings);
		this.notices = ko.observableArray(data.notices);
		this.failPoints = ko.observable(data.failPoints);
	};
});