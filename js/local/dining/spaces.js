const userName = document.getElementById('name');
const email = document.getElementById('email');
const date = document.getElementById('date');
const time = document.getElementById('time');
const form = document.getElementById('form');
const errorElement = document.getElementById('error')
const name_error = document.getElementById('name_error');

form.addEventListener('submit',(e)=>{
     
if (userName.vaule === '' || userName.vaule == null)
    {
    
     e.preventDefault();
     name_error.innerHTML = "Name is required";
    
 }
   
})