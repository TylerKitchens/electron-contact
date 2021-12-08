const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose')
const {dummyData} = require('./dummyData')
const dbModels = require('./models')

exports.connect_db = async () => {
    if(process.env.DBURL){
        
    }
    const mongo = await MongoMemoryServer.create();
    const uri = mongo.getUri();
    const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
  }
    await mongoose.connect(uri, mongooseOpts)
    //lets populate that
    if(process.env.DEBUG){
        dummyData.forEach(contact => {
           new dbModels.Contact(contact).save()
        });
    }
}