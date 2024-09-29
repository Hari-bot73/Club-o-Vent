document.getElementById('loginForm').addEventListener('submit', function(e) {  
    e.preventDefault();  
    const email = document.getElementById('email').value;  
    const password = document.getElementById('password').value;  
    const rememberMe = document.getElementById('rememberMe').checked;  
    
    // Placeholder for actual login logic  
    console.log('Login attempt with:', email, password, rememberMe);  
    
    // Example of handling remember me functionality  
    if (rememberMe) {  
     // Store user credentials securely, e.g., using local storage or cookies  
     localStorage.setItem('email', email);  
     localStorage.setItem('password', password);  
    } else {  
     // Clear stored credentials  
     localStorage.removeItem('email');  
     localStorage.removeItem('password');  
    }  
  });  
    
  document.getElementById('forgotPassword').addEventListener('click', function(e) {  
    e.preventDefault();  
    // Placeholder for forgot password logic  
    console.log('Forgot password clicked');  
  });