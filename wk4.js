const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:123abcdghhgg3455@sandbox.twx68.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async err => {
    if (err) {
        console.log(err.message)
        return
    }
    console.log('Connected to MongoDB')

    // let result= await client.db('sample_training').collection('zips').count( 
    //     { $nor : [ {'pop':{$gt: 1000000 }},{'pop':{$lt: 5000 }}] }        
    //     )
    
        // let result= await client.db('sample_training').collection('companies').count( 
        // { $and : 
        //     [
        //         {$or : [{"founded_year": 2004},{"founded_month": 10}]},
        //         {$or : [{"category_code": "web"},{"category_code": "social"}]}
        //     ]       
        // }  
        // )
    // let result= await client.db('sample_training').collection('companies').count(
    //     { $expr:{'$number_of_employees': {$gt:"$founded-year"}}}
    // )
    // let result= await client.db('sample_training').collection('companies').count(
    //     { $expr:{ $eq :['$permalink','$twitter_username']}}
    // )
    //  await client.db('sample_airbnb').collection('listingsAndReviews').find(
    //         {               
    //             $and :
    //             [
    //               {"accommodates": {$gt: 6}},
    //               {"reviews" : {$size: 50}}
    //             ]
    //         } 
    //     ).toArray().then(result=>{
    //         console.log(result);})
    


        //  await client.db('sample_airbnb').collection('listingsAndReviews').count(
        //     {               
        //         $and :
        //         [
        //           {"property_type": "House"},
        //           {"amenities" : {'$all': ["Changing table"] } }
        //         ]
        //     } 
        // ).then(result=>{
        //     console.log(result);})

        // await client.db('sample_training').collection('companies').count(
        //     {               
        //         'offices' : {$elemMatch: {'city': 'Seattle'}}
        //     } 
        // ).then(result=>{
        //     console.log(result);})

        // await client.db('sample_training').collection('trips').count(
        //     {               
        //        "start station location.coordinates.0" : {$lt : -74}
        //     } 
        // ).then(result=>{
        //     console.log(result);})

        await client.db('sample_training').collection('inspections').count(
            {               
               "address.city" : {$regex: "NEW YORK"}
            } 
        ).then(result=>{
            console.log(result);})

        

        
})
