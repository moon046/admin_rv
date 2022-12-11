import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import {
  Grid, Button, Modal

} from 'semantic-ui-react'
import { useTable, useGlobalFilter, useSortBy, usePagination, useRowSelect, useRowState, useAsyncDebounce } from 'react-table';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
// import { createContact, deleteContact, getContacts, updateContact } from './contactsSlice';
import ItemList from './components/ItemList';
import ItemListPagination from './components/ItemListPagination';
import AddEditModal from './components/AddEditModal';
import ItemListHeader from './components/ItemListHeader';
import CheckAll from './components/CheckCF';
import SearchInput from './components/SearchInput';
import AddNewButton from './components/AddNewButton';
import MobileSortDropdown from './components/MobileSortDropdown';
import DeleteConfirmModal from './components/DeleteConfirmModal';
import "../table.scss"
import  DT from"./DT"



const unconfirmApp = () => {
  const title = 'Quản Lý Tin';
  const description = 'User directory application that built with the help of List.js. Can be searched, paged and sorted.';

  const breadcrumbs = [
    { to: '', text: 'Quản Lý Tin' },
    { to: 'apps', title: 'Tin chưa duyệt' },
  ];

  const dispatch = useDispatch();
  const [isOpenAddEditModal, setIsOpenAddEditModal] = useState(false);
  const [isOpenDeleteConfirmModal, setIsOpenDeleteConfirmModal] = useState(false);
  const [term, setTerm] = useState('');
  const [open, setOpen] = React.useState(false)

  const [dataListBikes, setDataListBikes] = useState([]);
  useEffect(() => {
    axios(`http://localhost:5000/api/bikes`).then(
      ({ data }) => setDataListBikes(data)
    );
  }, []);
  // useEffect(() => {
  //   axios(`http://localhost:5000/api/bikes`).then(
  //     ({ data }) => setDataList(data)
  //   );
  // }, []);
  // useEffect(() => {
  //   axios(`http://localhost:5000/api/bikes`).then(
  //     ({ data }) => setDataList(data)
  //   );
  // }, []);
  const [limit, setLimit] = useState([3, 3, 3, 3]);
  const updateLimit = (index) => {
    const l = Object.assign([...limit], {
      [index]: limit[index] + 3
    })
    setLimit(l)
  }
 

  const searchItem = useAsyncDebounce((val) => {
    setTerm(val || undefined);
  }, 200);

  const [dataList, setDataList] = useState([]);
  const [dataListDt, setDataListDt] = useState([]);
  const [dataListFS, setDataListFS] = useState([]);
  const [dataListTC, setDataListTC] = useState([]);
  const [dataListTD, setDataListTD] = useState([]);
  useEffect(() => {
    axios(`http://localhost:5000/api/bikes`).then(
      ({ data }) => setDataList(data)
    );
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
  const handleClick = (text) => {
    console.log('Click happened');
    console.log('data id: ', text)

    axios.patch(`http://localhost:5000/api/bikes/${text}`)
      .then(({ data }) => {
        // setDataList(data);
        // console.log('data', data.status);
        window.location.reload();
      }
        // console.log(dataList)
      )
  };
  const handleClickDt = (text) => {
    console.log('Click happened');
    console.log('data id: ', text)

    axios.patch(`http://localhost:5000/api/posts/${text}`)
      .then(({ data }) => {
        // setDataList(data);
        // console.log('data', data.status);
        window.location.reload();
      }
        // console.log(dataList)
      )
  };
  const handleClickTC = (text) => {
    console.log('Click happened');
    console.log('data id: ', text)

    axios.patch(`http://localhost:5000/api/pets/${text}`)
      .then(({ data }) => {
        window.location.reload();
      }
      )
  };
  const handleClickTD = (text) => {
    console.log('Click happened');
    console.log('data id: ', text)

    axios.patch(`http://localhost:5000/api/works/${text}`)
      .then(({ data }) => {
        window.location.reload();
      }
      )
  };
  const handleClickFS = (text) => {
    console.log('Click happened');
    console.log('data id: ', text)

    axios.patch(`http://localhost:5000/api/fashions/${text}`)
      .then(({ data }) => {
        window.location.reload();
      }
      )
  };
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
          </Row>
        </div>
      </div>
      {/* Title and Top Buttons End */}

      {/* <Table
dataSource={dataList}
columns={columns}
/> */}
  
      <table className='table--container'>
     
      <tr   className='TT'> 
      
      <td colSpan="4"> QUẢN LÝ TIN XE CỘ  </td></tr>
        <tbody>

          <tr className='thea'>
          <td className='header-text'>Tên</td>

<td className='header-text'>Giá</td>
<td className='header-text'>Trạng thái</td>
<td className='header-text'>Xử  Lý</td>
          </tr>

          {dataList && dataList.map(
            (bike) => {

              const { text, brand, _id, status } = bike;

              return status === "Chưa duyệt" ? (
                <tr >
                  <td > {text}</td>
                  {/* <td > {_id}</td> */}
                  <td>{brand}</td>
                  <td> {status}</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button
                      onClick={() => handleClick(_id)}
                    >
                      Duyệt
                    </Button>
                    {/* { render: (text, record) => handleConfirmBill(record)} */}

                  </td>
                </tr>
              ) : (' ')
            }
          )

          }
          {/* {this.renderTableData()} */}
        </tbody>
      </table>
    
      <table className='table--container'>
      <tr   className='TT'> 
      
      <td colSpan="4"> QUẢN LÝ TIN ĐIỆN THOẠI </td></tr>
       
        <tbody>

          <tr className='thea'>

            <td className='header-text'>Tên</td>

            <td className='header-text'>Giá</td>
            <td className='header-text'>Trạng thái</td>
            <td className='header-text'>Xử  Lý</td>
          </tr>

          {dataListDt && dataListDt.map(
            (dt) => {

              const { text, _id, status ,price} = dt;

              return status === "Chưa duyệt" ? (
                <tr >
                  <td > {text}</td>
                  {/* <td > {_id}</td> */}
                  <td>{price}</td>
                  <td> {status}</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button
                      onClick={() => handleClickDt(_id)}
                    >
                      Duyệt
                    </Button>
                    {/* { render: (text, record) => handleConfirmBill(record)} */}

                  </td>
                </tr>
              ) : (' ')
            }
          )

          }
          {/* {this.renderTableData()} */}
        </tbody>
      </table>

      <table className='table--container'>
     
      <tr   className='TT'> 
      
      <td colSpan="4"> QUẢN LÝ TIN THỜI TRANG  </td></tr>
        <tbody>

          <tr className='thea'>

          <td className='header-text'>Tên</td>

<td className='header-text'>Giá</td>
<td className='header-text'>Trạng thái</td>
<td className='header-text'>Xử  Lý</td>
          </tr>

          {dataListFS && dataListFS.map(
            (fs) => {

              const { text, brand, _id, status ,size} = fs;

              return status === "Chưa duyệt" ? (
                <tr >
                  <td > {text}</td>
                  {/* <td > {_id}</td> */}
                  <td>{size}</td>
                  <td> {status}</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button
                      onClick={() => handleClickFS(_id)}
                    >
                      Duyệt
                    </Button>
                    {/* { render: (text, record) => handleConfirmBill(record)} */}

                  </td>
                </tr>
              ) : (' ')
            }
          )

          }
          {/* {this.renderTableData()} */}
        </tbody>
      </table>
      
      <table className='table--container'>
     
      <tr   className='TT'> 
      
      <td colSpan="4"> QUẢN LÝ TIN THÚ CƯNG </td></tr>
        <tbody>

          <tr className='thea'>

          <td className='header-text'>Tên</td>

<td className='header-text'>Giá</td>
<td className='header-text'>Trạng thái</td>
<td className='header-text'>Xử  Lý</td>
          </tr>

          {dataListTC && dataListTC.map(
            (tc) => {

              const { text, brand, _id, status ,size} = tc;

              return status === "Chưa duyệt" ? (
                <tr >
                  <td > {text}</td>
                  {/* <td > {_id}</td> */}
                  <td>{size}</td>
                  <td> {status}</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button
                      onClick={() => handleClickTC(_id)}
                    >
                      Duyệt
                    </Button>
                  </td>
                </tr>
              ) : (' ')
            }
          )

          }
        </tbody>
      </table>
      <table className='table--container'>
     
     <tr   className='TT'> 
     
     <td colSpan="4"> QUẢN LÝ TIN TUYỂN DỤNG</td></tr>
       <tbody>

         <tr className='thea'>

         <td className='header-text'>Tên</td>

            <td className='header-text'>Giá</td>
            <td className='header-text'>Trạng thái</td>
            <td className='header-text'>Xử  Lý</td>
         </tr>

         {dataListTD && dataListTD.map(
           (td) => {

             const { text, brand, _id, status ,size} = td;

             return status === "Chưa duyệt" ? (
               <tr >
                 <td > {text}</td>
                 {/* <td > {_id}</td> */}
                 <td>{size}</td>
                 <td> {status}</td>
                 <td style={{ textAlign: 'center' }}>
                   <Button
                     onClick={() => handleClickTD(_id)}
                   >
                     Duyệt
                   </Button>
                 </td>
               </tr>
             ) : (' ')
           }
         )

         }
       </tbody>
     </table>
   
    </>

  );
};

export default unconfirmApp;
