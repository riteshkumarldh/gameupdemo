import { useState } from "react";
import AccountSettings from "./AccountSettings";
import EditAccountSettings from "./EditAccountSettings";

// img
import userIcon from "../../assets/icons/accountUser.svg";

const Settings = () => {
  const [editMode, setEditMode] = useState(false);
  const [settingsForm, setSettingsForm] = useState({
    uname: "John Smith",
    address: "Address line 1 Address line 2 city, ST 12345",
    email: "gameup-allday@email.com",
    password: "gameup",
    cpassword: "gameup",
  });

  return (
    <div className="settings__account">
      <div className="settings__top">
        <div className="settings__top--left">
          <img src={userIcon} alt="save" />
          <span>Account</span>
        </div>
        <div className="settings__top--right">
          {!editMode ? (
            <button onClick={() => setEditMode(true)} type="button">
              edit
            </button>
          ) : (
            <button onClick={() => setEditMode(false)} type="button">
              save
            </button>
          )}
        </div>
      </div>

      <div className="settings__account--bottom">
        {!editMode ? (
          <AccountSettings settingsForm={settingsForm} />
        ) : (
          <EditAccountSettings
            settingsForm={settingsForm}
            setSettingsForm={setSettingsForm}
          />
        )}
      </div>
    </div>
  );
};

export default Settings;
