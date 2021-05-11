import React ,{Component}from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            fullName:"Avii Singh Maxx",
            email:"aviisinghmaxx.com",
            mobile:9621482434,
            message:"please Subscribe to my channel"
        }
    }
    handleChange=(event)=>{
        this.setState({ 
            [event.target.name]:event.target.value
        })
    }
    handleEmail=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    handleMobile=(event)=>{
        this.setState({
            mobile:event.target.value
        })
    }
    handleMessage=(event)=>{
        this.setState({
            message:event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();

        alert(`my name is ${this.state.fullName} email id is ${this.state.email} mobile number is ${this.state.mobile} and here is my message ${this.state.message}`);
    }
render(){
    
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Full Name</label>
                <input type="text" placeholder="Enter Your Name" name="fullName" onChange={this.handleChange} value={this.state.fullName} />
                <label>Email</label>
                <input type="email" placeholder="Enter Your Email" value={this.state.email} name="email" onChange={this.handleChange}/>
                <label>Contact</label>
                <input type="number" placeholder="Enter Your Mobile" name="mobile" value={this.state.mobile} onChange={this.handleChange}/>
                <label>Message</label>
                <textarea rows="5" value="please Subscribe to my channel" name="message" value={this.state.message} onChange={this.handleChange}></textarea>
                <input type="submit" value="Send"/>
            </form>
        </div>
    );
}
}
export default Form;