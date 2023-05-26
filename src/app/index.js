import Main from "./main";
import Basket from "./basket";
import useSelector from "../store/use-selector";
import {Route, Routes} from "react-router-dom";
import ItemLayout from "./Item-info";

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {

  const activeModal = useSelector(state => state.modals.name);

  return (
    <>
      <Routes>
          <Route path='/' element={
            <>
              <Main/>
              {activeModal === 'basket' && <Basket/>}
            </>
          }/>
          <Route path='/:id' element={
            <>
              <ItemLayout/>
              {activeModal === 'basket' && <Basket/>}
            </>
          }/>
      </Routes>
      {/*<Main/>*/}
      {/*{activeModal === 'basket' && <Basket/>}*/}
    </>
  );
}

export default App;
