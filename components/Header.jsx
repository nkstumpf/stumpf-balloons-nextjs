import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'react-feather';
import clsx from 'clsx';
// import SBLogo from '../public/images/sb-logo.svg';

const headerStyles = [
  'bg-white',
  'w-full',
  'h-20',
  'fixed',
  'overflow-hidden',
  'z-50',
  'flex',
  'flex-col',
  'items-center',
];

const divStyles = [
  'w-full',
  'max-w-screen-xl',
  'flex',
  'justify-between',
  'items-center',
  'h-20',
  'bg-white',
  'p-4',
];

const navStyles = [
  'z-30',
  'bg-white',
  'w-full',
  'max-w-screen-xl',
  'm-0',
];

const listStyles = [
  'flex',
  'flex-col',
  'text-center',
  'bg-white',
  'm-0',
  'p-0',
];

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
    this.mobileNav = React.createRef();
    this.handleOpenNav = this.handleOpenNav.bind(this);
  }

  handleOpenNav = () => {
    this.setState({isOpen: true});
  };

  handleCloseNav = () => {
    this.setState({isOpen: false});
  };

  render() {

    return (
      <header className={clsx(headerStyles, this.state.isOpen ? 'h-[251px]' : 'h-20')}>
        <div className={clsx(divStyles)}>
          <div className="cursor-pointer">
            <Link href="/">
              <h1 className="text-black font-header text-headerLg">Stumpf Balloons</h1>
              {/* <SBLogo /> */}
            </Link>
          </div>
          <div className="m-[20px] cursor-pointer text-black">
            {this.state.isOpen &&
                <X onClick={this.handleCloseNav} />
            }
            {!this.state.isOpen &&
                <Menu onClick={this.handleOpenNav} />
            }
          </div>
        </div>
        <nav className={clsx(navStyles)} ref={this.mobileNav}>
          <ul className={clsx(listStyles)}>
            <li className="border-black border-b p-1 bg-white sm:border-none">
              <Link href="/repair-station">
                <a className="no-underline hover:text-teal text-black text-baseLg font-header">Repair Station</a>
              </Link>
            </li>
            <li className="border-black border-b p-1 bg-white sm:border-none">
              <Link href="/equipment-catalog">
                <a className="no-underline hover:text-teal text-black text-baseLg font-header">Equipment Catalog</a>
              </Link>
            </li>
            <li className="border-black border-b p-1 bg-white sm:border-none">
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
    );
  }
}
