import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note"
import "../styles/Home.css"
import { usernameStore,webIdStore,conIdStore,ownerStore,trusteeStore,contractorStore } from "../constants";



function Home() {

    const owner = localStorage.getItem(ownerStore);
    const contractor = localStorage.getItem(contractorStore);
    const trustee = localStorage.getItem(trusteeStore);
    localStorage.getItem(webIdStore);
    localStorage.getItem(conIdStore);
    localStorage.getItem(usernameStore);
    console.log(localStorage.getItem(ownerStore));
    console.log(localStorage.getItem(contractorStore));
    console.log(localStorage.getItem(trusteeStore));

    
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Note created!");
                else alert("Failed to make note.");
                getNotes();
            })
            .catch((err) => alert(err));
    };
    if(owner === "true" && contractor === "true" && trustee === "true" ){
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