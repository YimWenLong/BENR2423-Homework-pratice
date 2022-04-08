// require("sslkeylog").hookAll();
const { faker } = require('@faker-js/faker');
const bcrypt = require("bcryptjs")

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:123abcdghhgg3455@sandbox.twx68.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async err => {
    if (err) {
        console.log(err.message)
        return
    }
    console.log('Connected to MongoDB')

    for (let i = 0; i < 5; i++) {
        let a = []
        const username = faker.name.findName();
        const user_password = faker.internet.password();
        const user_address =   faker.address.city();
        const saltRounds = 5
    
        bcrypt.genSalt(saltRounds, function (saltError, salt){
            if(saltError){
                throw saltError
            }else{
                bcrypt.hash(user_password, salt, function(hashError, hash){
                    if (hashError){
                        throw hashError
                    }else {
                        console.log(hash)
                        const hash_password = hash
                        
                        console.log(new_password)
                        a.push({ username, user_address, hash_password});
                        await client.db("Profile").collection("user").insertMany(a)
                        console.log(result);
                        
                    
                        
                    }
                })
            }
    
        })
    }



  //   console.time('Inserted')
  //   let result = await client.db('Week03').collection('Companies').insertMany([{
  //       name: "Apple",
  //       founded: 1976,
  //       founder: 'Steve Jobs',
  //       ceo: 'Tim Cook'
  //   },
  //   {
  //     name:'Microsoft',
  //     founded: 1975,
  //     founder: 'Bill Gates',
  //     ceo: 'Satya Nadella'
  //   }
  // ])


  //     console.timeEnd('Inserted')
  //     console.log(result);
    //   let result= await client.db('Week03').collection('Companies').updateOne({ceo: 'Steve Jobs'}, {$set: {ceo: 'Yim'}})
    //   console.log(result);
    // console.log('Completed')




});