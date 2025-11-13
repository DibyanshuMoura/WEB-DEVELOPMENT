class PromiseTwo {
  constructor(fn) {
    fn(() => {
      this.resolve();
    });
  }
  then(cb) {
    this.resolve = cb;
  }
}
