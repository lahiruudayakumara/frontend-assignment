"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface WelcomeContextType {
  title: string;
  description: string;
  text: string;
  imageUrl: string;
  align: string;
  emailTitle: string;
  emailDescription: string;
  email: string;
  name: string;
  nameTitle: string;
  nameDescription: string;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setText: (text: string) => void;
  setImageUrl: (imageUrl: string) => void;
  setAlign: (align: string) => void;
  setEmailTitle: (emailTitle: string) => void;
  setEmailDescription: (emailDescription: string) => void;
  setEmail: (email: string) => void;
  setName: (name: string) => void;
  setNameTitle: (nameTitle: string) => void;
  setNameDescription: (nameDescription: string) => void;
}

const WelcomeContext = createContext<WelcomeContextType | undefined>(undefined);

interface WelcomeProviderProps {
  children: ReactNode;
}

export const WelcomeProvider = ({ children }: WelcomeProviderProps) => {
  const [title, setTitle] = useState<string>("Welcome to our form");
  const [description, setDescription] = useState<string>(
    "This is the welcome screen description."
  );
  const [text, setText] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("/image.png");
  const [align, setAlign] = useState<string>("center");
  const [emailTitle, setEmailTitle] = useState<string>("Enter your email");
  const [emailDescription, setEmailDescription] = useState<string>(
    "This will be used to contact you for the next steps."
  );
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nameTitle, setNameTitle] = useState<string>("Enter your name");
  const [nameDescription, setNameDescription] = useState<string>(
    "This will be used to contact you for the next steps."
  );

  return (
    <WelcomeContext.Provider
      value={{
        title,
        description,
        text,
        imageUrl,
        align,
        emailTitle,
        emailDescription,
        email,
        name,
        nameTitle,
        nameDescription,
        setTitle,
        setDescription,
        setText,
        setImageUrl,
        setAlign,
        setEmailTitle,
        setEmailDescription,
        setEmail,
        setName,
        setNameTitle,
        setNameDescription,
      }}
    >
      {children}
    </WelcomeContext.Provider>
  );
};

export const useWelcome = (): WelcomeContextType => {
  const context = useContext(WelcomeContext);
  if (!context) {
    throw new Error("useWelcome must be used within a WelcomeProvider");
  }
  return context;
};
