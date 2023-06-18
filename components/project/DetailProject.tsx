"use client";

import { DetailsProjectProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const DetailProject = ({
  isOpen,
  closeModal,
  project,
}: DetailsProjectProps) => {
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#282C33] text-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-4">
                    <div
                      onClick={closeModal}
                      className="close absolute block right-3 top-3 cursor-pointer"
                    >
                      <AiOutlineClose />
                    </div>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium text-center leading-6"
                  >
                    {project.title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <Image
                      src={project.pathImage}
                      alt={project.title}
                      width={1000}
                      height={1000}
                      className="object-container"
                    />
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 py-3"
                    >
                      About
                      <div className="line h-px w-1/3  bg-[#C778DD]" />
                    </Dialog.Title>
                    <p className="text-sm text-gray-500">
                      {project.discription}
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
export default DetailProject;
