import React from "react";
import PropTypes from "prop-types";
import './style.css';

function Item(props){

  const callbacks = {
    onChangeItemInCart: () => {
      props.onChangeItemInCart(props.item);
    }
  }

  return (
    <div className={'Item'}>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>{props.item.title}</div>
      <div className='Item-price'>{`${props.item.price} ₽`}</div>
      {props.usedInCart && //переменная usedInCart используется для дополнительного вывода блока count в корзине
      <div className='Item-count'>{`${props.item.count} шт`}</div>
      }
      <div className='Item-actions'>
        <button onClick={callbacks.onChangeItemInCart}>
          {props.usedInCart ? 'Удалить' : 'Добавить'}
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number
  }).isRequired,
  usedInCart: PropTypes.bool,
  onChangeItemInCart: PropTypes.func
};

Item.defaultProps = {
  item: [],
  onChangeItemInCart: () => {}
}

export default React.memo(Item);
