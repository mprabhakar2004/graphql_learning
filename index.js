import express from 'express';
import graphqlHTTP from 'express-graphql';
import {schema} from './schema';

const app = express();

app.get('/', (re1,res)=>{
    res.send('Welcome to graphQL');
});


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));


app.listen(8080, ()=> console.log('Running on localhost:8080/graphql'));