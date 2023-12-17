import React from "react";
import { useUserStore } from "../../userStore";

const CreateJournalFinal: React.FC = () => {
  const { user, steps } = useUserStore();

  const handleCreateJournal = () => {
    // Implement your logic for creating the journal here
  };

  return (
    <div>
      {steps === 3 && (
        <div>
          {/* Render the final form fields and create button */}
          <button
            type="button"
            onClick={handleCreateJournal}
            className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600"
          >
            Create Journal
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateJournalFinal;
