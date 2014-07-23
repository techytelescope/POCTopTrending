/*global Toptrending, window, jQuery*/
(function () {
  'use strict';
  window.Toptrending = {
    Models: {}
    , Collections: {}
    , Views: {}
    , Routers: {}
    , Templates: {}
    , init: function (options) {

      var controller = {
        Models: {}
        , Collections: {}
        , Views: {}
        , Routers: {}
      };

      controller.Models.Cms = new Toptrending.Models.Cms({wid: 'data/data.json'}, {controller: controller});
      controller.Models.Cms.once('change:ts', _.bind(function () {

        controller.Routers.Router = new Toptrending.Routers.Router({controller: controller });
        Backbone.history.start();

      }, this));
      controller.Models.Cms.requestData();

      return this;
    }
  };

  jQuery(document).ready(function ($) {
    Toptrending.init({});
  });

})();
