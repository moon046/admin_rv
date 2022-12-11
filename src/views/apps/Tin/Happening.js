// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Row, Col, Form } from 'react-bootstrap';
// import { useTable, useGlobalFilter, useSortBy, usePagination, useRowSelect, useRowState, useAsyncDebounce } from 'react-table';
// import HtmlHead from 'components/html-head/HtmlHead';
// import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
// // import { createContact, deleteContact, getContacts, updateContact } from './contactsSlice';
// import ItemList from './components/ItemList';
// import ItemListPagination from './components/ItemListPagination';
// import AddEditModal from './components/AddEditModal';
// import ItemListHeader from './components/ItemListHeader';
// import CheckAll from './components/CheckCF';
// import SearchInput from './components/SearchInput';
// import AddNewButton from './components/AddNewButton';
// import MobileSortDropdown from './components/MobileSortDropdown';
// import DeleteConfirmModal from './components/DeleteConfirmModal';


// const happeningApp = () => {
//   const title = 'Quản Lý Tin';
//   const description = 'User directory application that built with the help of List.js. Can be searched, paged and sorted.';

//   const breadcrumbs = [
//     { to: '', text: 'Quản Lý Tin' },
//     { to: 'apps', title: 'Tin đang diễn ra' },
//   ];

//   const columns = React.useMemo(() => {
//     return [
//       {
//         Header: 'Hình ảnh',
//         // accessor: 'name', 
//         sortable: true,
//         headerClassName: 'ol-3 col-lg-4 d-flex flex-column mb-lg-0 pe-3 d-flex',
//         Cell: ({ cell }) => {
//           return (
//             <a
//               className="list-item-heading body"
//               href="#!"
//               onClick={(e) => {
//                 e.preventDefault();
//               }}
//             >
//               {cell.value}
//             </a>
//           );
//         },
//       },
//       {
//         Header: 'Tên bài viết',
//         accessor: 'email',
//         sortable: true,
//         headerClassName: 'col-3 col-lg-3 d-flex flex-column pe-1 justify-content-center',
//       },
//       // {
//       //   Header: 'Xử Lý',
//       //   accessor: 'phone',
//       //   sortable: true,
//       //   headerClassName: 'col-3 col-lg-3 d-flex flex-column pe-1 justify-content-center',
//       // },
//       // {
//       //   Header: 'Mật Khẩu',
//       //   accessor: 'password',
//       //   sortable: true,
//       //   headerClassName: 'col-3 col-lg-1 d-flex flex-column pe-1 justify-content-center',
//       // },
//       // {
//       //   Header: '',
//       //   id: 'action',
//       //   headerClassName: '',
//       //   Cell: ({ row }) => {
//       //     const { checked, onChange } = row.getToggleRowSelectedProps();
//       //     return <Form.Check className="form-check float-end mt-1" type="checkbox" checked={checked} onChange={onChange} />;
//       //   },
//       // },
//     ];
//   }, []);

//   const dispatch = useDispatch();
//   const { contacts: data, pageCount, loading } = useSelector((state) => state.contacts);

//   const [isOpenAddEditModal, setIsOpenAddEditModal] = useState(false);
//   const [isOpenDeleteConfirmModal, setIsOpenDeleteConfirmModal] = useState(false);
//   const [term, setTerm] = useState('');

//   const tableInstance = useTable(
//     {
//       columns,
//       data,
//       isOpenAddEditModal,
//       setIsOpenAddEditModal,
//       isOpenDeleteConfirmModal,
//       setIsOpenDeleteConfirmModal,
//       manualPagination: true,
//       manualFilters: true,
//       manualSortBy: true,
//       autoResetPage: false,
//       autoResetSortBy: false,
//       pageCount,
//       initialState: { pageSize: 8, pageIndex: 0, sortBy: [{ id: 'name', desc: false }], hiddenColumns: ['id'] },
//     },
//     useGlobalFilter,
//     useSortBy,
//     usePagination,
//     useRowSelect,
//     useRowState
//   );
//   const {
//     state: { pageIndex, pageSize, sortBy },
//   } = tableInstance;

//   // const addItem = ({ item }) => {
//   //   dispatch(createContact({ sortBy, pageSize, pageIndex, item }));
//   // };

//   // const editItem = ({ item }) => {
//   //   dispatch(updateContact({ sortBy, pageSize, pageIndex, item }));
//   // };

//   // const deleteItem = (items) => {
//   //   dispatch(deleteContact({ sortBy, pageSize, pageIndex, ids: items.map((x) => x.id) }));
//   // };

