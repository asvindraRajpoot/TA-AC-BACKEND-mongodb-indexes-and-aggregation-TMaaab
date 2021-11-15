// writeCode

// Q1. Design database model using mongoose to replicate data structure of `STACK OVERFLOW` and add appropriate indexes to support the queries.

// Stack Overflow consists of

// - Users
// - Questions
// - Answers
// - REPLY'S on Question/Answers
// - Up/Down vote on Questions/Answers/Replies
// - Tags on Questions
// - Views on Questions
// - Reputation for each user based on questions asked, answers given, upvotes

// Design models for storing these data and associate them accordingly to fetch related data together.

// Use indexes to support queries related to questions, tags etc..




var mongoose=require('mongoose');


var stackOverflowSchema=new Schema({
    users:Number,
    questions:[String],
    answers:[String],
    reply:[String],
    vote:Number,
    tags:[String],
    views:Number,
    reputation:String
})
// Q2. Use aggregation framework to

// - Get array of all the tags used in the questions
db.STACK_OVERFLOW.aggregate([{$unwind:"$tags"}])
// - Get total questions count
db.STACK_OVERFLOW.aggregate([{$match:{questions}},{$group:{count:{$sum:1}}}])
// - Total answers count overall and question specific as well
// - Count total reputation of a user
// - total views on a particular day
// - Count total answer by a particular user


module.exports=mongoose.model('STACK_OVERFLOW',stackOverflowSchema);