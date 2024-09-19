import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note"
import "../styles/Home.css"
//import { usernameStore,webIdStore,conIdStore,ownerStore,trusteeStore,contractorStore } from "../constants";



function Home() {

    const owner = localStorage.getItem('ownerStore');
    const contractor = localStorage.getItem('contractorStore');
    const trustee = localStorage.getItem('trusteeStore');
    localStorage.getItem('webIdStore');
    localStorage.getItem('conIdStore');
    localStorage.getItem('usernameStore');
    console.log(localStorage.getItem('ownerStore'));
    console.log(localStorage.getItem('contractorStore'));
    console.log(localStorage.getItem('trusteeStore'));
    console.log(localStorage.getItem('webIdStore'));
    console.log(owner, contractor, trustee);

    const contractorPortal = (e) => {
        navigate("/contractor")
    };
    const ownerPortal = (e) => {
        navigate("/owner")
    };
    const trusteePortal = (e) => {
        navigate("/trustee")
    };
    if(owner === "true" && contractor === "true" && trustee === "true" ){
    return (
        <div>
            <div>
                <h1>GMA USER PORTAL</h1>
            </div>
            <h4>Welcome To The GMA Portal</h4>
            <form onSubmit={ownerPortal}>
                <input type="submit" value="Owner Portal"></input>
            </form>
            <form onSubmit={trusteePortal}>
                <input type="submit" value="Trustee Portal"></input>
            </form>
            <form onSubmit={contractorPortal}>
                <input type="submit" value="Contractor Portal"></input>
            </form>
        </div>
    );
}else{if(owner === "false" && contractor === "true" && trustee === "true" )
    {
        return (
            <div>
                <div>
                    <h1>GMA USER PORTAL</h1>
                </div>
                <h4>Welcome To The GMA Portal</h4>
                <form onSubmit={trusteePortal}>
                <input type="submit" value="Trustee Portal"></input>
                </form>
                <form onSubmit={contractorPortal}>
                <input type="submit" value="Contractor Portal"></input>
                </form>
            </div>
        );
    }
    else{
        if(owner === "false" && contractor === "false" && trustee === "true" ){
            return (
                <div>
                    <div>
                        <h1>GMA USER PORTAL</h1>
                    </div>
                    <h4>Welcome To The GMA Portal</h4>
                    <form onSubmit={trusteePortal}>
                <input type="submit" value="Trustee Portal"></input>
                </form>
                </div>
            );
        }
        else{
            if(owner === "false" && contractor === "true" && trustee === "false" ){
                return (
                    <div>
                        <div>
                            <h1>GMA USER PORTAL</h1>
                        </div>
                        <h4>Welcome To The GMA Portal</h4>
                        <form onSubmit={contractorPortal}>
                <input type="submit" value="Contractor Portal"></input>
                </form>
                    </div>
                );
            } else{
                if(owner === "true" && contractor === "false" && trustee === "false" ){
                    return (
                        <div>
                            <div>
                                <h1>GMA USER PORTAL</h1>
                            </div>
                            <h4>Welcome To The GMA Portal</h4>
                            <form onSubmit={ownerPortal}>
                <input type="submit" value="Owner Portal"></input>
                </form>
                        </div>
                    );
                }
                else{if(owner === "true" && contractor === "true" && trustee === "false" )
                    {
                        return (
                            <div>
                                <div>
                                    <h1>GMA USER PORTAL</h1>
                                </div>
                                <h4>Welcome To The GMA Portal</h4>
                                <form onSubmit={ownerPortal}>
                <input type="submit" value="Owner Portal"></input>
                </form>
                                <form onSubmit={contractorPortal}>
                <input type="submit" value="Contractor Portal"></input>
                </form>
                            </div>
                        );
                    }else{
                        if(owner === "true" && contractor === "false" && trustee === "true" )
                            {
                                return (
                                    <div>
                                        <div>
                                            <h1>GMA USER PORTAL</h1>
                                        </div>
                                        <h4>Welcome To The GMA Portal</h4>
                                        <form onSubmit={ownerPortal}>
                <input type="submit" value="Owner Portal"></input>
                </form>
                <form onSubmit={trusteePortal}>
                <input type="submit" value="Trustee Portal"></input>
                </form>
                                    </div>
                                );
                            }else{
                                return (
                                <div>
                                    <div>
                                        <h1>GMA USER PORTAL</h1>
                                    </div>
                                    <h4>Welcome To The GMA Portal</h4>
                                    <form onSubmit={createNote}>
                                    <h1>You do not have access to any portals, please contact us.</h1>
                                    </form>
                                </div>
                            );
                        }
                    }
                }  
        }
    }
    }
}
}
export default Home;