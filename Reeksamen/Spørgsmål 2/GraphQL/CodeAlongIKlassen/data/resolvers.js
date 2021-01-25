import { Object, Promise } from "@ungap/global-this";
import { Friends } from "../dbConnectors";


//resolver map
export const resolvers = {
  Query: {
    getFriend: ({ id }) => {
      return new Friend(id, friendDatabase[id]);
    },
  },
  Mutation: {
    createFriend: (root, { input }) => {
      const newFriend = new Friends({
        firstName = input.firstName,
        lastName = input.lastName,
        gender = input.gender,
        email = input.email,
      });
        new friend.id = newFriend._id

        return new Promise ((resolve,Object) => {
          newFriend.save((err) => {
            if (err) reject (err)
            else resolve(newFriend)
          })
        })
  
    },
  },
};
