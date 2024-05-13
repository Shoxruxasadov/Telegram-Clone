import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Rodal from "rodal";
import axios from "axios";
import {
  HiMenu,
  HiSpeakerphone,
  HiDotsVertical,
  HiUserCircle,
  HiFolder,
} from "react-icons/hi";
import { FaPlus, FaCamera } from "react-icons/fa";
import { MdGroups2, MdSettings, MdManageAccounts } from "react-icons/md";
import { RiGroupFill, RiArrowDownSLine } from "react-icons/ri";
import ChannelsFn from "./components/ChannelsFn";
import GroupsFn from "./components/Groups";
import Setting from "./components/setting/Setting";
import ChangeProfile from "./components/setting/ChangeProfile";

function App() {
  const [users, setUsers] = useState([]);
  const [userSelectTopMenu, setUserSelectTopMenu] = useState({});
  const [channels, setChannels] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [groups, setGroups] = useState([]);
  const [messages, setMessages] = useState([]);
  // Draw Components useState
  const [componentsMain, setComponentsMain] = useState("text");
  const [componentsCGS, setComponentsCGS] = useState("channel");
  // Top menu Selected Components useState
  const [menuRodal, setMenuRodal] = useState(false);
  const [openCloseUsers, setOpenCloseUsers] = useState(true);
  // Add User Components useState
  const [addUserModal, setAddUserModal] = useState(false);
  const [addUserInpError, setAddUserInpError] = useState(false);
  const [addUserInpImage, setAddUserInpImage] = useState("");
  const [addUserInpName, setAddUserInpName] = useState("");
  // Add Group Components useState
  const [addGroupModal, setAddGroupModal] = useState(false);
  const [addGroupInpError, setAddGroupInpError] = useState(false);
  const [addGroupInpImage, setAddGroupInpImage] = useState("");
  const [addGroupInpName, setAddGroupInpName] = useState("");
  // Add Channel Components useState
  const [addChannelModal, setAddChannelModal] = useState(false);
  const [addChannelInpError, setAddChannelInpError] = useState(false);
  const [addChannelInpImage, setAddChannelInpImage] = useState("");
  const [addChannelInpName, setAddChannelInpName] = useState("");
  // Setting Components useState
  const [openSettingModal, setOpenSettingModal] = useState(false);
  const [settingComponent, setSettingComponent] = useState("setting");
  const [settingAnother, setSettingAnother] = useState(true);
  const [settingAnotherComponents, setSettingAnotherComponents] =
    useState("ChangeProfileName");

  function x() {
    axios.get("http://localhost:3001/users").then((res) => setUsers(res.data));
  }

  useEffect(() => {
    axios.get("http://localhost:3001/users").then((res) => setUsers(res.data));
    SelectUser(1);
  }, []);

  function SelectUser(id) {
    axios
      .get(`http://localhost:3001/users/${id}`)
      .then((res) => setUserSelectTopMenu(res.data));
    axios
      .get(`http://localhost:3001/users/${id}/channels`)
      .then((res) => setChannels(res.data));
    axios
      .get(`http://localhost:3001/users/${id}/groups`)
      .then((res) => setGroups(res.data));
    setMenuRodal(false);
  }

  function NextAddUser() {
    if (!addUserInpName) {
      setAddUserInpError(true);
      setTimeout(() => {}, 3000);
    } else {
      axios
        .post(`http://localhost:3001/users`, {
          user: addUserInpName,
          image: addUserInpImage,
        })
        .then(() => {
          x();
          SelectUser(users.length + 1);
        });
      setAddUserModal(false);
    }
    setAddUserInpImage("");
    setAddUserInpName("");
  }

  function NextAddGroup() {
    if (!addGroupInpName) {
      setAddGroupInpError(true);
      setTimeout(() => {
        setAddGroupInpError(false);
      }, 3000);
    } else {
      axios
        .post(`http://localhost:3001/users/${userSelectTopMenu.id}/groups`, {
          group: addGroupInpName,
          image: addGroupInpImage,
        })
        .then(() => {
          x();
          SelectUser(userSelectTopMenu.id);
        });
      setAddGroupModal(false);
    }
    setAddGroupInpImage("");
    setAddGroupInpName("");
  }

  function NextAddChannel() {
    if (!addChannelInpName) {
      setAddChannelInpError(true);
      setTimeout(() => {
        setAddChannelInpError(false);
      }, 3000);
    } else {
      axios
        .post(`http://localhost:3001/users/${userSelectTopMenu.id}/channels`, {
          channel: addChannelInpName,
          image: addChannelInpImage,
        })
        .then(() => {
          x();
          SelectUser(userSelectTopMenu.id);
        });
      setAddChannelModal(false);
    }
    setAddChannelInpImage("");
    setAddChannelInpName("");
  }

  return (
    <div className="App">
      <div className="modal">
        <Rodal className="menuRodal" visible={menuRodal}>
          <div
            onClick={() => setMenuRodal(!menuRodal)}
            className="closeModal"
          ></div>
          <div className="user-select">
            <img
              onClick={() => setOpenCloseUsers(!openCloseUsers)}
              src={userSelectTopMenu.image}
            />
            <h1 onClick={() => setOpenCloseUsers(!openCloseUsers)}>
              {userSelectTopMenu.user}
            </h1>
            <p>Установить эмодзи-статус</p>
            <RiArrowDownSLine
              onClick={() => setOpenCloseUsers(!openCloseUsers)}
              style={{
                transform: openCloseUsers ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </div>
          <div
            className="users-adding"
            style={{
              height: openCloseUsers
                ? `calc(55px + (${users.length} * 45px))`
                : "0px",
              padding: openCloseUsers ? `5px 0px` : "0px",
              borderBottom: openCloseUsers
                ? "1px solid #1C1F20"
                : "0px solid #1C1F20",
            }}
          >
            {users.map((user, index) => (
              <div
                onClick={() => SelectUser(user.id)}
                key={index}
                className="user"
              >
                <img src={user.image} />
                <h4>{user.user}</h4>
              </div>
            ))}
            <div
              onClick={() => {
                setAddUserModal(!addUserModal);
                setMenuRodal(false);
              }}
              className="add-user"
            >
              <div className="icon">
                <div className="svg">
                  <FaPlus />
                </div>
              </div>
              <h4>Добавить аккаунт</h4>
            </div>
          </div>
          <div className="another">
            <div
              onClick={() => {
                setAddGroupModal(!addGroupModal);
                setMenuRodal(false);
              }}
              className="add-group"
            >
              <div className="icon">
                <div className="svg">
                  <RiGroupFill />
                </div>
              </div>
              <h4>Создать группу</h4>
            </div>
            <div
              onClick={() => {
                setAddChannelModal(!addChannelModal);
                setMenuRodal(false);
              }}
              className="add-channel"
            >
              <div className="icon">
                <div className="svg">
                  <HiSpeakerphone />
                </div>
              </div>
              <h4>Создать канал</h4>
            </div>
            <div
              onClick={() => {
                setOpenSettingModal(!openSettingModal);
                setMenuRodal(false);
                setSettingComponent("setting");
              }}
              className="user-setting"
            >
              <div className="icon">
                <div className="svg">
                  <MdSettings />
                </div>
              </div>
              <h4>Настройки</h4>
            </div>
          </div>
          <div className="created">
            <a href="https://www.shoxruxasadov.uz/">
              <div>
                <h1>Shokhdev</h1>
                <p>created by</p>
              </div>
            </a>
          </div>
        </Rodal>
        <Rodal className="addUser" visible={addUserModal}>
          <div
            style={{ top: addUserInpError ? "-380px" : "-440px" }}
            className="wrong"
          >
            Заполните информацию
          </div>
          <div className="form">
            <input
              value={addUserInpImage}
              onChange={(e) => setAddUserInpImage(e.target.value)}
              className="fileImage"
              type="text"
            />
            <FaCamera />
            <div className="addInputs">
              <input
                value={addUserInpName}
                onChange={(e) => setAddUserInpName(e.target.value)}
                id="formes"
                type="text"
                required
              />
              <label htmlFor="formes">Название профиля</label>
            </div>
          </div>
          <div className="submitButtons">
            <button onClick={() => setAddUserModal(false)}>Отмена</button>
            <button onClick={NextAddUser}>Далее</button>
          </div>
        </Rodal>
        <Rodal className="addGroup" visible={addGroupModal}>
          <div
            style={{ top: addGroupInpError ? "-380px" : "-440px" }}
            className="wrong"
          >
            Заполните информацию
          </div>
          <div className="form">
            <input
              value={addGroupInpImage}
              onChange={(e) => setAddGroupInpImage(e.target.value)}
              className="fileImage"
              type="text"
            />
            <FaCamera />
            <div className="addInputs">
              <input
                value={addGroupInpName}
                onChange={(e) => setAddGroupInpName(e.target.value)}
                id="formes"
                type="text"
                required
              />
              <label htmlFor="formes">Название группы</label>
            </div>
          </div>
          <div className="submitButtons">
            <button onClick={() => setAddGroupModal(false)}>Отмена</button>
            <button onClick={NextAddGroup}>Далее</button>
          </div>
        </Rodal>
        <Rodal className="addChannel" visible={addChannelModal}>
          <div
            style={{ top: addChannelInpError ? "-380px" : "-440px" }}
            className="wrong"
          >
            Заполните информацию
          </div>
          <div className="form">
            <input
              value={addChannelInpImage}
              onChange={(e) => setAddChannelInpImage(e.target.value)}
              className="fileImage"
              type="text"
            />
            <FaCamera />
            <div className="addInputs">
              <input
                value={addChannelInpName}
                onChange={(e) => setAddChannelInpName(e.target.value)}
                id="formes"
                type="text"
                required
              />
              <label htmlFor="formes">Название канала</label>
            </div>
          </div>
          <div className="submitButtons">
            <button onClick={() => setAddChannelModal(false)}>Отмена</button>
            <button onClick={NextAddChannel}>Далее</button>
          </div>
        </Rodal>
        <Rodal
          className="openChannel"
          visible={openSettingModal}
          onClose={() => setOpenSettingModal(false)}
        >
          {settingComponent === "setting" && (
            <Setting
              userSelectTopMenu={userSelectTopMenu}
              setOpenSettingModal={setOpenSettingModal}
              openSettingModal={openSettingModal}
              setSettingComponent={setSettingComponent}
            />
          )}
          {settingComponent === "changeprofile" && (
            <ChangeProfile
              userSelectTopMenu={userSelectTopMenu}
              setOpenSettingModal={setOpenSettingModal}
              openSettingModal={openSettingModal}
              setSettingComponent={setSettingComponent}
              setSettingAnotherComponents={setSettingAnotherComponents}
              setSettingAnother={setSettingAnother}
            />
          )}
        </Rodal>
        <Rodal
          className="settingAnother"
          visible={settingAnother}
          onClose={() => setSettingAnother(false)}
        >
          {settingAnotherComponents === "ChangeProfileName" && (
            <div className="setting-another-all">
              <div className="setting-navbar">
                <h4>Редактирование имени</h4>
              </div>
              <div className="settingAnotherAllContent">
                <input type="text" />
              </div>
            </div>
          )}
          {settingAnotherComponents === "ChangeProfilePhone" && (
            <div className="setting-another-all">
              <div className="setting-navbar">
                <h4>Номер телефона</h4>
              </div>
              <div className="settingAnotherAllContent">
                <input type="text" />
              </div>
            </div>
          )}
          {settingAnotherComponents === "ChangeProfileUsername" && (
            <div className="setting-another-all">
              <div className="setting-navbar">
                <h4>Имя пользователя</h4>
              </div>
              <div className="settingAnotherAllContent">
                <input type="text" />
              </div>
            </div>
          )}
        </Rodal>
      </div>
      <div className="sidebar">
        <div onClick={() => setMenuRodal(!menuRodal)} className="menu">
          <HiMenu />
        </div>
        <div onClick={() => setComponentsCGS("group")} className="sideItems">
          <MdGroups2 />
          <span>Группа</span>
        </div>
        <div
          onClick={() => setComponentsCGS("channel")}
          className="sideItems active"
        >
          <HiSpeakerphone />
          <span>Канал</span>
        </div>
      </div>
      <div onClick={() => setComponentsMain("main")} className="cgs">
        <div className="cgs-header">
          <input type="text" placeholder="Поиск" />
        </div>
        {componentsCGS === "channel" && (
          <ChannelsFn channels={channels} HiSpeakerphone={HiSpeakerphone} />
        )}
        {componentsCGS === "group" && (
          <GroupsFn groups={groups} RiGroupFill={RiGroupFill} />
        )}
      </div>
      <div className="main">
        {componentsMain === "text" && (
          <div className="main-title">
            <h1>Выберите, кому хотели бы написать</h1>
          </div>
        )}
        {componentsMain === "main" && (
          <div className="main-wrapper">
            <div className="main-header"></div>
            <div className="main-content"></div>
            <div className="main-footer"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
