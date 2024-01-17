
function NavBar() {
    const sideBar = document.querySelector('nav .mid-side')
    const buttons = document.querySelector('nav .right-side .buttons')
    const closeIcone = document.querySelector('nav .mid-side .close-icon')
    function handleOpenList(){
        sideBar.style.display = 'flex'
        buttons.style.display = 'flex'
        closeIcone.style.display = 'flex'
    }
    function handleCloseList(){
        sideBar.style.display = 'none'
        buttons.style.display = 'none'
        closeIcone.style.display = 'none'
    }
    const signUp = document.querySelector('.sign-up-container')
    function handleSignUp(){
       if (signUp) {
           signUp.style.display = signUp.style.display === 'none' ? 'block' : 'none';
       }
   }
    return ( 
        <nav>
            <div className="left-side">
                <p><span className="logo">KS</span> Kemit Stream</p>
            </div>
            <div className="mid-side">
                <div className="close-icon" onClick={handleCloseList}>
                    <div className="line l-1"></div>
                    <div className="line l-2"></div>
                </div>
                <ul>
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#">Discover</a></li>
                    <li><a href="#">Movie Release</a></li>
                    <li><a href="#">Forum</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
            <div className="right-side">
                <i className="fa fa-search"></i>
                <div className="list-icon" onClick={handleOpenList}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line l-3"></div>
                </div>

                <div className="buttons">
                    <button onClick={handleSignUp}  className="primary-button">Sign up</button>
                    <button className="socndary-button">Login</button>
                </div>
            </div>
        </nav>
     );
}

export default NavBar;