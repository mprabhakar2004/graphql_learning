class Friend{
    constructor(id, {lastName,firstName,gender,language, emails, age, contacts}){
        this.id = id;
        this.firstName = firstName;
        this.lastName= lastName;
        this.gender =gender;
        this.email=emails;
        this.language = language;
        this.age= age;
        this.contacts= contacts
    }
}

const friendDatabase = {}
const resolvers = { 
    getFriend:({id}) => {
        return new Friend(id,friendDatabase[id]);
    },
    createFriend: ({input}) =>{
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id,input);
    }

};

export default resolvers;