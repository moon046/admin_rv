import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import {
  Grid, Button, Modal

} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
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

const expiredApp = () => {
  const title = 'Quản Lý Tin';
  const description = 'User directory application that built with the help of List.js. Can be searched, paged and sorted.';

  const breadcrumbs = [
    { to: '', text: 'Quản Lý Tin' },
    { to: 'apps', title: 'Tin đẫ hết hạn' },
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

  const dispatch = useDispatch();
  // const { contacts: data, pageCount, loading } = useSelector((state) => state.contacts);
  // const [dataList, setDataList] = useState([]);
  const [isOpenAddEditModal, setIsOpenAddEditModal] = useState(false);
  const [isOpenDeleteConfirmModal, setIsOpenDeleteConfirmModal] = useState(false);
  const [term, setTerm] = useState('');
  const [open, setOpen] = React.useState(false)

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
  // const [dataListMoblie, setDataList] = useState([]);
  // const [dataList, setDataList] = useState([]);
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


  const [dataList, setDataList] = useState([]);
  const [dataListDt, setDataListDt] = useState([]);
  useEffect(() => {
    axios(`http://localhost:5000/api/bikes`).then(
      ({ data }) => setDataList(data)
    );
  }, []);
  useEffect(() => {
    axios(`http://localhost:5000/api/posts`).then(
      ({ data }) => setDataList(data)
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
      <center textAlign='left'> QUẢN LÝ TIN ĐIỆN THOẠI</center>
      <table className='table--container'>
     
       
        <tbody>

          <tr className='thea'>

            <td className='header-text'>Tên</td>

            <td className='header-text'>Email</td>
            <td className='header-text'>Thao Tác</td>
            <td className='header-text'>Xử  Lý</td>
          </tr>

          {dataListDt && dataListDt.map(
            (dt) => {

              // const { text, brand, _id, status } = dt;

              return dt.status === "Chưa duyệt" ? (
                <tr >
                  <td > {dt.text}</td>
                  {/* <td > {_id}</td> */}
                  <td>{dt.brand}</td>
                  <td> {dt.status}</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button
                      onClick={() => handleClickDt(dt.id)}
                    >
                      Duyệt
                    </Button>
                    {/* { render: (text, record) => handleConfirmBill(record)} */}

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

export default expiredApp;
