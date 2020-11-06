const db = require('../data/db-config')

module.exports = {
    /// function names
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask
}

function getProjects() {
    return db('projects')
}

function getResources() {
    return db('resources')
}

function getTasks(id) {
    return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select('t.id', 't.task_description', 't.task_notes', 't.completed', 'p.project_name', 'p.project_description')
}

function addProject(project) {
    return db('projects')
    .insert(project)
}

function addResource(resource) {
    return db('resources')
    .insert(resource)
}

function addTask(task) {
    return db('tasks')
    .insert(task)
}