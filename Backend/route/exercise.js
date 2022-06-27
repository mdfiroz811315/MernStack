const router = require("express").Router();
/*
router.route("/").get((req,res)=>{
    res.send('I am in Exercise')
});
router.route("/getExerercise").get((req,res)=>{
    res.send('swimming,dancing')
});
router.route("/getExerercise").post((req,res)=>{
    res.send('swimming,dancing,using post')
});
*/

let Exercise = require("../models/exercise.model");
router.route("/").get((req,res)=>{
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('ERROR :'+err));
});

router.route("/:id").get((req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('ERROR :'+err));
});

router.route("/:id").delete((req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("exercise deleted"))
    .catch(err => res.status(400).json('ERROR :'+err));
});

router.route("/update/:id").post((req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise=>{
        
        exercise.username = req.body.username;
        exercise.description= req.body.description;
        exercise.duration= Number(req.body.duration);
        exercise.date= Date.parse(req.body.date);
        exercise.save()
        .then(()=> res.json('Exercise Updated'))
        .catch(err => res.status(400).json('ERROR :'+err));
    })
    .catch(err => res.status(400).json('ERROR :'+err));
});


router.route("/add").post((req,res)=>{
    const username= req.body.username;
    const description= req.body.description;
    const duration= Number(req.body.duration);
    const date= Date.parse(req.body.date);

    const newExercise = new Exercise({username
    ,description,duration,date});
    newExercise.save()
    .then(()=> res.json('newExercise added'))
    .catch(err => res.status(400).json('ERROR :'+err));

});

module.exports = router;