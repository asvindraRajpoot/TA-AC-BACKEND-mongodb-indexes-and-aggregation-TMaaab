// Q2. Create an article Schema with fields

// - title
// - description
// - tags[String]

// 1. Add multikey indexes on tags which is an array of strings
// 2. Add text indexes on title as users will search for texts present in an article's title.
// 3. Update text indexes to include descriptions as well. Implement text indexes on both title and description.


var mongoose=require('mongoose');

const articleSchema=new Schema({
    title:String,
    description:String,
    tags:[String]
  
})


articleSchema.index({tags:1})

articleSchema.index({title:'text',description:'text'})



module.exports=mongoose.model('article',articleSchema);