//   const searchItem = useAsyncDebounce((val) => {
//     setTerm(val || undefined);
//   }, 200);


//   useEffect(() => {
//     if (loading) {
//       document.body.classList.add('spinner');
//     } else {
//       document.body.classList.remove('spinner');
//     }
//     return () => {
//       document.body.classList.remove('spinner');
//     };
//   }, [loading]);
//   // useEffect(() => {
//   //   try {
//   //     dispatch(getContacts({ term, sortBy, pageSize, pageIndex }));
//   //   } catch (e) {
//   //     // console.log('...error : ', e);
//   //   }
//   // }, [sortBy, dispatch, pageIndex, pageSize, term]);


//   return (
//     <>
//       <HtmlHead title={title} description={description} />
//       <div className="container" id="contacts">
//         {/* Title and Top Buttons Start */}
//         <div className="page-title-container">
//           <Row className="g-0">
//             <Col xs="auto" className="mb-2 mb-md-0 me-auto">
//               <div className="w-auto sw-md-30">
//                 <h1 className="mb-0 pb-0 display-4">{title} </h1>
//                 <BreadcrumbList items={breadcrumbs} />
//               </div>
//             </Col>
//             <div className="w-100 d-md-none" />
//             <Col xs="12" sm="6" md="auto" className="d-flex align-items-start justify-content-end order-3 order-sm-2">
//               <div className="w-100 w-lg-auto search-input-container border border-separator">
//                 <SearchInput tableInstance={tableInstance} onChange={searchItem} />
//               </div>
//             </Col>
//             <Col xs="12" sm="6" md="auto" className="d-flex align-items-start justify-content-end mb-2 mb-sm-0 order-sm-3">
//               {/* <AddNewButton tableInstance={tableInstance} /> */}
//               <MobileSortDropdown tableInstance={tableInstance} />
//               <CheckAll tableInstance={tableInstance} />
//             </Col>
//           </Row>
//         </div>
//         {/* Title and Top Buttons End */}

//         <Row className="g-0">
//           <Col>
//             {/* List Items Start */}
//             <div id="checkboxTable">
//               <ItemListHeader tableInstance={tableInstance} />
//               <ItemList tableInstance={tableInstance} />
//               <ItemListPagination tableInstance={tableInstance} />
//             </div>
//           </Col>

//           {/* {isOpenAddEditModal && <AddEditModal tableInstance={tableInstance} addItem={addItem} editItem={editItem} />}
//           {isOpenDeleteConfirmModal && <DeleteConfirmModal tableInstance={tableInstance} deleteItem={deleteItem} />} */}
//         </Row>
//       </div>
//     </>
//   );
// };

// export default happeningApp;
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import {
  Grid, Button

} from 'semantic-ui-react';
// import {Alert} from "@mui";
// import Alert from '@mui/material/Alert';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

import { CAlert, CButton } from '@coreui/react';
import { useTable, useGlobalFilter, useSortBy, usePagination, useRowSelect, useRowState, useAsyncDebounce } from 'react-table';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import { createFashion, deleteFashion, getFashions, updateFashion } from './FashionSlice';
import ItemList from './components/ItemList';
import ItemListPagination from './components/ItemListPagination';
import AddEditModal from './components/AddEditModal';
import ItemListHeader from './components/ItemListHeader';
import CheckAll from './components/CheckGH';
import SearchInput from './components/SearchInput';
import AddNewButton from './components/AddNewButton';
import MobileSortDropdown from './components/MobileSortDropdown';
import DeleteConfirmModal from './components/DeleteConfirmModal';
import "../table.scss"

