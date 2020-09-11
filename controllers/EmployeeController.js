const Employee = require("../models/Employee")
const { response } = require("express")

const index = (req,res,next) =>
{
    Employee.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "An error occurs"
        })
    })
}

const show = (req,res,next) => {
    let employeeID = REQ.BODY.employeeID

    Employee.findById(employeeID)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
        message: 'An error occured'
    })
    })
}

const store = (req,res,next) => {
    let employee = new Employee({
        name:req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone: req.body.phone,
        age:req.body.age
    })
    employee.save()
    .then(resposne=>{
        res.json({
            message: 'Employye added!'
        })
    })
    .catch(error=>{
        res.json({
            message:'An error occured!'
        })
    })
}

//update
const update = (req,res,next) => {
    let employeeID = req.body.employeeID

    let updateData = {
        name: req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone: req.body.phone,
        age:req.body.age
    }

    Employee.findByIdAndUpdate(employeeID,
        {$set:updateData})
        .then(()=>{
            message:"update successfull!"
        })
        .catch(error=>{
            res.json({
                message:'An error occured!'
            })
        })
}

const destroy = (req,res,next) => {
    let employeeID = req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(()=>{
        message:"delete successfull!"
    })
    .catch(error=>{
        res.json({
            message:'An error occured!'
        })
    })
}



module.exports = {
    index,show,store,update,destroy
}