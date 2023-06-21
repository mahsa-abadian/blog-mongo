const homePage = (req,res)=>{
    res.sendFile(path.resolve(__dirname,'public','index.html'))
    

}



module.exports = homePage