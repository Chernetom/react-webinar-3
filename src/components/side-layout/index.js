import React, {memo} from "react";
import PropTypes from "prop-types";
import {cn as bem} from '@bem-react/classname';
import './style.css';

function SideLayout({children, side, padding, paddingX, paddingY, gap, border}) {
  const cn = bem('SideLayout');
  return (
    <div className={cn({side, padding, paddingX, paddingY, gap, border})}>
      {React.Children.map(children, (child) => (
        <div className={cn('item')}>{child}</div>
      ))}
    </div>
  );
}

SideLayout.propTypes = {
  children: PropTypes.node,
  side: PropTypes.oneOf(['start', 'end', 'between']),
  padding: PropTypes.oneOf(['small', 'medium']),
}

SideLayout.defaultProps = {};

export default memo(SideLayout);
