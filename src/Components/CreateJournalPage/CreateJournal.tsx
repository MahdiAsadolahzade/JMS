import React, { useState } from "react";
import { useUserStore } from "../../userStore";
import { useNavigate } from "react-router-dom";

const CreateJournal: React.FC = () => {
  const { user, addJournal } = useUserStore();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState("");
  const [summary, setSummary] = useState("");
  const [year, setYear] = useState("");

  const handleCreateJournal = () => {
    if (title.trim() !== "" && content.trim() !== "") {
      const newJournal = {
        id: user?.journals.length || 1,
        title,
        content,
        photo,
        summary,
        year,
      };
      addJournal(newJournal);
      setTitle("");
      setContent("");
      setPhoto("");
      setSummary("");
      setYear("");
      navigate(`/dashboard/${user?.id}`);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Create a New Journal</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title of your journal"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-teal-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your journal content here"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-teal-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">
            Photo URL
          </label>
          <input
            type="text"
            id="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Enter photo URL"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-teal-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="summary" className="block text-gray-700 text-sm font-bold mb-2">
            Summary
          </label>
          <textarea
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Write a summary"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-teal-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="year" className="block text-gray-700 text-sm font-bold mb-2">
            Year
          </label>
          <input
            type="text"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Enter year"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-teal-500"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleCreateJournal}
            className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600"
          >
            Create Journal
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateJournal;
