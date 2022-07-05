import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";
import Cookies from "universal-cookie";
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";
const SideBar = ({ logout }) => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={HospitalIcon} alt="hospital" width="30" />
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner" onClick={logout}>
        <img src={LogoutIcon} alt="hospital" width="30" />
      </div>
    </div>
  </div>
);
const CompanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">ourchat</p>
  </div>
);
const cookies = new Cookies();


const ChannelListContainer = ({
  isCreating,
  setisCreating,
  setcreateType,
  setisEditing,
}) => {
  const logout = () => {
    cookies.remove("token");
    cookies.remove("username");
    cookies.remove("fullName");
    cookies.remove("userId");
    cookies.remove("phoneNumber");
    cookies.remove("avatarURL");
    cookies.remove("hashedPassword");
    window.location.reload();
  };
  const listfn = (
    props
  ) => (
    <TeamChannelList
      {...props}
      type="team"
      isCreating={isCreating}
      setisCreating={setisCreating}
      setcreateType={setcreateType}
      setisEditing={setisEditing}
    />
  );
  const previewfn = (props) => <TeamChannelPreview {...props} type="team" />;
const Directlistfn = (
  props,
) => (
  <TeamChannelList
    {...props}
    type="messaging"
    isCreating={isCreating}
    setisCreating={setisCreating}
    setcreateType={setcreateType}
    setisEditing={setisEditing}
  />
);

const Directpreviewfn = (props) => (
  <TeamChannelPreview {...props} type="messaging" />
);
  return (
    <>
      <SideBar logout={logout} />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={listfn}
          Preview={previewfn}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={Directlistfn}
          Preview={Directpreviewfn}
        />
      </div>
    </>
  );
};

export default ChannelListContainer;
