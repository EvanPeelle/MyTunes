var SongQueue = Songs.extend({
  initialize: function(){
    this.on('add', function(){
      if(this.models.length ===1){
        this.playFirst();
      }
    });
    this.on('ended', function(song){
      this.nextSong();
    });

    this.on('dequeue', function(song){
      this.remove(song);
    });
    this.on('enqueue', function(song){
      this.add(song);
    });
  },
  playFirst: function(){
    this.at(0).play();
  },
  nextSong: function(){
    this.remove(this.at(0));
    if(this.models.length>0){
      this.playFirst();
    }
  }


});

