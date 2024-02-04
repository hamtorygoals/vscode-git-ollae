import { useState } from "react";
import { FindingsDataProps } from "../../../types/FindingsDataProps";
import { useNavigate } from "react-router-dom";


const FindingsData: FindingsDataProps[] = [
    {
        id: 1,
        postImg: '/assets/News/news.jpeg',
        title: 'K 강사각 알려주는 스마트한 디지털 활용(스마트폰 초급)',
        period: '2023.12.4(월) ~ 12.15(금)',
        datetime: '2023. 12. 4(월) ~ 12.15(금), 10:00~12:00',
        place: '공릉 1동 행정복지센터',
        tuition: 0,
        persons: 5,
        personnel: 10,
    },
    {
        id: 2,
        postImg: '/assets/News/news.jpeg',
        title: 'K 강사각 알려주는 스마트한 디지털 활용(스마트폰 초급)',
        period: '2023.12.4(월) ~ 12.15(금)',
        datetime: '2023. 12. 4(월) ~ 12.15(금), 10:00~12:00',
        place: '공릉 1동 행정복지센터',
        tuition: 0,
        persons: 5,
        personnel: 10,
    },
    {
        id: 3,
        postImg: '/assets/News/news.jpeg',
        title: 'K 강사각 알려주는 스마트한 디지털 활용(스마트폰 초급)',
        period: '2023.12.4(월) ~ 12.15(금)',
        datetime: '2023. 12. 4(월) ~ 12.15(금), 10:00~12:00',
        place: '공릉 1동 행정복지센터',
        tuition: 0,
        persons: 5,
        personnel: 10,
    },
]






const Findings = () => {
    const navigate = useNavigate();

    const [findingsData, setFindingsData] =
     useState<FindingsDataProps[]>(FindingsData);

    return (
        <div className="">

            <h2 className="">찾았어요! 이런 교육은 어떠세요?</h2>

            {findingsData.map((find) => (
                <div key={find.id} className="">

                    <img
                    src={find.postImg}
                    alt={find.postImg}
                    className=""
                    />
                    <span className="">
                        <p className="">{find.title}</p>
                        <p className="">모집 기간 : {find.period}</p>
                        <p className="">일시 : {find.datetime}</p>
                        <p className="">장소 : {find.place}</p>
                        <p className="">수강료 : {find.tuition} 원</p>
                        <p className="">신청 인원: {find.persons}명 / {find.personnel}명</p>
                    </span>
                    <button
                    onClick={()=> navigate(`/survey/${find.id}`)}
                    className=""
                    >
                    <p className="">자세히 보기</p>
                    </button>
                </div>
            ))}



        </div>

    )

};

export default Findings;

