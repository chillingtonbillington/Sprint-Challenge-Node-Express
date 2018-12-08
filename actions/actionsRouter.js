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

router.post('/', (req, res) =>{
    const action = req.body;
    if(action.description && action.notes){
        actionsDb.insert(action).then(actionId =>{
            actionsDb.get(actionId.id).then(newAction =>{
                res.status(201).json(newAction)
            })
        })
        .catch(err =>{
            res.status(404).json({error : 'Missing action description or note'})
        })
    } else {
        res.status(500).json({error: 'Could not complete new action post request'})
    }
})

module.exports = router;