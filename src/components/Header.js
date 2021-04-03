import React from 'react';
import './Header.css';


export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix"/> */}
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Netflixão"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="Usuário"/> 
                    {/* <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/400x400.png" alt="Usuário"/> */}
                </a>
            </div>
        </header>
    );
}