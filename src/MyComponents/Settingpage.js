import React, { useState } from "react";
import "./Settingpage.css";

const SettingsPage = () => {
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="settings-section">
        <h2>Profile</h2>
        <label>
          <span>Username</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>

      <div className="settings-section">
        <h2>Preferences</h2>
        <label>
          <span>Enable Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </label>
      </div>

      <button className="save-button">Save Changes</button>
    </div>
  );
};

export default SettingsPage;
