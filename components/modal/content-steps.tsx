"use client";

import { Menu } from "lucide-react";
import React, { useState } from "react";
import StepItem from "./step-item";
import StepItemWithClose from "./content-steps-with-close";
import AddFieldButton from "../buttons/add-field";
import AddFieldModal from "./add-field-modal";
import WelcomeScreenSetting from "../settings/welcome-screen-setting";
import { WelcomeProvider } from "@/context/welcome-screen-context";

interface ISteps {
  step: string;
  active: boolean;
  list?: {
    title: string;
    active: boolean;
  }[];
}

const ContentSteps = () => {
  const [steps, setSteps] = useState<ISteps[]>([
    {
      step: "Welcome screen",
      active: true,
      list: [
        {
          title: "Enter your name",
          active: true,
        },
        {
          title: "Enter your email",
          active: false,
        },
      ],
    },
    {
      step: "End screen",
      active: false,
    },
  ]);
  const [fields, setFields] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [welcomeScreenSetting, setWelcomeScreenSetting] = useState<boolean>(false);

  const handleAddField = (newField: string) => {
    setFields([...fields, newField]);
    setModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleStep = (index: number) => {
    setSteps(
      steps.map((item, idx) => {
        if (idx === index) {
          return { ...item, active: true };
        }
        return { ...item, active: false };
      })
    );
    if (index === 0) {
      setWelcomeScreenSetting(true);
    }
  }

  return (

    <div>
      <AddFieldModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onAddField={handleAddField}
      />
      <WelcomeScreenSetting isOpen={welcomeScreenSetting} onClose={() => setWelcomeScreenSetting(false)} />
      <div>
        <div className="flex items-center">
          <Menu />
          <h1 className="text-lg font-bold mx-2">Steps</h1>
        </div>
        <p className="font-medium text-slate-600">
          The steps user will take to complete the form
        </p>
      </div>
      <div className="my-2">
        <div className="flex flex-col gap-2 w-full mt-4">
          {steps.map((item, index) => (
            <div key={index}>
              <StepItem select={handleStep} active={item.active}  item={item} index={index} />
              <div className="flex flex-col gap-2 mt-2">
                {item.list &&
                  item.list.map((it, idx) => (
                    <StepItemWithClose
                      key={idx}
                      item={{ step: it.title }}
                      index={idx}
                    />
                  ))}
              </div>
              <AddFieldButton onClick={handleOpenModal} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentSteps;
