import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';
import CartItem from "../cart-item";

function List(props){
  return (
    <div className='List'>{
      props.list.length ? props.list.map(item =>
        <div key={item.code} className='List-item'>
            <Item item={item}
                  onChangeItemInCart={props.onChangeItemInCart}
            />
        </div>
      ) :
        props.cartList.length ? props.cartList.map(item =>
          <div key={item.code} className='List-item'>
            <CartItem item={item}
                  onChangeItemInCart={props.onChangeItemInCart}
            />
          </div>
        ) : null
    }
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
