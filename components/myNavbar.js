import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import Link from "next/link";
import { logout } from "../lib/auth";
import _ from "lodash";

function MyNavbar({ activeLink }) {
  const { user, setUser } = useContext(AppContext);

  function isActive(linkName) {
    if (!linkName) return false;
    if (linkName === activeLink) {
      return true;
    }
  }
  return (
    <div>
      <Navbar className="playfair" bg="light" variant="light" expand="md">
        {/* <Navbar className="bg-success" bg="light" variant="light" expand="md"> */}
        <Link href="/">
          <Navbar.Brand href="/">
            <img className="logo" src="/main-logo-2.png" alt="logo"></img>
            The Solutions Group
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/about" passHref>
              <Nav.Link active={isActive("about")}>About Us</Nav.Link>
            </Link>
            <Link href="/services" passHref>
              <Nav.Link active={isActive("services")}>Services</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link active={isActive("contact")}>Contact Us</Nav.Link>
            </Link>
            <Link href="/faq" passHref>
              <Nav.Link active={isActive("faq")}>FAQ</Nav.Link>
            </Link>
            <Link href="/gallery" passHref>
              <Nav.Link active={isActive("gallery")}>Gallery</Nav.Link>
            </Link>

            {!_.isEmpty(user) ? (
              <>
                <Link href="/organizations" passHref>
                  <Nav.Link active={isActive("organizations")}>Orgs</Nav.Link>
                </Link>

                <Link href="/test" passHref>
                  <Nav.Link active={isActive("test")}>Test</Nav.Link>
                </Link>
              </>
            ) : (
              <>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <Link href="/organizations" passHref>
                    <NavDropdown.Item>Organizations</NavDropdown.Item>
                  </Link>
                  <Link href="/test" passHref>
                    <NavDropdown.Item>Test</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Divider />
                  <Link href="/test" passHref>
                    <NavDropdown.Item>Test</NavDropdown.Item>
                  </Link>
                </NavDropdown>
              </>
            )}
          </Nav>

          {/* Below is pushed to the right */}
          <Nav className="ml-auto">
            {_.isEmpty(user) ? (
              <>
                <Link href="/register" passHref>
                  <Nav.Link disabled active={isActive("register")}>
                    Sign Up
                  </Nav.Link>
                </Link>
                <Link href="/login" passHref>
                  <Nav.Link disabled active={isActive("login")}>
                    Login
                  </Nav.Link>
                </Link>
                {/* <Link href="/forgotpw" passHref>
                  <Nav.Link active={isActive("forgotpw")}>
                    Forgot Password
                  </Nav.Link>
                </Link> */}
              </>
            ) : (
              <Nav.Link
                onClick={() => {
                  logout();
                  // setUser({ user: null });
                  setUser(null);
                }}
              >
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
