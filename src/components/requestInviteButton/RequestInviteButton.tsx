import styles from "./RequestInviteButton.module.scss";

const RequestInviteButton: React.FC = () => {
  return (
    <button className={styles["request-invite-button"]}>Request Invite</button>
  );
};

export default RequestInviteButton;
