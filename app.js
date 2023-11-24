const express=require("express");
const mongoose=require("mongoose");
const path=require("path");

mongoose.connect("mongodb+srv://katkuriprathyusha465:qQRCTFL7PCO1Q1mW@cluster0.ydkk5us.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err)
})

const app=express();

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(require("./routes/index"))
app.use(require("./routes/compose"))
app.use(require("./routes/blogs"))

app.listen(3000,()=>{
    console.log("app started on port 3000");
});