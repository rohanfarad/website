import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from "../Img/LOGO.png";

import "semantic-ui-css/semantic.min.css";

import { Menu, Segment, Dropdown } from "semantic-ui-react";

const NavBar = () => {
  return (
    <Menu size="large" pointing secondary>
      <Menu.Item style={{ height: "80px" }}>
        <img src={Logo} style={{ width: "150px" }} />
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item style={{ height: "80px" }}>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item style={{ height: "80px" }}>
          <Link to="/aboutus">Aboutus</Link>
        </Menu.Item>

        <div class="dropdown">
          <Menu.Item style={{ height: "80px" }}>
            <Link to="/Products">Products</Link>
          </Menu.Item>
          <div class="dropdown-content">
            <Link to="/Products/digital_indicators">Digital Indicators</Link>
            <Link to="/products/data_loggers_&_scanner">
              Data logers & scanners
            </Link>
            <Link to="/products/thyristor_triggering_cards">
              Thyristor Triggering Card
            </Link>
            <Link to="/products/signal_isolators_&_coditioner">
              Signal Isolators & Conditioner
            </Link>
            <Link to="/products/motor_controllers">Motor Controller</Link>
            <Link to="/products/iot_modules">IOT Modules</Link>
            <Link to="/products/product_accesories">Product Accesories</Link>
            <Link to="/products/temperature_controllers">
              Temperature Controllers
            </Link>
            <Link to="/products/temperature_&_humidity_instruments">
              Temperature & Humidity Instruments
            </Link>
            <Link to="/products/thyristor_power_controller">
              Thyristor Power Controller
            </Link>
            <Link to="/products/transmitters">Transmitters</Link>
            <Link to="/products/molten_metal_pyrometers">
              Molten Metal Pyrometers
            </Link>
            <Link to="/products/instrumentation_control_panels">
              Instrumentation Control Panel
            </Link>
          </div>
        </div>

        <div class="dropdownServices">
          <Menu.Item style={{ height: "80px" }}>
            <Link to="/Services">Services</Link>
          </Menu.Item>
          <div class="dropdownServices-content">
            <Link to="/Services/Data_Aquisition_Softwares">
              Data Aquisition Softwares
            </Link>
            <Link to="/Services/Internet_of_things">
              IOT (Internet of things)
            </Link>
          </div>
        </div>

        <Menu.Item style={{ height: "80px" }}>
          <Link to="/Industries">Industries</Link>
        </Menu.Item>
        <Menu.Item style={{ height: "80px" }}>
          <Link to="/Applications">Appliations</Link>
        </Menu.Item>
        <Menu.Item style={{ height: "80px" }}>
          <Link to="/ContactUs">Contact us</Link>
        </Menu.Item>
        <Menu.Item style={{ height: "80px" }}>
          <Link to="/Login">Login</Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
export default NavBar;
