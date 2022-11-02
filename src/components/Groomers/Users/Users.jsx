import us from './Users.module.css'



function Users(props) {
  return (
    <div className={us.Users}>
      <div className={us.userInfo}>
        <img src={props.img} alt="user" />
        <p className={us.userName}>{props.name}</p>
        <p className={us.profession}>{props.profession}</p>
      </div>
    </div>
  );
}

export default Users;
