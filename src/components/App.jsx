import React from "react";

function App() {
    return (
        <div>
        <h1 className="heading">My Contacts</h1>
        <div className="card">
            <div className="top">
            <h2 className="name">Beyonce</h2>
            <img
                className="circle-img"
                src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
                alt="avatar_img"
            />
            </div>
            <div className="bottom">
            <p className="info">+123 456 789</p>
            <p className="info">user1@gmail.com</p>
            </div>
        </div>
    </div>

    );
}

export default App;