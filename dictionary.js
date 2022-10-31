class Dictionary {
  constructor() {
    this.items = {};
  }
  has(key) {
    return key in this.items;
  }
  set(key,value) {
    this.items[key] = value;
  }
  delete(key) {
    if( this.has(key) ){
      delete this.items[key]
      return true;
    }
    return false;
  }
}

var d = new Dictionary();
d.set(1, "value1")
d.set(2, "value2")
d.set(3, "value3")
console.log(d.has(2));
d.delete(2);
console.log(d.has(2));
