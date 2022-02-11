import clsx from "clsx";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { hideMessage } from "store/notifySlice";

const InfoIcon = () => (
  <svg
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="ErrorOutlineIcon"
    fill="currentColor"
  >
    <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
  </svg>
);

const WarningIcon = () => (
  <svg
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="ReportProblemOutlinedIcon"
    fill="currentColor"
  >
    <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
  </svg>
);

const SuccessIcon = () => (
  <svg
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="SuccessOutlinedIcon"
    fill="currentColor"
  >
    <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
  </svg>
);

function Toast() {
  const { open, message, duration, type } = useAppSelector(
    ({ notify }) => notify
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (duration) {
      setTimeout(() => {
        dispatch(hideMessage());
      }, duration);
    }
  }, [dispatch, duration]);

  if (!open) return null;

  return (
    <div
      className={clsx(
        "animate-fade rounded-lg z-[1100] fixed top-[24px] left-1/2 -translate-x-1/2 flex justify-between shadow-inner rounded p-3 text-white",
        {
          "bg-darkBg2": !type,
          "bg-green-600": type === "success",
          "bg-red-700": type === "error",
          "bg-orange-700": type === "warning",
          "bg-blue-700": type === "info",
        }
      )}
    >
      {type && (
        <div className="mr-4 self-center w-[20px] h-[20px] text-white">
          {["info", "error"].includes(type) && <InfoIcon />}
          {type === "warning" && <WarningIcon />}
          {type === "success" && <SuccessIcon />}
        </div>
      )}
      <p className="self-center">{message}</p>
      <div
        className="ml-8 text-xl align-center cursor-pointer"
        onClick={() => {
          dispatch(hideMessage());
        }}
      >
        &times;
      </div>
    </div>
  );
}

export default Toast;
