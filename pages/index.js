import Router from "next/router";
import Link from "next/link";
import { Container, CardDeck, Row, Col } from "react-bootstrap";
import http from "../lib/httpService";
import MyNavbar from "../components/myNavbar";
import styles from "../styles/index.module.css";
import { getEstablishments } from "../lib/establishmentsService";
import EstCard from "../components/common/estCard";
// import AppContext from "../context/AppContext";

export default function Home({ ests }) {
  return (
    <>
      <MyNavbar activeLink="home"></MyNavbar>
      {/* <Container>
        <div className={styles.mainSearch}>
          <h1 className="mt-3 playfair">The Solutions Group</h1>
          <h5 className="playfair">One stop shop for project development</h5>
        </div>
      </Container> */}
      <div className={styles.headerImage}>
        <div className={styles.mainSearch}>
          <h1 className="pt-5 playfair">The Solutions Group</h1>
          <h5 className="playfair">One stop shop for project development</h5>
        </div>
      </div>
      <Container>
        <Row>
          {/* <Col className={styles.padCol}>Left Side</Col> */}
          <Col md={6} lg={4} className={styles.col}>
            <h5 className={`playfair ${styles.h5}`}>Crawlspaces</h5>
            <p>
              Here is some stuff about crawlspaces. Also some longer stuff about
              crawlspace
            </p>
          </Col>
          <Col md={6} lg={4} className={styles.col}>
            <h5 className={`playfair ${styles.h5}`}>Interiors</h5>
            <p>Here is some stuff about interiors</p>
          </Col>
          <Col md={6} lg={4} className={styles.col}>
            <h5 className={`playfair ${styles.h5}`}>Exteriors</h5>
            <p>Here is some stuff about exteriors</p>
          </Col>
          {/* <Col className={styles.padCol}>Right Side</Col> */}
        </Row>
      </Container>

      {/* <Row>
          {ests.map((est) => (
            <Col xs="12" sm="4" style={{ padding: 5 }} key={est.id}>
              <EstCard est={est}></EstCard>
            </Col>
          ))}
        </Row> */}
      {/* <CardDeck className="mx-auto">
          {ests.map((est) => (
            <EstCard key={est.id}></EstCard>
          ))}
        </CardDeck> */}
    </>
  );
}
export async function getStaticProps(context) {
  let ests;
  ests = [];
  // try {
  //   const response = await getEstablishments();
  //   ests = response.data;
  // } catch (e) {
  //   console.error(e);
  // }
  return {
    props: { ests }, // will be passed to the page component as props
  };
}