const HappeningApp = () => {
  const title = 'Quản Lý Tin';
  const description = 'User directory application that built with the help of List.js. Can be searched, paged and sorted.';

  const breadcrumbs = [
    { to: '', text: 'Quản Lý Tin' },
    { to: 'apps', title: 'Tin đang diễn ra' },
  ];

  const columns = React.useMemo(() => {
    return [
      {
        Header: 'Hình ảnh',
        // accessor: 'name', 
        sortable: true,
        headerClassName: 'ol-3 col-lg-4 d-flex flex-column mb-lg-0 pe-3 d-flex',
        Cell: ({ cell }) => {
          return (
            <a
              className="list-item-heading body"
              href="#!"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {cell.value}
            </a>
          );
        },
      },
      {
        Header: 'Tên bài viết',
        accessor: 'email',
        sortable: true,
        headerClassName: 'col-3 col-lg-3 d-flex flex-column pe-1 justify-content-center',
      },
      {
        Header: 'Xóa',
        accessor: 'phone',
        sortable: true,
        headerClassName: 'col-3 col-lg-3 d-flex flex-column pe-1 justify-content-center',
      },
      // {
      //   Header: 'Mật Khẩu',
      //   accessor: 'password',
      //   sortable: true,
      //   headerClassName: 'col-3 col-lg-1 d-flex flex-column pe-1 justify-content-center',
      // },
      {
        Header: '',
        id: 'action',
        headerClassName: '',
        Cell: ({ row }) => {
          const { checked, onChange } = row.getToggleRowSelectedProps();
          return <Form.Check className="form-check float-end mt-1" type="checkbox" checked={checked} onChange={onChange} />;
        },
      },
    ];
  }, []);

  // const dispatch = useDispatch();
  // const { contacts: data, pageCount, loading } = useSelector((state) => state.contacts);
  // const [dataList, setDataList] = useState([]);
  const [isOpenAddEditModal, setIsOpenAddEditModal] = useState(false);
  const [isOpenDeleteConfirmModal, setIsOpenDeleteConfirmModal] = useState(false);
  const [term, setTerm] = useState('');
  // const [data,setData]=useState();
  // const tableInstance = useTable(
  //   {
  //     columns,
  //     data,
  //     // isOpenAddEditModal,
  //     // setIsOpenAddEditModal,
  //     // isOpenDeleteConfirmModal,
  //     // setIsOpenDeleteConfirmModal,
  //     // manualPagination: true,
  //     // manualFilters: true,
  //     // manualSortBy: true,
  //     // autoResetPage: false,
  //     // autoResetSortBy: false,
  //     // // pageCount,
  //     // defaultPagesize:10,
  //     // initialState: { pageSize: 8, pageIndex: 0, sortBy: [{ id: 'name', desc: false }], hiddenColumns: ['id'] },
  //   },
  //   useGlobalFilter,
  //   useSortBy,
  //   usePagination,
  //   useRowSelect,
  //   useRowState
  // );
  // const {
  //   state: { pageIndex, pageSize, sortBy },
  // } = tableInstance;
  const [dataListBikes, setDataListBikes] = useState([]);
  const [dataListDT, setDataListDT] = useState([]);
  const [dataListFS, setDataListFS] = useState([]);
  const [dataListTC, setDataListTC] = useState([]);
  const [dataListTD, setDataListTD] = useState([]);
  // const [dataListMoblie, setDataList] = useState([]);
  // const [dataList, setDataList] = useState([]);
  useEffect(() => {
    axios(`http://localhost:5000/api/posts`).then(
      ({ data }) => setDataListDT(data)
    );
  }, []);
  useEffect(() => {
    axios(`http://localhost:5000/api/pets`).then(
      ({ data }) => setDataListTC(data)
    );
  }, []);
  useEffect(() => {
    axios(`http://localhost:5000/api/works`).then(
      ({ data }) => setDataListTD(data)
    );
  }, []);
  useEffect(() => {
    axios(`http://localhost:5000/api/bikes`).then(
      ({ data }) => setDataListBikes(data)
    );
  }, []);
  useEffect(() => {
    axios(`http://localhost:5000/api/fashions`).then(
      ({ data }) => setDataListFS(data)
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
  // const itemview = (item) => {
  //   return (
  //     // <List.Item>
  //     <>
  //       <Grid grow>
  //         <Grid.Col span={12}>
  //           <div className='container'>

  //             {/* <Group> */}
  //               <div className='logo'>

  //                 {/* <Image
  //                   src={item.thongtincongty.logo}
  //                   alt="ISO logo"
  //                   radius={120}
  //                 /> */}
  //               </div>


  //               <div >

  //                 <div  >
  //                   {item.thongtincongty.name}
  //                 </div>
  //                 <div  >
  //                   {item.thongtincongty.diachi}
  //                 </div>

  //                 <Grid  >
  //                   <Grid.Col span={4}>
  //                     {/* <FontAwesomeIcon icon={PeopleGroup} className={classes.icon} />    */}
  //                      {item.thongtincongty.soluong}</Grid.Col>
  //                   <Grid.Col span={4}> 

  //                    {item.thongtincongty.loaihinhcongty}</Grid.Col>
  //                   <Grid.Col span={4}>

  //                       {item.thongtincongty.loaihinhkinhdoanh}</Grid.Col>
  //                 </Grid>
  //               </div>
  //             {/* </Group> */}

  //           </div>
  //         </Grid.Col>
  //       </Grid>

  //       <Grid>
  //         <Grid.Col span={12}>
  //           <div className='danh-sach-vi-tri'>
  //             {item.vitriungtuyen.slice(0, 3).map((index) => {
  //               console.log('[]', 3);
  //               return (
  //                 <Grid key={index} columns={60}>
  //                   <Grid.Col span={3}>
  //                    {/* <Link></Link> */}
  //                   </Grid.Col>
  //                   <Grid.Col span={35}>
  //                  <Link
  //                       href={{
  //                         pathname: '/thuctap/nguoiungtuyen/components/detail',
  //                       }}
  //                     >
  //                       <a >
  //                        {/* onClick={() => setOpened(true)}> */}
  //                         {index.tenvitri}</a>
  //                     </Link>
  //                   </Grid.Col>
  //                   <Grid.Col span={10}>
  //                     {index.mucluong}
  //                   </Grid.Col>
  //                   <Grid.Col span={10}>
  //                     {index.ngay}
  //                   </Grid.Col>
  //                 </Grid>
  //               )
  //             })}
  //             <center>
  //               <Button
  //                 variant="subtle"
  //                 radius="xl"
  //                >
  //                 {/* // onClick={() => updateLimit(i)} */}


  //               </Button>
  //             </center>
  //           </div>
  //         </Grid.Col>
  //       </Grid>
  //       {/* </List.Item> */}
  //     </>
  //   );
  // }
  // const addItem = ({ item }) => {
  //   dispatch(createContact({ sortBy, pageSize, pageIndex, item }));
  // };

  // const editItem = ({ item }) => {
  //   dispatch(updateContact({ sortBy, pageSize, pageIndex, item }));
  // };

  // const deleteItem = (items) => {
  //   dispatch(deleteContact({ sortBy, pageSize, pageIndex, ids: items.map((x) => x.id) }));
  // };

  const searchItem = useAsyncDebounce((val) => {
    setTerm(val || undefined);
  }, 200);


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

  // useEffect(() => {
  //   axios(`http://localhost:5000/api/users`).then(
  //     ({ data }) => setDataList(data)
  //   );
  // }, []);
  // useEffect(() => {
  //   try {
  //     dispatch(getFashions({ term, sortBy, pageSize, pageIndex }));
  //   } catch (e) {
  //     console.log('...error : ', e);
  //   }
  // }, [sortBy, dispatch, pageIndex, pageSize, term]);
  // const [open, setOpen] = React.useState(true);
  const [visible, setVisible] = useState(false)
  const Dele = (id) => {
    axios.delete(`http://localhost:5000/api/bikes/${id}`).then((res) => {
      
    
      window.location.reload();
    })
     .catch((err)=>{
      alert("Xóa thất bại");

    }
    )    
  }
  const DeleDT = (id) => {
    axios.delete(`http://localhost:5000/api/posts/${id}`).then((res) => {
      
    
      window.location.reload();
    })
     .catch((err)=>{
      alert("Xóa thất bại");

    }
    )    
  }
  const DeleFS = (id) => {
    axios.delete(`http://localhost:5000/api/fashions/${id}`).then((res) => {
      window.location.reload();
    })
     .catch((err)=>{
      alert("Xóa thất bại");
    }
    )    
  }
  const DeleTC = (id) => {
    axios.delete(`http://localhost:5000/api/pets/${id}`).then((res) => {
      window.location.reload();
    })
     .catch((err)=>{
      alert("Xóa thất bại");
    }
    )    
  }
  const DeleTD = (id) => {
    axios.delete(`http://localhost:5000/api/works/${id}`).then((res) => {
      window.location.reload();
    })
     .catch((err)=>{
      alert("Xóa thất bại");
    }
    )    
  }
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    axios(`http://localhost:5000/api/bikes`).then(
      ({ data }) => setDataList(data)
    );
  }, []);
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
<CAlert color="primary" dismissible visible={visible} onClose={() => setVisible(false)}>Xóa thành công</CAlert>

      <table className='table--container'>
      <tr   className='TT'> 
      
      <td colSpan="4"> QUẢN LÝ TIN XE CỘ  </td></tr>
        <tbody>

          <tr className='thea'>

            <td className='header-text'>Tên</td>

            <td className='header-text'>Email</td>
            <td className='header-text'>Trạng Thái</td>
            <td className='header-text'>Xử lý</td>
          </tr>

          {dataList && dataList.map(
            (bike) => {

              const { text, brand, _id, status } = bike;

              return status === "Đã duyệt" ? (
                <tr key={_id}>
                  <td > {text}</td>
                  <td>{brand}</td>
                  <td> {status}</td>
                  <td style={{ textAlign: 'center' }}>
                
                    <CButton
                      onClick={() => 
                        {Dele(_id);
                        setVisible(true);
                      }
                    }
                    >
                      Xóa
                    </CButton>
                  </td>
                </tr>
              ) : ('')
            }
          )

          }
          {/* {this.renderTableData()} */}
        </tbody>
      </table>
      <table className='table--container'>
      <tr   className='TT'> 
      
      <td colSpan="4"> QUẢN LÝ TIN ĐIỆN THOẠI  </td></tr>
        <tbody>

          <tr className='thea'>

            <td className='header-text'>Tên</td>

            <td className='header-text'>Email</td>
            <td className='header-text'>Trạng Thái</td>
            <td className='header-text'>Xử lý</td>
          </tr>

          {dataListDT && dataListDT.map(
            (dt) => {

              const { text, brand, _id, status } = dt;

              return status === "Đã duyệt" ? (
                <tr key={_id}>
                  <td > {text}</td>
                  <td>{brand}</td>
                  <td> {status}</td>
                  <td style={{ textAlign: 'center' }}>
                
                    <CButton
                      onClick={() => 
                        {DeleDT(_id);
                        setVisible(true);
                      }
                    }
                    >
                      Xóa
                    </CButton>
                  </td>
                </tr>
              ) : ('')
            }
          )

          }
          {/* {this.renderTableData()} */}
        </tbody>
      </table>
      <table className='table--container'>
      <tr   className='TT'> 
      
      <td colSpan="4"> QUẢN LÝ TIN THỜI TRANG </td></tr>
        <tbody>

          <tr className='thea'>

            <td className='header-text'>Tên</td>

            <td className='header-text'>Email</td>
            <td className='header-text'>Trạng Thái</td>
            <td className='header-text'>Xử lý</td>
          </tr>

          {dataListFS && dataListFS.map(
            (fs) => {

              const { text, brand, _id, status } = fs;

              return status === "Đã duyệt" ? (
                <tr key={_id}>
                  <td > {text}</td>
                  <td>{brand}</td>
                  <td> {status}</td>
                  <td style={{ textAlign: 'center' }}>
                
                    <CButton
                      onClick={() => 
                        {DeleFS(_id);
                        setVisible(true);
                      }
                    }
                    >
                      Xóa
                    </CButton>
                  </td>
                </tr>
              ) : ('')
            }
          )

          }
          {/* {this.renderTableData()} */}
        </tbody>
      </table>
      <table className='table--container'>
      <tr   className='TT'> 
      
      <td colSpan="4"> QUẢN LÝ TIN THÚ CƯNG  </td></tr>
        <tbody>

          <tr className='thea'>

            <td className='header-text'>Tên</td>

            <td className='header-text'>Email</td>
            <td className='header-text'>Trạng Thái</td>
            <td className='header-text'>Xử lý</td>
          </tr>

          {dataListTC && dataListTC.map(
            (tc) => {

              const { text, brand, _id, status } = tc;

              return status === "Đã duyệt" ? (
                <tr key={_id}>
                  <td > {text}</td>
                  <td>{brand}</td>
                  <td> {status}</td>
                  <td style={{ textAlign: 'center' }}>
                
                    <CButton
                      onClick={() => 
                        {DeleTC(_id);
                        setVisible(true);
                      }
                    }
                    >
                      Xóa
                    </CButton>
                  </td>
                </tr>
              ) : ('')
            }
          )

          }
          {/* {this.renderTableData()} */}
        </tbody>
      </table>
      <table className='table--container'>
      <tr   className='TT'> 
      
      <td colSpan="4"> QUẢN LÝ TIN TUYỂN DỤNG  </td></tr>
        <tbody>

          <tr className='thea'>

            <td className='header-text'>Tên</td>

            <td className='header-text'>Email</td>
            <td className='header-text'>Trạng Thái</td>
            <td className='header-text'>Xử lý</td>
          </tr>

          {dataListTD && dataListTD.map(
            (td) => {

              const { text, brand, _id, status } = td;

              return status === "Đã duyệt" ? (
                <tr key={_id}>
                  <td > {text}</td>
                  <td>{brand}</td>
                  <td> {status}</td>
                  <td style={{ textAlign: 'center' }}>
                
                    <CButton
                      onClick={() => 
                        {DeleTD(_id);
                        setVisible(true);
                      }
                    }
                    >
                      Xóa
                    </CButton>
                  </td>
                </tr>
              ) : ('')
            }
          )

          }
          {/* {this.renderTableData()} */}
        </tbody>
      </table>
    </>

  );
};

export default HappeningApp;
