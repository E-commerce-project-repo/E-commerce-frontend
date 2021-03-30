import { ToastProvider, useToasts } from "react-toast-notifications";
import { ToastContainer, toast } from "react-toastify";

export const Notification = ({ content, type }) => {
  const { addToast } = useToasts();

  return (
    <button
      onClick={() =>
        addToast(content, {
          appearance: "success",
          autoDismiss: true,
        })
      }
    >
      Add Toast
    </button>
  );
};
