import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Container from '../components/Container'

const Nav = styled.nav`
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  li {

  }
  a {
    display: block;
    text-decoration: none;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    padding: 15px;
    transition: border-color 0.3s;

    &:hover {
      border-bottom-color: #ccc;
    }

    &.active {
      border-bottom-color: #ccc;
    }
  }
`

const Header = styled(({ className }) => (
  <header className={className}>
    <Container className="inner">
      <Link to="/">
        matsuko.ca
      </Link>

      <Nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" activeClassName="active">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">
              About
            </Link>
          </li>
        </ul>
      </Nav>
    </Container>
  </header>
))`
  background-color: white;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;


export default Header
