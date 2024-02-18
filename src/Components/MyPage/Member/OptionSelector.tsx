import { useState } from "react";

const OptionSelector = ({options, initialOption}: {options: string[], initialOption: string}) => {
    const [selectedOption, setSelectedOption] = useState(initialOption);
    const [showOptions, setShowOptions] = useState(false);
  
    const handleOptionClick = (option: string) => {
      setSelectedOption(option);
      setShowOptions(false);
    }
  
    return (
        <div className='flex flex-col'>
          <div onClick={() => setShowOptions(!showOptions)} className="border rounded-2xl h-[41px] w-[136px] px-[16px] py-[12px] bg-[#FFFFFF] z-0 flex items-center justify-around sticky top-0">
            <p className='text-sm text-[#333333]'>{selectedOption}</p>
            <img src="/assets/Mypage/graycheck.svg" alt="체크 표시"></img>
          </div>
          {showOptions && (
            <div className='border rounded-2xl w-[136px] h-[130px] mt-[-29px] px-6 py-5 overflow-auto bg-white'>
              <div className='mt-5 flex flex-col gap-4 h-3000 text-sm bg-white'>
                {options.map((option, index) => (
                  <p key={index} onClick={() => handleOptionClick(option)}>{option}</p>
                ))}
              </div>
            </div>
          )}
        </div>
    );
  }

  export default OptionSelector;