import React, { PropTypes } from 'react';


function Button(props) {
  const Tag = props.useAnchor ? 'a' : 'button';

  return (
    <Tag onClick={props.clickHandler} >
      { props.children }
    </Tag>);
}


Button.propTypes = {
  clickHandler: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default Button;
