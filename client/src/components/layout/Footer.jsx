import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logo.png";

const Footer = () => {

  return (
    <footer className="bg-black text-white pt-20 pb-8 overflow-hidden">

      <div className="container-custom">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 pb-14 border-b border-white/10">

          {/* Brand */}
          <div className="max-w-[320px]">

            <Image
              src={logo}
              alt="A Promise Store"
              width={100}
              className="mb-6"
            />

            <p className="text-gray-400 leading-8 text-[15px]">

              Elegant modest fashion for modern women.
              Premium quality with timeless style and
              luxury comfort.

            </p>

          </div>

          {/* Links */}
          <div>

            <h3 className="text-[24px] font-semibold mb-6">

              Quick Links

            </h3>

            <ul className="space-y-4 text-gray-400 text-[15px]">

              <li>
                <Link
                  href="/"
                  className="hover:text-white transition duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/shop"
                  className="hover:text-white transition duration-300"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  href="/categories"
                  className="hover:text-white transition duration-300"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-[24px] font-semibold mb-6">

              Contact

            </h3>

            <ul className="space-y-4 text-gray-400 text-[15px] leading-7">

              <li>
                support@apromisestore.com
              </li>

              <li>
                +20 100 000 0000
              </li>

              <li>
                Cairo, Egypt
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">

          <p>
            © 2026 A Promise Store. All rights reserved.
          </p>

          <p>
            Designed by Eng: Ayman Mamdouh
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;