const content = document.querySelector('.delete-content');
const active = document.querySelector('.active');
let filters = [];

window.addEventListener('DOMContentLoaded', function(){

http.getListings('app.json');

// Add Filters
document.querySelector('.cards').addEventListener('click', function(e){
    if(e.target.className === 'tag-link'){

        active.style.display = 'flex';

         if(!filters.includes(e.target.textContent)){
            ui.addTag(e.target.textContent);
            filters.push(e.target.textContent);
         }

        //  Validation
         
        
    }

     
});


// Remove filters
content.addEventListener('click', function(e){
   if(e.target.parentElement.className === 'type'){
        ui.removeTag(e);
         filters = filters.filter(value => value != e.target.innerHTML);

         if(filters.length <= 0){
             active.style.display = 'none';
         }
   }
    

});


// Clear all filters
document.querySelector('.clear').addEventListener('click', function(){
    ui.clearTags();
    filters = [];
     

});




});

 


 
 





 

  