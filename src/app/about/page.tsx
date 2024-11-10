import Link from "next/link";
import styles from "../styles/about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About-Page</h1>

      <p className={styles.p}>
     
        Hi I am Fatima ,Fatima is a motivated learner who is passionate about <br />
        technology and its impact on society. As part of the Governor Sindh  <br />
        Initiative for IT, she is eager to expand her skills and knowledge in <br />
        information technology.
     
      </p>

      <ul className={styles.ul}>
        <li >
          <Link href="/">Go to Home Page</Link>
        </li>

        <li>
          <Link href="/contact " target="_blank">
            Go to Contact Page
          </Link>
        </li>
        <li>
          <Link href="/services"> Go to Services Page</Link>
        </li>
      </ul>
    </div>
  );
}
