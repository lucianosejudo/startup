class Movie extends EventEmitter {
  constructor(name, year, duration) {
    super();
    this.name = name;
    this.year = year;
    this.duration = duration;
    this.cast = {};
    this.play = this.play.bind(this);
    this.on('play', () => {console.log(this.name + " has been started")});
    this.on('pause', () => {console.log(this.name + " has been paused")});
    this.on('resume', () => {console.log(this.name + " has been resumed")});
  }

  play() {
    this.emit('play');
  }

  pause() {
    this.emit('pause');
  }

  resume() {
    this.emit('resume');
  }

  addCast(cast) {
    if(cast.length === undefined){
      this.cast[cast.name] = cast.age;
    } else {
        for (var i = 0; i < cast.length; i++) {
          this.cast[cast[i].name] = cast[i].age;
        }
    }
  }
}
