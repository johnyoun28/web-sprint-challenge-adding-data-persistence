exports.seed = function(knex) {

   
  // Inserts seed entries
  return knex('resources').insert([
    {
      resource_name: "VSCode", 
      resource_description: 'Use to code',
     
    },

    {
      resource_name: "Computer", 
      resource_description: 'Required in order to write code',
   
    },

    {
      resource_name: "Microphone", 
      resource_description: 'Communicate with your team',
    
    },
  ]);

};