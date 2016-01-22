define([
  'jquery',
  'underscore',
  'backbone'
       ], function($, _, Backbone){

  var NonWaitingModel = Backbone.Model.extend({
    initialize: function(options){
	_.bindAll(this, 'parseConfig');

    },
    /*
     * This object does not use any external callback like loading, so it is ready immediately after construction
     */
    onReady: function(cbk){
	cbk();
    }
  });

  return NonWaitingModel;
});