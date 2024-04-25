import "./userinfo.css";

const UserInfo = ({ user }) => {
    return (
        <div className="userinfo">
            <div className="userinfo-name">{user.username}
                <img src={user.icon} alt={user.username} />
                <h2>{user.username}</h2>
            </div>

        </div>
    );
}