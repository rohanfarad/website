import React from "react";
import {
  GridColumn,
  Grid,
  Menu,
  GridRow,
  Card,
  CardContent,
  Image,
  CardHeader,
} from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ProductsAll = () => {
  return (
    <div>
      <Grid padded="horizontally" stackable>
        <GridRow textAlign="center">
          <GridColumn tablet={8} computer={5}>
            <Link to="/products/digital_indicators">
              <Card style={{ margin: "10px" }}>
                <Image src="https://www.libratherm.com/wp-content/uploads/2021/02/digital-indicators-300x300.jpg" />
                <CardContent as="h2">Digital Indicators</CardContent>
              </Card>
            </Link>
          </GridColumn>

          <GridColumn tablet={8} computer={5}>
            <Link to="/products/data_loggers_&_scanner">
              <Card style={{ margin: "10px" }}>
                <Image src="https://www.libratherm.com/wp-content/uploads/2021/02/temperature-controllers-300x300.jpg" />
                <CardContent as="h2">Data Loggers & Scanners </CardContent>
              </Card>
            </Link>
          </GridColumn>

          <GridColumn tablet={8} computer={5}>
            <Link to="/products/temperature_controllers">
              <Card style={{ margin: "10px" }}>
                <Image src="https://www.libratherm.com/wp-content/uploads/2021/02/data-loggers-scanners-300x300.jpg" />
                <CardContent as="h2">Temperature Controllers</CardContent>
              </Card>
            </Link>
          </GridColumn>

          <GridColumn tablet={8} computer={5}>
            <Link to="/products/temperature_&_humidity_instruments">
              <Card style={{ margin: "10px" }}>
                <Image src="https://www.libratherm.com/wp-content/uploads/2021/02/temperature-humidity-instruments-300x300.jpg" />
                <CardContent as="h2">
                  Temperature & Humidity Instruments
                </CardContent>
              </Card>
            </Link>
          </GridColumn>

          <GridColumn tablet={8} computer={5}>
            <Link to="/products/thyristor_triggering_cards">
              <Card style={{ margin: "10px" }}>
                <Image src="https://www.libratherm.com/wp-content/uploads/2021/02/thyristor-triggering-cards-300x300.jpg" />
                <CardContent as="h2">Thyristor Triggering Cards</CardContent>
              </Card>
            </Link>
          </GridColumn>

          <GridColumn tablet={8} computer={5}>
            <Link to="/products/thyristor_power_controller">
              <Card style={{ margin: "10px" }}>
                <Image src="https://www.libratherm.com/wp-content/uploads/2021/02/thyristor-power-controllers-300x300.jpg" />
                <CardContent as="h2">Thyristor Power Controller</CardContent>
              </Card>
            </Link>
          </GridColumn>

          <GridColumn tablet={8} computer={5}>
            <Link to="/products/signal_isolators_&_coditioner">
              <Card style={{ margin: "10px" }}>
                <Image src="https://www.libratherm.com/wp-content/uploads/2021/02/signal-isolators-conditioners-300x300.jpg" />
                <CardContent as="h2">
                  Signal Isolators & Conditioner
                </CardContent>
              </Card>
            </Link>
          </GridColumn>

          <GridColumn tablet={8} computer={5}>
            <Link to="/products/transmitters">
              <Card style={{ margin: "10px" }}>
                <Image src="https://www.libratherm.com/wp-content/uploads/2021/02/temperature-transmitters-300x300.jpg" />
                <CardContent as="h2">Transmitters</CardContent>
              </Card>
            </Link>
          </GridColumn>

          <GridColumn tablet={8} computer={5}>
            <Link to="/products/motor_controllers">
              <Card style={{ margin: "10px" }}>
                <Image src="https://www.libratherm.com/wp-content/uploads/2021/02/motor-controllers-300x300.jpg" />
                <CardContent as="h2">Motor Controllers</CardContent>
              </Card>
            </Link>
          </GridColumn>

          <GridColumn tablet={8} computer={5}>
            <Link to="/products/molten_metal_pyrometers">
              <Card style={{ margin: "10px" }}>
                <Image src="https://www.libratherm.com/wp-content/uploads/2021/02/molten-metal-pyrometers-300x300.jpg" />
                <CardContent as="h2">Molten Metal Pyrometers</CardContent>
              </Card>
            </Link>
          </GridColumn>

          <GridColumn tablet={8} computer={5}>
            <Link to="/products/iot_modules">
              <Card style={{ margin: "10px" }}>
                <Image src="https://www.libratherm.com/wp-content/uploads/2021/02/iot-modules-300x300.jpg" />
                <CardContent as="h2">IOT Modules</CardContent>
              </Card>
            </Link>
          </GridColumn>

          <GridColumn tablet={8} computer={5}>
            <Link to="/products/instrumentation_control_panels">
              <Card style={{ margin: "10px" }}>
                <Image src="https://www.libratherm.com/wp-content/uploads/2021/03/instrumentation-control-panels-300x300.jpg" />
                <CardContent as="h2">
                  Instrumentation Control Panels
                </CardContent>
              </Card>
            </Link>
          </GridColumn>

          <GridColumn tablet={8} computer={5}>
            <Link to="/products/product_accesories">
              <Card style={{ margin: "10px" }}>
                <Image src="https://www.libratherm.com/wp-content/uploads/2021/02/accessories-300x300.jpg" />
                <CardContent as="h2">Product Accesories</CardContent>
              </Card>
            </Link>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
};

export default ProductsAll;
