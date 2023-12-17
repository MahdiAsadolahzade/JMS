import React from "react";
import { useUserStore } from "../../userStore";

const CreateJournalTitle: React.FC = () => {
  const {  steps, nextStep } = useUserStore();

  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-6">Create a New Journal</h2>
      {steps === 1 && (
        <div className="flex flex-col space-y-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter the title of your journal"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-teal-500"
          />
         <div className="mx-auto">
         <button
            type="button"
            onClick={nextStep}
            className="bg-teal-500 mx-auto text-white py-2 px-4 rounded-lg hover:bg-teal-600"
          >
            Continue
          </button>
         </div>
        </div>
      )}
    </div>
  );
};

export default CreateJournalTitle;
