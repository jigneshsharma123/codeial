const User = require('../models/User')
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
module.exports.create = async (req, res) => {
    try {
        if (req.body.password !== req.body.confirm_password) {
            return res.redirect('back');
        }

        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            const newUser = await User.create(req.body);
            return res.redirect('/users/signin');
        } else {
            return res.redirect('back');
        }
    } catch (err) {
        console.log('Error:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}





//for sign in and create a sessino for the user
module.exports.createSession = (req,res)=> {
    //todo later
} 