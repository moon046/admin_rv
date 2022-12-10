import { getDate } from 'date-fns';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatepickerRangeMultiple = () => {
  const [startDate, setStartDate] = useState()
  // new Date('2022/02/02'));
  const [endDate, setEndDate] = useState(
    // new Date('2022/12/8')
  );
  const a = [];
  const b = [];
  console.log("start", startDate);
  console.log("end", endDate)
  a.push((startDate))
  localStorage.setItem("start", JSON.stringify(a));
  b.push((endDate))
  localStorage.setItem("end", JSON.stringify(b));
  // console.log(JSON.parse(localStorage.getItem("start")));
  return (
    <>
      <Row className="g-4">
        <Col>{" "}</Col>
        <Col>{" "}</Col>
        <Col>Thời gian lọc:</Col>
        <Col>
          <DatePicker
            className="form-control"
            selected={startDate}
            onChange={(date) => {setStartDate(date) ;localStorage.setItem("start", JSON.stringify(date)) }}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Chọn ngày"
          />
        </Col>

        <Col>
          <DatePicker
            className="form-control"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Chọn ngày"
          />
        </Col>
      </Row>
    </>
  );
};

export const DatepickerRangeSingle = () => {
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);
  // const onChange = (dates) => {
  //   const [start, end] = dates;
  //   setStartDate(start);
  //   setEndDate(end);
  // };

  // return (
  //   <>
  //     <DatePicker className="form-control" selected={startDate} onChange={onChange} startDate={startDate} endDate={endDate} selectsRange />
  //   </>
  // );
};
