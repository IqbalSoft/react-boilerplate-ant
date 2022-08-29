import React from "react";
import { Button } from 'antd';
import PropTypes from 'prop-types';

const ButtonComponent = ({
  children,
  onClick,
  type,
  className,
  ghost,
  icon
}) => {
  return <Button className={className} type={type} onClick={onClick} ghost={ghost} icon={icon}>{children}</Button>
};

ButtonComponent.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  ghost: PropTypes.bool,
  icon: PropTypes.string,
};

ButtonComponent.defaultProps = {
  onClick: () => {},
  type: 'primary',
  className: '',
  ghost: false,
  icon: null,
}

export default ButtonComponent;