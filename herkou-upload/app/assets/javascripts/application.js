// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery 
//= require jquery_ujs
//= require jquery-ui
//= require bootstrap
//= require angular/angular
//= require angular-aria
//= require angular-animate
//= require angular-material
//= require angular-rails-templates
//= require angular-resource
//= require factories/build
//= require angular-bootstrap
//= require angular-route
//= require angular-messages
//= require ngmap
//= require angular-sanitize
//= require angular-file-saver
//= require angular-nvd3
//= require tether
//= require bootstrap
// = require_tree .
//= require factories/projectResource
//= require factories/loadResource
//= require factories/resourceResource
//= require factories/componentResource
//= require angular-native-dragdrop
//= require factories/componentEconomicResource
//= require factories/componentInstallationResource
//= require factories/simulationResource
//= require factories/simulationParserResource
//= require controllers/projectController
//= require controllers/home
//= require controllers/project/tabs/components
//= require components/sidebar/hiddenSidebar
//= require components/project
//= require components/forms/systemTab
//= require components/projectComponents
//= require components/projectTab/projectTab




$(document).ready(function(){
    setTimeout(function(){
        $(".alert" ).fadeOut(1000);
    }, 1000);
})