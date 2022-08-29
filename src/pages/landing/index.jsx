import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
 
const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'bankAccount/GET_DATA' });
  }, [dispatch]);

  const { dataBankAccount } = useSelector(({bankAccount}) => bankAccount);

  return (
    <>
      {
        dataBankAccount && dataBankAccount.map((item, key) => (
          <div key={key}>{item.category}</div>
        ))
      }
    </>
  );
};

export default LandingPage;
