import { UIActions } from "./ui-slice";
import { cartContentActions } from "./cartContentSlice";

export const SendCartData = (mycart) => {
  return async (dispatch) => {
    dispatch(
      UIActions.showNotification({
        status: "Pending..",
        title: "Data Sending ...",
        message: "Data still Sending...",
      })
    );

    const SendRequest = async () => {
      const response = await fetch(
        "https://redux-backend-c9f3d-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: mycart.items,
            totalQuantity: mycart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending Data Failed...");
      }
    };
    try {
      await SendRequest();
      dispatch(
        UIActions.showNotification({
          status: "success",
          title: "Data Sent",
          message: "Data sent successfully...",
        })
      );
    } catch (error) {
      dispatch(
        UIActions.showNotification({
          status: "error",
          title: "Error",
          message: "Data sent Failed...",
        })
      );
    }
  };
};

export const FetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-backend-c9f3d-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could Not Fetch Cart Data");
      }

      const data = response.json();
      return data;
    };

    try {
      const MYcartData = await fetchData();
      dispatch(cartContentActions.replaceCart(MYcartData));
    } catch (error) {
      dispatch(
        UIActions.showNotification({
          status: "error",
          title: "Error",
          message: "Data Fetching Failed...",
        })
      );
    }
  };
};
