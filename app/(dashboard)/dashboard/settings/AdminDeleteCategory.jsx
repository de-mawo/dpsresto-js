import React, { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";

import { useRouter } from "next/navigation";
import Modal from "../../../components/Common/Modal";



const AdminDeleteCategory = ({ cat }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const OpenModal = () => setIsOpen(true);

  return (
    <>
      <HiOutlineTrash
        onClick={OpenModal}
        className="cursor-pointer h-6 w-6 text-red-500"
      />
      <Modal isOpen={isOpen} title={"Burger"} closeModal={closeModal}>
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative p-4 text-center bg-white  ">
            <HiOutlineTrash
              className="text-gray-400  w-11 h-11 mb-3.5 mx-auto"
              aria-hidden="true"
            />
            <p className="mb-4 text-gray-500 ">
              Are you sure you want to delete this item?
            </p>
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={closeModal}
                type="button"
                className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border
                 border-gray-200 hover:bg-gray-100 focus:outline-none  hover:text-gray-900   "
              >
                No, cancel
              </button>
              <button
                type="submit"
                className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700  "
              >
                Yes, I&apos;m sure
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AdminDeleteCategory;
