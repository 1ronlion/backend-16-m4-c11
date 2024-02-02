type ItemId = `${string}--<${number}>--${string}`;

class User {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

class Product {
  name: string;
  cost: number;

  constructor(name: string, cost: number) {
    this.name = name;
    this.cost = cost;
  }
}

function createItemId(item: User | Product): ItemId {
  if (item instanceof User) {
    return `${item.name}--<${item.id}>--user`;
  } else if (item instanceof Product) {
    return `${item.name}--<${item.cost}>--product`;
  } else {
    throw new Error('Invalid item type');
  }
}

const user = new User('Edward Snowden', 459);
const product = new Product('Signal', 750);

console.log(createItemId(user));    
console.log(createItemId(product));