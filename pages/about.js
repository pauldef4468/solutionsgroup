import { useContext, useState, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { getOrganizations } from "../lib/organizationService";
import AppContext from "../context/AppContext";
import styles from "../styles/about.module.css";
import Loading from "../components/common/Loading";
import MyNavbar from "../components/myNavbar";
import _ from "lodash";

function About() {
  // Get the logged in user
  const { user } = useContext(AppContext);

  // Initialize the data we will display
  const [data, setData] = useState(null);

  //   // Function to retrieve the organization data
  //   async function getOrgs() {
  //     try {
  //       const response = await getOrganizations();
  //       const newData = response.data;
  //       setData(newData);
  //     } catch (e) {
  //       console.error(e);
  //       alert("Something went wrong retrieving data");
  //     }
  //   }

  //   useEffect(() => {
  //     // Don't try to get data if not logged in
  //     if (_.isEmpty(user)) return;

  //     // Call the function to get data
  //     getOrgs();
  //   }, [user]);

  return (
    <>
      <MyNavbar activeLink="about"></MyNavbar>
      <div className={styles.headerImage}>
        <div className={styles.mainSearch}>
          <h1 className="pt-5 playfair">The Solutions Group</h1>
          <h5 className="playfair">About Us</h5>
        </div>
      </div>
      <Container fluid="md" className="mt-4">
        <h5 className={styles.h5}>TSG - The one-stop shop</h5>
        <p>
          We are a licensed general contractor that strives to be your one-stop
          shop for all your construction/renovation needs. Our services include
          but are not limited to new construction (ground up), concrete
          foundations, masonry, fencing, landscaping, Grading/drainage, mold
          removal, framing sheetrock install, flooring installation, painting,
          restroom and kitchen renovations. We have over 13 years of experience
          and have established an excellent rapport with our customers.
        </p>
        <Row className={`${styles.row} pt-3`}>
          {/* <Col className={styles.padCol}>Left Side</Col> */}
          <Col className={`${styles.col} col-12 col-sm-6 col-lg-4 `}>
            <Link href="/rich">
              <div className={styles.link}>
                <img
                  src="/images/rich-290.jpg"
                  alt="Rich Lisowsky"
                  className={styles.image}
                />
                <h5 className={`playfair ${styles.h5} mt-2`}>Rich Lisowsky</h5>
                <p>Owner/CEO</p>
              </div>
            </Link>
          </Col>
          <Col className={`${styles.col} col-12 col-sm-6 col-lg-4`}>
            <Link href="/jeff">
              <div className={styles.link}>
                <img
                  src="/images/jeff-290.jpg"
                  alt="Jeff Umbarger"
                  className={styles.image}
                />
                <h5 className={`playfair ${styles.h5} mt-2`}>Jeff Umbarger</h5>
                <p>Estimator/Project Manager</p>
              </div>
            </Link>
          </Col>
          <Col className={`${styles.col} col-12 col-sm-6 col-lg-4`}>
            <Link href="/paul">
              <div className={styles.link}>
                <img
                  src="/images/paul-290.jpg"
                  alt="Paul DeFalco"
                  className={styles.image}
                />
                <h5 className={`playfair ${styles.h5} mt-2`}>Paul DeFalco</h5>
                <p>Estimator/Sales/Project Manager</p>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
