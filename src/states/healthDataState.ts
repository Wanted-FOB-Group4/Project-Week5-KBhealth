import { IHealthResponse } from 'types/types.d'
import { atom } from 'recoil'

export const healthDataState = atom<IHealthResponse | undefined>({
  key: 'healthDataState',
  default: undefined,
})
