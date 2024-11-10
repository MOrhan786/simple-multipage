"use client";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import styles from "../styles/services.module.css";

function ServicesPage() {
  return (
    <div className={styles.color}>
      <h1 className={styles.title}>Services</h1>

      <div className={styles.p}>
        <Typewriter
          options={{
            strings: ["Hello", "This is my Services  page"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <ul className={styles.li}>
        <li>
          <Link href="/services/services-nested">
            Go to Services Nested Page
          </Link>
        </li>
      </ul>
      <ul className={styles.ul}>
        <li>
          <Link href="/">Go to HomePage</Link>
        </li>
        <li>
          <Link href="/about">Go to About Us</Link>
        </li>

        <li>
          <Link href="/contact " target="_blank">
            Go to Contact us
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default ServicesPage;
