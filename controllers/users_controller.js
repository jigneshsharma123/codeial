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