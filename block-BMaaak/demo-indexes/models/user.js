// Q1. Create an userSchema which has fields

// - name
// - username
// - email
// - address {
//   - city
//   - state
//   - country
//   - pin
//     }

// 1. Define unique indexes on username and email.
// 2. define compound indexes on state and country field inside address document. Each country must have states which are unique.

var mongoose=require('mongoose');

const userSchema=new Schema({
    name:String,
    username:{type: String,unique:true},
    email:{type: String,unique:true},
    address:{
        city:String,
        state:String,
        country:String,
        pin:Number
    }
})

userSchema.indexes({'address.state':1,'address.country':1},{unique:true})


module.exports=mongoose.model('User',userSchema);
