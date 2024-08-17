import React from 'react';
import { Container, Row ,Col} from "react-bootstrap";
import logo from '../images/logo.png';
// import logo from '../images/welcome.webp';
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { getAllMovie, getMovieSearch } from '../redux/actions/movieAction'

function NavBar() {
  const dispatch = useDispatch();
    //to search in api
    const search = async (word) => {
      if (word === "") {
        dispatch(getAllMovie());
      } else {
        dispatch(getMovieSearch(word))
      }
    }
  const onSearch = (word) => {
   search(word);
  }

  return (
    <div className="nav-style w-100">
         <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="logoimg" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center justify-content-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input onChange={(e) => onSearch(e.target.value)}  type="text" className="form-control" placeholder="ابحث" />
            </div>
          </Col> 
        </Row>
      </Container>
     
    </div>
  );
}

export default NavBar;
