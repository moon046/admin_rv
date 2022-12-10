import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import {
  Grid, Button, Modal

} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Moment from "react-moment";
import dateFormat, { masks } from "dateformat";
// import { DatePicker, Radio, Space } from 'antd';
import { format } from 'date-fns'
import { Link } from 'react-router-dom';
import DatepickerBasic from 'views/interface/forms/controls/datepicker/DatepickerBasic';
import Datepicker from 'views/interface/forms/controls/datepicker/Datepicker';
import DatepickerFilter from 'views/interface/forms/controls/datepicker/DatepickerFilter';
import DatepickerMonth from 'views/interface/forms/controls/datepicker/DatepickerMonth';
import { DatepickerRangeMultiple } from 'views/interface/forms/controls/datepicker/DatepickerRange';
import { useTable, useGlobalFilter, useSortBy, usePagination, useRowSelect, useRowState, useAsyncDebounce } from 'react-table';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import { createFashion, deleteFashion, getFashions, updateFashion } from './FashionSlice';

import "../table.scss"
import DT from "./DT"



const expiredApp = () => {
  const title = 'Quản Lý Tin';
  const description = 'User directory application that built with the help of List.js. Can be searched, paged and sorted.';

  const breadcrumbs = [
    { to: '', text: 'Quản Lý Tin' },
    { to: 'apps', title: 'Tin đẫ hết hạn' },
  ];

  const dispatch = useDispatch();
  const [isOpenAddEditModal, setIsOpenAddEditModal] = useState(false);
  const [isOpenDeleteConfirmModal, setIsOpenDeleteConfirmModal] = useState(false);
  const [term, setTerm] = useState('');
  const [open, setOpen] = React.useState(false)
  const arr = [];
  const [dataListBikes, setDataListBikes] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/api/bikes`).then(
      ({ data }) => {
        setDataListBikes(data)
        for (let i = 0; i < data.length; i += 1) {
          arr.push(data[i])
        }
        //  setDataListBikes(data)
        // arr.push(data),
        // localStorage.setItem("dataBike", JSON.stringify(arr));
      });
  }, []);


  const [limit, setLimit] = useState([3, 3, 3, 3]);
  const updateLimit = (index) => {
    const l = Object.assign([...limit], {
      [index]: limit[index] + 3
    })
    setLimit(l)
  }
  // const [startDate, setStartDate] = useState()
  // new Date('2022/02/02'));
  // const [endDate, setEndDate] = useState(
  // new Date('2022/12/8')
  // );
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
  // const onChange = (dates) => {
  //   const [start, end] = dates;
  //   setStartDate(start);
  //   setEndDate(end);
  //   console.log("start",startDate);
  //   console.log("end",endDate);


  // };

  const searchItem = useAsyncDebounce((val) => {
    setTerm(val || undefined);
  }, 200);
  const [dataList, setDataList] = useState([]);
  const [dataListT, setDataListT] = useState([]);
  const [dataListDt, setDataListDt] = useState([]);
  const [dataListFS, setDataListFS] = useState([]);
  const [dataListTC, setDataListTC] = useState([]);
  const [dataListTD, setDataListTD] = useState([]);
  useEffect(() => {
    axios(`http://localhost:5000/api/bikes`).then(
      ({ data }) => {
        for (let i = 0; i < data.length; i += 1) {
          const { _id, name, status } = data[i];
          const dateTemp = new Date(data[i].date);
          const datehethan = new Date();
          dateTemp.setDate(dateTemp.getDate() + Number(data[i].date1))
          if (dateTemp.getTime() < datehethan.getTime()) {
            axios.patch(`http://localhost:5000/api/bikes/hh/${_id}`)
          }
        }
      }
    )
  }, []);
  useEffect(() => {
    axios(`http://localhost:5000/api/posts`).then(
      ({ data }) => {
        for (let i = 0; i < data.length; i += 1) {
          const { _id, name, status } = data[i];
          const dateTemp = new Date(data[i].date);
          const datehethan = new Date();
          dateTemp.setDate(dateTemp.getDate() + Number(data[i].date1))
          if (dateTemp.getTime() < datehethan.getTime()) {
            axios.patch(`http://localhost:5000/api/posts/hh/${_id}`)
          }
        }
      }
    )
  }, []);
  useEffect(() => {
    axios(`http://localhost:5000/api/fashions`).then(
      ({ data }) => {
        for (let i = 0; i < data.length; i += 1) {
          const { _id, name, status } = data[i];
          const dateTemp = new Date(data[i].date);
          const datehethan = new Date();
          dateTemp.setDate(dateTemp.getDate() + Number(data[i].date1))
          if (dateTemp.getTime() < datehethan.getTime()) {
            axios.patch(`http://localhost:5000/api/fashions/hh/${_id}`)
          }
        }
      }
    )
  }, []);
  useEffect(() => {
    axios(`http://localhost:5000/api/pets`).then(
      ({ data }) => {
        for (let i = 0; i < data.length; i += 1) {
          const { _id, name, status } = data[i];
          const dateTemp = new Date(data[i].date);
          const datehethan = new Date();
          dateTemp.setDate(dateTemp.getDate() + Number(data[i].date1))
          if (dateTemp.getTime() < datehethan.getTime()) {
            axios.patch(`http://localhost:5000/api/pets/hh/${_id}`)
          }
        }
      }
    )
  }, []);
  useEffect(() => {
    axios(`http://localhost:5000/api/works`).then(
      ({ data }) => {
        for (let i = 0; i < data.length; i += 1) {
          const { _id, name, status } = data[i];
          const dateTemp = new Date(data[i].date);
          const datehethan = new Date();
          dateTemp.setDate(dateTemp.getDate() + Number(data[i].date1))
          if (dateTemp.getTime() < datehethan.getTime()) {
            axios.patch(`http://localhost:5000/api/works/hh/${_id}`)
          }
        }
      }
    )
  }, []);
  useEffect(() => {
    axios(`http://localhost:5000/api/works`).then(
      ({ data }) => setDataListTD(data)
    );
  }, []);
  useEffect(() => {
    axios(`http://localhost:5000/api/pets`).then(
      ({ data }) => setDataListTC(data)
    );
  }, []);
  // useEffect(() => {
  //   axios(`http://localhost:5000/api/bikes`).then(
  //     ({ data }) => setDataListBikes(data)
  //   );
  // }, []);
  useEffect(() => {
    axios(`http://localhost:5000/api/posts`).then(
      ({ data }) => setDataListDt(data)
    );
  }, []);
  useEffect(() => {
    axios(`http://localhost:5000/api/fashions`).then(
      ({ data }) => setDataListFS(data)
    );
  }, []);
  // const item={};
  const [dataListTemp, setDataListTemp] = useState([]);

  const Dele = (id) => {
    axios.delete(`http://localhost:5000/api/bikes/${id}`).then((res) => {
      window.location.reload();
    })
      .catch((err) => {
        alert("Xóa thất bại");
      }
      )
  }
  const handleClickDt = (id) => {
    axios.delete(`http://localhost:5000/api/posts/${id}`).then((res) => {

      window.location.reload();
    })
      .catch((err) => {
        alert("Xóa thất bại");

      }
      )
  };
  const handleClickTC = (id) => {
    axios.delete(`http://localhost:5000/api/pets/${id}`).then((res) => {

      window.location.reload();
    })
      .catch((err) => {
        alert("Xóa thất bại");

      }
      )
  };
  const handleClickTD = (id) => {
    axios.delete(`http://localhost:5000/api/works/${id}`).then((res) => {

      window.location.reload();
    })
      .catch((err) => {
        alert("Xóa thất bại");

      }
      )
  };
  const handleClickFS = (id) => {
    axios.delete(`http://localhost:5000/api/fashions/${id}`).then((res) => {

      window.location.reload();
    })
      .catch((err) => {
        alert("Xóa thất bại");

      }
      )
  };
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(new Date()
  );
  console.log("start", startDate);
  // localStorage.setItem("start", JSON.stringify(startDate))
  console.log("end", endDate)
  // const n ={  <Moment format="DD/MM/YYYY">{startDate}</Moment}
  // console.log("ád",n)
  const y = dateFormat(startDate, "paddedShortDate");
  // console.log("Á", startDate.getTime())
  const dNew = new Date(startDate)
  const kNew= new Date( endDate)
  console.log("Á", dNew.getTime())
  return (
    <>

      {/* <HtmlHead title={title} description={description} className="table" /> */}
      <div className="container" id="contacts">
        {/* <button onClick={()=> handleC} */}
        {/* Title and Top Buttons Start */}
        <div className="page-title-container">
          <Row className="g-0">
            <Col xs="auto" className="mb-2 mb-md-0 me-auto">
              <div className="w-auto sw-md-30">
                <h1 className="mb-0 pb-0 display-4">{title} </h1>
                <BreadcrumbList items={breadcrumbs} />
              </div>
            </Col>
            <div className="w-100 d-md-none" />
            <Col xs="auto" className="d-flex align-items-start justify-content-end">
              {/* <DatepickerRangeMultiple/>
           */}
              <Row className="g-4">
                <Col>{" "}</Col>
                <Col>{" "}</Col>
                <Col>Thời gian lọc:</Col>
                <Col>
                  <DatePicker
                    className="form-control"
                    selected={startDate}
                    onChange={(date) => { setStartDate(date) }}
                    // ;localStorage.setItem("start", JSON.stringify(date)) }}
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
            </Col>
          </Row>
        </div>
      </div>
      {/* Title and Top Buttons End */}
      {/* {JSON.parse(localStorage.getItem("start"))} */}
      <Moment format="DD/MM/YYYY">{startDate}</Moment>
      <table className='table--container'>
        <tr className='TT'>
          <td colSpan="5"> QUẢN LÝ TIN XE CỘ  </td></tr>
        <tbody>
          <tr className='thea'>
            <td className='header-text'>Tiêu đề bài đăng</td>
            <td className='header-text'>Ngày đăng tin</td>
            <td className='header-text'>Số ngày đăng tin</td>
            <td className='header-text'>Trạng thái</td>
            <td className='header-text'>Xử  Lý</td>
          </tr>

          {dataListBikes.map(
            (bike) => {
              const { text, brand, _id, status, date1, date } = bike;
              const newday = dateFormat(date, "paddedShortDate");
              const Newd = new Date(newday);
              const kq = dNew - Newd;
              const kqk = kNew-Newd;
              return (
                (status === "Hết hạn" && kq<0 && kqk>0) ? (  

                   <tr >

                  <td > {text}</td>
                  <td>{newday}</td>
                  <td> {date1} </td>
                  <td>
                    {status}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <Button
                      onClick={() => Dele(_id)}
                    >
                      Xóa
                    </Button>
                  </td>

                </tr>) :
                 (""
                ))
           
           
          

             })}
        </tbody>
      </table>
      <table className='table--container'>
        <tr className='TT'>

          <td colSpan="5"> QUẢN LÝ TIN ĐIỆN THOẠI </td></tr>

        <tbody>
          {/* <tr><center>Quản lý</center></tr> */}
          <tr className='thea'>

          <td className='header-text'>Tiêu đề bài đăng</td>
            <td className='header-text'>Ngày đăng tin</td>
            <td className='header-text'>Số ngày đăng tin</td>
            <td className='header-text'>Trạng thái</td>
            <td className='header-text'>Xử  Lý</td>
          </tr>

          {dataListDt && dataListDt.map(
            (dt) => {

              const { text, _id, status, price,date,date1 } = dt;

              const newday = dateFormat(date, "paddedShortDate");
              const Newd = new Date(newday);
              const kq = dNew - Newd;
              const kqk = kNew-Newd;
              return (
                (status === "Hết hạn" && kq<0 && kqk>0) ? (  
                   <tr >
                  <td > {text}</td>
                  <td>{newday}</td>
                  <td> {date1} </td>
                  <td>
                    {status}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <Button
                      onClick={() => Dele(_id)}
                    >
                      Xóa
                    </Button>
                  </td>

                </tr>) :
                 (""
                ))
           
            }
          )
          }
          {/* {this.renderTableData()} */}
        </tbody>
      </table>

      <table className='table--container'>
        <tr className='TT'>
          <td colSpan="5"> QUẢN LÝ TIN THỜI TRANG  </td></tr>
        <tbody>
          <tr className='thea'>
          <td className='header-text'>Tiêu đề bài đăng</td>
            <td className='header-text'>Ngày đăng tin</td>
            <td className='header-text'>Số ngày đăng tin</td>
            <td className='header-text'>Trạng thái</td>
            <td className='header-text'>Xử  Lý</td>
          </tr>
          {dataListFS && dataListFS.map(
            (fs) => {

              const { text, _id, status, price,date,date1 } = fs;

              const newday = dateFormat(date, "paddedShortDate");
              const Newd = new Date(newday);
              const kq = dNew - Newd;
              const kqk = kNew-Newd;
              return (
                (status === "Hết hạn" && kq<0 && kqk>0) ? (  
                   <tr >
                  <td > {text}</td>
                  <td>{newday}</td>
                  <td> {date1} </td>
                  <td>
                    {status}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <Button
                      onClick={() => Dele(_id)}
                    >
                      Xóa
                    </Button>
                  </td>

                </tr>) :
                 (""
                ))
            }
          )

          }
          {/* {this.renderTableData()} */}
        </tbody>
      </table>

      <table className='table--container'>

        <tr className='TT'>

          <td colSpan="5"> QUẢN LÝ TIN THÚ CƯNG </td></tr>
        <tbody>

          <tr className='thea'>

          <td className='header-text'>Tiêu đề bài đăng</td>
            <td className='header-text'>Ngày đăng tin</td>
            <td className='header-text'>Số ngày đăng tin</td>
            <td className='header-text'>Trạng thái</td>
            <td className='header-text'>Xử  Lý</td>
          </tr>

          {dataListTC && dataListTC.map(
            (tc) => {

              const { text, _id, status, price,date,date1 } = tc;

              const newday = dateFormat(date, "paddedShortDate");
              const Newd = new Date(newday);
              const kq = dNew - Newd;
              const kqk = kNew-Newd;
              return (
                (status === "Hết hạn" && kq<0 && kqk>0) ? (  
                   <tr >
                  <td > {text}</td>
                  <td>{newday}</td>
                  <td> {date1} </td>
                  <td>
                    {status}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <Button
                      onClick={() => Dele(_id)}
                    >
                      Xóa
                    </Button>
                  </td>

                </tr>) :
                 (""
                ))
            }
          )

          }
        </tbody>
      </table>
      <table className='table--container'>

        <tr className='TT'>

          <td colSpan="5"> QUẢN LÝ TIN TUYỂN DỤNG</td></tr>
        <tbody>

          <tr className='thea'>

          <td className='header-text'>Tiêu đề bài đăng</td>
            <td className='header-text'>Ngày đăng tin</td>
            <td className='header-text'>Số ngày đăng tin</td>
            <td className='header-text'>Trạng thái</td>
            <td className='header-text'>Xử  Lý</td>
          </tr>

          {dataListTD && dataListTD.map(
            (td) => {

              const { text, _id, status, price,date,date1 } = td;

              const newday = dateFormat(date, "paddedShortDate");
              const Newd = new Date(newday);
              const kq = dNew - Newd;
              const kqk = kNew-Newd;
              return (
                (status === "Hết hạn" && kq<0 && kqk>0) ? (  
                   <tr >
                  <td > {text}</td>
                  <td>{newday}</td>
                  <td> {date1} </td>
                  <td>
                    {status}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <Button
                      onClick={() => Dele(_id)}
                    >
                      Xóa
                    </Button>
                  </td>

                </tr>) :
                 (""
                ))
            }
          )

          }
        </tbody>
      </table>

    </>

  );
};

export default expiredApp;
