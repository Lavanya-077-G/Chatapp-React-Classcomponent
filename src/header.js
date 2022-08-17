import { Component } from "react";

 export default class Header extends Component{
     constructor(props){
         super();
this.personname=props.val.name;
this.logoname=this.logoname.bind(this);
     }
logoname=()=>{
    let logo;
    let pos=(this.personname).indexOf(" ");
     if(pos===-1){
         logo=this.personname[0];
      
     }
     else{
       for(let i=0;i<(this.personname).length;i++){
         if(this.personname[i]===" ")
         {
             logo=this.personname[0]+this.personname[i+1];
         }
       }
     }
     return logo;
   }
    render(){
        return(<div className='header-detail'>
    <div className='logo'>{this.logoname()}</div>
    <div className='username'>{this.personname}</div>
  </div>)}
}