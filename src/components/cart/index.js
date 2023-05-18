import React  from "react";
import PropTypes from 'prop-types';
import './style.css';
import Head from "../head";
import Controls from "../controls";
import List from "../list";

function Cart(props){
  return (
    <div className='Cart'>
      <div className='Cart-block'>
        <Head title='Корзина'
              closeButton={true}
              handleClick={props.handleClick}
        />
        <Controls fullClear ={true}/>
        <List list={props.cartList}
              onChangeItemInCart={props.onChangeItemInCart}
              usedInCart={true}
        />
        <div className='Cart-totalPrice'>
          <span className='Cart-totalPrice-label'>Итого</span>
          <span className='Cart-totalPrice-value'>{props.totalPrice} ₽</span>
        </div>
      </div>
    </div>
  )
}

Cart.propTypes = {
  cartList: PropTypes.array,
  totalPrice: PropTypes.number,
  handleClick: PropTypes.func,
  onChangeItemInCart: PropTypes.func
};

Cart.defaultProps = {
  cartList: [],
  totalPrice: 0,
  handleClick: () => {},
  onChangeItemInCart: () => {}
}

export default React.memo(Cart);
