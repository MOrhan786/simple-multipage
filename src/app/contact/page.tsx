"use client";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import styles from "../styles/contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Contect-Page</h1>
      <div className={styles.p}>
      <Typewriter
          options={{
            strings: ["Hello", "This is a contect page"],
            autoStart: true,
            loop: true,
          }}
        />

      </div>
   
  

      <ul className={styles.ul}>
        <li>
          <Link href="/">Go to HomePage</Link>
        </li>
        <li>
          <Link href="/about">Go to About Us</Link>
        </li>

        <li>
          <Link href="/services">Go to Services</Link>
        </li>
      </ul>
    </div>
  );
}
