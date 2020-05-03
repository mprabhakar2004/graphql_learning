import {buildSchema} from 'graphql'

const schema = buildSchema(`
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
        getFriend(id: ID): Friend
    }
    type Mutation{
        createFriend(input: FriendInput): Friend
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
`)

export default schema;