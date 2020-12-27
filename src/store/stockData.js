import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil'

const stockState = atom({
  key: 'stockData',
  default: {},
})

const useStockData = function () {
  return useRecoilValue(stockState)
}

const useStockState = function () {
  return useRecoilState(stockState)
}

const useStockSetState = function () {
  return useSetRecoilState(stockState)
}

const store = {
  stockState,
  useStockData,
  useStockState,
  useStockSetState,
}

export default store
