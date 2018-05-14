class Movie {
  constructor(name, year, duration) {
    this.name = name;
    this.year = year;
    this.duration = duration;
  }

  play() {
    console.log(this.name + " has been started");
  }

  pause() {
    console.log(this.name + " has been paused");
  }

  resume() {
    console.log(this.name + " has been resumed");
  }
}

let movie1 = new Movie("Interstellar", "2014", "2h 49m");
let movie2 = new Movie("Ready player one", "2018", "2h 19m");
let movie3 = new Movie("Doctor Strange", "2016", "1h 55m");
movie1.play();
movie1.pause();
movie2.play();
movie2.pause();
movie1.resume();

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

const eventEm = new  EventEmitter();
eventEm.on('click', click);
eventEm.on('click', hello);
eventEm.on('change', hello);
eventEm.emit('click');
eventEm.show();
eventEm.off('click', click);
eventEm.off('click', hello);
eventEm.show();
