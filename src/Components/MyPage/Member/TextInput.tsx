import React, { ChangeEvent, useState } from 'react';

// const TextInput = ({initialValue }: {initialValue: string}) => {
//   const [value, setValue] = useState(initialValue);

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);
//   };

  const TextInput: React.FC<{ initialValue: string; onInputChange: (value: string) => void }> = ({ initialValue, onInputChange }) => {
    const [value, setValue] = useState(initialValue);
  
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      // 부모 컴포넌트로 입력값 전달
      onInputChange(e.target.value);
    };

  return (
    <div className="border border-[#CCCCCC] rounded-2xl h-[41px] w-[136px] px-[16px] py-[12px] text-[#333333] flex justify-center items-center">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        className="w-full h-full outline-none text-[#333333] text-center"
      />
      
    </div>
  );
}

export default TextInput;