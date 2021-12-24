import React from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'react-feather';

// header styles

//   width: 100%;
//   text-align: center;

//   a {
//       text-decoration: none;
//   }

//   ul, ol {
//       list-style: none;
//   }

//   .flex {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//   }
// `

// div styles
//   position: fixed;
//   top: 0px;
//   left: 0px;
//   width: 100%;
//   z-index: 40;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   background-color: white;

//   .logo-container {
//       width: 100%;
//   }

//   .logo {
//     font-family: ${(props) => props.theme.fonts.logo};
//     font-size: ${(props) => props.theme.fonts.sizes.headinglg};
//   }

//   .sb-icon {
//     width: auto;
//     height: 50px;
//     margin: 0px;
//   }

//   .menu-icon {
//     margin: 20px;
//   }

// nav styles

  // z-index: 30;
  // position: fixed;
  // overflow: hidden;
  // top: -230px;
  // left: 0px;
  // background-color: white;
  // width: 100%;
  // margin: 0;
  // transition: top 1s;

  // & ul {
  //   width: 100%;
  //   padding: 0;
  //   display: flex;
  //   justify-content: space-around;
  //   flex-direction: column; // change to row for desktop view
  //   margin: 0;

  //   & a {
  //       color: black;
  //       font-family: ${(props) => props.theme.fonts.heading};
  //       font-size: ${(props) => props.theme.fonts.sizes.headingsm};
  //   }

  //   & a:hover {
  //       color: white;
  //   }

  //   & li {
  //       border-bottom: solid black 1px;
  //       padding: 10px;

  //       & input {
  //         font-family: ${(props) => props.theme.fonts.heading};
  //         font-size: ${(props) => props.theme.fonts.sizes.headingsm};
  //       }
  //   }

  //   & li:last-child {
  //       border-bottom: none;
  //   }

  //   & li:hover {
  //       background-color: black;
  //       cursor: pointer;

  //       & a {
  //           color: white;
  //       }

  //       & .searchbar-icon {
  //           color: white;
  //       }
  //   }

  //   .searchbar-icon {
  //     margin-right: 10px;
  //   }

  //   .searchbar-input {
  //     width: 100%;
  //     padding: 5px 5px 5px 10px;
  //     text-align: left;
  //     box-shadow: none;
  //     border: solid black 1px;
  //     border-radius: 10px;
  //   }
  // }

export default class Header extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false
      }
      this.mobileNav = React.createRef();
      this.handleOpenNav = this.handleOpenNav.bind(this);
    }

    handleOpenNav = () => {
      this.setState({isOpen: true});
      const navbarStyles = this.mobileNav.current.style;
      navbarStyles.top = '80px';

    }

    handleCloseNav = () => {
      this.setState({isOpen: false});
      this.mobileNav.current.style.top = '-230px';
    }

    render() {

      return (
        <>
          <header>
            <div>
                <div className="flex">
                  <h1 className="">Stumpf Balloons</h1>
                  <Link href="./">
                    <img className="sb-icon" src='/images/sb-balloon-icon.png' alt="Balloon Icon"/>
                  </Link>
                </div>
                <div className="menu-icon">
                  {this.state.isOpen &&
                  <X onClick={this.handleCloseNav} />
                  }
                  {!this.state.isOpen &&
                  <Menu onClick={this.handleOpenNav} />
                  }
                </div>
            </div>
            <nav ref={this.mobileNav}>
              <ul>
                <li>
                  <div className="searchbar flex">
                      <Search className="searchbar-icon" aria-hidden="true"></Search>
                      <input className="searchbar-input" type="text" placeholder="Search"/>
                  </div>
                </li>
                <li>
                  <Link href="/repair-station">
                    <a>Repair Station</a>
                  </Link>
                </li>
                <li>
                  <Link href="/equipment-catalog">
                    <a>Equipment Catalog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/banners">
                    <a>Banners</a>
                  </Link>
                </li>
                <li>
                  <Link href="/balloon-building">
                    <a>Balloon Building</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </>
      )
    }
  }
