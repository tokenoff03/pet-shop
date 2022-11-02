import fs from './Footer.module.css'
import as from '../../App.module.css'
import FooterInfo from './FooterInfo/FooterInfo';
function Footer() {
  
  const footer = [
    {
      title: "Useful links",
      items: ["FAQs", "Shop", "Privacy Policy", "Terms of Use", "Site Map"]
    },
    {
      title: "Explore",
      items: ["About Us","Services", "Our Team","Adopt Pet"]
    },
    {
      title: "Contact Info",
      items: ["361-777-5681","654 White Avenue","Portland, TX 78374"]
    },
  ]


  return (
    <div className={fs.Footer}>
      <div className={as.container}>
        <div className={as.content}>
          <div className={fs.mainInfo}>
            <span className={as.headTitle}>Mew</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className={fs.social}>
              <img src="facebook.png" alt="social" />
              <img src="twitter.png" alt="social" />
              <img src="linkedIn.png" alt="social" />
              <img src="instagram.png" alt="social" />
            </div>
          </div>

          {
            footer.map((item) =>  <FooterInfo title={item.title} lists={item.items}/>)
          }


        </div>
        <div className={fs.hr}>
            
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
