const EditAccountSettings = ({ settingsForm, setSettingsForm }) => {
  const handlaChange = (e) => {
    setSettingsForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className="account__settings">
      <div>
        <label htmlFor="uname" className="account__setting--title">
          Name
        </label>
        <input
          value={settingsForm.uname}
          onChange={handlaChange}
          type="text"
          name="uname"
          id="uname"
        />
      </div>
      <div>
        <label htmlFor="address" className="account__setting--title">
          address
        </label>
        <textarea
          value={settingsForm.address}
          onChange={handlaChange}
          name="address"
          id="address"
        ></textarea>
      </div>
      <div>
        <label htmlFor="email" className="account__setting--title">
          email address
        </label>
        <input
          value={settingsForm.email}
          onChange={handlaChange}
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div>
        <label htmlFor="password" className="account__setting--title">
          password
        </label>
        <input
          value={settingsForm.password}
          onChange={handlaChange}
          type="password"
          name="password"
          id="password"
        />
      </div>
      <div>
        <label htmlFor="cpassword" className="account__setting--title">
          confirm password
        </label>
        <input
          value={settingsForm.cpassword}
          onChange={handlaChange}
          type="password"
          name="cpassword"
          id="cpassword"
        />
      </div>
    </form>
  );
};

export default EditAccountSettings;
