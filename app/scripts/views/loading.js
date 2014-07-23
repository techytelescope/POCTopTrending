/*global Toptrending, Backbone*/

Toptrending.Views = Toptrending.Views || {};

(function () {
    'use strict';

    Toptrending.Views.Loading = Backbone.View.extend({

    template: Toptrending.Templates['loading']
    , tagName: 'div'
    , className: 'view-loading'
    /**
     *
     */
    , initialize: function (options) {
      _.bindAll(this, 'render');

      try {
        if(_.isUndefined(options.controller)){
          throw Error('The controller is a dependency. Please inject the controller into the view.');
        }
      } catch (e) {
        console.log(e);
      }

      this.controller = options.controller;
    }
    /**
     *
     */
    , render: function () {
      this.$el.html(this.template(this.model));
      return this;
    }

});

})();