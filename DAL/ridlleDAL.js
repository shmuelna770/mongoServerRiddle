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
  if (!ObjectId.isValid(id)) {
    throw new Error("invalid ID");
  }
  // console.log('id:', id);
  // console.log('riddle:', riddle);

  const collection = await getCollection();

  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: riddle }
  );
  // console.log(result);

  return riddle;
}


export async function deleteRiddleD(id) {
  const db = await connect();
    return await db.collection("riddles").deleteOne({_id: new ObjectId(id)})
}
