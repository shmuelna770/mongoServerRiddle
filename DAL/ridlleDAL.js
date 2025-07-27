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
    throw new Error("Invalid ID");
  }

  const collection = await getCollection();

  const result = await collection.updateOne(
    { _id:new ObjectId(id) },
    { $set: riddle }
  );

  if (result.matchedCount === 0) {
    throw new Error("No riddle found with the given ID");
  }

  const updatedRiddle = await collection.findOne({ _id:new ObjectId(id) });
  return updatedRiddle;
}



export async function deleteRiddleD(id) {
  const db = await connect();
    return await db.collection("riddles").deleteOne({_id:new ObjectId(id)})
}
