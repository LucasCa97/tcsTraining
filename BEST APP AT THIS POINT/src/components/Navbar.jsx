import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { BsFillDice6Fill, BsFillPeopleFill,BsFillClipboard2PlusFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import '../app.css'

function NavbarOne() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
          <Link className="navBarTitle" to="/home">
          <img
              alt=""
              src="https://m.media-amazon.com/images/I/61T6sk68RhL.png"
              width="30"
              height="30"
              className="d-inline-block align-top navBarTitle"
            />{' '}
           User universal database
          </Link>
          </Navbar.Brand>
          <Link to="/counter"><Button variant="primary"><BsFillDice6Fill /> Counter</Button></Link>
          <Link to="/users"><Button variant="primary"> <BsFillPeopleFill /> Users </Button></Link>
          <Link to="/form"><Button variant="primary"> <BsFillClipboard2PlusFill /> New User </Button></Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarOne;