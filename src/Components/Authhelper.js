


class Authhelper 
{
    constructor()
    {
        this.authenticated = false;
    }

    isAuthenticated()
    {
        return this.authenticated; //based on certain conditions returns values
    }

    login(user,callBackonAuthentication)
    {
        if(user.email == "quashid@email.com" && user.password=="quashid@123")
        {
            this.authenticated = true;
        }
        else{
            this.authenticated = false;
        }

        console.log("Inside login fun val is"+ this.authenticated);
        callBackonAuthentication(this.authenticated);
        //Validate User WRT DB or Server Calls using fetch functions.
        //reply won't be direct
    }

    logout(callBackfunOnLogout)
    {
        this.authenticated = false;
        callBackfunOnLogout();
    }

}

export default new Authhelper();