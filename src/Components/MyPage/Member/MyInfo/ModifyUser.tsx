// import { useState } from 'react';
import { Toggle } from './Toggle';
import { formatPhone } from '../../../../utils/formatPhone';
import OptionSelector from '../OptionSelector';
import React, { ChangeEvent, useState } from 'react';
import TextInput from '../TextInput';
import { cityDetails, Citydetails } from '../../../../constants/Survey/cityDetails';

interface ModifyUserProps {
  mailAgree: boolean;
  smsAgree: boolean;
  name: string;
  gender: string;
  birthYear: string;
  email: string;
  phoneNum: string;
  address: string;
  setShowModify: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModifyUser = () => {
  const genderOptions = ['남자', '여자', '기타'];
  const initialGenderOption = '남자';

  const ageOptions = ['1950년대', '1960년대', '1970년대', '1980년대', '1990년대', '2000년대', '2010년대'];
  const initialageOption = '1970년대';

  const emailOptions = ['naver.com', 'gmail.com', 'daum.net'];
  const initialemailOption = 'naver.com';

  const numOptions = ['010', '070', '02'];
  const initialnumOption = '010';
//
  const [selectedCity, setSelectedCity] = useState('');
  const [showCities, setShowCities] = useState(false);
  const [selectedGu, setSelectedGu] = useState('');
  const [showGu, setShowGu] = useState(false);
  const [selectedDong, setSelectedDong] = useState('');
  const [showDong, setShowDong] = useState(false);

  const handleCityClick = (city: string) => {
    setSelectedCity(city);
    setShowCities(false);
  };
  const handleGuClick = (Gu: string) => {
    if (selectedCity && selectedCity.length > 0) {
      setSelectedGu(Gu);
      setShowGu(false);
    }
    else {
      return
    }
  };
  const handleDongClick = (dong: string) => {
    if (selectedGu && selectedGu.length > 0 ) {
      setSelectedDong(dong);
      setShowDong(false);
    }
    else {
      return
    }
  };
//
//
  const [isMail, setIsMail] = useState(false);
  const [isSms, setIsSms] = useState(false);
//

//
  
const [selectedFile, setSelectedFile] = useState<File | null>(null);

const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  const file: File | null = e.target.files?.[0] || null;
  setSelectedFile(file);
  // 여기에 선택된 파일을 처리하는 로직을 추가할 수 있습니다.
};
  //


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
              <label className="border h-10 px-16 py-2 rounded-2xl text-[#999999] text-sm cursor-pointer">
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
              <TextInput initialValue="홍길동" />
            </div>
            <div className="flex items-center gap-10 h-[41px]">
              <p className="text-[#333333]">성별</p>
              <OptionSelector
                options={genderOptions}
                initialOption={initialGenderOption}
              />
            </div>
          </div>
          <div className="flex items-center gap-10 mt-7 h-[41px]">
            <p>출생연도</p>
            <OptionSelector
              options={ageOptions}
              initialOption={initialageOption}
            />
          </div>
          <div className="flex items-center gap-10 mt-10 h-[41px]">
            <p>메일주소</p>
            <TextInput initialValue="hongkildong" />
            <p>@</p>
            <OptionSelector
              options={emailOptions}
              initialOption={initialemailOption}
            />
          </div>
          <div className="flex items-center gap-10 mt-7 h-[41px]">
            <p>전화번호</p>
            <OptionSelector
              options={numOptions}
              initialOption={initialnumOption}
            />
            <TextInput initialValue="1234" />
            <TextInput initialValue="1234" />
          </div>
        </div>
      </div>


      <div>
        <p className='text-2xl font-medium mt-14'>주소</p>
        <div className="flex gap-7 w-[980px] h-auto">
                <div className="pt-5 flex flex-col gap-2 w-[208px] h-[220px]">
                  <div
                    className={`border flex justify-between px-5 py-3 rounded-2xl bg-[#FFFFFF] z-0 border-[#CCCCCC]`}
                    onClick={() => setShowCities(!showCities)}
                  >
                    <p
                      className={`text-sm text-[#333333]`}>
                      {selectedCity ? selectedCity : '시/도'}
                    </p>
                    <div className=" mt-1">
                      <img src="/assets/Mypage/graycheck.svg" alt="체크 표시"/>
                    </div>
                  </div>
                  {showCities && (
                    <div className="h-60 w-100 border rounded-2xl px-6 py-5 text-sm mt-[-36px] overflow-auto scrollbar-container bg-[#FFFFFF]">
                      <div className="mt-6 flex flex-col gap-5 h-3000 bg-[#FFFFFF]">
                        {Object.keys(cityDetails).map((city, index) => (
                          <p key={index} onClick={() => handleCityClick(city)}>
                            {city}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-5 flex flex-col gap-2 w-[208px] h-[220px]">
                  <div
                    className={`border flex justify-between px-5 py-3 rounded-2xl bg-[#FFFFFF] z-0 border-[#CCCCCC]`}
                    onClick={() => setShowGu(!showGu)}
                  >
                    <p
                      className={`text-sm text-[#333333]`}
                    >
                      {selectedGu ? selectedGu : '시/군/구'}
                    </p>
                    <div className=" mt-1">
                      <img src="/assets/Mypage/graycheck.svg" alt="체크 표시"/>
                    </div>
                  </div>
                  {showGu && (
                    <div className="h-60 w-100 border rounded-2xl px-6 py-5 text-sm mt-[-36px] overflow-auto scrollbar-container">
                      <div className="mt-6 flex flex-col gap-5 h-3000">
                        {selectedCity &&
                          cityDetails[selectedCity] &&
                          Object.keys(cityDetails[selectedCity]).map(
                            (gu, index) => (
                              <p key={index} onClick={() => handleGuClick(gu)}>
                                {gu}
                              </p>
                            ),
                          )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-5 flex flex-col gap-2 w-[208px] h-[220px]">
                  <div
                    className={`border flex justify-between px-5 py-3 rounded-2xl bg-[#FFFFFF] z-0 border-[#CCCCCC]`}
                    onClick={() => setShowDong(!showDong)}
                  >
                    <p
                      className={`text-sm text-[#333333]`}
                    >
                      {selectedDong ? selectedDong : '읍/면/동'}
                    </p>
                    <div className=" mt-1">
                      <img src="/assets/Mypage/graycheck.svg" alt="체크 표시"/>
                    </div>
                  </div>
                  {showDong && (
                    <div className="h-60 w-100 border rounded-2xl px-6 py-5 text-sm mt-[-36px] overflow-auto scrollbar-container">
                      <div className="mt-6 flex flex-col gap-5 h-3000">
                        {selectedCity &&
                          selectedGu &&
                          cityDetails[selectedCity][selectedGu].map(
                            (dong, index) => (
                              <p
                                key={index}
                                onClick={() => handleDongClick(dong)}
                              >
                                {dong}
                              </p>
                            ),
                          )}
                      </div>
                    </div>
                  )}
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
        >
          정보 수정 완료
        </button>
      </div>

    </div>
  );
};

export default ModifyUser;
