import fs from './Facilities.module.css'
import as from '../../App.module.css'
import FacilitiesInfo from './FacilitiesInfo/FacilitiesInfo';

function Facilities() {
  return (
    <div className={fs.Facilities}>
      <div className={as.container}>
        <div className={fs.title}>
          <h2>Facilities we <br></br> provides</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        
        <div className={fs.content}>
          <img className={fs.bigDog} src="Dog2.png" alt="dog" />
          <div className={fs.infoBlock}>
            <FacilitiesInfo title="Feed Training"/>
            <FacilitiesInfo title="Health test"/>
            <FacilitiesInfo title="Vaccination"/>
          </div>
          
          <div className={fs.infoBlock}>
            <FacilitiesInfo title="Overnight Care"/>
            <FacilitiesInfo title="Medical Care"/>
            <FacilitiesInfo title="Traning Facility"/>
          </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default Facilities;
