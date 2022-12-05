import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import { useTable, useGlobalFilter, useSortBy, usePagination, useRowSelect, useRowState, useAsyncDebounce } from 'react-table';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import { Table, Space } from 'antd';
import "./components/Contact.css";
import "../table.scss"
import { Grid, Button, 

} from 'semantic-ui-react'
// import {
//   createStyles
// } from '@mantine/core';
// import classNames from 'classnames';
import {
  createContact,
  deleteContact,
  getContacts,
  updateContact
} from './contactsSlice';
import ItemList from './components/ItemList';
import ItemListPagination from './components/ItemListPagination';
import AddEditModal from './components/AddEditModal';
import ItemListHeader from './components/ItemListHeader';
import CheckAll from './components/CheckAll';
import SearchInput from './components/SearchInput';
import AddNewButton from './components/AddNewButton';
import MobileSortDropdown from './components/MobileSortDropdown';
import DeleteConfirmModal from './components/DeleteConfirmModal';
// import classNames from 'classnames';


const ContactsApp = () => {
  const title = 'Quản Lý Người Dùng';
  const description = 'User directory application that built with the help of List.js. Can be searched, paged and sorted.';

  const breadcrumbs = [
    { to: '', text: 'Trang Chủ' },
    { to: 'apps', title: 'Người Dùng' },
  ];
 
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      // accessor: 'name',
      key: 'name',
    },

    {
      title: 'Mail',
      // accessor: 'email',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>)
    }
  ];

  const dispatch = useDispatch();
  // const { contacts } = useSelector((state) => state.contacts);
  const [isOpenAddEditModal, setIsOpenAddEditModal] = useState(false);
  const [isOpenDeleteConfirmModal, setIsOpenDeleteConfirmModal] = useState(false);
  const [term, setTerm] = useState('');
  // const addItem = ({ item }) => {
  //   dispatch(createContact({ sortBy, pageSize, pageIndex, item }));
  // };
  // const editItem = ({ item }) => {
  //   dispatch(updateContact({ sortBy, pageSize, pageIndex, item }));
  // };

  // const deleteItem = (items) => {
  //   dispatch(deleteContact({ sortBy, pageSize, pageIndex, ids: items.map((x) => x.id) }));
  // };

  // const searchItem = useAsyncDebounce((val) => {
  //   setTerm(val || undefined);
  // }, 200);
  // useEffect(() => {
  //   if (loading) {
  //     document.body.classList.add('spinner');
  //   } else {
  //     document.body.classList.remove('spinner');
  //   }
  //   return () => {
  //     document.body.classList.remove('spinner');
  //   };
  // }, [loading]);
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    axios(`http://localhost:5000/api/users`).then(
      ({ data }) => setDataList(data)
    );
  }, []);
  const Dele = (id) => {
    axios.delete(`http://localhost:5000/api/users/${id}`).then((res) => {
      
    
      window.location.reload();
    })
     .catch((err)=>{
      alert("Xóa thất bại");

    }
    )    
  }
  return (
    <>

      {/* <HtmlHead title={title} description={description} className="table" /> */}
      <div className="container" id="contacts">
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
        {/* <tbody > */}

          <tr className='thea'>

            <td className='header-text'>Tên</td>
            <td className='header-text'>Email</td>
            {/* <td className='header-text'>ID</td> */}
            <td className='header-text'>Thao Tác</td>
          </tr>

          {dataList && dataList.map(
            (user) => {
              const { name, email, _id } = user;
              return (
                <tr key={_id} className="header">

                  <td > {name}</td>
                  <td>{email}</td>
                  {/* <td > {_id}</td> */}
                  <td style={ {textAlign:'center'}}>
                  <Button 
                  onClick={()=> Dele(_id)}
                  >
                    Xóa
                  </Button>
                  </td>
                </tr>
              )
            }
          )

          }
          {/* {this.renderTableData()} */}
        {/* </tbody> */}
      </table>

    </>

  );
};

export default ContactsApp;
