import ds from './DaCode.module.css'
import as from '../../App.module.css'
function DaCode() {

  return (
    <div className={ds.DaCode}>
      <div className={as.container}>
        <div className={as.content}>
          <div className={ds.leftSide}>
            <h2 className={ds.h2}>DaCode Blog</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <button className={as.btn}>Learn More</button>
          </div>
          <div className={ds.rightSide}>
            <img src="DaCodeDog.png" alt="Dog" />
            <div className={ds.descript}>
              <span>Why Your SaaS Business <br /> should use WordPress</span>
              <p>A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort</p>
              <div className={ds.buttons}>
                <button>&#8592;</button>
                <button>&#8594;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaCode;
