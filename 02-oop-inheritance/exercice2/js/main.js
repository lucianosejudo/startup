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
        for(let i = 0; i < this.events[eventName].length; i++) {
          if(this.events[eventName][i] === callback) {
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

function click() {
  console.log("Click!");
}

function hello() {
  console.log("Hello");
}

/*
const eventEm = new  EventEmitter();
eventEm.on('click', click);
eventEm.on('click', hello);
eventEm.on('change', hello);
eventEm.emit('click');
eventEm.show();
eventEm.off('click', click);
eventEm.off('click', hello);
eventEm.show();
*/

class Movie extends EventEmitter {
  constructor(name, year, duration) {
    super();
    this.name = name;
    this.year = year;
    this.duration = duration;
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
}

const movie1 = new Movie("Interstellar", "2014", "2h 49m");
const movie2 = new Movie("Ready player one", "2018", "2h 19m");
const movie3 = new Movie("Doctor Strange", "2016", "1h 55m");

movie1.play();
movie2.pause();
movie1.resume();
