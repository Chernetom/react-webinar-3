import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import {plural} from "../../utils";

function Controls(props){

  return (
    <div className='Controls'>
      {!props.fullClear && <>
        <div className='Controls-title'>В корзине:</div>
        <div className='Controls-info'>
          {props.cartList.length > 0 ? // Если cartList не пустой, то выводится нужный вариант или же 'пусто'
            `${props.cartList.length} 
            ${plural(props.cartList.length, {one: 'товар', few: 'товара', many:'товаров'})} / 
            ${props.totalPrice} ₽` : 'пусто'
          }
        </div>
        <button onClick={props.handleClick}>Перейти</button>
      </>}
    </div>
  )
}

Controls.propTypes = {
  cartList: PropTypes.array,
  totalPrice: PropTypes.number,
  fullClear: PropTypes.bool,
  handleClick: PropTypes.func
};

Controls.defaultProps = {
  cartList: [],
  totalPrice: 0,
  handleClick: () => {}
}

export default React.memo(Controls);
