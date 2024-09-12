import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note"
import "../styles/Home.css"
const owner = localStorage.getItem(ownerStore);
const contractor = localStorage.getItem(contractorStore);
const trustee = localStorage.getItem(trusteeStore);
localStorage.getItem(webIdStore);
localStorage.getItem(conIdStore);
localStorage.getItem(usernameStore);


function Home() {
    if(owner === true && contractor === true && trustee === true ){
    return (
        <div>
            <div>
                <h1>GMA USER PORTAL</h1>
            </div>
            <h4>Welcome To The GMA Portal</h4>
            <form onSubmit={createNote}>
                <input type="submit" value="Owner Portal"></input>
                <input type="submit" value="Trustee Portal"></input>
                <input type="submit" value="Contractor Portal"></input>
            </form>
        </div>
    );
}
else{
    return (
        <div>
            <div>
                <h1>GMA USER PORTAL</h1>
            </div>
            <h4>Welcome To The GMA Portal</h4>
            <form onSubmit={createNote}>
                <input type="submit" value="Owner Portal"></input>
            </form>
        </div>
    );
}
}

export default Home;