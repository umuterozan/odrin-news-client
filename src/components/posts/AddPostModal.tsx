'use client'
import Modal from "react-modal"
import { useState } from "react";
import AddPostForm from "./AddPostForm";
import { ICategory } from "@/lib/types";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
  },
};

export default function AddPostModal({ categories }: { categories: ICategory[] }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="bg-[#666666] text-white py-2 px-4 rounded hover:bg-opacity-90 transition-all">Add Post</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Post Modal"
        ariaHideApp={false}
      >
        <button onClick={closeModal}>X</button>
        <AddPostForm categories={categories} />
      </Modal>
    </div>
  )
}