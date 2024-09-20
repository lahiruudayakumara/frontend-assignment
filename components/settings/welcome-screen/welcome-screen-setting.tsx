"use client";

import { Settings, X } from "lucide-react";
import React, { useState } from "react";
import TextField from "../../forms/text-field/text-field";
import ImageView from "../../view/image-view";
import IconWithButton from "../../buttons/icon-with-button";
import UploadImageModal from "../../modal/upload-image-modal";
import { useWelcome } from "@/context/welcome-screen-context";
import Placment from "../../palacment/placment";
import { AnimatePresence, motion } from "framer-motion";
import SaveButton from "../../buttons/save-button";
import DiscardButton from "../../buttons/discard-button";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomeScreenSetting: React.FC<Props> = ({ isOpen, onClose }) => {
  const [uploadModal, setUploadModal] = useState<boolean>(false);
  const {
    title,
    description,
    text,
    imageUrl,
    setTitle,
    setDescription,
    setText,
    setImageUrl,
    setAlign,
  } = useWelcome();

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
            <UploadImageModal
              isOpen={uploadModal}
              onClose={() => setUploadModal(false)}
              onAddField={setImageUrl}
            />
            <div className="py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Settings />
                  <h1 className="text-lg font-bold mx-2">Settings</h1>
                </div>
                <button onClick={onClose} className="p-1 border rounded-md">
                  <X size={16} />
                </button>
              </div>
              <div className="pt-6">
                <TextField
                  label="Title"
                  placeholder="Enter title"
                  setValue={setTitle}
                  type="text"
                  value={title}
                />
                <TextField
                  label="Description"
                  placeholder="Enter description"
                  setValue={setDescription}
                  type="text"
                  value={description}
                />
                <TextField
                  label="Text"
                  placeholder="Enter text"
                  setValue={setText}
                  type="text"
                  value={text}
                />
                <IconWithButton
                  label="Upload"
                  icon="Upload"
                  onClick={() => setUploadModal(true)}
                />
                <ImageView src={imageUrl} alt="Uploaded image" />
                <IconWithButton
                  label="Remove"
                  icon="Trash2"
                  align="center"
                  onClick={() => setImageUrl("/image.png")}
                />
                <Placment setValue={setAlign} />
                <div className="flex bottom-0 gap-2 mt-auto">
                  <SaveButton span={true} label="Save" onClick={onClose} />
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

export default WelcomeScreenSetting;
