const express = require('express');
const actionsDb = require('../data/helpers/actionModel');
const router = express.Router();

router.get('/', (req , res) =>{
    actionsDb.get().then(action =>{
        res.json(action)
    })
    .catch(err =>{
        res.status(500).json({error : 'Could not get actions'})
    })
})

module.exports = router;