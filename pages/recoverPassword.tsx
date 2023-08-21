import React from "react";
import RecoverForm from "@/components/RecoverForm/RecoverForm";

const RecoverPassword = () => {
  return (
    <div className="flex w-full h-full tablet:h-[1180px] py-[139px] justify-center items-center bg-[var(--sidebar-bg)]">
        <RecoverForm />
    </div>
  );
};

export default RecoverPassword;