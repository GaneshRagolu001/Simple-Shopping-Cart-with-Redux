import classes from "./CartButton.module.css";
import { UIActions } from "../../Store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cartContent.totalQuantiy);
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(UIActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
