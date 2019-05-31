const sh = require('sha1');
const md = require('md5');

const base64 = (key) => Buffer.from(key).toString('sha1');
const sha1 = (key) => sh(key);
const md5 = (key) => md(key);

class HashTable {
  constructor() {
    this.table = {};
  }
  hash(key, item) {
    return sha1(key);
  }
  set(key, item) {
    this.table[this.hash(key)] = item;
  }
  get(key) {
    return this.table[this.hash(key)];
  }
  print() {
    console.log(this.table);
  }
}

const hashTable = new HashTable();
hashTable.set('mohsen', {
  lastName: 'shafiei tafreshi',
  age: 26
});
hashTable.print();
console.log(hashTable.get('mohsen'));
