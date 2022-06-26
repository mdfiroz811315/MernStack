const router = require("express").Router();
/*router.route("/").get((req,res)=>{
    res.send('I am in user')
});
router.route("/add").get((req,res)=>{
    res.send('I am in add')
});
router.route("/update").get((req,res)=>{
    res.send('I am in Update')
});
router.route("/delete").get((req,res)=>{
    res.send('I am in user delete')
});
*/
let User = require("../models/user.model");
router.route("/getUser").get((req,res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('ERROR :'+err));
});
router.route("/add").post((req,res)=>{
    console.log(req.body);
    const username= req.body.username;
    const newUser = new User({username});
    newUser.save()
    .then(()=> res.json('user added'))
    .catch(err => res.status(400).json('ERROR :'+err));

});

module.exports = router
