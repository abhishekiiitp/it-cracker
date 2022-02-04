const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const userSchema=new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        rquired:true
    },
    cpassword:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default:Date.now
    },
    messages:[
        {
            name: {
                type: String,
                required:true
            },
            email: {
                type: String,
                required:true
            },
            phone: {
                type: Number,
                required:true
            },
            message: {
                type: String,
                required:true
            }
        }
    ], 

    comment:[
        {
            name:{
                type:String,
                required:true
            },
            content:{
                type:String,
                required:true
            }
        }
    ],
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

// middleware for pre save method which is use for hash the password
// secure password

userSchema.pre('save',async function(next){
   // console.log('hii inside')
    if(this.isModified('password'))
    {
       this.password=await bcrypt.hashSync(this.password,12);
       this.cpassword=await bcrypt.hashSync(this.cpassword,12);
    }
    next();
});

// we are generating token 
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        // console.log(token);
        return token;
    } catch (err) {
        console.log(err);
    }
}


// stored the message 

userSchema.methods.addMessage = async function (name, email, phone, message) {
    try {
        this.messages = this.messages.concat({ name, email, phone, message });
        await this.save();
        return this.messages;
    } catch (error) {
        console.log(error)
    }
}
const user=mongoose.model('USER',userSchema);

module.exports=user;