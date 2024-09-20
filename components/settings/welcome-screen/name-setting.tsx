"use client";

import { Settings, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import TextField from "../../forms/text-field/text-field";
import { useWelcome } from "@/context/welcome-screen-context";
import { AnimatePresence, motion } from "framer-motion";
import SaveButton from "../../buttons/save-button";
import DiscardButton from "../../buttons/discard-button";
import ToggoleButton from "@/components/buttons/toggole-button";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NameSetting: React.FC<Props> = ({ isOpen, onClose }) => {
  const { nameTitle, name, nameDescription, setNameTitle, setNameDescription } =
    useWelcome();
  const [valid, setValid] = useState<boolean>(false);

  const validateName = (name: string) => {
    const re = /^[a-zA-Z\s]*$/;
    return re.test(name);
  };

  useEffect(() => {
    setValid(validateName(name));
  }, [name]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 h-full w-1/4 bg-white shadow-lg z-50"
          initial={{ x: "-25%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            opacity: { duration: 0.3 },
          }}
        >
          <div className=" p-4 bg-white">
            <div className="py-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center">
                    <Settings />
                    <h1 className="text-lg font-bold mx-2">Settings</h1>
                  </div>
                  <p>Name</p>
                </div>
                <button onClick={onClose} className="p-1 border rounded-md">
                  <X size={16} />
                </button>
              </div>
              <div className="pt-6">
                <TextField
                  label="Title"
                  placeholder="Enter title"
                  setValue={setNameTitle}
                  type="text"
                  value={nameTitle}
                />
                <TextField
                  label="Description"
                  placeholder="Enter description"
                  setValue={setNameDescription}
                  type="text"
                  value={nameDescription}
                />
                <ToggoleButton
                  disable={false}
                  label="Valid"
                  value={valid}
                  onChange={setValid}
                />
                {!valid && name != "" ? (
                  <p className="text-red-500 text-sm">
                    Only alphabets and spaces are allowed
                  </p>
                ) : null}
                <div className="flex bottom-0 gap-2 mt-auto">
                  <SaveButton
                    label="Save"
                    span={true}
                    disable={!valid}
                    onClick={onClose}
                  />
                  <DiscardButton label="Discard" onClick={onClose} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NameSetting;
