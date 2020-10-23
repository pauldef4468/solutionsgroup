import Router from "next/router";
import Link from "next/link";
import { Container, CardDeck, Row, Col } from "react-bootstrap";
import http from "../lib/httpService";
import MyNavbar from "../components/myNavbar";
import styles from "../styles/index.module.css";
import Head from "next/head";
import { getEstablishments } from "../lib/establishmentsService";
import { getHomeInfo } from "../lib/homeService";
import EstCard from "../components/common/estCard";
// import AppContext from "../context/AppContext";

export default function Home(props) {
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
          <h1 className="pt-5 playfair">{props.title}</h1>
          <h5 className="playfair">{props.subTitle}</h5>
        </div>
      </div>
      <Container fluid="md">
        <Row className={`${styles.row} pt-3`}>
          {/* <Col className={styles.padCol}>Left Side</Col> */}
          <Col className={`${styles.col} col-12 col-sm-6 col-lg-4 `}>
            <img
              src="/images/crawl-290x193.jpeg"
              alt="Crawlspaces"
              className={styles.image}
            />
            <h5 className={`playfair ${styles.h5} mt-2`}>Crawlspaces</h5>
            <p>
              Here is some stuff about crawlspaces. Also some longer stuff about
              crawlspace
            </p>
          </Col>
          <Col className={`${styles.col} col-12 col-sm-6 col-lg-4`}>
            <img
              src="/images/kitchen-290x193.jpeg"
              alt="Interiors"
              className={styles.image}
            />
            <h5 className={`playfair ${styles.h5} mt-2`}>Interiors</h5>
            <p>Here is some stuff about interiors</p>
          </Col>
          <Col className={`${styles.col} col-12 col-sm-6 col-lg-4`}>
            <img
              src="/images/deck-290x193.jpg"
              alt="Crawlspaces"
              className={styles.image}
            />
            <h5 className={`playfair ${styles.h5} mt-2`}>Exteriors</h5>
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
  let title = "";
  let subTitle = "";
  try {
    const response = await getHomeInfo();
    title = response.data.title;
    subTitle = response.data.subTitle;
  } catch (e) {
    console.error(e);
  }
  return {
    props: { title, subTitle }, // will be passed to the page component as props
  };
}
