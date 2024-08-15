import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="error-message flex justify-center items-center min-h-[100vh]">
      {error.status},{error.statusText}
    </div>
  );
}

export default ErrorPage;
