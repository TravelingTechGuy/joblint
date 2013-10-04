'use strict';

define(['knockout'], function(ko) {
	return function(data) {
		var self = this;
		var toPercent = function(val) {
			var percent = Math.ceil((parseFloat(val) / 10) * 100) + '%';
			return percent;
		};

		this.errors = ko.observableArray();
		this.warnings = ko.observableArray();
		this.notices = ko.observableArray();
		this.culture = ko.observable();
		this.culturePercent = ko.computed(function() {
			return toPercent(self.culture());
		});
		this.realism = ko.observable();
		this.realismPercent = ko.computed(function() {
			return toPercent(self.realism());
		});
		this.recruiter = ko.observable();
		this.recruiterPercent = ko.computed(function() {
			return toPercent(self.recruiter());
		});
		this.tech = ko.observable();
		this.techPercent = ko.computed(function() {
			return toPercent(self.tech());
		});
		this.populate = function(data) {
			self.errors(data.errors);
			self.warnings(data.warnings);
			self.notices(data.notices);
			self.culture(data.failPoints.culture);
			self.realism(data.failPoints.realism);
			self.recruiter(data.failPoints.recruiter);
			self.tech(data.failPoints.tech);
		};
	};
});