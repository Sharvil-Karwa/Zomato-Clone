/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ImCross } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

export default function Login(props) {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return props.trigger ? (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="justify-center ">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 justify-center rounded-md">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center">
                      <p className="text-2xl flex justify-between mb-10">
                        Login{" "}
                        <span
                          onClick={() => {
                            setOpen(false);
                            props.setTrigger(false);
                          }}
                          ref={cancelButtonRef}
                        >
                          <ImCross className="inline text-xl" />
                        </span>
                      </p>

                      <div className="my-2 flex flex-col">
                        <div className="flex mb-2 items-center">
                          <img
                            src="https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp"
                            className="h-5"
                          />
                          <span className="mx-2 text-xl">+91 </span>
                          <input
                            type="text"
                            placeholder="Phone"
                            className="inline text-xl p-1"
                          ></input>
                        </div>
                        <button className="w-full bg-[#ef4f5f] text-[#fceaec] text-lg p-1 rounded-md my-2">
                          Send One Time Password
                        </button>
                        <hr className="inline" />
                        <div className="text-xl font-light m-2 inline">OR</div>
                        <hr className="inline" />
                        <button className="w-full border-2 bg-[#ffffff] text-xl p-1 rounded-md my-2 flex items-center justify-center">
                          <GrMail className="inline text-[#ef4f5f] text-2xl mr-2" />{" "}
                          Continue with Email
                        </button>
                        <button className="w-full border-2 bg-[#ffffff] text-xl p-1 rounded-md my-2 flex items-center justify-center">
                          <FcGoogle className="inline text-2xl mr-2" /> Continue
                          with Email
                        </button>
                        <hr></hr>
                        <div className="text-md  m-2 inline">
                          Don't have an account?{" "}
                          <span className="text-[#ef4f5f]">
                            Create an account
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  ) : (
    ""
  );
}
