import { useContext, useState, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import { Container, Row, Col, Media } from "react-bootstrap";
import { getOrganizations } from "../lib/organizationService";
import AppContext from "../context/AppContext";
import styles from "../styles/about.module.css";
import Loading from "../components/common/Loading";
import MyNavbar from "../components/myNavbar";
import _ from "lodash";

function Jeff() {
  // Get the logged in user
  const { user } = useContext(AppContext);

  // Initialize the data we will display
  const [data, setData] = useState(null);

  return (
    <>
      <MyNavbar activeLink="about"></MyNavbar>
      <div className={styles.headerImage}>
        <div className={styles.mainSearch}>
          <h1 className="pt-5 playfair">The Solutions Group</h1>
          <h5 className="playfair">About Jeff</h5>
        </div>
      </div>
      <Container fluid="md" className="mt-4">
        {/* <h5 className={styles.h5}>Jeff Umbarger</h5> */}
        <Media>
          <img
            width={64}
            height={64}
            className="mr-3"
            src="/images/jeff-64x64.jpg"
            alt="Jeff"
          />
          <Media.Body>
            <h5>Jeff Umbarger</h5>
            <p>Jeff is a really great guy!</p>
          </Media.Body>
        </Media>
      </Container>
    </>
  );
}

export default Jeff;
