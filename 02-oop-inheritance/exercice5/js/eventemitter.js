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
