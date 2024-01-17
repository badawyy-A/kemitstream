

function SignUp() {
    // **** form valdition **** 


// **** form valdition **** 
    const signUp = document.querySelector('.sign-up-container')
    const checkBox = document.querySelector('.sign-up .check-box .check')
    function handleCheckBox(){
        if (checkBox.classList.contains('checked')){
            checkBox.classList.remove('checked')
        }
        else{
            checkBox.classList.add('checked')
        }
    }
    function handleSignUp(){
       if (signUp) {
           signUp.style.display = signUp.style.display === 'none' ? 'block' : 'none';
       }
   }
   

    return (
        <div className="sign-up-container">
            <div className="sign-up">
                <div className="icons-head">
                <div onClick={handleSignUp} className="back-icon">
                        <div className="line line-1"></div>
                        <div className="line line-2"></div>
                </div>
                <div onClick={handleSignUp}  className="list-icon">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line l-3"></div>
                </div>
                </div>            
                <div className="head">
                    <div className="text-box">
                    <p className="p-1"><span className="logo">KS</span> Kemit Stream</p>
                    <p className="p-2">Register to enjoy the features</p>
                    </div>
                    <button onClick={handleSignUp} className="primary-button">Close</button>
                </div>
                <form id="form-sign-up" action="#" method="post">
                    <label htmlFor="username">Username</label>
                    <input placeholder="Username" type="text" id="username" name="username" />
                    <p className="error-p"></p>

                    <label htmlFor="email">Email</label>
                    <input placeholder="Email"type="email" id="email" name="email" />
                    <p className="error-p"></p>

                    <label htmlFor="password">Password</label>
                    <input className="" placeholder="Password"type="password" id="password" name="password" />
                    <p className="error-p"></p>

                    <label htmlFor="confirmPassword">Password</label>
                    <input placeholder="Confirm Password"type="password" id="confirmPassword" name="confirmPassword" />
                    <p className="error-p"></p>

                    <div onClick={handleCheckBox}  className="check-box">
                        <div className="check  "></div>
                        <p> I have read and agree to the <span className="form-span">privacy policy</span>  and <span className="form-span">terms & conditions</span> .</p>
                    </div>

                    <button className="form-button " type="submit">Continue</button>
                </form>
                <div className="foot">
                    <p>Already have account?<a href="#" className="form-span">Login</a></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
