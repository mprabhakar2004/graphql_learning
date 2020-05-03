
import {resolvers} from './resolver'
import {makeExecutableSchema} from 'graphql-tools'
const typeDefs = `
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        language: String
        emails: String
        age: Int
        contacts: [Contact]
    }
    type Contact{
        firstName: String
        lastName: String
    }
    type Email{
        email: String
    }
    enum  Gender{
        MALE, FEMALE, OTHER
    }

    type Query {
        getFriend(id: ID!): Friend
    }
    type Mutation{
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
        deleteFriend(id:ID!): String
    }
    input FriendInput{
        id: ID
        firstName: String!
        lastName: String
        gender: Gender
        language: String
        emails: String
        age: Int
        contacts: [ContactInput]
    }
    input ContactInput{
        firstName:String
        lastName: String
    }
`;
const schema = makeExecutableSchema({typeDefs, resolvers});
export  {schema};