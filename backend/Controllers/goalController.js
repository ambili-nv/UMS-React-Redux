const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalModel')
const User = require('../model/userModel')
// Get Goals
//Route - GET api/goals
const getGoals = asyncHandler (async(req,res)=>{
    const goals = await Goal.find({user:req.user.id})
    res.status(200).json(goals)
}
)
// Set Goals
//Route - POST /api/goals
const setGoal = asyncHandler (async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error ('Please add th etext field')
       }

       const goal = await Goal.create({
        text:req.body.text,
        user:req.user.id,
       })
    res.status(200).json(goal)
})

// Update Goal
//Route - PUT /api/goals/:id
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(404);
        throw new Error('Goal not found');
    }


        //check for user
        if(!req.user){
            res.status(401)
            throw new Error('User not found')
        }

    //checking logged user matches the goal
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }


    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });

    res.status(200).json(updatedGoal);
});

// Delete Goals
//Route - DELETE /api/goals/:id
const deleteGoal = asyncHandler (async (req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not Found')
    }

            //check for user
            if(!req.user){
                res.status(401)
                throw new Error('User not found')
            }
    
        //checking logged user matches the goal
        if(goal.user.toString() !== req.user.id){
            res.status(401)
            throw new Error('User not authorized')
        }


  await Goal.findByIdAndDelete(req.params.id)
    res.status(200).json({id:req.params.id})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
