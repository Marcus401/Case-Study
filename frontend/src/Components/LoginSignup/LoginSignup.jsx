import React from 'react'
import './LoginSignup.css'


const LoginSignup = () => {
  return (
    
    <div class='container'>
    <div class="header">
        <div class="text">Sign Up</div>
        <div class="underline"></div>   
    </div>
    <div class="inputs">
        <div class="input-group">
            <div class="input">
                <input type="text" placeholder="Last Name" id="lastname" />
            </div>
            <div class="input">
                <input type="text" placeholder="First Name" id="firstname" />
            </div>
            <div class="input">
                <input type="text" placeholder="Middle Name" id="middlename" />
            </div>
            <div class="input">
                <input type="date" placeholder="Birthdate" id="birthdate" />
            </div>
            <div class="input">
                <input type="text" placeholder="Username" id="username" />
            </div>
            <div class="input">
                <input type="email" placeholder="Email" id="email" />
            </div> 
            <div class="input">
                <input type="password" placeholder="Password" id="password" />
            </div>
            <div class="input">
                <input type="password" placeholder="Confirm Password" id="confirm-password" />
            </div>
        </div>
    </div>
    <div class="submit-container">
        <div class="submit" onclick="submitSignUp()">Sign Up</div>
        <div class="submit" onclick="toggleLoginForm()">Login</div>
    </div>
</div>

  
    
  )
}

export default LoginSignup
