
"use client";
import Typewriter from "typewriter-effect";
import Link from "next/link";


export default function HomePage() {
  return (
    <div className="bg-slate-300 h-[700px]  ">

      <nav className="text-white  flex justify-center items-center h-20 bg-slate-500 ">
      
        <ul className="flex gap-8 mr-4 cursor-pointer ">
          <li>
            <Link className="hover:text-blue-300" href="/">
              HomePage
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-300" href="/about">
              About Us
            </Link>
          </li>
          {/* Here we used Target tag ( which is open in next tab)*/}
          <li>
            <Link
              className="hover:text-blue-700"
              href="/contact "
              target="_blank"
            >
              Contact us
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-600" href="/services">

              Services
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center items-center text-4xl mt-5 text-teal-800">
      <Typewriter
          options={{
            strings: ["Aslam-o-Alaikum", "I am student of  ", "Artificial Intelligence,Web 3.0 & Metaverse"],
            autoStart: true,
            loop: true,
            
          }}
        />
        </div>
      <div className=" mt-60">
      <h1 className="text-center text-4xl  cursor-pointer  ">Home Page</h1>
      </div>
    </div>
      
  );
}
