/**
 * Globals for jslint
 */
/*global  window, hitta, jq, Class */
hitta.mapPage.Blocket = hitta.mapPage.Page.extend({
    activate: function() {

        var VIEWS = hitta.common.Config.views;
        var MANAGERS = hitta.common.Config.managers;
        this.mapManager.activateViews([VIEWS.LOGO]);
        this.mapManager.activateManagers([MANAGERS.STATE, MANAGERS.POI]);
        this._super();

        this.disableMapTypeControl();
    }
});

jq(document).ready(function() {
    var page = new hitta.mapPage.Blocket({hasSmallZoomControl: true});
    page.activate();
});