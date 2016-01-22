define([
  'jquery',
  'underscore',
  'backbone',
  './ReadyHelper'
       ], function($, _, Backbone,ReadyHelper){

  var WaitingModel = Backbone.Model.extend({
    initialize: function(options){
	_.bindAll(this, 'parseConfig');
    
	//initialize ready helper here
	this.readyHelper = new ReadyHelper();
    
    
    
	//load configuration stuff
	$.ajax({
	  url: "SOME_CONFIGURATION_FILE"
	}).done(this.parseConfig);
	FileLoader.load({url: 'data/'+accesslvl+"/"+options.key+".svg", ok: this.onRawSVGLoad, err: this.confLoadError, dataType: 'text', sendAuth: true});
	
    },
    /*
    * An callback to parse this events
    */
    parseConfig: function(){
	//do some configuration stuff here
	
	//activate all waiting functions for this object
	this.readyHelper.activate();
    },
    /*
     * An function where you register callback which will be fired after this object down
     */
    onReady: function(cbk){
	return this.readyHelper.onReady(cbk);
    }
  });

  return WaitingModel;
});