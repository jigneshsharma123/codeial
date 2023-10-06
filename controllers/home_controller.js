module.exports.home = (req,res)=> {
  // console.log(req.cookies);
  //res.cookie('userid', 34);
  
return res.render('home', 
{
  title: "home"
})

}