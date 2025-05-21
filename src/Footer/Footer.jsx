import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-10 ">
      <div className="max-w-10/12 mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <p>Email: gardening@hub.com</p>
          <p>Phone: +880 1979962617</p>
        </div>

        {/* Terms */}
        <div>
          <h4 className="text-lg font-semibold">Terms & Policies</h4>
          <p><a href="#" className="hover:underline">Privacy Policy</a></p>
          <p><a href="#" className="hover:underline">Terms of Service</a></p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4 mt-2 text-xl">
            <a href="https://www.facebook.com/profile.php?id=61557281361139" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-gray-300" />
            </a>
            <a href="https://x.com/SkRased19466" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-gray-300" />
            </a>
            <a href="https://www.instagram.com/sksayem2006/" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-sm mt-10 text-green-100">
        &copy; {new Date().getFullYear()} Gardening Hub. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
