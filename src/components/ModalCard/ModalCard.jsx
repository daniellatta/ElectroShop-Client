import React from "react";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";


const ModalCard = ({ isOpen, handleClose, image, title }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      className="fixed inset-0 flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-50"
      contentLabel="Modal"
    >
      <div className="w-3/5 bg-white rounded-lg shadow-lg p-4 flex flex-col">
        <div className="flex items-start justify-between">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <button
            className="text-gray-500 text-xl self-start"
            onClick={handleClose}
          >
            <AiOutlineCloseCircle
              size={24}
              className="hover:text-red-500 transition duration-300"
            />
          </button>
        </div>
        <div className="flex">
          <img src={image} alt="" className="object-cover w-1/2" />
          <div className="ml-4">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
              doloremque asperiores recusandae molestiae ipsa ducimus quo dolor
              inventore alias dolorem hic ex voluptas praesentium, eos
              accusamus? Modi dignissimos cupiditate inventore?
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalCard;
