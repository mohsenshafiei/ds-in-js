const sh = require('sha1');
const md = require('md5');

const base64 = (key) => Buffer.from(key).toString('base64');
const sha1 = (key) => sh(key);
const md5 = (key) => md(key);

class HashTable {
  constructor() {
    this.table = {};
  }
  hash(key, item) {
    return base64(key);
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
  age: 27
});

hashTable.set('jeff', {
  lastName: 'mosawy',
  age: 26
});
hashTable.print();
console.log(hashTable.get('mohsen'));
