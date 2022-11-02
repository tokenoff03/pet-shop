import as from '../../../App.module.css'
import is from './InfoContent.module.css'

function InfoContent(props) {
  return (
    <div className={is.InfoContent}>
      <div className={`${is.content} ${props.border}`}>
        <p>{props.title}</p>
        <span>{props.subtitle}</span>
      </div>
      
    </div>
  );
}

export default InfoContent;
