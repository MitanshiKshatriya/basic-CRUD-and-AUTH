const express = require('express')

const router = express.Router()

const EmployeeController = require('../controllers/EmployeeController')

//adding auth
const authenticate = require('../middleware/authenticate')

router.get('/',authenticate,EmployeeController.index)
router.post('/show',authenticate,EmployeeController.show)
router.post('/store',authenticate,EmployeeController.store)
router.post('/update',authenticate,EmployeeController.update)
router.post('/delete',authenticate,EmployeeController.destroy)


module.exports = router