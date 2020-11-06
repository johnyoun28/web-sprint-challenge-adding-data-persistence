const router = require('express').Router()

const Projects = require('../models/project-model')


router.get('/', (req, res) => {
    Projects.getProjects()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err =>{
        res.status(500).json({ error: err.message })
    })
})

router.get('/resources', (req, res) => {
    Projects.getResources()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(err =>{
        res.status(500).json({ error: err.message })
    })
})

router.get('/tasks', (req, res) => {
    Projects.getTasks()
    .then(task => {
        res.status(200).json(task)
    })
    .catch(err =>{
        res.status(500).json({ error: err.message })
    })
})

router.post('/', (req, res) => {
    Projects.addProject(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

router.post('/resources', (req, res) => {
    Projects.addResource(req.body)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

router.post('/tasks', (req, res) => {
    Projects.addTask(req.body)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})








module.exports = router 