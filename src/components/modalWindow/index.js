import style from "./modalWindow.module.css";
import xMarkWhite from "../../ui/xMark2.png";
import { clearCartAction } from "../../store/reducers/cartReducer";
import { useDispatch } from "react-redux";

const ModalWindow = ({ active, setActive, type}) => {

  const dispatch = useDispatch();

  function clickHandle() {
    setActive(false)

    if (type === "cartPage") { dispatch(clearCartAction())}
    else return
  }

  return (
    <div
      className={`${style.modal} ${active && style.active}`}
      onClick={() => setActive(false)}
    >
      <div
        className={style.modal_content}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={style.text_container}>
          <p className={style.title}>Congratulations!</p>
          <p>Your order has been successfully placed on the website.</p>
          <p>A manager will contact you shortly to confirm your order.</p>
          <img src={xMarkWhite} alt="" onClick={() => clickHandle()}/>
        </div>
      </div>
    </div>
  );
};
export default ModalWindow;
