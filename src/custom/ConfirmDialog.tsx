// ConfirmDialog.jsx
import './ConfirmDialog.css';
import { useAppStore } from '../appStore';

const ConfirmDialog = ({ message, onConfirm, onCancel }) => {
    const {language} = useAppStore()
  return (
    <div className="confirm-dialog">
      <div className="confirm-dialog-content">
        <p>{message}</p>
        <div className="confirm-dialog-buttons" dir='ltr'>
          <button onClick={onCancel}>{language === "Farsi" ? "انصراف" : "Cancel"}</button>
          <button onClick={onConfirm}>{language === "Farsi" ? "تایید" : "Confirm"}</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
