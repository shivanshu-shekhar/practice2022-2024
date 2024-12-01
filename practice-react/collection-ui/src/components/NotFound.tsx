import React from "react";

interface NotFoundProps {
  message?: string; // Optional custom message
}

const NotFound: React.FC<NotFoundProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center h-screen text-center">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800">
          {message || "Wanted Data Not Found"}
        </h1>
        <p className="mt-2 text-gray-600">
          Sorry, we couldn't find the data you were looking for.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
