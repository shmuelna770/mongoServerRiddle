import { connect } from '../DB/mongoClient.js';
import { ObjectId } from 'mongodb';

let riddlesCollection;

async function getCollection() {
  if (!riddlesCollection) {
    const db = await connect();
    riddlesCollection = db.collection('riddles');
  }
  return riddlesCollection;
}

export async function getAllRiddles() {
  const collection = await getCollection();
  return collection.find().toArray();
}

export async function addRiddle(riddle) {
  const collection = await getCollection();
  const result = await collection.insertOne(riddle);
  return result.insertedId;
}

export async function updateRiddle(id, riddle) {
  const collection = await getCollection();
  return collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: riddle }
  );
}

