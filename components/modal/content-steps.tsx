"use client";

import { Menu } from "lucide-react";
import React, { useState } from "react";
import StepItem from "./step-item";
import StepItemWithClose from "./content-steps-with-close";
import AddFieldButton from "../buttons/add-field";
import AddFieldModal from "./add-field-modal";
import WelcomeScreenSetting from "../settings/welcome-screen/welcome-screen-setting";
import EmailSetting from "../settings/welcome-screen/email-setting";
import NameSetting from "../settings/welcome-screen/name-setting";
import { useRouter } from "next/navigation";

interface ISteps {
  step: string;
  active: boolean;
  list?: {
    title: string;
    active: boolean;
  }[];
}

const ContentSteps = () => {
  const router = useRouter();
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
          active: true,
        },
      ],
    },
    {
      step: "End screen",
      active: false,
      list: [],
    },
  ]);
  const [fields, setFields] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [welcomeScreenSetting, setWelcomeScreenSetting] =
    useState<boolean>(false);
  const [emailSetting, setEmailSetting] = useState<boolean>(false);
  const [nameSetting, setNameSetting] = useState<boolean>(false);
  const [fieldIndex, setFieldIndex] = useState<number>(0);

  const handleAddField = (newField: string) => {
    setFields([...fields, newField]);
    setModalOpen(false);
    setSteps(
      steps.map((step, idx) => {
        if (idx === fieldIndex) {
          return {
            ...step,
            list: [...step.list!, { title: newField, active: true }],
          };
        }
        return step;
      })
    );
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleStep = (index: number) => {
    let value = false;
    steps.map((item, idx) => {
      if (idx === index) {
        value = item.active;
      }
    });

    setSteps(
      steps.map((item, idx) => {
        if (idx === index) {
          return { ...item, active: true };
        }
        return { ...item, active: false };
      })
    );
    if (index === 0) {
      if (value) {
        setWelcomeScreenSetting(true);
        router.push("/dashboard/Demo Project/home-screen");
      } else {
        router.push("/dashboard/Demo Project/home-screen");
      }
    }
    if (index === 1) {
      if (value) {
        router.push("/dashboard/Demo Project/end-screen");
      }
    }
  };

  const handleSubStep = (item: { step: string }) => {
    if (item.step === "Enter your email") {
      setEmailSetting(true);
      router.push("/dashboard/Demo Project/email");
    }
    if (item.step === "Enter your name") {
      setNameSetting(true);
      router.push("/dashboard/Demo Project/name");
    }
  };

  const disableSubSetups = (item: { step: string }) => {
    setSteps(
      steps.map((step) => {
        if (step.step === "Welcome screen") {
          return {
            ...step,
            list: step.list?.map((subStep) => {
              if (subStep.title === item.step) {
                return { ...subStep, active: false };
              }
              return subStep;
            }),
          };
        }
        return step;
      })
    );
  };

  const handleAdd = (index: number) => {
    setModalOpen(true);
    setFieldIndex(index);
  };

  return (
    <div>
      <AddFieldModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onAddField={handleAddField}
      />
      <WelcomeScreenSetting
        isOpen={welcomeScreenSetting}
        onClose={() => {
          setWelcomeScreenSetting(false);
        }}
      />
      <EmailSetting
        isOpen={emailSetting}
        onClose={() => {
          setEmailSetting(false);
          router.push("/dashboard/Demo Project/home-screen");
        }}
      />
      <NameSetting
        isOpen={nameSetting}
        onClose={() => {
          setNameSetting(false);
          router.push("/dashboard/Demo Project/home-screen");
        }}
      />
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
              <StepItem
                select={handleStep}
                active={item.active}
                item={item}
                index={index}
              />
              <div className="flex flex-col gap-2 mt-2">
                {item.list
                  ?.filter((subItem) => subItem.active)
                  .map((it, idx) => (
                    <StepItemWithClose
                      onClick={() => handleSubStep({ step: it.title })}
                      onClose={() => disableSubSetups({ step: it.title })}
                      key={idx}
                      item={{ step: it.title }}
                      index={idx}
                    />
                  ))}
              </div>
              {item.active && (
                <AddFieldButton onClick={() => handleAdd(index)} />
              )}
              {index !== steps.length - 1 && (
                <div className="border-b border-slate-200 my-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentSteps;
