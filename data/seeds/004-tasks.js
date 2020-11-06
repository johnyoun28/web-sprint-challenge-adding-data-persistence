exports.seed = function(knex) {

   
  // Inserts seed entries
  return knex('tasks').insert([
    {
      
      task_description: 'task',
      task_notes: "hello",
      completed: false,
      project_id: 1,
    },

    {
      
      task_description: 'task2',
      task_notes: "world",
      completed: false,
      project_id: 1
    },

    {
     
      task_description: 'task3',
      task_notes: "notes",
      completed: false,
      project_id: 1
    },
  ]);

};
