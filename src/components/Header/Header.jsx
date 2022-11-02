import hs from './Header.module.css'
import as from '../../App.module.css'
function Header() {
  return (
    <div className="Header">
      <div className={hs.container}>
        <span className={as.headTitle}>Mew</span>
        <nav>
          <ul className={hs.ul}>
            <li><a href='#' className={hs.active}>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Facilities</a></li>
          </ul>
        </nav>
        <button className={hs.headerButton}>Sign up</button>
      </div>
    </div>
  );
}

export default Header;
