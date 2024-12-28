'use client';
import React, { useState } from 'react';

type CheckboxWithLabelProps = {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
};

const CheckBox = ({
  label,
  checked = false,
  onChange,
  className,
}: CheckboxWithLabelProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked); // Call the onChange prop if provided
  };

  return (
    <div
      className={`flex items-start space-x-2 cursor-pointer gap-4 ${className}`}
      onClick={handleChange}
    >
      <div
        className={`w-6 h-6 flex items-center justify-center border rounded transition-all 
          ${isChecked ? 'bg-primary border-white' : 'border-white bg-transparent border-gray-300'}`}
      >
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <span className="text-sm text-white ">
        {label}
      </span>
    </div>
  );
};

export default CheckBox;
