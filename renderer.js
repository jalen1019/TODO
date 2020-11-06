'use strict'

window.$ = window.jQuery = require('./node_modules/jquery/dist/jquery.min.js');
window.Bootstrap = require("./node_modules/bootstrap/dist/js/bootstrap.min.js");

$(function() {
    $("#note-header, #note-body").on("input", function() {
        var submit_button = $("#submit-button");

        submit_button.removeAttr("disabled");
        submit_button.removeClass("btn-secondary");
        submit_button.addClass("btn-primary");

        if ($("#note-header").val() == "" && $("#note-body").val() == "") {
            submit_button.attr("disabled", "");
            submit_button.removeClass("btn-primary");
            submit_button.addClass("btn-secondary");
        }
    });
});