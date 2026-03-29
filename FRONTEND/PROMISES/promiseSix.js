// tried to make a new promise class not perfect yet

class myPromise {
  constructor(fn) {
    this.state = "pending";
    this.value = undefined;
    this.error = undefined;
    const resolve = (value) => {
      if (this.state !== "pending") return;
      this.state = "resolved";
      this.value = value;
    };

    const reject = (error) => {
      if (this.state != "pending") return;
      this.error = error;
      this.state = "rejected";
    };
    fn(resolve, reject);
  }

  myThen(fn) {
    if (this.state == "resolved") {
      fn(this.state);
    }
  }

  myCatch(fn) {
    if (this.state == "rejected") {
      fn(this.state);
    }
  }
}

let myP = new myPromise();
