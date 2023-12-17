import React from "react";
import { useUserStore } from "../../userStore";

const CreateJournalContent: React.FC = () => {
  const { user, steps, nextStep } = useUserStore();

  return (
    <div>
      {steps === 2 && (
        <div>
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
            Content
          </label>
          <textarea
            id="content"
            placeholder="Write your journal content here"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-teal-500"
          />
          <button
            type="button"
            onClick={nextStep}
            className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateJournalContent;
