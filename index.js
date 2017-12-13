import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
import path from 'path';
import models from './models'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import cors from 'cors';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));


mongoose.Promise = global.Promise;
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
const PORT = 3000;

async function startServer() {
    const app = express();
    app.use(cors({
        origin: ["http://localhost:3001"]
    }))
    app.use('/graphql', bodyParser.json(), await graphqlExpress({
        schema,
        context: {
            models,
            user: {
                _id: 1,
                username: 'bob'
            }
        }
    }));
    app.get('/graphiql', await graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

    mongoose.connect('mongodb://localhost:27017/graphql', { useMongoClient: true }).then(() => {
        console.log('Conectado a mongo')
        app.listen(PORT, () => {
            console.log('Corriendo graphql server')
        });
    })
}

startServer();