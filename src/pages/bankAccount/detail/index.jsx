import React, { useEffect } from "react";
import { Skeleton } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { Button } from '../../../components';

import './styles.css';

const DetailBankAccount = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: 'bankAccount/GET_DATA_DETAIL', id: id })
  }, [dispatch, id])

  const { dataBankAccount, loading } = useSelector(({ bankAccount }) => bankAccount);

  return (
    <div className="detail-page">
      <Button onClick={() => navigate('/')} type="primary" ghost icon={<LeftOutlined />}>
        Back
      </Button>

      <div className="card-box">
        {
          loading ? <Skeleton />
          : 
          <>
            <h2>Detail Bank Account</h2>

            <table cellPadding={10} cellSpacing={0}>
              <tbody>
                <tr>
                  <th>Transaction Date</th>
                  <td>:</td>
                  <td>{dataBankAccount && dataBankAccount.transactionDate}</td>
                </tr>

                <tr>
                  <th>Category</th>
                  <td>:</td>
                  <td>{dataBankAccount && dataBankAccount.category}</td>
                </tr>

                <tr>
                  <th>Debit</th>
                  <td>:</td>
                  <td>{dataBankAccount && dataBankAccount.debit !== null ? <span>${dataBankAccount.debit}</span> : '-'}</td>
                </tr>

                <tr>
                  <th>Credit</th>
                  <td>:</td>
                  <td>{dataBankAccount && dataBankAccount.credit !== null ? <span>${dataBankAccount.credit}</span> : '-'}</td>
                </tr>

                <tr>
                  <th>Description</th>
                  <td>:</td>
                  <td>{dataBankAccount && dataBankAccount.description}</td>
                </tr>
              </tbody>
            </table>
          </>
        }
      </div>
    </div>
  )
};
export default DetailBankAccount;