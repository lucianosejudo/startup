class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class EventEmitter {
  constructor() {
    this.events = {};
  }

  show() {
    console.log(this.events);
  }

  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  off(eventName, callback) {
    if (this.events[eventName]) {
      if (this.events[eventName].length != 1) {
        for (let i = 0; i < this.events[eventName].length; i++) {
          if (this.events[eventName][i] === callback) {
            this.events[eventName].splice(i, 1);
            console.log(eventName + ":" + callback.name + " has been deleted");
          }
        }
      } else {
        delete this.events[eventName];
        console.log(eventName + ":" + callback.name + " has been deleted");
      }
    } else {
      console.log("There is no event to delete");
    }
  }

  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(cb => {
        cb.apply(args);
      });
    }
  }
}
class Logger {
  constructor() {}

  log(info) {
    console.log(info);
  }
}

class Movie extends EventEmitter {
  constructor(name, year, duration) {
    super();
    this.name = name;
    this.year = year;
    this.duration = duration;
    this.cast = {};
    this.play = this.play.bind(this);
    this.on('play', () => {
      console.log(this.name + " has been started");
    });
    this.on('pause', () => {
      console.log(this.name + " has been paused");
    });
    this.on('resume', () => {
      console.log(this.name + " has been resumed");
    });
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
    if (cast.length === undefined) {
      this.cast[cast.name] = cast.age;
    } else {
      for (var i = 0; i < cast.length; i++) {
        this.cast[cast[i].name] = cast[i].age;
      }
    }
  }
}
