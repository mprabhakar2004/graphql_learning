import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema'
import resolvers from './resolver'

const app = express();
const root = resolvers;
app.get('/', (re1,res)=>{
    res.send('Welcome to graphQL');
});


app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));


app.listen(8080, ()=> console.log('Running on localhost:8080/graphql'));