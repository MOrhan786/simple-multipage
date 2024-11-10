
import styles from "../services-nested/services-nested.module.css";
import Link from "next/link";
function NestesdPage() {
  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>Nestesd-Page</h1>
      <p className={styles.p}>
        A nested page refers to a webpage structured as a subpage within a main
        page or parent section, typically organized in a hierarchical manner.
        This setup allows for a clean and intuitive navigation experience by
        grouping related content under a primary topic. For example, a website
        might have a main "Products" page with nested pages for individual
        product categories, such as "Electronics" or "Clothing." Nested pages
        are commonly used in websites and applications to improve organization,
        helping users locate specific information under broader categories.
      </p>
 <div>
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
    </div>
  );
}

export default NestesdPage;


















