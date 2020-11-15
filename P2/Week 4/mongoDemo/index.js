
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://fullstackUser:ivYmk7MCU5Y35ZR@fullstack-cluster.xnvqi.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function mongoTest() {
    try {
        await client.connect(); 
        const dogs =  client.db("kennel")
        const dogsCollection = dogs.collection("dogs")
        await dogsCollection.insertMany([{name:"Togo"}, {name:"Fido"},{name:"Tut", race:"dog"}])
        await dogsCollection.insertOne({name:"Fido2"})
        const alldogs = await dogsCollection.find({}).toArray()
         console.log(alldogs)

    }
    catch (err) {
        console.log(err) 


    }

    finally {

        client.close(); 
        console.log("Closed)")
    }
}

mongoTest() 