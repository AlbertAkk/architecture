import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footerWrapper">
      <div className="footerBlock">
        <div className="footerInfo">
          <h3 className="companyName">ArchiVision</h3>
          <div className="poweredRights">
            <p className="poweredBy">Powered by Webflow</p>
            <p className="rightsReserved">
              All rights reserved ArchiVision, Inc. Licensing
            </p>
          </div>
        </div>
        <div className="socialMediaList">
          <Link
            to="https://twitter.com/"
            target="_blank"
            className="twitter"
          ></Link>
          <Link
            to="https://www.instagram.com/"
            target="_blank"
            className="instagram"
          ></Link>
          <Link
            to="https://www.facebook.com/"
            target="_blank"
            className="facebook"
          ></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
