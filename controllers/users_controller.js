module.exports.profile = (req,res)=> {
    res.render('user_profile',{title:"profile"})
};
//controllers for rendering the _userSignUp page
module.exports.signup = (req,res)=> {
      res.render('_userSignUp',{title:"register"})
}

//controllers for rendering the _userSingIn Page 
module.exports.signin  = (req,res)=> {
    res.render('_userSignIn',{title: "SignIn"});
}
//get the sign up data
module.exports.create = (req,res)=> {
    //todo later
}
//for sign in and create a sessino for the user
module.exports.createSession = (req,res)=> {
    //todo later
}