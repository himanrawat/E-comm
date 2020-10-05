import { extendObservable } from "mobx";

class UserLogin {
    constructor() {
        extendObservable(this, {
            loading: true,
            isLoggedIn: false,
            username: ''

        })
    }
}

export default  new UserLogin();

