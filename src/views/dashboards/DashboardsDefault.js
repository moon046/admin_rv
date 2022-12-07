import React, { useEffect, useState } from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { NavLink } from 'react-router-dom';
import { Steps } from 'intro.js-react';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Glide from 'components/carousel/Glide';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import ChartLargeLineSales from 'views/interface/plugins/chart/ChartLargeLineSales';
import ChartBar from 'views/interface/plugins/chart/ChartBar';
import ChartLargeLineStock from 'views/interface/plugins/chart/ChartLargeLineStock';
import 'intro.js/introjs.css';
import axios from "axios";

const DashboardsDefault = () => {
  const title = 'Tổng quan';
  const description = 'Default Dashboard';

  const breadcrumbs = [
    { to: '', text: 'Trang chủ' },
    { to: 'dashboards', text: 'Tổng quan' },
  ];
  let tongtinchuaduyet = 0;
  let tongtindaduyet = 0;
  let tongtindaduyet1 = 0;
  let tongtindaduyet2 = 0;
  let tongtindaduyet3 = 0;
  let tongtindaduyet4 = 0;

  const [chuaduyet, setchuaduyet] = useState([]);
  const [tinchuaduyet, settinchuaduyet] = useState([]);
  const [tinchuaduyet1, settinchuaduyet1] = useState([]);
  const [tinchuaduyet2, settinchuaduyet2] = useState([]);
  const [tinchuaduyet3, settinchuaduyet3] = useState([]);
  const [tinchuaduyet4, settinchuaduyet4] = useState([]);
  const [tindaduyet, settindaduyet] = useState([]);
  const [tindaduyet1, settindaduyet1] = useState([]);
  const [tindaduyet2, settindaduyet2] = useState([]);
  const [tindaduyet3, settindaduyet3] = useState([]);
  const [tindaduyet4, settindaduyet4] = useState([]);
  const res = axios.get(`http://localhost:5000/api/bikes`).then(
    ({ data }) => {
      for (let i = 0; i < data.length; i += 1) {
        if (data[i].status === "Chưa duyệt") { tongtinchuaduyet += 1; }
        if (data[i].status === "Đã duyệt") { tongtindaduyet += 1; }
      }
      settinchuaduyet(tongtinchuaduyet);
      settindaduyet(tongtindaduyet);
    }
  )

  let tongtinchuaduyet1 = 0;
  let tongtinchuaduyet2 = 0;
  let tongtinchuaduyet3 = 0;
  let tongtinchuaduyet4 = 0;

  const res1 = axios.get(`http://localhost:5000/api/fashions`).then(
    ({ data }) => {
      for (let i = 0; i < data.length; i += 1) {
        if (data[i].status === "Chưa duyệt"
        ) {
          tongtinchuaduyet1 += 1;
        } if (data[i].status === "Đã duyệt") { tongtindaduyet1 += 1; }
      }
      settinchuaduyet1(tongtinchuaduyet1);
      settindaduyet1(tongtindaduyet1);
    }
  )
  const res2 = axios.get(`http://localhost:5000/api/works`).then(
    ({ data }) => {
      for (let i = 0; i < data.length; i += 1) {
        if (data[i].status === "Chưa duyệt"
        ) {
          tongtinchuaduyet2 += 1;
        }
        if (data[i].status === "Đã duyệt") { tongtindaduyet2 += 1; }
      }
      settinchuaduyet2(tongtinchuaduyet2);
      settindaduyet2(tongtindaduyet2);
    }
  )
  axios.get(`http://localhost:5000/api/posts`).then(
    ({ data }) => {
      for (let i = 0; i < data.length; i += 1) {
        if (data[i].status === "Chưa duyệt"
        ) {
          tongtinchuaduyet3 += 1;
        }
        if (data[i].status === "Đã duyệt") { tongtindaduyet3 += 1; }
      }
      settinchuaduyet3(tongtinchuaduyet3);
      settindaduyet3(tongtindaduyet3);
    }
  )
  axios.get(`http://localhost:5000/api/pets`).then(
    ({ data }) => {
      for (let i = 0; i < data.length; i += 1) {
        if (data[i].status === "Chưa duyệt"
        ) {
          tongtinchuaduyet4 += 1;
        } if (data[i].status === "Đã duyệt") { tongtindaduyet4 += 1; }
      }
      settinchuaduyet4(tongtinchuaduyet4);
      settindaduyet4(tongtindaduyet4);
    })


  const kq = tinchuaduyet + tinchuaduyet1 + tinchuaduyet2 + tinchuaduyet3 + tinchuaduyet4;
  const tdd= tindaduyet+tindaduyet1+ tindaduyet2+ tindaduyet3+tindaduyet4;
  // setchuaduyet(kq);
  // console.log("ng", tongtinchuaduyet1);
  // settinchuaduyet(tongtinchuaduyet);
  const [tourEnabled, setTourEnabled] = useState(false);
  const tourSteps = [
    {
      element: '#introFirst',
      title: 'Fancy Charts',
      intro: 'Some charts over here!',
    },
    {
      element: '#introSecond',
      title: 'Product Card',
      intro: 'Here is a product card with buttons!',
    },
    {
      element: '#introThird',
      title: 'More Cards',
      intro: 'Category card with an icon!',
    },
  ];
  const tourOptions = {
    nextLabel: '<span>Next</span><i class="cs-chevron-right"></i>',
    prevLabel: '<i class="cs-chevron-left"></i><span>Prev</span>',
    skipLabel: '<i class="cs-close"></i>',
    doneLabel: '<i class="cs-check"></i><span>Done</span>',
    overlayOpacity: 0.5,
    exitOnOverlayClick: true,
    exitOnEsc: true,
  };
  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Tour Start */}
      <Steps
        enabled={tourEnabled}
        steps={tourSteps}
        initialStep={0}
        options={tourOptions}
        onExit={() => {
          setTourEnabled(false);
        }}
      />
      {/* Tour End */}

      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row>
          {/* Title Start */}
          <Col md="7">
            <h1 className="mb-0 pb-0 display-4">{title}</h1>
            <BreadcrumbList items={breadcrumbs} />
          </Col>
          {/* Title End */}

          {/* Top Buttons Start */}
          <Col md="5" className="d-flex align-items-start justify-content-end">
            {/* <Button
              variant="outline-primary"
              className="btn-icon btn-icon-start btn-icon w-100 w-md-auto ms-1"
              onClick={() => {
                setTourEnabled(true);
              }} */}
            {/* > */}
            {/* <CsLineIcons icon="flag" /> <span>Dạo một vòng với toi nhé, hihi</span> */}
            {/* </Button> */}
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <Row>
        <Col >
          {/* Sales & Stocks Charts Start */}
          <h2 className="small-title">THỐNG KÊ</h2>
          <Card className="mb-2 h-auto sh-xl-24" id="introFirst">
            <Card.Body>
              <Row className="g-0 h-100">
                <ChartLargeLineSales />
              </Row>
            </Card.Body>
          </Card>
          <Card className="mb-5 h-auto sh-xl-24">
            <Card.Body>
              <Row className="g-0 h-100">
                <ChartLargeLineStock />
              </Row>
            </Card.Body>
          </Card>


          {/* Stats Start */}
          <h2 className="small-title">Tổng quan về tin</h2>
          <Row className="gx-2">
            <Col className="p-0">
              <Glide
                noControls
                options={{
                  gap: 0,
                  rewind: false,
                  bound: true,
                  perView: 6,
                  breakpoints: {
                    400: { perView: 1 },
                    600: { perView: 2 },
                    1400: { perView: 3 },
                    1600: { perView: 4 },
                    1900: { perView: 5 },
                    3840: { perView: 6 },
                  },
                }}
              >
                <Glide.Item>
                  <Card className="sh-20 hover-border-primary mb-5">
                    <Card.Body className="p-4 text-center align-items-center d-flex flex-column justify-content-between">
                      <div className="d-flex sh-5 sw-5 bg-gradient-light mb-3 align-items-center justify-content-center rounded-xl">
                        <CsLineIcons icon="alarm" className="text-white" />
                      </div>
                      {/* <p className="mb-0 lh-1">Tin chưa duyệt</p> */}
                      <NavLink to="/pages/authentication" className="heading stretched-link d-block">
                        Tin chưa duyệt
                      </NavLink>
                      <p className="cta-3 mb-0 text-primary">{kq}</p>
                    </Card.Body>
                  </Card>
                </Glide.Item>
                <Glide.Item>
                  <Card className="sh-20 hover-border-primary mb-5">
                    <Card.Body className="p-4 text-center align-items-center d-flex flex-column justify-content-between">
                      <div className="d-flex sh-5 sw-5 bg-gradient-light mb-3 align-items-center justify-content-center rounded-xl">
                        <CsLineIcons icon="navigate-diagonal" className="text-white" />
                      </div>
                      {/* <p className="mb-0 lh-1">Tin đã hết hạn</p> */}
                      <NavLink to="/pages/authentication" className="heading stretched-link d-block">
                        Tin đã hết hạn
                      </NavLink>
                      <p className="cta-3 mb-0 text-primary">0</p>
                    </Card.Body>
                  </Card>
                </Glide.Item>
                <Glide.Item>
                  <Card className="sh-20 hover-border-primary mb-5">
                    <Card.Body className="p-4 text-center align-items-center d-flex flex-column justify-content-between">
                      <div className="d-flex sh-5 sw-5 bg-gradient-light mb-3 align-items-center justify-content-center rounded-xl">
                        <CsLineIcons icon="check-circle" className="text-white" />
                      </div>
                      {/* <p className="mb-0 lh-1">
                        Tin đang diễn ra</p> */}
                      <NavLink to="/pages/authentication" className="heading stretched-link d-block">
                        Tin đang diễn ra
                      </NavLink>
                      <p className="cta-3 mb-0 text-primary">{tdd}</p>
                    </Card.Body>
                  </Card>
                </Glide.Item>
              </Glide>
            </Col>
          </Row>

        </Col>




      </Row>





    </>
  );
};

export default DashboardsDefault;

