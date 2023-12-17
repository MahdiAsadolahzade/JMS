import React from "react";
import CreateJournalTitle from "./CreateJournalTitle";
import CreateJournalContent from "./CreateJournalContent";
import CreateJournalFinal from "./CreateJournalFinal";
import { useUserStore } from "../../userStore";

const CreateJournalSteps: React.FC = () => {
  const { steps } = useUserStore();

  return (
    <div className="p-8">
      <div className="w-full mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <StepIndicator stepNumber={1} currentStep={steps} />
            <span className="ml-2">Step 1</span>
          </div>
          <div className="flex items-center">
            <StepIndicator stepNumber={2} currentStep={steps} />
            <span className="ml-2">Step 2</span>
          </div>
          <div className="flex items-center">
            <StepIndicator stepNumber={3} currentStep={steps} />
            <span className="ml-2">Step 3</span>
          </div>
        </div>
      </div>

      <div className="">
      <CreateJournalTitle />
      <CreateJournalContent />
      <CreateJournalFinal />
      </div>
    </div>
  );
};

type StepIndicatorProps = {
  stepNumber: number;
  currentStep: number;
};

const StepIndicator: React.FC<StepIndicatorProps> = ({ stepNumber, currentStep }) => {
  const stepClassName =
    stepNumber === currentStep
      ? "w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold"
      : "w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold";

  return <div className={stepClassName}>{stepNumber}</div>;
};

export default CreateJournalSteps;
