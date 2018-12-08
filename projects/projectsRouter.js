const express = require('express');
const projectsDb = require('../data/helpers/projectModel');
const router = express.Router();

router.get('/', (req , res) =>{
    projectsDb.get().then(projects =>{
        res.json(projects)
    })
    .catch(err =>{
        res.status(500).json({error : 'Could not get projects'})
    })
})

router.get('/:id', (req, res) =>{
    const {id} = req.params;
    projectsDb.get(id).then(project =>{
        res.json(project)
    })
    .catch(err =>{
        res.status(500).json({error: 'Could not find project by specified ID'})
    })
})

router.post('/', (req, res) =>{
    const project = req.body;
    if(project.description && project.name){
        projectsDb.insert(project).then(projectId =>{
            projectsDb.get(projectId.id).then(newProject =>{
                res.status(201).json(newProject)
            })
        })
        .catch(err =>{
            res.status(404).json({error : 'Missing project description or note'})
        })
    } else {
        res.status(500).json({error: 'Could not complete new project post request'})
    }
})

router.delete('/:id', (req , res) =>{
    const {id} = req.params;
    let deletedProject;
    projectsDb.get(id).then(project =>{
        deletedProject = project
    })
    projectsDb.remove(id)
        .then(count =>{
            if(count){
                res.json(deletedProject)
            } else {
                res.status(404).json({error : 'Missing ID for delete'})
            }
        })
        .catch(err =>{
            res.status(500).json({error : 'Could not delete project'})
        })
})

router.put('/:id', (req, res) =>{
    const {id} = req.params;
    const project = req.body;
    if(project.description && project.name){
        projectsDb.update(id, project).then(updatedProject =>{
            res.json(updatedProject)
        })
        .catch(err =>{
            res.status(404).json({error : 'Missing project description or note'})
        })
    } else {
        res.status(500).json({error : 'Could not update project'})
    }
})

module.exports = router;