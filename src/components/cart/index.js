import React  from "react";
import PropTypes from 'prop-types';
import './style.css';
import Head from "../head";
import Controls from "../controls";
import List from "../list";
import {formatter} from "../../utils";

function Cart(props){
  return (
    <>
      <Head title='Корзина'
            closeButton={true}
            handleClick={props.handleClick}
      />
      <Controls fullClear ={true}/>
      <List cartList={props.cartList}
            onChangeItemInCart={props.onChangeItemInCart}
      />
      <div className='Cart-totalPrice'>
        <span className='Cart-totalPrice-label'>Итого</span>
        <span className='Cart-totalPrice-value'>{formatter.format(props.totalPrice)}</span>
      </div>
    </>
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
