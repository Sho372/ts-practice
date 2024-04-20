const user = {
  name: "Hayes",
  id: 0,
};

interface User {
  name: string;
  id: number;
}

const user1: User = {
  name: "Hayes",
  id: 0,
};

interface User {
  name: string;
  id: number;
}

// const user2: User = {
//     username: "Hayes",
//     id: 0,
// }

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user3: User = new UserAccount("Murphy", 1);

const dog = "aaaa";
dog = "bbbb";
