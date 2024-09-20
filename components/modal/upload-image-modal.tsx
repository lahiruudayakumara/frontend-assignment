/* eslint-disable @next/next/no-img-element */
"use client";

import { X, ImageUp } from "lucide-react";
import React, { useState } from "react";
import IconWithButton from "../buttons/icon-with-button";

interface AddFieldModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddField: (newField: string) => void;
}

const UploadImageModal: React.FC<AddFieldModalProps> = ({
  isOpen,
  onClose,
  onAddField,
}) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleClearImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
  };

  const handleUpload = () => {
    onAddField(previewUrl || "");
    setPreviewUrl(null);
    onClose();
  };

  console.log(selectedImage);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white shadow-md p-6 rounded-md"
      >
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold">Upload Image</h1>
          <button onClick={onClose}>
            <X size={16} />
          </button>
        </div>
        <div
          className="flex my-6 border-2 rounded-md border-dashed w-[550px] min-h-72 items-center justify-center"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {previewUrl ? (
            <div className="relative">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-auto max-h-72 object-contain"
              />
              <button
                onClick={handleClearImage}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <ImageUp size={60} color="#e3e3e3" />
              <p className="text-gray-500 mt-2">Drag & Drop your image here</p>
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="file-upload"
          onChange={handleImageChange}
        />
        <label
          htmlFor="file-upload"
          className="flex items-center justify-center gap-2"
        >
          <IconWithButton
            icon="FolderUp"
            label="Browse"
            onClick={() => document.getElementById("file-upload")?.click()}
          />
          <IconWithButton icon="Upload" label="Upload" onClick={handleUpload} />
        </label>
      </div>
    </div>
  );
};

export default UploadImageModal;
