import sds from './ServicesDesc.module.css'
import as from '../../../App.module.css'
import { useState } from 'react';

function ServicesDesc(props) {

  const [orangeBack, setOrangeBack] = useState(false)
  

  return (
    <div className={sds.ServicesDesc}>
      <div className={`${sds.block} ${orangeBack ?sds.orange:null}`} onMouseOver={()=>setOrangeBack(true)} onMouseOut={()=>setOrangeBack(false)}>
        <img src={props.img} alt="img" />
        <span className={sds.span}>{props.title}</span>
        <p className={sds.p}>Perfect one you will like it. It’s our promise.</p>
      </div>
    </div>
  );
}

export default ServicesDesc;
