import as from '../../App.module.css'
import ms from './Main.module.css'
import InfoContent from './InfoContent/InfoContent';
function Main() {
  return (
    <div className={ms.Main}>
      <div className={as.container} >

        <div className={as.content}>

          <div className={ms.leftSide}>
            <img className={ms.cat} src="mainCat.png" alt="Cat" />
            <img className={ms.dog} src="mainDog.png" alt="Dog" />
          </div>
          <img className={ms.star} src="Star 1.png" alt="star" />

          <div className={ms.rightSide}>
            <h1>We take care of your pet and help them to grow</h1>
            <p>Best pets are waiting for adoption. Find out the the perfect one you will like it. It’s our promise.</p>
            <img className={ms.loveEyes} src="loveSmile.png" alt="smile" />
            <div className={ms.contactUs}>
              <button className={as.btn}>Contact Us</button>
              <img src="contactUS.png" alt="" />
            </div>

            <div className={ms.promise}>
              <img src="paw.png" alt="paw" />
              <p><span>How to take care</span> <br></br>perfect one you will like it. It’s our promise</p>
            </div>

            <img className={ms.ringImg} src="rings.png" alt="ring" />
          </div>
        </div>

        <img className={ms.paw} src="paw.png" alt="paw" />

        <div className={ms.info}>
          <InfoContent title = "Adopted" subtitle = "2500+"/>
          <div className={ms.border}></div>
          <InfoContent title = "Customers" subtitle = "1850+"/>
          <div className={`${ms.border} ${ms.border2}`}></div>
          <InfoContent title = "Testimonials" subtitle = "1300+"/>
          <div className={ms.report}>
            <div className={ms.cont}>
              <p>Lorem ipsum dolor sit amet, consectetur ipcing elit, sed do eiusmod tempor incididu ut labore et quis nostrud sed do eius .....</p>
              <div className={ms.hr}></div>
              <span>Daniel Kahneman</span>
              <img src="reportUser.png" alt="user" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
