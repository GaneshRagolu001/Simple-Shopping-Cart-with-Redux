import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/UI/Notification.js";
import { SendCartData, FetchCartData } from "./Store/Cart-Actions.js";

let initial = true;

function App() {
  const dispatch = useDispatch();
  const showmyCart = useSelector((state) => state.ui.showCart);
  const mycart = useSelector((state) => state.cartContent);
  const notif = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(FetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }

    if (mycart.changed) {
      dispatch(SendCartData(mycart));
    }
  }, [mycart, dispatch]);
  return (
    <>
      {notif && (
        <Notification
          status={notif.status}
          title={notif.title}
          message={notif.message}
        />
      )}
      <Layout>
        {showmyCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
