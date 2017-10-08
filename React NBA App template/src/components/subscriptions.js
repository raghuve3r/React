import React, {Component} from 'react';

class Subscription extends Component {
    constructor(props){
        super(props);

        this.state = {
            email:'',
            error:false,
            success:false
        }
    }

    saveSubscription = (email) => {
        const URL_EMAIL = `http://localhost:3004/subcriptions`
        
        fetch(URL_EMAIL,{
            method: 'post',
            header:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({email})
        }).then(res=>res.json())
        .then(()=>{
            this.setState({
                email: '',
                success: true
            })
        })
    }

    clearMessages = () => {
        setTimeout(function(){
            this.setState({
                error: false,
                success: false
            })
        }.bind(this), 3000)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;

        if(regex.test(email)){
            this.saveSubscription(email)
        }
        else{
            this.setState({error:true})
        }
        this.clearMessages()
    }

    onChangeInput = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    render() {
        return (
            <div className="subscribe_panel">
                <h3>Subscribe here: </h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" 
                               placeholder="Enter your e-mail"
                               value = {this.state.email}
                               onChange = {this.onChangeInput}
                        />
                        <div className={this.state.error ? "error show":"error"}>Check your email</div>
                        <div className={this.state.success ? "success show":"success"}>Thanks!</div>
                    </form>
                </div>
                <small>
                I hope the old man got that tractor beam out if commission, or this is going to be a real short trip. Okay, hit it! We're coming up on the sentry ships. Hold 'em off! Angle the deflector shields while I charge up the main guns! I can't believe he's gone. There wasn't anything you could have done. Come on, buddy, we're not out of this yet! You in, kid? Okay, stay sharp!
                </small>
            </div>
        );
    }
}

export default Subscription;