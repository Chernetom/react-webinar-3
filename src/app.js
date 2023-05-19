import React, {useCallback, useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from "./components/modal";
import Cart from "./components/cart";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;
  const cartList = store.getState().cartList;
  const totalPrice = store.getState().totalPrice;
  let [isModalVisible, changeIsModalVisible] = useState(false);

  const callbacks = {

    onAddItemToCart: useCallback((item) => {
      store.addItemToCart(item);
    },[store]),

    onDeleteItemFromCart: useCallback((item) => {
      store.deleteItemFromCart(item);
    },[store]),

    handleClick: useCallback(() => {
      changeIsModalVisible(isModalVisible = !isModalVisible);
    },[store])
  }

  return (
    <>
      <PageLayout>
        <Head title='Магазин'/>
        <Controls cartList={cartList}
                  totalPrice={totalPrice}
                  handleClick={callbacks.handleClick}
        />
        <List list={list}
              onChangeItemInCart={callbacks.onAddItemToCart}
        />
      </PageLayout>
      {isModalVisible && // Переменная isModalVisible используется для отображения модального окна
        <Modal>
          <Cart cartList={cartList}
                totalPrice={totalPrice}
                handleClick={callbacks.handleClick}
                onChangeItemInCart={callbacks.onDeleteItemFromCart}
          />
        </Modal>
      }
    </>


  );
}

export default App;
