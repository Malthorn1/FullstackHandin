import { makeExecutableSchema} from 'graphql-tools'
import { resolvers} from './resolvers'; 
//import { buildSchema} from 'graphql'; 


const typeDefs = `
    type Friend {
       id: ID 
       firstName: String
       lastName: String
       gender: Gender
       age: Int
       email: String
       contacts: [Contact]

    }

    type Alien {
        type: ID 
        firstName: String
        lastName: String
        planet: String
    }

    type Contact {
        firstName: String
        lastName: String
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }
  


    type Query {
        getFriend(id: ID): Friend
    }

    input FriendInput {
        id: ID 
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        email: String
        contacts: [ContactInput]
    }

    input ContactInput {
        firstName: String
        lastName: String
    }

    type Mutation {
        createFriend (input: FriendInput): Friend
    }


`;

const schema  = makeExecutableSchema  ( {typeDefs, resolvers}); 

export { schema}; 