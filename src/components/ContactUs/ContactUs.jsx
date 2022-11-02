import cs from './ContactUs.module.css'
import as from '../../App.module.css'
function ContactUs() {
  return (
    <div className={cs.ContactUs}>
      <div className={as.container}>
        <div className={as.content}>
          <div className={cs.leftSide}>
            <h2>Lets book a call and stay connected</h2>

            <form action="">
              <label for="1st">
                <input type="checkbox" id="1st" className={cs.checkbox}></input>
                <span className={cs.fake}></span>
                Vaccination Service 
              </label>
              
              <label for="2nd">
                <input type="checkbox" id="2nd" className={cs.checkbox}></input>
                <span className={`${cs.fake} ${cs.second}`}></span>
                Veterinary Service
              </label>
            </form>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className={cs.buttonsBlock}>
              <button className={as.btn}>Book a Schedule</button>
              <img src="phoneIcon.png" alt="phone" />
              <a href="#">Emergency Call</a>
            </div>
          </div>
          <div className={cs.rightSide}>
            <img src="nurse.png" alt="nurse" />
            <img className={cs.icons} src="nurseIcon.png" alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
