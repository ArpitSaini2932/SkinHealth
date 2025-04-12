import { Link } from 'react-router-dom';
import img from '../import/import';
const Footer = () => {
  return (
    <footer className="bg-white border-t text-sm text-gray-600 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        
        <div className='w-60 pr-10 mr-12'>
          <img src={img.skinHealth} alt="" />
          <p className="mt-2 text-[14px]">
            SkinHealth+ is an AI-powered platform that helps users analyze their skin condition,
            get expert-backed tips, and receive personalized product and care recommendations.
          </p>
          <div className="flex space-x-4 mt-4 text-sm font-medium">
        <Link><img className='w-12' src={img.facebook} alt="" ></img></Link> 
        <Link> <img className='w-12' src={img.insta} alt="" ></img></Link>  
        <Link>  <img className='w-16 ' src={img.linkedin} alt="" ></img></Link> 
        <Link>  <img className='w-12' src={img.twitter} alt="" ></img></Link> 
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-black mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/skin-analysis">AI Analysis</Link></li>
            <li><Link to="/consult">Derma Call</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/about">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-black mb-2">Shopping</h3>
          <ul className="space-y-1">
            <li><Link to="/payments">Payments</Link></li>
            <li><Link to="/delivery">Delivery options</Link></li>
            <li><Link to="/buyer-protection">Buyer protection</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-black mb-2">Resources</h3>
          <ul className="space-y-1">
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/help">Help center</Link></li>
            <li><Link to="/returns">Returns & refund</Link></li>
            <li><Link to="/privacy">Privacy policy</Link></li>
            <li><Link to="/feedback">Survey & feedback</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-black mb-2">Pages</h3>
          <ul className="space-y-1">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

      </div>

      <div className="text-center border-t pt-4 mt-10 text-xs text-gray-500">
        © 2023 SkinHealth+ Inc. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
