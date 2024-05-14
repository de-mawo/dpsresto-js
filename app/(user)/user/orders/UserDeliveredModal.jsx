
import Image from "next/image";

import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { BsFillBoxFill } from "react-icons/bs";
import Modal from "../../../components/Common/Modal";



const UserDeliveredModal = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        className="flex justify-between bg-green-50  p-1 text-green-700 items-center"
        onClick={openModal}
      >
        <span className="flex items-center space-x-2 ">
          <BsFillBoxFill size={24} />
          <span>Order Delivered</span>
        </span>

        <FaChevronRight className="shrink-0" />
      </button>

      <Modal
        isOpen={isOpen}
        title={"Order: DPS2023062514"}
        closeModal={closeModal}
      >
        <div className="mt-4">
          {order.cart.map((cart) => (
            <div className="flex items-center space-y-3 " key={cart.id}>
              <div className="w-16 h-16 overflow-hidden  rounded-full">
                <Image
                  src={cart.image}
                  alt="logo"
                  width={70}
                  height={70}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="pl-4 font-semibold ">{cart.title}</span>
                <p className="pl-4 text-xs">
                  Preparation:{" "}
                  <span className=" italic text-gray-500">{cart.prepare}</span>
                </p>
                <p className="pl-4 text-xs">
                  Note:{" "}
                  <span className=" italic text-gray-500">
                    {cart.instructions}
                  </span>
                </p>
                <p className="pl-4 text-xs">
                  Price:{" "}
                  <span className="font-semibold  text-green-600">
                    ${cart.price}
                  </span>
                </p>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between p-2 mt-3 text-gray-500 border-t">
            <span>Discount</span>
            <span>$- {order.discount}</span>
          </div>
          <div className="flex items-center justify-between p-2 text-gray-500">
            <span>Service Fees</span>
            <span>${order.serviceFee}</span>
          </div>
          <div className="flex items-center justify-between p-2 text-gray-500">
            <span>Delivery Fee</span>
            <span>${order.deliveryFee}</span>
          </div>
          <div className="flex items-center justify-between p-2 text-gray-500 border-t">
            <span className="text-lg font-medium">Total</span>
            <span className="text-lg font-medium">${order.total}</span>
          </div>
        </div>
        <div className="mt-3 p-2 bg-slate-50 rounded-md">
          <p>
            Delivery Note:
            <span className="text-xs ml-2 text-gray-500">{order.note}</span>
          </p>
          <p>
            Delivery Address:{" "}
            <span className="text-xs ml-2 text-gray-500">
              {order.deliveryAddress}
            </span>{" "}
          </p>
        </div>
      </Modal>
    </>
  );
};

export default UserDeliveredModal;
