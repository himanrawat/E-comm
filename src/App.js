import React from 'react';
import { observer } from 'mobx-react';
import user_login from "./user_login/UserLogin";
import LoginForm from "./LoginForm";
import SubmitButton  from "./SubmitButton";
import './App.css';

class App extends React.Component {
    async componentDidMount(){
        try{
            let res = await fetch('/isLoggedIn',{
                method : 'post',
                headers : {
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                }
            });
            let result = await res.json();
            if (result && result.success){
                user_login.loading = false;
                user_login.isLoggedIn = true;
                user_login.username = result.username;
            }
            else{
                user_login.loading = false;
                user_login.isLoggedIn = false;
            }
        }
        catch(e){
            user_login.loading = false;
            user_login.isLoggedIn = false;
        }
    }

    async doLogOut(){
        try{
            let res = await fetch('/logout',{
                method : 'post',
                headers : {
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                }
            });
            let result = await res.json();
            if (result && result.success){
                user_login.isLoggedIn = false;
            }
        }
        catch(e){
            console.log(e)
        }
    }
    render(){
        if (user_login.loading){
            return(
                <div className="App">
                    <div className="Container">
                        Loading, please wait....
                    </div>
                </div>
            );
        }
        else{
            if (user_login.isLoggedIn){
                return (
                    <div className="App">
                        <div className="Container">
                            Welcome {user_login.username}
                            <SubmitButton
                                text = {'log out'}
                                disabled = {false}
                                onClick={ () => this.doLogOut()}
                            />

                        </div>
                    </div>
                );
            }

        }
        return (
            <div className="App">
                <div className="Container">
                    <LoginForm />
                </div>
            </div>
        );

    }
}

export default observer(App);
