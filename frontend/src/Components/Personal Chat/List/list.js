import  "./list.css";

const list = ({ conversations, currentUser }) => {
  return (
    <div className="list">
      {conversations.map((conversation) => {
        const user = conversation.members.find((member) => member !== currentUser._id);
        return (
          <div key={user} className="list-item">
            <div className="list-item-name">{user}</div>
          </div>
        );
      })}
    </div>
  );
}