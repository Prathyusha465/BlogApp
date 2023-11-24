const router=require("express").Router();

const Blog=require("../models/blog");

router.get("/compose",(req,res)=>{
    res.render("composeBlog");
})
.post("/compose",async (req,res)=>{
    const {title,content}=req.body;
    if(!title || !content) return res.send("please enter all the fields!");
    const newBlog=new Blog({title,content});
    newBlog.save().then(()=>{
        console.log("blog saved successfully");
        res.redirect("/");
    }).catch((err)=>{
        console.log(err);
    })
})


module.exports=router;