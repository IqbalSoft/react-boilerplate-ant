import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'antd';

import './styles.css';

const BankAccountPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: 'bankAccount/GET_DATA' });
  }, [dispatch]);

  const { dataBankAccount, loading } = useSelector(({ bankAccount }) => bankAccount);

  const [data, setData] = useState([]);

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
      render: (id) => <Button type="primary" onClick={() => navigate(`/bank-account/${id}`) }>Detail</Button>
    },
  ];
  
  return (
    <div className="bank-account-page">
      <h1>Bank Account</h1>
      <Table dataSource={data} columns={columns} loading={loading} rowKey={(record) => record?.id} />
    </div>
  );
};

export default BankAccountPage;
