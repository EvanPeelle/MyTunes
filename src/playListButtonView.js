var PlayListButtonView = Backbone.View.extend({

  el: '<button>',

  initialize: function() {
    this.$el.attr('name',"New Playlist");
    this.$el.text("Make New Playlist");
  },

  events: {
    'click': function() {
      this.trigger("CreateNewPlaylist",this);
    }
  },

  render: function(){
    return this.$el;
  }

});
