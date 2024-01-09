// JournalList.tsx
import React, { useState } from 'react';
import { useUserStore } from '../../userStore';
import { useAppStore } from '../../appStore';
import { BsFileEarmarkText, BsJournalBookmarkFill, BsPencil, BsTrash } from 'react-icons/bs';
import JournalEditForm from './JournalEditForm';
import './../Scrollbar.css';
import ConfirmDialog from '../../custom/ConfirmDialog'; 
import { useDeleteJournal, useGetJournals } from '../../hooks/useJournals';
import Notification from '../../custom/Notification';
import { useQueryClient } from 'react-query';

const JournalList: React.FC = () => {
  const { user } = useUserStore();
  const { darkMode, language } = useAppStore();
  const [isConfirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [selectedJournalId, setSelectedJournalId] = useState<number | null>(null);
  const { data: journals, isLoading, refetch } = useGetJournals();
  const deleteJournalMutation = useDeleteJournal();
  const queryClient = useQueryClient();
  const [editingJournal, setEditingJournal] = useState<any | null>(null);

  const handleEdit = (journal: any) => {
    refetch(); 
    setEditingJournal(journal);
    
  };
  const handleDelete = (journalId: number) => {
    setSelectedJournalId(journalId);
    setConfirmDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteJournalMutation.mutateAsync(selectedJournalId!);
      refetch(); 
      setConfirmDialogOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelDelete = () => {
    setConfirmDialogOpen(false);
  };

  const handleCancelEdit = () => {
    setEditingJournal(null);
  };

  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  }

  return (
    <div className={`bg-${darkMode ? 'gray-900' : 'white'} p-6 rounded-lg max-h-[80vh] custom-overflow shadow-md text-${darkMode ? 'gray-100' : 'gray-600'} border-2 ${darkMode ? 'border-teal-500' : 'border-gray-500'}`}>
      {user ? (
        <>
          <h2 className="text-2xl flex justify-start items-center font-bold mb-4">
            <div className="px-2"><BsJournalBookmarkFill/></div>
            <div>{language === 'Farsi' ? 'ژورنال های شما' : 'Your Journals'}</div>
          </h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : journals && journals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journals.map((journal) => (
              <div key={journal.ID} className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-md p-4 shadow-md`}>
                <img src={URL.createObjectURL(new Blob([new Uint8Array(journal.Picture.data)], { type: "image/jpeg" }))} alt={journal.Name} className={`h-48 w-full object-cover rounded-lg mb-4`} />
                <h3 className="text-lg font-semibold">{journal.Name}</h3>
                <p className="text-gray-500">{language === 'Farsi' ? 'سال' : 'Year'}: {journal.Year}</p>
                <p className="text-gray-500 text-sm mb-4">{language === 'Farsi' ? 'چکیده' : 'Abstract'}: {truncateText(journal.Description, 200)}</p>
                <div className="flex items-center space-x-4" dir='ltr'>
                  <a href={URL.createObjectURL(new Blob([new Uint8Array(journal.PDF.data)], { type: "application/pdf" }))} download={`${journal.Name}.pdf`} className="text-green-500 hover:text-green-700"><BsFileEarmarkText/></a>
                  <button onClick={() => handleEdit(journal)} className="text-blue-500 hover:text-blue-700"><BsPencil/></button>
                  <button onClick={() => handleDelete(journal.ID)} className="text-red-500 hover:text-red-700"><BsTrash/></button>
                </div>
              </div>
            ))}
          </div>
            
            
          ) : (
            <p>
              {language === 'Farsi'
                ? 'هنوز ژورنالی ندارید.'
                : 'No journals yet.'}
            </p>
          )}
          {editingJournal && (
            <JournalEditForm journal={editingJournal} onCancel={handleCancelEdit} />
          )}
          {isConfirmDialogOpen && (
            <ConfirmDialog
              message={` ${language === 'Farsi' ? 'از حذف ژورنال اطمینان دارید؟' : 'Are you sure you want to delete this journal?'} `}
              onConfirm={handleConfirmDelete}
              onCancel={handleCancelDelete}
            />
          )}

         {deleteJournalMutation.isError && (
         <Notification type="error" message={`${language === "Farsi" ? "مشکلی رخ داد دوباره بررسی کنید" : "Something went wrong, please check again"}`} />
          )}

          {deleteJournalMutation.isSuccess && (
            <Notification type="success" message={`${language === "Farsi" ? "ژورنال با موفقیت حذف شد" : "Journal deleted successfully"}`} />
          )}
        </>
      ) : (
        <p>
          {language === 'Farsi'
            ? 'لطفاً وارد شوید تا ژورنال خود را مشاهده کنید.'
            : 'Please log in to view your journals.'}
        </p>
      )}
    </div>
  );
};

export default JournalList;
