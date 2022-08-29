import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../store/reducers';

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.default);
  }, [dispatch]);

  return (
    <h4>hshs</h4>
  );
};

export default LandingPage;
