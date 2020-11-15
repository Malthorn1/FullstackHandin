var bc = require('bcryptjs');
const debug = require("debug")("game-case")

interface IGameUser { name: string, userName: string, password: string, role: string }


const users: Array<IGameUser> = [];
export class UserFacade {
    static testusers() {
        bc.hash("test", 10)
        .then((testPassword: string) => {

        users.push({
            name: "Jack",
            userName: "tester1",
            password:  testPassword ,
            role: "user",
          });
          users.push({
            name: "William",
            userName: "tester2",
            password: testPassword,
            role: "admin",
          });
          users.push({
            name: "Peter",
            userName: "tester3",
            password: testPassword,
            role: "none",
          });

    })}

  static addUser(user: IGameUser): boolean {
        return bc.hash(user.password, 10)
        .then((hashPassword: string) => {
            user.password = hashPassword
            users.push(user)
            return true
        })
      .catch((err: any) => {
        debug(err);
        return false;
      });
  }
  static deleteUser(userName: string): boolean {
    const user = users.find((user) => user.userName === userName) 
    if (!user) return false 
    let idx  = users.indexOf(user) 
    users.splice(idx,1)
    return true; 
     }

  static getAllUsers(): Array<IGameUser> { 
      debug("helloo")
    return users  
 }
  static getUser(userName: string): IGameUser { 
      console.log(users)
      let u = users.find((user) => user.userName === userName)
      if (u) return u 
      throw new Error ("user not found ") 

   }



  static checkUser(userName: string, password: string): boolean {
    return bc.hash(password, 10)
    .then((hashPassword: string) => {
        users.find((user) => user.userName === userName && user.password === hashPassword) 
        return true
    })
  .catch((err: any) => {
    debug(err);
    return false;
  });
  }
}

