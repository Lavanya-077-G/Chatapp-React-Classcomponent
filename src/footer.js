import { Component } from "react";
import React from 'react';
export default class Footer extends Component{
    constructor(props){
        super();
        this.inputmessage="";
        this.message1={status:"sender",messagedata:""};
        this.message2={status:"receiver",messagedata:"",sendername:""}; 
        this.myRef = React.createRef();
    }
  
    
    render(){
        const {val,func} = this.props;
        const {id} = val;
        const changeInput=(e)=>{
            this.inputmessage=e.target.value;
        }
        const changeValue=(e)=>{
            console.log(e.target.parentNode.id);
            if(e.target.parentNode.id==="person1"){
                
                this.message1={status:"sender",messagedata:this.inputmessage};
                this.message2={status:"receiver",messagedata:this.inputmessage,sendername:e.currentTarget.parentNode.parentNode.id}
                func(this.message1,this.message2);
    
            }
            else {
                this.message1={status:"sender",messagedata:this.inputmessage};
                this.message2={status:"receiver",messagedata:this.inputmessage,sendername:e.currentTarget.parentNode.parentNode.id}
                func(this.message2,this.message1);
               
            }
           this.inputmessage="";
           this.myRef.current.value="";
        }
       
        return(<div className="footer" id={id}><input ref={this.myRef} style={{type:"text"}} className="message-box" placeholder="Message" onChange={changeInput} onKeyPress={(e) => (e.key === 'Enter')&& changeValue(e)} ></input>
        <button className="send-button" onClick={(e)=>{changeValue(e)}}>send</button></div>)
    }
}