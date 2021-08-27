import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  GridColumn,
  Grid,
  Menu,
  GridRow,
  Card,
  CardContent,
  Image,
  CardHeader,
  Breadcrumb,
} from "semantic-ui-react";
import ProductsAll from "./product/ProductsAll";
import Product from "./product/Product";

const AllCategories = () => {
  const [sections, setsections] = useState([
    { key: "Home", content: "Home", link: true },
    { key: "Store", content: "Products", link: true },
  ]);

  return (
    <>
      <Grid column={2}>
        <GridRow>
          <div className="breadCrumb">
            <Breadcrumb
              style={{ color: "white" }}
              size="big"
              icon="right angle"
              sections={sections}
            />
          </div>
        </GridRow>
        <GridColumn width={4}>
          <Menu pointing secondary vertical>
            <Menu.Item name="account" />
            <Menu.Item name="settings" />
          </Menu>
        </GridColumn>

        <GridColumn textAlign="ceter" width={12}>
          <Switch>
            <Route exact path="/Products">
              <ProductsAll />
            </Route>
            <Route exact path="/Products/digital_indicators">
              <Product pageName="Digital Indicators" />
            </Route>
            <Route exact path="/products/data_loggers_&_scanner">
              <Product pageName="Data Loggers & Scanners" />
            </Route>
            <Route exact path="/products/temperature_controllers">
              <Product pageName="Temperature Controllers" />
            </Route>
            <Route exact path="/products/temperature_&_humidity_instruments">
              <Product pageName=" Temperature & Humidity Instruments" />
            </Route>
            <Route exact path="/products/thyristor_triggering_cards">
              <Product pageName=" Thyristor Triggering Cards" />
            </Route>
            <Route exact path="/products/thyristor_power_controller">
              <Product pageName=" Thyristor Power Controller" />
            </Route>
            <Route exact path="/products/signal_isolators_&_coditioner">
              <Product pageName="  Signal Isolators & Conditioner" />
            </Route>
            <Route exact path="/products/transmitters">
              <Product pageName="Transmitters" />
            </Route>
            <Route exact path="/products/motor_controllers">
              <Product pageName="Motor Controllers" />
            </Route>
            <Route exact path="/products/molten_metal_pyrometers">
              <Product pageName="Molten Metal Pyrometers" />
            </Route>
            <Route exact path="/products/iot_modules">
              <Product pageName="IOT Modules" />
            </Route>
            <Route exact path="/products/instrumentation_control_panels">
              <Product pageName="Instrumentation Control Panels" />
            </Route>
            <Route exact path="/products/product_accesories">
              <Product pageName="Product Accesories" />
            </Route>
          </Switch>
        </GridColumn>
      </Grid>
    </>
  );
};
export default AllCategories;
