import React from "react";
import { Row, Col, Carousel, Card } from "react-bootstrap";
import mytv from "../images/tv1.jpg";
import {
  Star,
  Heart,
  Globe,
  Truck,
  Phone,
  Tablet,
  Laptop,
} from "react-bootstrap-icons";

import {
  FaCertificate,
  FaGem,
  FaGift,
  FaGoogleWallet,
  FaCartArrowDown,
  FaShippingFast,
  FaMobileAlt,
  FaSearchDollar,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function topCarouselRow() {
  return (
    <div className="d-none d-md-inline">
      <Row>
        <Col sm="12" md="3">
          <Card>
            <div
              style={{ fontSize: "1.2em", marginLeft: "1.5em" }}
              className="mr-auto"
            >
              <p>
                <i>
                  <Star />
                </i>{" "}
                Featured
              </p>
              <p>
                <i>
                  <Heart />
                </i>
                Top Selling
              </p>
              <p>
                <i>
                  <Globe />
                </i>
                Top Selling
              </p>
              <p>
                <i>
                  <Truck />
                </i>
                Top Selling
              </p>
              <p>
                <i>
                  <Phone />
                </i>
                Top Selling
              </p>
              <p>
                <i>
                  <Tablet />
                </i>
                Top Selling
              </p>
              <p>
                <i>
                  <Laptop />
                </i>
                Top Selling
              </p>
              <p>
                <i>
                  <Heart />
                </i>
                Top Selling
              </p>
              <p>
                <i>
                  <Globe />
                </i>
                Top Selling
              </p>
              <p>
                <i>
                  <Truck />
                </i>
                Top Selling
              </p>
            </div>
          </Card>
        </Col>

        <Col sm="12" md="6">
          <Card>
            <Carousel>
              <Carousel.Item interval={500}>
                <img className="d-block w-100" src={mytv} alt="Third slide" />
                <Carousel.Caption>
                  <div style={{ background: "rgba(0,0,0,0.7)" }}>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img className="d-block w-100" src={mytv} alt="Third slide" />
                <Carousel.Caption>
                  <div style={{ background: "rgba(0,0,0,0.7)" }}>
                    <h3>sec slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={mytv} alt="Third slide" />
                <Carousel.Caption>
                  <div style={{ background: "rgba(0,0,0,0.7)" }}>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Card>
        </Col>

        <Col sm="12" md="3">
          <Card>
            <div className="mr-auto" style={{ marginLeft: "1.5em" }}>
              <p>
                <b>
                  <i>
                    <FaCertificate style={{ fontSize: "25px", color: "red" }} />
                  </i>
                  Original
                  <br />
                </b>
                Filtered Products
              </p>
              <p>
                <b>
                  <i>
                    <FaGem style={{ fontSize: "25px", color: "black" }} />
                  </i>
                  Quality
                  <br />
                </b>
                Quality Guarantee
              </p>
              <p>
                <b>
                  <i>
                    <FaGift style={{ fontSize: "25px", color: "blue" }} />
                  </i>
                  Promotions
                  <br />
                </b>
                Exciting Offers
              </p>
              <p>
                <b>
                  <i>
                    <FaGift style={{ fontSize: "25px", color: "#FF6600" }} />
                  </i>
                  Gift Hampers
                  <br />
                </b>
                Thousand Gifts
              </p>
              <p>
                <b>
                  <i>
                    <FaGoogleWallet
                      style={{ fontSize: "25px", color: "#CC0000" }}
                    />
                  </i>
                  Process
                  <br />
                </b>
                Easy Return
              </p>
              <p>
                <b>
                  <i>
                    <FaCartArrowDown
                      style={{ fontSize: "58px", color: "red" }}
                    />
                  </i>
                </b>
                <br />
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
