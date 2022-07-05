import React, { useState } from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelListContainer, ChannelContainer, Auth } from "./components/";
import "./App.css";
import "stream-chat-react/dist/css/index.css";
const apiKey = "hm652r3z447x";
const cookies = new Cookies();
const client = StreamChat.getInstance(apiKey);
const authtoken = cookies.get("token");
if (authtoken) {
  client.connectUser(
    {
      name: cookies.get("username"),
      fullName: cookies.get("fullName"),
      id: cookies.get("userId"),
      phoneNumber: cookies.get("phoneNumber"),
      image: cookies.get("avatarURL"),
      hashedPassword: cookies.get("hashedPassword"),
    },
    authtoken
  );
}
const App = () => {
  const [createType, setcreateType] = useState("");
  const [isCreating, setisCreating] = useState("");
  const [isEditing, setisEditing] = useState("");
  if (!authtoken) return <Auth />;
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer
          isCreating={isCreating}
          setisCreating={setisCreating}
          setisEditing={setisEditing}
          setcreateType={setcreateType}
        />
        <ChannelContainer
          isCreating={isCreating}
          setisCreating={setisCreating}
          isEditing={isEditing}
          setisEditing={setisEditing}
          createType={createType}
        />
      </Chat>
    </div>
  );
};

export default App;
