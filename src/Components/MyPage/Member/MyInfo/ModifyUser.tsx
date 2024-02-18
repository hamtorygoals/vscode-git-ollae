// import { useState } from 'react';
import { Toggle } from './Toggle';
import { formatPhone } from '../../../../utils/formatPhone';
import React, { ChangeEvent, useState } from 'react';
import TextInput from '../TextInput';
import { cityDetails, Citydetails } from '../../../../constants/Survey/cityDetails';
import CustomSelect from '../CustomSelect';
import PasswordChange from './PasswordChange';
// import React, { Dispatch, SetStateAction } from 'react';
import CitySelector from '../CitySelector';


interface ModifyUserProps {
  name: string;
  gender: string;
  birthYear: string;
  email: string;
  emailProvider: string;
  city: string;
  district: string;
  neighborhood: string;
  isMail: boolean;
  isSms: boolean;
}



const ModifyUser = () => {
  
  const genderOptions = [ '남자', '여자' , '기타',];
  const initialGenderOption = '남성';

  const ageOptions = ['1950년대', '1960년대', '1970년대', '1980년대', '1990년대', '2000년대', '2010년대'];
  const initialageOption = '1970년대';

  const emailOptions = ['naver.com', 'gmail.com', 'daum.net'];
  const initialemailOption = 'naver.com';

  const numOptions = ['010', '070', '02'];
  const initialnumOption = '010';

  const initialProvince = '서울특별시';
  const initialCity = '강서구';
  const initialNeighborhood = '창동';


  const [isMail, setIsMail] = useState(false);
  const [isSms, setIsSms] = useState(false);
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  const file: File | null = e.target.files?.[0] || null;
  setSelectedFile(file);
  // 여기에 선택된 파일을 처리하는 로직을 추가할 수 있습니다.
  };




  const logModifiedInformation = (modifiedInfo: ModifyUserProps) => {
    // 수정된 정보를 기록하는 로직을 추가합니다. 예를 들어:
    console.log('수정된 정보:', modifiedInfo);
  };
  const [modifiedInfo, setModifiedInfo] = useState<ModifyUserProps>({
    name: '',  // 기본값으로 초기화하거나 현재 사용자 데이터에서 가져올 수 있습니다.
    gender: '',
    birthYear: '',
    email: '',
    emailProvider: '',
    city: '',
    district: '',
    neighborhood: '',
    isMail: false,
    isSms: false,
  });

  

  return (
    <div className="mx-[340px] rounded-3xl shadow-md bg-white mt-10 px-12 py-10">

      
      <div>
        <p className="text-2xl font-medium">기본 정보</p>
        <div className="flex items-start gap-3 mt-5">
        {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="profile"
              className="w-[104px] h-[104px] rounded-full"
            />
          ) : (
            <img
              src="/assets/Utils/dummyProfile.png"
              alt="profile"
              className="w-[104px] h-[104px] rounded-full"
            />
          )}
          <section className="flex flex-col gap-2 mt-3">
            <div className="flex items-center gap-2 font-medium">
              <img src="/assets/Utils/camera.svg"></img>
              <p className="text-[#666666]">프로필 사진 업로드</p>
            </div>
            <div className="flex items-center gap-10 font-medium">
              <label className="border border-[#CCCCCC] h-10 px-16 py-2 rounded-2xl text-[#999999] text-sm cursor-pointer">
                파일선택...
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              <div className="h-10 px-10 py-2 rounded-2xl bg-[#F2F2F2]">
                <p className="text-[#666666]">*** 비밀번호 변경하기</p>
              </div>       
            </div>
          </section>
        </div>
      </div>



      <div>
        <div className="mt-10">
          <div className="flex gap-24">
            <div className="flex items-center gap-16 h-[41px]">
              <p className="text-[#333333]">이름</p>
              <div className="border border-[#CCCCCC] rounded-2xl h-[41px] w-[136px] px-[16px] py-[12px] text-[#333333] flex justify-center items-center">
                <p className='text-[#333333] text-center'>홍길동</p>
              </div>
            </div>
            <div className="flex items-center gap-10 h-[41px]">
              <p className="text-[#333333]">성별</p>
              <CustomSelect options={genderOptions} initialOption={initialGenderOption} onSelect={(gender) => setModifiedInfo((prevInfo) => ({ ...prevInfo, gender }))}/>
            </div>
          </div>
          <div className="flex items-center gap-10 mt-7 h-[41px]">
            <p>출생연도</p>
            {/* <CustomSelect options={ageOptions} initialOption={initialageOption} /> */}
            <CustomSelect
              options={ageOptions}
              initialOption={initialageOption}
              onSelect={(birthYear) =>
                setModifiedInfo((prevInfo) => ({ ...prevInfo, birthYear }))
              }
            />
          </div>
          <div className="flex items-center gap-10 mt-10 h-[41px]">
            <p>메일주소</p>
            {/* <TextInput initialValue="hongkildong" /> */}
            <TextInput
              initialValue="hongkildong"
              onInputChange={(email) =>
                setModifiedInfo((prevInfo) => ({ ...prevInfo, email }))
              }
            />
            <p>@</p>
            {/* <CustomSelect options={emailOptions} initialOption={initialemailOption} /> */}
            <CustomSelect
              options={emailOptions}
              initialOption={initialemailOption}
              onSelect={(emailProvider) =>
                setModifiedInfo((prevInfo) => ({ ...prevInfo, emailProvider }))
              }
            />
          </div>
          <div className="flex items-center gap-10 mt-7 h-[41px] ">
            <p>전화번호</p>
            {/* <CustomSelect options={numOptions} initialOption={initialnumOption} /> */}
            <CustomSelect
              options={numOptions}
              initialOption={initialnumOption}
              onSelect={(num) => setModifiedInfo((prevInfo) => ({ ...prevInfo, num }))}
            />
            {/* <TextInput initialValue="1234" /> */}
            <TextInput
              initialValue="1234"
              onInputChange={(num1) =>
                setModifiedInfo((prevInfo) => ({ ...prevInfo, num1 }))
              }
            />
            {/* <TextInput initialValue="1234" /> */}
            <TextInput
              initialValue="1234"
              onInputChange={(num2) =>
                setModifiedInfo((prevInfo) => ({ ...prevInfo, num2 }))
              }
            />
          </div>
        </div>
      </div>


      <div>
        <p className='text-2xl font-medium mt-14'>주소</p>
        <div className="flex gap-7 w-[980px] h-auto">
          <div className=' mt-7'>
            <CitySelector
              cityDetails={cityDetails}
              onSelect={(
                city: string,
                district: string,
                neighborhood: string,
              ) => {;
              }}
              initialProvince={initialProvince}
              initialCity={initialCity}
              initialNeighborhood={initialNeighborhood}
            /> 
          </div>
        </div>
      </div>


      <div className='mt-10'>
        <p className="text-2xl font-medium -z-10">프로모션 정보 수신</p>
        <div className="flex items-center gap-20 mt-6">
          <section className="flex items-center gap-2">
            <img src="/assets/MyPage/mail.svg" alt="mail" />
            <p className="font-medium text-lg text-[#666666] pr-10">이메일</p>
            <Toggle isOn={isMail} setIsOn={setIsMail} />
          </section>
          <section className="flex items-center gap-2">
            <img src="/assets/MyPage/sms.svg" alt="sms" />
            <p className="font-medium text-lg text-[#666666] pr-10">문자</p>
            <Toggle isOn={isSms} setIsOn={setIsSms} />
          </section>
        </div>

      </div>

      <div className="flex items-center justify-center mt-16 mb-2">
        <button
          className="text-white bg-primary01 rounded-[50px] font-semibold w-[60%] p-3"
          onClick={() => {
            logModifiedInformation(modifiedInfo);}}
        >
          정보 수정 완료
        </button>
      </div>

    </div>
  );
};

export default ModifyUser;
