import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Table, DatePicker } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

import { Button, Input } from '../../components';

import './styles.css';

const { RangePicker } = DatePicker;

const BankAccountPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: 'bankAccount/GET_DATA' });
  }, [dispatch]);

  const { dataBankAccount, loading } = useSelector(({ bankAccount }) => bankAccount);

  const [data, setData] = useState([]);
  const [showRangeDate, setShowRangeDate] = useState(false);

  useEffect(() => {
    setData(dataBankAccount && dataBankAccount);
  }, [dataBankAccount]);

  const columns = [
    {
      key: 'id',
      dataIndex: 'id',
      title: 'Id'
    },
    {
      key: 'transactionDate',
      dataIndex: 'transactionDate',
      title: 'Transaction Date',
      sorter: (a, b) => a.transactionDate > b.transactionDate,
    },
    {
      key: 'category',
      dataIndex: 'category',
      title: 'Category'
    },
    {
      key: 'debit',
      dataIndex: 'debit',
      title: 'Debit',
      render: (item) => item !== null ? <span>${item}</span> : '-'
    },
    {
      key: 'credit',
      dataIndex: 'credit',
      title: 'Credit',
      render: (item) => item !== null ? <span>${item}</span> : '-'
    },
    {
      key: 'description',
      dataIndex: 'description',
      title: 'Description'
    },
    {
      key: 'id',
      dataIndex: 'id',
      render: (id) => <Button type="primary" onClick={() => navigate(`/bank-account/${id}`)}>Detail</Button>
    },
  ];

  const handleInputSearch = (e) => {
    const filteredData = dataBankAccount && dataBankAccount.filter((val) => val.description?.toLowerCase().match(e.target.value.toLowerCase()))
    setData(filteredData);

    if(e.target.value === "") {
      setData(dataBankAccount && dataBankAccount);
    }
  };

  const handleFilterRangeDate = (rangeDate) => {
    const filteredData = dataBankAccount && dataBankAccount.filter((val) => val.transactionDate >= rangeDate[0] && val.transactionDate <= rangeDate[1])
    setData(filteredData);

    if(rangeDate[0] === ""){
      setData(dataBankAccount && dataBankAccount); 
    }
  };

  return (
    <div className="bank-account-page">
      <h1>Bank Account</h1>
      <div className="search-filter-box">
        <Input allowClear placeholder="Search By Description" onChange={handleInputSearch} />
        &nbsp;
        <Button onClick={() => setShowRangeDate(!showRangeDate)} icon={<FilterOutlined />} />
      </div>

      {
        showRangeDate ?
          <div className="range-picker-box">
            <RangePicker onChange={(_, rangeDate) => handleFilterRangeDate(rangeDate)} />
          </div>
        : null
      }

      <Table dataSource={data} columns={columns} loading={loading} rowKey={(record) => record?.id} />
    </div>
  );
};

export default BankAccountPage;
