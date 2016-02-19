'use strict';

/* =============== Float Labels for Angular ======================  
   ADD 'float-labels' class to the form that needs float labels
*/
var app = angular.module('app', []);
app.directive('floatLabels', function ($timeout) {
    return {
        restrict: 'C',
        link: function link(scope, element, attrs) {

            $timeout(function () {
                var inputs = element[0].getElementsByTagName('input');

                for (var i = 0; i < inputs.length; i++) {
                    inputs[i].value ? addFloatLabel(inputs[i]) : "";

                    $(inputs[i]).on('focusin focusout change', setEvents);
                }

                function setEvents(e) {
                    if (e.type == 'focusin' && this.getAttribute('readonly') != "readonly" && this.getAttribute('type') != "radio" || e.type == 'change' && this.getAttribute('type') != "radio") {
                        addFloatLabel(this);
                    } else if (e.type == 'focusout' && !this.value) {
                        removeFloatLabel(this);
                    }
                }
                function addFloatLabel(elem) {
                    parent = elem.parentNode;
                    parent.classList.add('f-label-active');
                }
                function removeFloatLabel(elem) {
                    parent = elem.parentNode;
                    parent.classList.remove('f-label-active');
                }
            });
        }
    };
});
