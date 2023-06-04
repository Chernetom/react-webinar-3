import {Routes, Route} from 'react-router-dom';
import useSelector from "../hooks/use-selector";
import useStore from "../hooks/use-store";
import Main from "./main";
import Basket from "./basket";
import Article from "./article";
import AuthProtection from "../components/auth-protection";
import Login from "./login";
import Profile from "./profile";
import useInit from "../hooks/use-init";

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {

  const store = useStore();

  const activeModal = useSelector(state => state.modals.name);
  const {user, isUserLoading} = useSelector((state) => ({
    user: state.profile.user,
    isUserLoading: state.profile.isLoading,
  }));

  useInit(
    () => {
      store.actions.profile.getUser();
    },
    [],
    true
  );

  return (
    <>
      <Routes>
        <Route path={''} element={<Main/>}/>
        <Route path={'/articles/:id'} element={<Article/>}/>
        <Route
          path={"/login"}
          element={
            <AuthProtection isAuth={!user}>
              <Login />
            </AuthProtection>
          }
        />
        <Route
          path={"/profile"}
          element={
            <AuthProtection isAuth={user} url='/login'>
              <Profile />
            </AuthProtection>
          }
        />
      </Routes>

      {activeModal === 'basket' && <Basket/>}
    </>
  );
}

export default App;
