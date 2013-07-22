

var AppView = Backbone.View.extend({
  //this.model = params.model
  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.playlistButtonView = new PlayListButtonView({model: this.model.get('playListButton')});
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);
    this.playlistButtonView.on("CreateNewPlaylist", function(){
      this.model.set("RandomString", new SongQueue());
    });
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.playlistButtonView.$el,
      new LibraryView({collection: this.model.get('library')}).render(),
      new SongQueueView({collection: this.model.get('songQueue')}).render()
    ]);
  }

});
