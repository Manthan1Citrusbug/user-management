

document.getElementById('submit').addEventListener('click',verify_data);
function verify_data(event){
    event.preventDefault();    
    document.getElementById('reg_form').classList.add('was-validated');
}