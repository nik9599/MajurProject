import React, { useEffect } from "react";
import "./middleNavBar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  NewOrder,
  OrderList,
  CompletedOrder,
} from "../../utils/Redux/slice/stateSlice/stateSlice";
import { useState } from "react";
import OrderListPage from "../OrderList/OrderList.jsx";

export default function MiddleNavBar() {
  const dispatch = useDispatch();
  const [currentOrderType, setCurrentOrderType] = useState("");
  const isOrder = useSelector((state) => state.state.Orders);
  const orderDetail = useSelector(state =>state.state.OrderDetail);
  const [orderList , setOrderList] = useState(true)

  useEffect(() => {
    // Dispatch actions based on currentOrderType
    if (currentOrderType === "New") {
      dispatch(NewOrder({ state: true }));
      setOrderList(false);
    } else if (currentOrderType === "Orders") {
      dispatch(OrderList({ state: true }));
      setOrderList(true)
    } else if (currentOrderType === "Completed") {
      dispatch(CompletedOrder({ state: true }));
      setOrderList(false);
    }
  }, [currentOrderType, dispatch]);

  return (
    <div className="middle-nav-container">
      <div className="upper-container">
        <div className="task-div">
          <p>Task List</p>
        </div>
        <div className="logo-div">
          <i className="fa-solid fa-list-check"></i>
        </div>
      </div>
      <div className="middle-contianer">
        <div
          className="new-div"
          tabIndex="0"
          onClick={() => setCurrentOrderType("New")}
        >
          <p>New</p>
        </div>
        <div
          className="orders-div"
          tabIndex="0"
          onClick={() => setCurrentOrderType("Orders")}
        >
          <p>Orders</p>
        </div>
        <div
          className="completed-div"
          tabIndex="0"
          onClick={() => setCurrentOrderType("Completed")}
        >
          <p>Completed</p>
        </div>
      </div>
      <div className="lower-container">
        {orderList && <OrderListPage />}
      </div>
    </div>
  );
}
