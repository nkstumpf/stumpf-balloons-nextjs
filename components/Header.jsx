import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'react-feather';
import clsx from 'clsx';

const headerStyles = [
  'w-100',
  'text-center'
];


const divStyles = [
  'flex',
  'fixed',
  'top-0',
  'left-0',
  'w-100',
  'z-50',
  'h-[80px]',
  'content-start',
  'items-center',
  'bg-white',
];

const navStyles = [
  'z-30',
  'fixed',
  'overflow-hidden',
  'left-0',
  'bg-white',
  'w-full',
  'm-0',
];

const listStyles = [
  'w-100',
  'p-0',
  'flex',
  'justify-around',
  'flex-col', // change to 'flex-row' for desktop view
  'm-0',
  'list-none',
  'bg-white'
];

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
    }

    handleCloseNav = () => {
      this.setState({isOpen: false});
    }

    render() {

      return (
        <>
          <header className={clsx(headerStyles)}>
            <div className={clsx(divStyles, 'flex content-center items-center')}>
              <div>
                <h1 className="text-black font-header text-headerLg">Stumpf Balloons</h1>
              </div>
              <div className="m-[20px] cursor-pointer">
                {this.state.isOpen &&
                <X onClick={this.handleCloseNav} />
                }
                {!this.state.isOpen &&
                <Menu onClick={this.handleOpenNav} />
                }
              </div>
            </div>
            <nav className={clsx(navStyles, this.state.isOpen ? 'top-[80px]' : 'top-[-230px]')} ref={this.mobileNav}>
              <ul className={clsx(listStyles)}>
                <li className="border-black border-b p-1 bg-white">
                  <Link href="/repair-station">
                    <a className="no-underline hover:text-teal text-black text-baseLg font-header">Repair Station</a>
                  </Link>
                </li>
                <li className="border-black border-b p-1 bg-white">
                  <Link href="/equipment-catalog">
                    <a className="no-underline hover:text-teal text-black text-baseLg font-header">Equipment Catalog</a>
                  </Link>
                </li>
                <li className="border-black border-b p-1 bg-white">
                  <Link href="/banners">
                    <a className="no-underline hover:text-teal text-black text-baseLg font-header">Banners</a>
                  </Link>
                </li>
                <li className="p-1 bg-white">
                  <Link href="/balloon-building">
                    <a className="no-underline hover:text-teal text-black text-baseLg font-header">Balloon Building</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </>
      )
    }
  }
