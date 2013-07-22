var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());
    this.set('playListButton', new PlayListButton());

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

     params.library.on('enqueue', function(song){
      console.log("recieved!");
      this.get('songQueue').trigger('enqueue', song);
    }, this);
     
  }
});
