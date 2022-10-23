const { log, error } = console

const app = require('express')()
const server = require('http').Server(app)
const { MongoClient } = require('mongodb')
const { equal } = require('assert')
const CircularJSON = require('circular-json')

const client = new MongoClient(
  'mongodb://localhost:27017',
  { useUnifiedTopology: true },
)

const sleep = s => new Promise(resolve => setTimeout(() => resolve(), s))

// Mongo functions wrapper
const mongoCreateDocuments = (db, collectionName, documents) => new Promise((resolve, reject) => {
  // Get the documents collection
  const nbDocs = documents.length

  // Insert some documents
  db.collection(collectionName).insertMany(
    documents,
    (err, result) => {
      // ====== CHECK FOR ERRORS
      try {
        const {
          result: {
            n,
          },
          ops: {
            length,
          },
          // connection,
        } = result
        equal(err, null)
        equal(nbDocs, n)
        equal(nbDocs, length)

        // ====== CORE
        log(`Inserted ${nbDocs} documents into the collection`)
        resolve(result)
      } catch (e) {
        // ====== HANDLE ERRORS
        log('ERROR in mongoCreateDocuments')
        error(e)
        reject(e)
      }
    },
  )
})

const mongoGetCollection = async (db, collectionName) => {
  console.log(CircularJSON.stringify(Object.keys(db.collection(collectionName))))
}

// const findDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('documents')
//   // Find some documents
//   collection.find({}).toArray(function(err, docs) {
//     equal(err, null)
//     log('Found the following records')
//     log(docs)
//     callback(docs)
//   })
// }
// ======================== EVENTS ========================
server.listen(80)

// ======================== REALTIMEAPI ========================
const createDocuments = (collectionName, documents) => {
  client.connect(async (err) => {
    try {
      equal(err, null)

      const result = await mongoCreateDocuments(client.db('mongo'), collectionName, documents)
      // client.close()
      return result
    } catch (e) {
      console.error(e)
    }
    return null
  })
}

const main = async () => {
  // ====== CHECK FOR ERRORS
  try {
    const {
      topology: {
        s: {
          state,
        },
      },
    } = await client.connect()
    // console.log(CircularJSON.stringify(await client.connect()))
    equal(state, "connected")

    // ====== BEGIN CORE
    // for (let i = 0; i < 10; i++) {
    //   log('Trying to insert ', i)
    //   // createDocuments('documents', [{ index: i }])
    //   createDocuments('documents', [{ toto: 1, titi: 2 }])
    //   await sleep(60)
    // }

    createDocuments('documents', [{ toto: 1, titi: 2 }, { toto: 3, titi: 4 }])
    // mongoGetCollection(client.db('mongo'), 'documents')
    const result = await client.db('mongo').collection('documents').find({ toto: 1 }).toArray()
    console.log('🚨')
    console.log(CircularJSON.stringify(result))
    console.log('🚨')

    await sleep(1000)
    // client.close()
  } catch (e) {
    error(e)
  }
}
main()
