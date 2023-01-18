class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size)
  }
  hash(key) {
    let total = 0
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)
    }

    return total % this.size
  }

  set(key, value) {
    const index = this.hash(key)
    const bucket = this.table[index]
    if (!bucket) {
      this.table[index] = [[key, value]]
    } else {
      const sameKeyItem = bucket.find(item => item[0] === key)
      if (sameKeyItem) {
        sameKeyItem[1] = value
      } else {
        bucket.push([key, value])
      }
    }
  }
  get(key) {
    const index = this.hash(key)
    const bucket = this.table[index]
    if (bucket) {
      const sameKeyItem = bucket.find(item => item[0] === key)
      if (sameKeyItem) {
        return sameKeyItem[1]
      }
    }
    return undefined
  }
  remove(key) {
    const index = this.hash(key)
    const bucket = this.table[index]
    if (bucket) {
      const sameKeyItem = bucket.find(item => item[0] === key)
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1)
      }
    }
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log({ [i]: this.table[i] })
      }
    }
  }
}

let table = new HashTable(10)
table.set('name', 'danny')
table.set('anme', 'danny2')
table.set('person', 'alex')
console.log(table.get('anme'))
table.remove('name')
// table.set('age', 20)
table.display()


