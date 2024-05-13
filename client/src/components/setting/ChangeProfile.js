import {
  HiMenu,
  HiSpeakerphone,
  HiDotsVertical,
  HiUserCircle,
  HiFolder,
  HiArrowLeft,
  HiUser,
  HiAtSymbol,
} from "react-icons/hi";
import {
  MdGroups2,
  MdSettings,
  MdManageAccounts,
  MdCall,
} from "react-icons/md";

export default function ChangeProfile({
  userSelectTopMenu,
  openSettingModal,
  setOpenSettingModal,
  setSettingComponent,
  setSettingAnotherComponents,
  setSettingAnother,}) {
  return (
    <div className="Setting">
      <div className="setting-navbar">
        <div className="navbar-title">
          <button onClick={() => setSettingComponent("setting")}>
            <HiArrowLeft />
          </button>
          <h4>Информация</h4>
        </div>
        <button>
          <HiDotsVertical />
        </button>
        <span
          onClick={() => setOpenSettingModal(!openSettingModal)}
          className="rodal-close"
        ></span>
      </div>
      <div className="titleChangeProfile">
        <img src={userSelectTopMenu.image} />
        <div>
          <h1>{userSelectTopMenu.user}</h1>
        </div>
      </div>
      <div className="another">
        <div
          className="change-name"
          onClick={() => {
            setSettingAnother(true);
            setSettingAnotherComponents("ChangeProfileName");
          }}
        >
          <div className="changeTitle">
            <div className="icon">
              <div className="svg">
                <HiUser />
              </div>
            </div>
            <h4>Имя</h4>
          </div>
          <p>{userSelectTopMenu.user}</p>
        </div>
        <div
          className="change-phone"
          onClick={() => {
            setSettingAnother(true);
            setSettingAnotherComponents("ChangeProfilePhone");
          }}
        >
          <div className="changeTitle">
            <div className="icon">
              <div style={{ background: "#F06964" }} className="svg">
                <MdCall />
              </div>
            </div>

            <h4>Номер телефона</h4>
          </div>
          <p>{userSelectTopMenu.phone}</p>
        </div>
        <div
          className="change-username"
          onClick={() => {
            setSettingAnother(true);
            setSettingAnotherComponents("ChangeProfileUsername");
          }}
        >
          <div className="changeTitle">
            <div className="icon">
              <div style={{ background: "#F06964" }} className="svg">
                <HiAtSymbol />
              </div>
            </div>
            <h4>Имя пользователя</h4>
          </div>
          <p>{userSelectTopMenu.username}</p>
        </div>
      </div>
    </div>
  );
}
