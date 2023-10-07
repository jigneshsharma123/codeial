const User = require('../models/User')
module.exports.profile = async(req,res)=> {
 try { if(req.cookies.user_id){
     const user = await User.findById(req.cookies.user_id);
        if(user) {
            return res.render('user_profile',{title:"user profile", user:user})
        }

  } else {
    return res.redirec('/user/_userSignIn');
  }
}catch(err) {
    console.log('Error:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
   
}
}
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
            return res.redirect('/users/signin',{error: errorMessage});
        } else {
            return res.redirect('back');
        }
    } catch (err) {
        console.log('Error:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}





//for sign in and create a session for the user
module.exports.createSession = async (req, res) => {
    try {
        // Find the user
        const user = await User.findOne({ email: req.body.email });


        if(user) {
            //handle pw which doesn't match
            if (user.password !== req.body.password) {
                // Set an error message for wrong password
                const errorMessage = 'Wrong password. Please try again.';
                return res.render('_userSignIn', { title:"wrong Something",
                error: "wrong passsword" }); 
            } //handle session creation 
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile');
        } else {
            //handle user not found 
            const errorMessage = 'User not found. Please check your email.';
            return res.render('_userSignIn', { title:"error",msg: errorMessage });
        }
    } catch (err) {
        console.log('Error:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};