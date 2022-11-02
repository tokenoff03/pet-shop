import fis from './FooterInfo.module.css'
import as from '../../../App.module.css'
function FooterInfo(props) {
  
  return (
    <div className={fis.FooterInfo}>
      <div className={`${as.container} ${as.middle}`}>
        <span>{props.title}</span>
        <ul>
          {
            props.lists.map((item) => <li>{item}</li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default FooterInfo;
