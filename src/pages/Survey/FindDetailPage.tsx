import React from 'react';
import { useState } from 'react';
import { FindingsDataProps } from '../../types/FindingsDataProps';

const finddetail = {
  title: 'K 강사가 알려주는 스마트한 디지털 활용 (스마트폰 초급)',
  period: '2023.12.04 ~ 2023.12.15',
  tuition: 10000,
  persons: 10,
  personnel: 20,
  introImg: '/assets/Survey/findposter.png',
  wayImg: '/assets/Survey/findway.png',
  refundruleImg: '/assets/Survey/findrefundrule.png',
};

const FindDetailPage = () => {
  const [findData, setFindData] = useState<FindingsDataProps>(finddetail);

  return (
    <div className="">
      <h1 className=''>{findData.title}</h1>
      <hr className="w-full h-[2px] bg-black my-5" />
      <div className="grid grid-cols-2 gap-10 px-20 my-10">
        <div className="">
          <img src={findData.introImg} alt={findData.introImg} className="" />
          <img src={findData.wayImg} alt={findData.wayImg} className="" />
          <img
            src={findData.refundruleImg}
            alt={findData.refundruleImg}
            className=""
          />
        </div>
        <div className='bg-header-color'>
          <button>신청하기</button>
          <span className=''>
            <p className=''>모집기간: {findData.period}</p>
            <p className=''>수강료: {findData.tuition}원</p>
            <p className=''>모집인원: {findData.personnel}</p>
            <p className=''>신청인원: {findData.persons}</p>
          </span>
          <button className=''>찜하기</button>
          <button className=''>카카오톡으로 공유하기</button>
          <button className=''>밴드로 공유하기</button>
        </div>
      </div>
    </div>
  );
};

export default FindDetailPage;
