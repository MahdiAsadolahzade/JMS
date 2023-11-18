import React from 'react';
import { useUserStore } from '../../userStore';
import { useAppStore } from '../../appStore';

const UserProfile: React.FC = () => {
  const { user } = useUserStore();
  const { darkMode, language } = useAppStore();

  return (
    <div className={`bg-${darkMode ? 'gray-900' : 'white'} p-6 rounded-lg shadow-md text-center text-${darkMode ? 'gray-100' : 'gray-600'}`}>
      {user ? (
        <>
          <img
            src={user.profilePicture}
            alt={user.displayName}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{user.displayName}</h2>
          <p className="mb-4">{user.email}</p>
          {/* Additional profile information */}
        </>
      ) : (
        <p className="mb-4">{language === 'Farsi' ? 'لطفاً وارد شوید' : 'Please log in'}</p>
      )}
    </div>
  );
};

export default UserProfile;
