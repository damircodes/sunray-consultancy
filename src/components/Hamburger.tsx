"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import Link from "next/link";

import CallUs from "./CallUs";
import EmailUs from "./EmailUs";

export default function HamburgerMenu() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <div className="">
      <button onClick={toggleModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mt-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Hamburger Menu"
        className=""
      >
        <button onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 pt-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="max-w-7xl mx-auto pb-5 text-right">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 mb-8 flex justify-end"
              onClick={closeModal}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            <Link href="/about" onClick={closeModal}>
              <h1 className="text-5xl py-1">About</h1>
            </Link>
            <Link href="/blog" onClick={closeModal}>
              <h1 className="text-5xl py-1">Blog</h1>
            </Link>
            <Link href="/find-us" onClick={closeModal}>
              <h1 className="text-5xl py-1">Find Us</h1>
            </Link>
            <Link href="/services" onClick={closeModal}>
              <h1 className="text-5xl py-1">Services</h1>
            </Link>
            <Link href="/contact" onClick={closeModal}>
              <h1 className="text-5xl py-1">Contact</h1>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <CallUs />
          <EmailUs closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
}
