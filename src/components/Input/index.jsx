import React from "react";
import { Input } from 'antd';
import PropTypes from 'prop-types';

const InputComponents = ({
  onChange,
  placeholder,
  className,
  allowClear
}) => {
  return <Input className={className} placeholder={placeholder} onChange={onChange} allowClear={allowClear} />;
};

InputComponents.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  allowClear: PropTypes.bool
}

InputComponents.defaultProps = {
  onChange: () => {},
  placeholder: '',
  className: '',
  allowClear: false
}

export default InputComponents;