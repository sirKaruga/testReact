import React from "react";
import { Row, Col, Carousel, Card } from "react-bootstrap";
import mytv from "../images/tv1.jpg";
import comptr from "../images/resized2.jpg";
import ptop from "../images/ptope.jpg";
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
} from "react-icons/fa";

export default function topCarouselRow() {
  const caouselImgStyle = { maxHeight: "430px", with: "auto" };
  return (
    <div className="d-none d-md-inline">
      <Row>
        <Col sm="12" md="3">
          <Card>
            <div
              style={{ fontSize: "1em", marginLeft: "1.5em" }}
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
              <p className="hd4">
                <i>
                  <Heart />
                </i>
                Top Selling
              </p>
              <p className="hd2">
                <i>
                  <Globe />
                </i>
                Top Selling
              </p>
              <p className="hd1">
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
            <Carousel
              controls={false}
              indicators={false}
              style={{ height: "5em" }}
            >
              <Carousel.Item interval={500}>
                <Card.Img
                  style={caouselImgStyle}
                  className="d-block w-100"
                  src={mytv}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  style={caouselImgStyle}
                  className="d-block w-100"
                  src={comptr}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={caouselImgStyle}
                  className="d-block w-100"
                  src={ptop}
                  alt="Third slide"
                />
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
                <span>Filtered Products</span>
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
                <span className="hd6">Exciting Offers</span>
              </p>
              <p>
                <b className="hd4">
                  <i>
                    <FaGift style={{ fontSize: "25px", color: "#FF6600" }} />
                  </i>
                  Gift Hampers
                  <br />
                </b>
                <span className="hd3">Thousand Gifts</span>
              </p>
              <p className="hd2 hd5">
                <b>
                  <i>
                    <FaGoogleWallet
                      style={{ fontSize: "25px", color: "#CC0000" }}
                    />
                  </i>
                  Process
                  <br />
                </b>
                <span className="hd1">Easy Return</span>
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
