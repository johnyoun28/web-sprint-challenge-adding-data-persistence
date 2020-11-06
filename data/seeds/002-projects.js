
exports.seed = function(knex) {

   
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_name: "HTML", 
          project_description: 'write HTML',
          completed: false
        },

        {
          project_name: "CSS", 
          project_description: 'write CSS',
          completed: false
        },

        {
          project_name: "Javascript", 
          project_description: 'write Javascript',
          completed: false
        },
      ]);
    
};
