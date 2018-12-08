const express = require('express');
const actionsDb = require('../data/helpers/actionModel');
const router = express.Router();

router.get('/', (req , res) =>{
    actionsDb.get().then(actions =>{
        res.json(actions)
    })
    .catch(err =>{
        res.status(500).json({error : 'Could not get actions'})
    })
})

router.get('/:id', (req, res) =>{
    const {id} = req.params;
    actionsDb.get(id).then(action =>{
        res.json(action)
    })
    .catch(err =>{
        res.status(500).json({error: 'Could not find action by specified ID'})
    })
})

module.exports = router;