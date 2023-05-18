import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function List({list, onChangeItemInCart, usedInCart}){
  return (
    <div className='List'>{
      list.map(item =>
        <div key={item.code} className='List-item'>
          <Item item={item}
                onChangeItemInCart={onChangeItemInCart}
                usedInCart={usedInCart}
          />
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  usedInCart: PropTypes.bool,
  onChangeItemInCart: PropTypes.func
};

List.defaultProps = {
  list: [],
  onChangeItemInCart: () => {}
}

export default React.memo(List);
