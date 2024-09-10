import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css"
import LoadingIndicator from "./LoadingIndicator";

function Form({ route, method }) {
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [password, setPassword] = useState("");
    const [cell, setCell] = useState("");
    const [id, setID] = useState("");
    const [email, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    return (
        
        <form onSubmit={handleSubmit} className="form-container">
            <div class='welcome'>
                <h1>Welcome to the GMA Portal</h1>
                <h1>{name}</h1>
            </div>
            <div class='text'>
                <p>First Name</p>
            </div>
            <input
                className="form-input"
                type="text"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
                placeholder="First Name"
            />
            <div class='text'>
                <p>Last Name</p>
            </div>
            <input
                className="form-input"
                type="text"
                value={lname}
                onChange={(e) => setLName(e.target.value)}
                placeholder="Last Name"
            />
            <div class='text'>
                <p>Mobile Number</p>
            </div>
            <input
                className="form-input"
                type="text"
                value={cell}
                onChange={(e) => setCell(e.target.value)}
                placeholder="Mobile Number"
            />
            <div class='text'>
                <p>ID Number</p>
            </div>
            <input
                className="form-input"
                type="text"
                value={id}
                onChange={(e) => setID(e.target.value)}
                placeholder="ID Number"
            />
            <div class='text'>
                <p>Email</p>
            </div>
            <input
                className="form-input"
                type="text"
                value={email}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <div class='text'>
                <p>Password</p>
            </div>
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {loading && <LoadingIndicator />}
            <button className="form-button" type="submit">
                {name}
            </button>
        </form>
    );
}

export default Form