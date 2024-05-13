import {
  HiMenu,
  HiSpeakerphone,
  HiDotsVertical,
  HiUserCircle,
  HiFolder,
} from "react-icons/hi";
import { MdGroups2, MdSettings, MdManageAccounts } from "react-icons/md";

export default function Setting({
  userSelectTopMenu,
  openSettingModal,
  setOpenSettingModal,
  setSettingComponent,
}) {
  return (
    <div className="Setting">
      <div className="setting-navbar">
        <h4>Настройки</h4>
        <button>
          <HiDotsVertical />
        </button>
        <span
          onClick={() => setOpenSettingModal(!openSettingModal)}
          className="rodal-close"
        ></span>
      </div>
      <div className="title">
        <img src={userSelectTopMenu.image} />
        <div>
          <h1>{userSelectTopMenu.user}</h1>
          <p className="phone">{userSelectTopMenu.phone}</p>
          <p>{userSelectTopMenu.username}</p>
        </div>
      </div>
      <div className="another">
        <div
          className="change-profile"
          onClick={() => {
            setSettingComponent("changeprofile");
          }}
        >
          <div className="icon">
            <div className="svg">
              <HiUserCircle />
            </div>
          </div>
          <h4>Изменить профиль</h4>
        </div>
        <div
          className="accounts-managemant"
          onClick={() => setOpenSettingModal(false)}
        >
          <div className="icon">
            <div style={{ background: "#F06964" }} className="svg">
              <MdManageAccounts />
            </div>
          </div>
          <h4>Управления аккаунта</h4>
        </div>
        <div
          className="groups-managemant"
          onClick={() => setOpenSettingModal(false)}
        >
          <div className="icon">
            <div style={{ background: "#F06964" }} className="svg">
              <HiFolder />
            </div>
          </div>
          <h4>Управления группы</h4>
        </div>
        <div
          className="channels-managemant"
          onClick={() => setOpenSettingModal(false)}
        >
          <div className="icon">
            <div style={{ background: "#F06964" }} className="svg">
              <HiSpeakerphone />
            </div>
          </div>
          <h4>Управления каналы</h4>
        </div>
      </div>
    </div>
  );
}
