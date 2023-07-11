const AccountSettings = () => {
  return (
    <div className="account__settings">
      <div>
        <h4 className="account__setting--title">Name</h4>
        <p>jane smith</p>
      </div>
      <div>
        <h4 className="account__setting--title">Address</h4>
        <p>Address line 1</p>
        <p>Address line 1</p>
        <p>city, ST 12345</p>
      </div>
      <div>
        <h4 className="account__setting--title">Email addess</h4>
        <p>gameup-allday@email.com</p>
      </div>
      <div>
        <h4 className="account__setting--title">password</h4>
        <p>*********</p>
      </div>
    </div>
  );
};

export default AccountSettings;
