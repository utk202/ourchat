import React,{useState} from "react";
import {Channel,useChatContext,MessageTeam} from 'stream-chat-react';
import {ChannelInner,CreateChannel,EditChannel} from './';

const ChannelContainer = ({isCreating,setisCreating,setisEditing,createType,isEditing}) => {
  if(isCreating){
    return (
      <div className="channel_container">
        <CreateChannel createType={createType} setisCreating={setisCreating}/>
      </div>
    )
  }
  if(isEditing){
    return(
        <div className="channel__container">
          <EditChannel setisEditing={setisEditing}/>
        </div>
    )
  }
  const EmptyState = ()=>(
    <div className="channel-empty__container">
     <p className="channel-empty__first">This is the beginning of your chat history.</p>
     <p className="channel-empty__first">Send messages,attachments,links,emojis and  more !.</p>
    </div>
  )
  return( 
  <div className="channel__container">
       <Channel EmptyStateIndicator={EmptyState}
    Message={(messageProps,i) => <MessageTeam key={i} {...messageProps}/>}
    >
      <ChannelInner setisEditing={setisEditing}/>
      </Channel>
    </div>
    );
};

export default ChannelContainer;
