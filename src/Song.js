var Song = Backbone.Model.extend({
  defaults: {
    count : 0
  },
  play: function(){
    this.trigger('play', this);
    this.set("count", this.get("count")+1);
  },
  ended: function(){
    this.trigger('ended',this);
  },
  dequeue: function(){
    this.trigger('dequeue',this);
  },
  enqueue: function(){
    this.trigger("enqueue",this);
  }

});
