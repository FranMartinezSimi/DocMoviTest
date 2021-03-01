import { Mongo } from 'meteor/mongo';

export const LinksCollection = new Mongo.Collection('especialidadesMedicas');

console.log(LinksCollection.find().fetch())