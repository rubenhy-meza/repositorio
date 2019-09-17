let mongoose = require('mongoose'),
Schema = mongoose.Schema

let userSchema = new Schema({
  user:{type:String,required :true,unique:true},
  email:{type:String,required:true},
  password:{type:String,required:true},
})
let UsuariosModel = mongoose.model('usuario',userSchema)
module.exports = UsuariosModel
