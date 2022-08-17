import { Component } from "react";

export default function Messagebody (props){
    // console.log(props)
    const {messagearr}=props;
    console.log(messagearr)
   
        return(
            <div className="message-container" id="messagecontainer">
                {(messagearr).map((item) => {
                if(item.messagedata){
                    if (item.status === "sender") {
                    return <div style={{height:"40px",textAlign:"right",width:"95%"}}>{item.messagedata}</div>;
                    }
                     else if (item.status==='receiver') {
                        let senderlogo;
                        if((item.sendername).indexOf(" ")===-1){
                            senderlogo=item.sendername[0];
                            }
                            else{
                              for(let i=0;i<(item.sendername).length;i++){
                                if(item.sendername[i]===" ")
                                {
                                 senderlogo=item.sendername[0]+item.sendername[i+1];
                                }
                              }
                            }
                    return (<div style={{textAlign:"left",width:"95%" ,height:"40px",display:"flex",margin:"5px"}}><div id="receiverlogo">{senderlogo}</div><div>{item.messagedata}</div></div>);
                    }
                }
                else return;
             }) }
            </div>
        )
    }
