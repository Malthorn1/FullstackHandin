import UserFacade from '../src/facades/user';
import { expect } from "chai";
import { ApiError } from '../src/errors/apiError';
import { bryptAsync, bryptCheckAsync } from '../src/utils/bcrypt-async-helper'
import IGameUser from '../src/interfaces/GameUser'
import { assert } from 'console';

describe("Verify the UserFacade", () => {

   beforeEach( async () => {
     const hash: string = await bryptAsync("secret");
    UserFacade.users = [
      { name: "Peter Pan", userName: "pp@b.dk", password: hash, role: "user" },
      { name: "Donald Duck", userName: "dd@b.dk", password: hash, role: "user" },
      { name: "admin", userName: "admin@a.dk", password: hash, role: "admin" }
    ]
  })

})


it("Should Add the user Kurt", async () => {
  const newUser = { name: "Kurt Olsen", userName: "ko@b.dk", password: "secret", role: "user" }
  try {
    const status = await UserFacade.addUser(newUser);
    const kurt = await UserFacade.getUser("ko@b.dk");
    const passwordOK = await bryptCheckAsync("secret", kurt.password);
    expect(status).to.be.equal("User was added")
    expect(UserFacade.users.length).to.equal(4)
  } catch (err) {
    expect.fail("Seems like password was not hashed correctly")
  } finally { }
})
it("Should remove the user Peter", async () => {
  try {
    const status = await UserFacade.deleteUser("pp@b.dk")
    expect(status).to.be.equal("User was deleted")
  } catch (err) {
    expect.fail("The user wasn't deleted")
  } finally { }
})
it("Should get three users", async () => {
  try {
    const status = await UserFacade.getAllUsers()
    expect(status.length).to.be.equal(3)
  } catch (err) {
    expect.fail("no users")
  }

})

it("Should find Donald Duck", async () => {
  try {
    const status = await UserFacade.getUser("dd@b.dk")
    expect(status.name).to.be.equal("Donald Duck")
  }
  catch (err) {
    expect.fail("no users with that name")
  }
})
it("Should not find xxx.@.b.dk", async () => {
  try {
  await UserFacade.getUser("xxx.@.b.dk")
  }
  catch (err){
    expect(err).to.be.instanceOf(Error)
    expect(err.message).to.equal("User Not Found")

  }
})

