import React, { Component } from 'react';
import styling from "./admin.module.css";

class Admin extends Component  {
    state ={
        signedUpInfo: "",
    }

    componentDidMount() {
        let signedUp = JSON.parse(localStorage.getItem("signup_info"));
        this.setState({
            signedUpInfo: signedUp ? signedUp.data : [],
        });
    }
    render() {
        return (
            <div className={styling.container}>
            <div>
                
                <div className={styling.heading}>
                <h1>Admin</h1>
                </div>
               
                <table className={styling.tables}>
                    <thead className={styling.head}>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                   
                    <tbody className={styling.bod}>
        {this.state.signedUpInfo && 
        this.state.signedUpInfo.map((signedInfo) => (
            <tr key={signedInfo.id}>
                <td className={styling.user}>{signedInfo.userName}</td>
                <td className={styling.email}>{signedInfo.email}</td>
            </tr>
            ))}
            </tbody>
            </table> 


            </div>
        </div>
    )
}
}

export default Admin;
