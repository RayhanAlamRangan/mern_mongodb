const express=require('express');


const router=express.Router();
const dataController=require('../models/dataController');



//Start Route 

router.get('/insert',dataController.insert);
router.post('/edit',dataController.edit);
router.put('/update',dataController.update);
router.delete('/delete',dataController.delete);




module.exports=router;

