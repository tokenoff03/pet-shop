import gs from './Groomers.module.css'
import as from '../../App.module.css'
import Users from './Users/Users';

function Groomers() {
  return (
    <div className={gs.Groomers}>
      <div className={`${as.container} ${gs.middle}`}>
        <img className={gs.icons} src="groomersIcon.png" alt="Icons" />
        <h2 className={gs.h2}>Our Groomers</h2>
        <div className={`${as.content} ${gs.content}`}>
          <Users img = "user1.png" name="Adam Smith" profession="Veterinarian"/>
          <Users img = "user2.png" name="Morgan Mark" profession="Trainer"/>
          <Users img = "user3.png" name="Ana Fargun" profession="Trainer"/>
          <Users img = "user4.png" name="Mouran Maz" profession="Care Taker"/>
        </div>

        <button className={as.btn}>View Team</button>
      </div>
    </div>
  );
}



export default Groomers;
