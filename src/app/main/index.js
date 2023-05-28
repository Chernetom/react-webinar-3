import {memo, useCallback, useEffect, useState} from 'react';
import Item from "../../components/item";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import List from "../../components/list";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import Paginator from "../../components/paginator";
import NavMenu from "../../components/nav-menu";
import DualAlign from "../../components/dual-align";
import Spinner from "../../components/spinner";

function Main() {

  const store = useStore();
  const limit = 10; // переменная для настройки limit при запросе на сервер
  const [skip,setSkip] = useState(0); // переменная для изменения страницы в пагинации

  useEffect(() => {
    store.actions.catalog.load(limit, skip);
  }, [skip]);

  const select = useSelector(state => ({
    list: state.catalog.list,
    count: state.catalog.count,
    pagesCount: state.catalog.pagesCount,
    activePage: state.catalog.activePage,
    amount: state.basket.amount,
    sum: state.basket.sum,
    isFetching: state.catalog.isFetching
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
  }

  const renders = {
    item: useCallback((item) => {
      return <Item item={item} onAdd={callbacks.addToBasket} route={`/articles/${item._id}`}/>
    }, [callbacks.addToBasket])
  };


  return (
    <PageLayout>
      <Head title='Магазин'/>
      <DualAlign leftComponent={<NavMenu />}
                 rightComponent={<BasketTool onOpen={callbacks.openModalBasket}
                                             amount={select.amount}
                                             sum={select.sum}/>}
      />
      {select.isFetching && <Spinner/>}
      <List list={select.list} renderItem={renders.item}/>
      <Paginator itemsLimit={limit} pagesCount={select.pagesCount}
                 skip={skip} setSkip={setSkip} activePage={select.activePage}/>
    </PageLayout>
  );
}

export default memo(Main);
