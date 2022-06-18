import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import {} from 'react-router-dom';
export default function TopBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const clickHandler = () => {
    return (event: React.MouseEvent) => {
     console.log('fff');
     
      // event.preventDefault();
    }
  }
  return (
    <Navbar fluid={true} rounded={true} className="shadow-sm z-20">
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link id="dashboard" to="/dashboard"  className="active">
          Dashboard
        </Link>
        <Link to="/counter" >
          Counter
        </Link>
        
      </Navbar.Collapse>
    </Navbar>
  );
}
