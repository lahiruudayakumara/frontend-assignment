"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WelcomeContextType {
  title: string;
  description: string;
  text: string;
  imageUrl: string;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setText: (text: string) => void;
  setImageUrl: (imageUrl: string) => void;
}

const WelcomeContext = createContext<WelcomeContextType | undefined>(undefined);

interface WelcomeProviderProps {
  children: ReactNode;
}

export const WelcomeProvider = ({ children }: WelcomeProviderProps) => {
  const [title, setTitle] = useState<string>('Welcome to our form');
  const [description, setDescription] = useState<string>('This is the welcome screen description.');
  const [text, setText] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('/image.png');

  return (
    <WelcomeContext.Provider value={{ title, description, text, imageUrl, setTitle, setDescription, setText, setImageUrl }}>
      {children}
    </WelcomeContext.Provider>
  );
};

export const useWelcome = (): WelcomeContextType => {
  const context = useContext(WelcomeContext);
  if (!context) {
    throw new Error('useWelcome must be used within a WelcomeProvider');
  }
  return context;
};
