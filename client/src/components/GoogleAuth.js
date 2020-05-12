import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    
    
    /*
    state=(
        {
            isSignedIn : null,
           // profileImageSrc: ''
        }
    );
    */
    componentDidMount(){
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId: '779162249234-nldun96ukle5q1n235tboaq58av93jv8.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                //let profileURL = window.gapi.auth2.BasicProfile.getImageUrl;
                //this.setState({profileImageSrc: profileURL});
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
                console.log(this.state);
            });
        });
        
    };

    
    onAuthChange = (isSignedIn) =>{
       /* this.setState({
            isSignedIn: this.auth.isSignedIn.get(),
             
         });
       */
      
       //using action creators
       if(isSignedIn){
           this.props.signIn(this.auth.currentUser.get().getId());
       }else{
           this.props.signOut();
       }

    };

    onSignOutClick = () => {
        this.auth.signOut();
        
    };
    
    onSignInClick = () => {
        this.auth.signIn();

    };
    

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        }else if(this.props.isSignedIn){
            return(
                <div>
                    <button onClick={this.onSignOutClick} className="ui google button red" >
                        <i className="google icon" />
                        Sign Out
                    </button>
                </div>
            );
        }else{
            return (
                <div>
                    <button onClick={this.onSignInClick} className="ui google button red" >
                        <i className="google icon" />
                        Sign In
                    </button>
                </div>
            );
        }

    };



    render(){
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
    
};


let mapStateToProps = (state) =>{
    return({
        isSignedIn: state.auth.isSignedIn
    });
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);