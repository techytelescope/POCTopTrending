/*global Toptrending, Backbone*/
Toptrending.Views = Toptrending.Views || {};
(function () {
  'use strict';
    Toptrending.Views.Home = Backbone.View.extend({
    template: Toptrending.Templates['home']
    , className: 'view-home'
    , events: {
        'click .route-error': 'routeError'
      , 'click .route-loading': 'routeLoading'
      , 'click .item': 'hitme'
    }

    , hitme: function(e) {
      this.swap(4);
    }

    , swap: function (id) {
      var self_id = id;
      var next_id = self_id + 1;
      var $self = $(".a" + self_id);
      var $next = $(".a" + next_id);
      var $selfhtml = $self.html();
      var $nexthtml = $next.html();
      var duration = 200;
      $self.addClass('movedown shadow').delay(duration/2).queue(function() {
        $(this).removeClass('shadow').dequeue();
      }).delay(duration/2).queue(function(){
        $(this).html($nexthtml);
        $(this).removeClass('movedown').dequeue();
      });
      $next.addClass('moveup shadow').delay(duration/2).queue(function() {
        $(this).removeClass('shadow').dequeue();
      }).delay(duration/2).queue(function() {
        $(this).html($selfhtml);
        $(this).removeClass('moveup').dequeue();
      });

    }
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
    /**
     *
     */
    , routeError: function (e) {
      e.preventDefault();
      this.controller.Routers.Router.navigate('error/generic', {trigger: true});
    }
    /**
     *
     */
    , routeLoading: function (e) {
      e.preventDefault();
      this.controller.Routers.Router.navigate('loading/generic', {trigger: true});
    }
  });
})();
