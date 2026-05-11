import React, { useState } from "react";

function LiveForm() {
    const [user, setUser] = useState({
        username: "guest",
        email: "guest@guest.com",
        age: "25",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setUser((u) => ({ ...u, [id]: value }));
    };

    const resetUser = () => {
        setUser({ username: "", email: "", age: "" });
    };
    return (
        <>
            <h1>Username : {user.username}</h1>
            <h1>Email : {user.email}</h1>
            <h1>Age : {user.age}</h1>
            <br />
            <h2>Update Form:</h2>

            <label htmlFor="username">Username :</label>
            <input
                type="text"
                id="username"
                value={user.username}
                onChange={handleChange}
            />
            <br />

            <label htmlFor="email">Email :</label>
            <input
                type="text"
                id="email"
                value={user.email}
                onChange={handleChange}
            />
            <br />

            <label htmlFor="age">Age :</label>
            <input
                type="number"
                id="age"
                value={user.age}
                onChange={handleChange}
            />
            <button onClick={resetUser}>Reset</button>
        </>
    );
}
export default LiveForm;
