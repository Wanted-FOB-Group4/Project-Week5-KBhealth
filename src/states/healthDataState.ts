import { IHealthResponse } from 'types/types.d'
import { atom } from 'recoil'
import healthDataJSON from 'data/health.json'

export const healthDataState = atom<IHealthResponse>({
  key: 'healthDataState',
  default: healthDataJSON,
})
