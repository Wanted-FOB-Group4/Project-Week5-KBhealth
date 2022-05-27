import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import { IMyHealthData } from '../types/myHealthData.d'
import { healthDataState } from 'states/healthDataState'

export const useParseMyHealthData = () => {
  const healthData = useRecoilValue(healthDataState)
  const [myData, setMyData] = useState<IMyHealthData[]>([])

  useEffect(() => {
    if (!healthData) return
    setMyData([
      {
        title: '체질량지수',
        myData: healthData.wxcResultMap.paramMap.resBMI,
        postfix: '는',
        boldString: '과체중',
        unit: 'kg/m²',
        normalData: '18.5 ~ 22.9 kg/㎡',
        tag: healthData.healthTagList[0],
        detail: healthData.wxcResultMap.boj.resBMI,
      },
      {
        title: '혈압',
        myData: healthData.wxcResultMap.paramMap.resBloodPressure,
        postfix: '은',
        boldString: '정상',
        unit: 'mmHg',
        normalData: '이완 60~79 / 수축 90~119 mmHg',
        tag: healthData.healthTagList[1],
        detail: healthData.wxcResultMap.boj.resBloodPressure,
      },
      {
        title: '총콜레스테롤',
        myData: healthData.wxcResultMap.paramMap.resTotalCholesterol,
        postfix: '은',
        boldString: '고지혈증',
        unit: 'mg/dL',
        normalData: '200 mg/dL 이하',
        tag: healthData.healthTagList[5],
        detail: healthData.wxcResultMap.boj.resTotalCholesterol,
      },
      {
        title: '흡연',
        myData: healthData.wxcResultMap.paramMap.smkQty,
        postfix: '비흡연 중입니다',
        boldString: '',
        unit: 'm',
        normalData: '',
        tag: healthData.healthTagList[4],
        detail: healthData.wxcResultMap.boj.smkQty,
      },
      {
        title: '식전혈당',
        myData: healthData.wxcResultMap.paramMap.resFastingBloodSuger,
        postfix: '은',
        boldString: '당뇨병전단계',
        unit: 'mg/dL',
        normalData: '69~99 mg/dL',
        tag: healthData.healthTagList[2],
        detail: healthData.wxcResultMap.boj.resFastingBloodSuger,
      },
      {
        title: '음주',
        myData: healthData.wxcResultMap.paramMap.drnkQty,
        postfix: '1주일간 음주를 하지 않고 있습니다',
        boldString: '',
        unit: '',
        normalData: '',
        tag: healthData.healthTagList[9],
        detail: healthData.wxcResultMap.boj.drnkQty,
      },
      {
        title: '운동량',
        myData: healthData.wxcResultMap.paramMap.exerciQty,
        postfix: '1주일간 운동을 하지 않고 있습니다',
        boldString: '',
        unit: '',
        normalData: '',
        tag: healthData.healthTagList[5],
        detail: healthData.wxcResultMap.boj.exerciQty,
      },
      {
        title: '신사구체여과율',
        myData: healthData.wxcResultMap.paramMap.resGFR,
        postfix: '은',
        boldString: '정상',
        unit: 'mL/min',
        normalData: '60 mL/min 이상',
        tag: healthData.healthTagList[3],
        detail: healthData.wxcResultMap.boj.resGFR,
      },
    ])
  }, [healthData])

  return { myData }
}
