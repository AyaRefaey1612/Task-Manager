const mongoose=require('mongoose')

const connectedDB=(url)=>{
 return mongoose.connect(url).then(()=>{
 console.log('connected to db')
})
}
module.exports=connectedDB