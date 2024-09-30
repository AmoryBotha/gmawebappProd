localStorage.getItem('webIdStore');
localStorage.getItem('conIdStore');
localStorage.getItem('usernameStore');

function OwnerLanding1(){
    return <div>
        <h1>OWNER LANDING PAGE</h1>
        <h1>ACCOUNTS</h1>
        <p>Under Construction...</p>

        <div>
            <h4>Accounts Linked To Your Account</h4>
            <p>ABC</p>
            <div>
            <div><h1>Owner Account Number</h1></div>
            <div><h1>Reg/ID No</h1></div>
            <div><h1>Phone Number</h1></div>
            <div><h1>Email</h1></div>
            <div><button className="form-button" type="submit">
                Modify
            </button></div>
            <div>
            <div><h1>Levy Account</h1></div>
            <div><h1>Building</h1></div>
            <div><h1>Door Number</h1></div>
            <div><h1>Current Balance</h1></div>
            <div><button className="form-button" type="submit">
                Download Statement
            </button></div>
            <div><button className="form-button" type="submit">
                Edit
            </button></div>
            </div>
            </div>
        </div>
    </div>

}

export default OwnerLanding1