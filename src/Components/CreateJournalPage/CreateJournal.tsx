// CreateJournal.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAddJournal } from '../../hooks/useJournals';

interface JournalFormProps {
  onSuccess: () => void;
}

const JournalForm: React.FC<JournalFormProps> = ({ onSuccess }) => {
  const { register, handleSubmit, setValue } = useForm();
  const addJournalMutation = useAddJournal();

  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      const result = await addJournalMutation.mutateAsync(data);
      console.log(result); // Handle success if needed
      onSuccess(); // Trigger success action
    } catch (error) {
      console.error(error); // Handle error if needed
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name:
        </label>
        <input
          {...register('Name')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description:
        </label>
        <textarea
          {...register('Description')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
          Year:
        </label>
        <input
          type="number"
          {...register('Year')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="picture">
          Picture:
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setValue('Picture', e.target.files)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pdf">
          PDF:
        </label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setValue('PDF', e.target.files)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const CreateJournal: React.FC = () => {
  const handleSuccess = () => {
    // Handle success action
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Create Journal</h1>
      <JournalForm onSuccess={handleSuccess} />
    </div>
  );
};

export default CreateJournal;
