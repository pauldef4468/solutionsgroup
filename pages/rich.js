import { useContext, useState, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import { Container, Row, Col, Media } from "react-bootstrap";
import { getOrganizations } from "../lib/organizationService";
import AppContext from "../context/AppContext";
import styles from "../styles/about.module.css";
import Loading from "../components/common/Loading";
import MyNavbar from "../components/myNavbar";
import _ from "lodash";

function Rich() {
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
          <h5 className="playfair">About Rich</h5>
        </div>
      </div>
      <Container fluid="md" className="mt-4">
        {/* <h5 className={styles.h5}>Rich Lisowski</h5> */}
        <Media>
          <img
            width={64}
            height={64}
            className="mr-3"
            src="/images/rich-64x64.jpg"
            alt="Rich"
          />
          <Media.Body>
            <h5>Rich Lizowski</h5>
            <p>
              After 20 years as a Consultant/ Investment Banker in a few
              different spots of this great country of ours… my wife Mary and I
              moved to Chapel Hill with our two children. Seventeen years later,
              our daughter Samantha, a graduate of UNC Wilmington, is a newlywed
              and lives and works in Wilmington, N.C. Our son Markham, a recent
              graduate from Appalachian State with a Business Management Degree,
              is now working with us and we are thrilled to have him helping us
              with the family business!!
            </p>
            <p>
              It’s interesting how fate serves you sometimes. Mold remediation
              was not the career that I sought out when we moved here. We first
              arrived in Chapel Hill in 2000 and had a quick excursion to Texas
              in 2005. When we moved back to Chapel Hill in 2006, the house we
              were moving into had a water filtration system that was not
              draining properly. The result was that water was dumped in an
              area… which then allowed the mold to grow.
            </p>
            <p>
              I set out to try and get help to get rid of the mold. Easier said
              than done. We had trouble getting anyone to come to our home to
              address the problem and do it yourself remedies were not readily
              available. So, with the help of a friend, we fixed the leak,
              removed damaged material, and used the right chemical solutions to
              remediate the area properly.
            </p>
            <p>
              I began discussing this topic with realtors and property managers.
              I had no idea what an issue mold and mold remediation can be at
              times in the sale/purchase and/or the upkeep/management of real
              estate in our area. In many cases, it seemed that mold remediation
              was wrongfully being sold as a scary, one-size fits all solution.
              The reality is that each household mold situation is unique, and
              may require special handling tailored specifically to the needs of
              that individual project.
            </p>
            <p>
              With great motivation, I “invented” The Mold Solutions Group, the
              precursor to The Solutions Group Inc.
            </p>
            <p>
              We are a company that listens. One that asks good questions. One
              that will help you understand your unique situation. We will guide
              you to what needs to take place in order to get you the results
              that you desire. Our goals are simple, treat you the way that you
              would like to be treated, and provide you solutions that meet
              and/or exceed your expectations.
            </p>
            <p>We very much look forward to working with you.</p>
          </Media.Body>
        </Media>
      </Container>
    </>
  );
}

export default Rich;
