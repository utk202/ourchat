import React,{useState} from "react";
import { useChatContext } from "stream-chat-react";
import { UserList } from "./";
import { CloseCreateChannel } from "../assets";
const ChannelNameInput = ({ channelName = "", setChannelName }) => {
  const handleChange = (event) => {
    event.preventDefault();
    setChannelName(event.target.value);
  }
  return (
    <div className="channel-name-input__wrapper">
      <p>Name</p>
      <input
        value={channelName}
        onChange={handleChange}
        placeholder="channel-name"
      />
      <p>Add Members</p>
    </div>
  );
};
const CreateChannel = ({createType,setisCreating}) => {
  const{client,setActiveChannel}=useChatContext();
  const [selectedUsers,setselectedUsers]=useState([client.userID || '']);
  const [channelName,setChannelName]=useState('');
  return (
    <div className="create-channel__container">
      <div className="create-channel__header">
        <p>{createType==='team' ? 'Create a New Channel':'Send a Direct Message'}</p>
        <CloseCreateChannel setisCreating={setisCreating}/>
        </div>
        {createType==='team' && <ChannelNameInput channelName={channelName} setChannelName={setChannelName}/>}
      <UserList setselectedUsers={setselectedUsers}/>
    </div>
  );
};

export default CreateChannel;
