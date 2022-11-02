import fis from './FacilitiesInfo.module.css'
import as from '../../../App.module.css'

function FacilitiesInfo(props) {
  return (
    <div className={fis.FacilitiesInfo}>
      <h3 className={as.theme}>{props.title}</h3>
      <p>Ut enim ad minim  velit esse cillum dolore eu fugiat..</p>
    </div>
  );
}

export default FacilitiesInfo;
