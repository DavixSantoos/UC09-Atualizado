

document.addEventListener('DOMContentLoaded', () => {
const authSection = document.getElementById("auth-section");
const mainSection = document.getElementById("main-content");
const navMenu = document.getElementById("Nav-menu");
const btnLogout = document.getElementById("btn-logout");

   
    if(false) {
        authSection.style.display = 'none';
        mainSection.style.display = 'block';
        navMenu.style.display = 'inline-block';
        btnLogout.style.display = 'inline-block';
  } else {
        authSection.style.display = 'block';
        mainSection.style.display = 'none';
        navMenu.style.display = 'none';
        btnLogout.style.display = 'none';

  }

  const loginForm = document.getElementById('login-form');
   if(loginForm){
        loginForm.addEventListener('submit', async(e) =>{
            e.preventDefault();

            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            try{
               const response =  await fetch(API_BASE_URL + '/Usuarios/autenticar',{
                    method: 'POST',
                    headers: {'Content-Type' : 'appication/json'},
                    body: JSON.stringify({email,senha})
                });
                console.log(await response.json());

            }catch(error){
                console.log(error);
            }

        });
   }



});