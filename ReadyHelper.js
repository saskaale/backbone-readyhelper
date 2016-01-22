define([
  'jquery',
  'underscore',
  'backbone'
       ], function($, _, Backbone){

  var className = 'tools.ReadyHelper';

  var ReadyHelper = function(){
      	this.toload = [];
	this.activated = false;
	
	_.bindAll(this, 'activate', 'onReady');
  };
  ReadyHelper.prototype = {
    /*
     * An function called when you want to activate and fire all waiting events
     */
    activate: function(){
      
      //set this object to activated
      this.activated = true;

      //call all waiting events
      for(var i = 0; i < this.toload.length; i++)
	this.toload[i]();

      this.toload = [];
    },
    /*
     * An function where you register callback which will be fired after this function activate
     * @param cbk callback
     */
    onReady: function(cbk){
      if(this.activated){	//is this object already activated >> no readon to wait >> immediately call callback
	cbk();
      }else{	//this object is not ready >> adding event into waiting list
	this.toload.push(cbk);
      }
    }
  };
	 
  return ReadyHelper;
});