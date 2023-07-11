import Button from "../button/Button";

const HeaderActionButtons = () => {
  return (
    <div className="header__actions">
      <Button redirect="/login" varient="login" text="log in" />
      <Button redirect="/register" varient="join" text="join gameup" />
    </div>
  );
};

export default HeaderActionButtons;
