import ss from './Services.module.css'
import as from '../../App.module.css'
import ServicesDesc from './ServicesDesc/ServicesDesc';
function Services() {

  return (
    <div className={ss.Services}>
      <div className={`${as.container} ${as.middle}`}>
        <div className={ss.title}>
          <img src="paw.png" alt="paw" />
          <h2>Our Services</h2>
        </div>
        <p className={as.subtitle}>Best pets are waiting for adoption. Find out the the perfect <br></br> one you will like it. It’s our promise.</p>
        <div className={as.content}>
          <ul className={ss.ul}>
            <li><ServicesDesc img = "injection.png" title = "Vaccination"/></li>
            <li><ServicesDesc img = "cat.png" title = "Pet Grooming"/></li>
            <li><ServicesDesc img = "nurse2.png" title = "Veterinary"/></li>
            <li><ServicesDesc img = "hands.png" title = "Cleaning"/></li>
          </ul>
        </div>

        <div className={ss.buttonsBlock}>
          <button className={as.btn}>Learn More</button>
          <img src="vectors.png" alt="vector" />
        </div>
        
      </div>
    </div>
  );
}

export default Services;
