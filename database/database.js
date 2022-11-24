const mongoose = require("mongoose");

const database = () =>{

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@mamun.e6toytj.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri , { useNewUrlParser: true, useUnifiedTopology: true })
.then((data) => {
      console.log("mongoose was cannect");
})
.catch((error) =>{
      console.log("this is error",error)
})
}
module.exports = database