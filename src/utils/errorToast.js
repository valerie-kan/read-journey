import { toast } from "react-hot-toast";

export const ErrorToast = (message) => {
  const toastId = toast.error(message, {
    duration: 1500,
    style: {
      background: "#D7E3FF",
      color: "#EF5050",
      padding: "10px 16px",
      borderRadius: "8px",
      cursor: "pointer",
    },
    onClick: () => toast.dismiss(toastId),
  });
};
