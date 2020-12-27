import _fKeyArr, { fNameMap, fKeyMap } from './fKeyData'
import _pKeyArr, { pNameMap, pKeyMap } from './pKeyData'
import _cKeyArr, { cNameMap, cKeyMap } from './cKeyData'

export const nameMap = {
  f: '资产负债表',
  p: '利润表',
  c: '现金流量表',
}

export const nameTokeyMap = {
  '资产负债表': 'f',
  '利润表': 'p',
  '现金流量表': 'c',
}

export const fKeyArr = _fKeyArr
export const pKeyArr = _pKeyArr
export const cKeyArr = _cKeyArr

export const keyMap = {
  fNameMap,
  fKeyMap,
  pNameMap,
  pKeyMap,
  cNameMap,
  cKeyMap,
}

export const numberToThousands = (_num) => {
  _num = Number(_num)
  if (typeof _num.toLocaleString === 'function') {
    return _num.toLocaleString('en-US')
  }
  let strNum = (_num || 0).toString()
  let sign = ''
  if (_num < 0) {
    strNum = strNum.slice(1)
    sign = '-'
  }
  let [num, decimalNum] = strNum.split('.')
  let result = ''
  while (num.length > 3) {
      result = ',' + num.slice(-3) + result
      num = num.slice(0, num.length - 3)
  }
  if (num) {
    result = num + result
  }
  if (decimalNum) {
    result = sign + result + '.' + decimalNum
  }
  return result
}

const endDate = {
  title: '截止日期',
  key: fNameMap['截止日期'].keywordName,
  describe: [],
  type: 'string',
  algorithm(record) {
    const value = record[fNameMap['截止日期'].keywordName] || ''
    return {
      value
    }
  }
}

const totalAssets = {
  title: '资产总计',
  key: fNameMap['资产总计'].keywordName,
  describe: [],
  type: 'number',
  algorithm(record) {
    const value = record[fNameMap['资产总计'].keywordName] || 0
    return {
      value
    }
  }
}

const businessAssets = {
  title: '企业经营有关的资产',
  key: fNameMap['资产总计'].keywordName,
  tips: '企业经营有关的资产',
  describe: [],
  description: '货币资金 + 交易性金融资产 + 其他流动资产里的理财产品 + 其他流动资产里的结构性存款 + 应收票据 + 应收账款 + 应收款项融资 + 预付款项 + 存货 + 合同资产 + 长期应收款 + 固定资产 + 在建工程 + 使用权资产 + 无形资产 + 开发支出 + 长期待摊费用 + 递延所得税资产',
  type: 'number',
  algorithm(record) {
    const value1 = (record[fNameMap['货币资金'].keywordName] || 0) * 100
    const value2 = (record[fNameMap['交易性金融资产'].keywordName] || 0) * 100
    const value3 = (record[fNameMap['其他流动资产'].keywordName] || 0) * 100
    const value4 = (record[fNameMap['应收票据'].keywordName] || 0) * 100
    const value5 = (record[fNameMap['应收账款'].keywordName] || 0) * 100
    const value6 = (record[fNameMap['应收款项融资'].keywordName] || 0) * 100
    const value7 = (record[fNameMap['预付款项'].keywordName] || 0) * 100
    const value8 = (record[fNameMap['存货'].keywordName] || 0) * 100
    const value9 = (record[fNameMap['合同资产'].keywordName] || 0) * 100
    const value10 = (record[fNameMap['长期应收款'].keywordName] || 0) * 100
    const value11 = (record[fNameMap['固定资产'].keywordName] || 0) * 100
    const value12 = (record[fNameMap['在建工程'].keywordName] || 0) * 100
    const value13 = (record[fNameMap['使用权资产'].keywordName] || 0) * 100
    const value14 = (record[fNameMap['无形资产'].keywordName] || 0) * 100
    const value15 = (record[fNameMap['开发支出'].keywordName] || 0) * 100
    const value16 = (record[fNameMap['长期待摊费用'].keywordName] || 0) * 100
    const value17 = (record[fNameMap['递延所得税资产'].keywordName] || 0) * 100
    return {
      value: ((value1 + value2 + value3 + value4 + value5 + value6 + value7 + value8 + value9 + value10 + value11 + value12 + value13 + value14 + value15 + value16 + value17) / 100).toFixed(2)
    }
  }
}

const businessAssetsRate = {
  title: '企业经营有关的资产 / 资产总计',
  key: fNameMap['资产总计'].keywordName,
  tips: '企业经营有关的资产 / 资产总计',
  describe: [
    '>90% 专注主业，资产质量较好',
    '<90% 不够专注主业，资产质量较差',
  ],
  type: 'percentage',
  algorithm(record) {
    const value1 = businessAssets.algorithm(record).value
    const value2 = totalAssets.algorithm(record).value
    const value = (value1 / value2 * 100).toFixed(2)
    let type = 3
    if (value > 90) {
      type = 0
    }
    return {
      value: value,
      type
    }
  }
}

const totalAssetsGrowthRate = {
  title: '总资产增长率',
  key: fNameMap['资产总计'].keywordName,
  tips: '(本年资产总计 - 上年资产总计) / 本年资产总计',
  describe: [
    '>10% 公司在扩张之中，成长性较好',
    '<0 公司很可能处于收缩或者衰退之中',
  ],
  type: 'percentage',
  algorithm(record) {
    const value1 = (record[fNameMap['资产总计'].keywordName] || 0) * 100
    let value2 = '--'
    if (record.prevYear) {
      value2 = (record.prevYear[fNameMap['资产总计'].keywordName] || 0) * 100
    }
    if (value2 === '--') {
      return {
        value: '--',
      }
    }
    const value = ((value1 - value2) / value1 * 100).toFixed(2)
    let type = 2
    if (value > 10) {
      type = 0
    } else if (value < 0) {
      type = 3
    }
    return {
      value: value,
      type,
    }
  }
}

const debt = {
  title: '负债合计',
  key: fNameMap['负债合计'].keywordName,
  tips: '',
  describe: [],
  type: 'number',
  algorithm(record) {
    const value = record[fNameMap['负债合计'].keywordName] || 0
    return {
      value: value,
    }
  }
}

const debtRate = {
  title: '资产负债率',
  key: fNameMap['负债合计'].keywordName,
  tips: '负债合计 / 资产总计',
  describe: [
    '<40% 基本没有偿债风险',
    '40% ~ 60% 偿债风险较小，但在特殊情况下依然可能发生偿债危机',
    '>70% 发生债务危机的可能性较大',
  ],
  type: 'percentage',
  algorithm(record) {
    const value1 = (record[fNameMap['资产总计'].keywordName] || 0) * 100
    const value2 = (record[fNameMap['负债合计'].keywordName] || 0) * 100
    const value = (value2 / value1 * 100).toFixed(2)
    let type = 3
    if (value < 40) {
      type = 0
    } else if (value >= 40 && value <= 60) {
      type = 1
    }
    return {
      value: value,
      type
    }
  }
}

const quasiMonetaryFunds = {
  title: '准货币资金',
  key: fNameMap['货币资金'].keywordName,
  tips: '准货币资金',
  describe: [],
  description: '货币资金 + 交易性金融资产 + 其他流动资产',
  type: 'number',
  algorithm(record) {
    const value1 = (record[fNameMap['货币资金'].keywordName] || 0) * 100
    const value2 = (record[fNameMap['交易性金融资产'].keywordName] || 0) * 100
    const value3 = (record[fNameMap['其他流动资产'].keywordName] || 0) * 100
    return {
      value: ((value1 + value2 + value3) / 100).toFixed(2),
    }
  }
}

const quasiMonetaryFundsRate = {
  title: '准货币资金 / 资产总计',
  key: fNameMap['资产总计'].keywordName,
  tips: '准货币资金 / 资产总计',
  describe: [
    '>50% 最好的公司',
    '25% ~ 50% 优秀的公司',
    '<25% 不够优秀的公司',
  ],
  type: 'percentage',
  algorithm(record) {
    const value1 = quasiMonetaryFunds.algorithm(record).value * 100
    const value2 = totalAssets.algorithm(record).value * 100
    const value = (value1 / value2 * 100).toFixed(2)
    let type = 3
    if (value > 50) {
      type = 0
    } else if (value >= 25 && value <= 50) {
      type = 1
    }
    return {
      value: value,
      type,
    }
  }
}

const accountsReceivable = {
  title: '应收账款',
  key: fNameMap['应收账款'].keywordName,
  tips: '',
  describe: [],
  type: 'number',
  algorithm(record) {
    const value = record[fNameMap['应收账款'].keywordName] || 0
    return {
      value: value,
    }
  }
}

const accountsReceivableRate = {
  title: '应收账款 / 资产总计',
  key: fNameMap['应付票据'].keywordName,
  tips: '应收账款 / 资产总计',
  describe: [
    '<1% 最好的公司',
    '1% ~ 3% 优秀的公司',
    '3% ~ 15% 视情况而定',
    '<15% 业绩暴雷的可能性较大，直接淘汰',
  ],
  type: 'percentage',
  algorithm(record) {
    const value1 = accountsReceivable.algorithm(record).value * 100
    const value2 = totalAssets.algorithm(record).value * 100
    const value = ((value1 / value2) * 100).toFixed(2)
    let type = 3
    if (value < 1) {
      type = 0
    } else if (value >= 1 && value <= 3) {
      type = 1
    } else if (value > 3 && value < 15) {
      type = 2
    }
    return {
      value: value,
      type,
    }
  }
}

const accountsReceivableRateFake = {
  title: '应收账款 / 资产总计',
  key: fNameMap['应收账款'].keywordName,
  tips: '应收账款 / 资产总计',
  describe: [
    '<15% 应收账款造假的风险较小',
    '>20% 无论有无造假，这个比例也是公司倒闭的节奏',
  ],
  type: 'percentage',
  algorithm(record) {
    const value = accountsReceivableRate.algorithm(record).value
    let type = 3
    if (value < 15) {
      type = 0
    }
    return {
      value: value,
      type,
    }
  }
}

const interestingDebt = {
  title: '有息负债',
  key: fNameMap['短期借款'].keywordName,
  tips: '有息负债',
  describe: [],
  description: '短期借款 + 一年内到期的非流动负债 + 长期借款 + 应付债券 + 长期应付款',
  type: 'number',
  algorithm(record) {
    const value1 = (record[fNameMap['短期借款'].keywordName] || 0) * 100
    const value2 = (record[fNameMap['一年内到期的非流动负债'].keywordName] || 0) * 100
    const value3 = (record[fNameMap['长期借款'].keywordName] || 0) * 100
    const value4 = (record[fNameMap['应付债券'].keywordName] || 0) * 100
    const value5 = (record[fNameMap['长期应付款'].keywordName] || 0) * 100
    return {
      value: ((value1 + value2 + value3 + value4 + value5) / 100).toFixed(2),
    }
  }
}

const solvency = {
  title: '准货币资金 - 有息负债',
  key: fNameMap['交易性金融资产'].keywordName,
  tips: '准货币资金 - 有息负债',
  describe: [
    '>0 无偿债压力',
    '<0 有偿债风险',
  ],
  description: '准货币资金 - 有息负债',
  type: 'number',
  algorithm(record) {
    const value1 = quasiMonetaryFunds.algorithm(record).value * 100
    const value2 = interestingDebt.algorithm(record).value * 100
    const value = ((value1 - value2) / 100).toFixed(2)
    let type = 3
    if (value > 0) {
      type = 0
    }
    return {
      value: value,
      type,
    }
  }
}

const payableAdvance = {
  title: '应付预收',
  key: fNameMap['应付账款'].keywordName,
  tips: '应付账款 + 应付票据 + 预收款项 + 合同负债',
  describe: [
    '金额越大，代表公司竞争力越强，行业地位越高',
  ],
  type: 'number',
  algorithm(record) {
    const value1 = (record[fNameMap['应付账款'].keywordName] || 0) * 100
    const value2 = (record[fNameMap['应付票据'].keywordName] || 0) * 100
    const value3 = (record[fNameMap['预收款项'].keywordName] || 0) * 100
    const value4 = (record[fNameMap['合同负债'].keywordName] || 0) * 100
    return {
      value: ((value1 + value2 + value3 + value4) / 100).toFixed(2),
    }
  }
}

const prepayments = {
  title: '预付款项',
  key: fNameMap['预付款项'].keywordName,
  tips: '预付款项',
  describe: [],
  type: 'number',
  algorithm(record) {
    const value = (record[fNameMap['预付款项'].keywordName] || 0) * 100
    return {
      value: (value / 100).toFixed(2),
    }
  }
}

const prepaymentsRate = {
  title: '预付款项 / 资产总计',
  key: fNameMap['预付款项'].keywordName,
  tips: '预付款项 / 资产总计',
  describe: [
    '<1% 公司实力强，信用好，风险较小',
    '1% ~ 3% 视情况而定',
    '>3% 公司实力弱，信用差，风险较大',
  ],
  type: 'percentage',
  algorithm(record) {
    const value1 = prepayments.algorithm(record).value * 100
    const value2 = totalAssets.algorithm(record).value * 100
    const value = ((value1 / value2) * 100).toFixed(2)
    let type = 3
    if (value < 1) {
      type = 0
    } else if (value >= 1 && value <= 3) {
      type = 2
    }
    return {
      value: value,
      type,
    }
  }
}

const otherAccountsReceivable = {
  title: '其他应收款',
  key: fNameMap['其他应收款'].keywordName,
  tips: '其他应收款',
  describe: [],
  type: 'number',
  algorithm(record) {
    const value = record[fNameMap['其他应收款'].keywordName] || 0
    return {
      value: value,
    }
  }
}

const prepaymentsRateFake = {
  title: '(预付款项 + 其他应收款) / 资产总计',
  key: fNameMap['预付款项'].keywordName,
  tips: '(预付款项 + 其他应收款) / 资产总计',
  describe: [
    '<10% 造假的可能性较小',
    '>10% 超过了可接受范围，可能虚增了预付款项、其他应收款',
  ],
  type: 'percentage',
  algorithm(record) {
    const value1 = prepayments.algorithm(record).value * 100
    const value2 = otherAccountsReceivable.algorithm(record).value * 100
    const value3 = totalAssets.algorithm(record).value * 100
    const value = ((value1 + value2) / value3 * 100).toFixed(2)
    let type = 3
    if (value < 10) {
      type = 0
    }
    return {
      value: value,
      type,
    }
  }
}

const prepaidReceivable = {
  title: '应收预付',
  key: fNameMap['应收账款'].keywordName,
  tips: '应收账款 + 应收票据 + 预付款项 + 合同资产 + 应收款项融资',
  describe: [
    '金额越小，代表公司竞争力越强，行业地位越高',
  ],
  type: 'number',
  algorithm(record) {
    const value1 = (record[fNameMap['应收账款'].keywordName] || 0) * 100
    const value2 = (record[fNameMap['应收票据'].keywordName] || 0) * 100
    const value3 = (record[fNameMap['预付款项'].keywordName] || 0) * 100
    const value4 = (record[fNameMap['合同资产'].keywordName] || 0) * 100
    const value5 = (record[fNameMap['应收款项融资'].keywordName] || 0) * 100
    return {
      value: ((value1 + value2 + value3 + value4 + value5) / 100).toFixed(2),
    }
  }
}

const competition = {
  title: '应付预收 - 应收预付',
  key: fNameMap['应付票据'].keywordName,
  tips: '应付预收 - 应收预付',
  describe: [
    '>0 公司竞争力较强，具有“两头吃”的能力',
    '<0 被其他公司无偿占用紫荆，公司竞争力相对较弱',
  ],
  type: 'number',
  algorithm(record) {
    const value1 = payableAdvance.algorithm(record).value * 100
    const value2 = prepaidReceivable.algorithm(record).value * 100
    const value = ((value1 - value2) / 100).toFixed(2)
    let type = 3
    if (value > 0) {
      type = 0
    }
    return {
      value: value,
      type,
    }
  }
}

const contractAssets = {
  title: '合同资产',
  key: fNameMap['合同资产'].keywordName,
  tips: '',
  describe: [],
  type: 'number',
  algorithm(record) {
    const value = record[fNameMap['合同资产'].keywordName] || 0
    return {
      value: value,
    }
  }
}

const productSales = {
  title: '(应收账款 + 合同资产) / 资产总计',
  key: fNameMap['合同资产'].keywordName,
  tips: '判断产品竞争力 (应收账款 + 合同资产) / 资产总计 > 15% 就可以淘汰了',
  describe: [
    '<1% 最好的公司，公司产品很畅销',
    '<3% 优秀的公司，公司产品畅销',
    '>10% 公司的产品比较难销售',
    '>20% 公司的产品很难销售',
  ],
  type: 'percentage',
  algorithm(record) {
    const value1 = (record[fNameMap['应收账款'].keywordName] || 0) * 100
    const value2 = (record[fNameMap['合同资产'].keywordName] || 0) * 100
    const value3 = (record[fNameMap['资产总计'].keywordName] || 0) * 100
    const value = ((value1 + value2) / value3 * 100).toFixed(2)
    let type = 3
    if (value < 1) {
      type = 0
    } else if (value >= 1 && value < 3) {
      type = 1
    } else if (value >= 3 && value < 20) {
      type = 2
    }
    return {
      value: value,
      type,
    }
  }
}

const fixedAssets = {
  title: '固定资产',
  key: fNameMap['固定资产'].keywordName,
  tips: '',
  describe: [],
  type: 'number',
  algorithm(record) {
    const value = record[fNameMap['固定资产'].keywordName] || 0
    return {
      value: value,
    }
  }
}

const fixedAssetsRate = {
  title: '固定资产 / 资产总计',
  key: fNameMap['固定资产'].keywordName,
  tips: '固定资产 / 资产总计',
  describe: [
    '<40% 轻资产型企业，经营风险较小',
    '>40% 重资产型企业，经营风险较大',
  ],
  type: 'percentage',
  algorithm(record) {
    const value1 = fixedAssets.algorithm(record).value * 100
    const value2 = totalAssets.algorithm(record).value * 100
    const value = ((value1 / value2) * 100).toFixed(2)
    let type = 3
    if (value < 40) {
      type = 0
    }
    return {
      value: value,
      type,
    }
  }
}

const constructionProgress = {
  title: '在建工程',
  key: fNameMap['在建工程'].keywordName,
  tips: '',
  describe: [],
  type: 'number',
  algorithm(record) {
    const value = record[fNameMap['在建工程'].keywordName] || 0
    return {
      value: value,
    }
  }
}

const assetType = {
  title: '(固定资产 + 在建工程) / 资产总计',
  key: fNameMap['合同资产'].keywordName,
  tips: '判断公司类型 (固定资产 + 在建工程) / 资产总计 > 50% 一律淘汰',
  describe: [
    '<20% 通常情况下选择 小于20% 的公司',
    '20% ~ 40% 轻资产型公司，保持持续的竞争力成本相对要低一些',
    '>40% 重资产型公司，维持竞争力成本高，风险相对较大',
  ],
  type: 'percentage',
  algorithm(record) {
    const value1 = (record[fNameMap['固定资产'].keywordName] || 0) * 100
    const value2 = (record[fNameMap['在建工程'].keywordName] || 0) * 100
    const value3 = (record[fNameMap['资产总计'].keywordName] || 0) * 100
    const value = ((value1 + value2) / value3 * 100).toFixed(2)
    let type = 3
    if (value < 20) {
      type = 0
    } else if (value >= 20 && value < 40) {
      type = 1
    }
    return {
      value: value,
      type,
    }
  }
}

const constructionProgressTotalAssets = {
  title: '在建工程 / 资产总计',
  key: fNameMap['合同资产'].keywordName,
  tips: '在建工程 / 资产总计',
  describe: [],
  type: 'percentage',
  algorithm(record) {
    const value1 = (record[fNameMap['在建工程'].keywordName] || 0) * 100
    const value2 = (record[fNameMap['资产总计'].keywordName] || 0) * 100
    const value = (value1 / value2 * 100).toFixed(2)
    return {
      value: value,
    }
  }
}

const investmentRatio = {
  title: '投资类资产比率',
  key: fNameMap['其他权益工具投资'].keywordName,
  tips: '(其他权益工具投资 + 债权投资 + 其他债权投资 + 其他非流动金融资产 + 可供出售金融资产 + 持有至到期投资 + 长期股权投资 + 投资性房地产) / 资产总计',
  describe: [
    '<10% 专注于主业，属于优秀的公司',
    '>10% 不够专注于主业',
  ],
  type: 'percentage',
  algorithm(record) {
    const value1 = (record[fNameMap['其他权益工具投资'].keywordName] || 0) * 100
    const value2 = (record[fNameMap['债权投资'].keywordName] || 0) * 100
    const value3 = (record[fNameMap['其他债权投资'].keywordName] || 0) * 100
    const value4 = (record[fNameMap['其他非流动金融资产'].keywordName] || 0) * 100
    const value5 = (record[fNameMap['可供出售金融资产'].keywordName] || 0) * 100
    const value6 = (record[fNameMap['持有至到期投资'].keywordName] || 0) * 100
    const value7 = (record[fNameMap['长期股权投资'].keywordName] || 0) * 100
    const value8 = (record[fNameMap['投资性房地产'].keywordName] || 0) * 100
    const value9 = (record[fNameMap['资产总计'].keywordName] || 0) * 100
    const value10 = value1 + value2 + value3 + value4 + value5 + value6 + value7 + value8
    const value = (value10 / value9 * 100).toFixed(2)
    let type = 3
    if (value < 10) {
      type = 0
    }
    return {
      value: value,
      type,
    }
  }
}

const stock = {
  title: '存货',
  key: fNameMap['存货'].keywordName,
  tips: '',
  describe: [],
  type: 'number',
  algorithm(record) {
    const value = record[fNameMap['存货'].keywordName] || 0
    return {
      value: value,
    }
  }
}

const competitionAndAccountsReceivableRate = {
  title: '(应付预收 - 应收预付) & 应收账款 / 资产总计',
  key: fNameMap['应付票据'].keywordName,
  tips: '(应付预收 - 应收预付) & 应收账款 / 资产总计',
  describe: [
    '(应付预收 - 应收预付) > 0 & 应收账款 / 资产总计 < 1% 无暴雷风险',
    '(应付预收 - 应收预付) < 0 or 应收账款 / 资产总计 > 1% 有暴雷风险',
  ],
  type: 'string',
  algorithm(record) {
    const value1 = competition.algorithm(record).value
    const value2 = accountsReceivableRate.algorithm(record).value
    let type = 3
    if (value1 > 0 && value2 < 1) {
      type = 0
    }
    return {
      value: `${numberToThousands(value1)} &  ${value2}%`,
      type,
    }
  }
}

const stockReceivableRate = {
  title: '存货 / 资产总计',
  key: fNameMap['存货'].keywordName,
  tips: '存货 / 资产总计',
  describe: [],
  type: 'percentage',
  algorithm(record) {
    const value1 = stock.algorithm(record).value * 100
    const value2 = totalAssets.algorithm(record).value * 100
    const value = ((value1 / value2) * 100).toFixed(2)
    return {
      value: value,
    }
  }
}

const stockAndAccountsReceivableRate = {
  title: '应收账款 / 资产总计 & 存货 / 资产总计',
  key: fNameMap['应付票据'].keywordName,
  tips: '应收账款 / 资产总计 & 存货 / 资产总计',
  describe: [
    '应收账款 / 资产总计 < 5% or 存货 / 资产总计 < 15% 无暴雷风险',
    '应收账款 / 资产总计 > 5% & 存货 / 资产总计 > 15% 有暴雷风险',
  ],
  type: 'string',
  algorithm(record) {
    const value1 = accountsReceivableRate.algorithm(record).value
    const value2 = stockReceivableRate.algorithm(record).value
    let type = 3
    if (value1 < 5 || value2 < 15) {
      type = 0
    }
    return {
      value: `${value1}%  &  ${value2}%`,
      type,
    }
  }
}

const goodwill = {
  title: '商誉',
  key: fNameMap['商誉'].keywordName,
  tips: '商誉',
  describe: [],
  type: 'number',
  algorithm(record) {
    const value = record[fNameMap['商誉'].keywordName] || 0
    return {
      value: value,
    }
  }
}

const goodwillRate = {
  title: '商誉 / 资产总计',
  key: fNameMap['商誉'].keywordName,
  tips: '商誉 / 资产总计',
  describe: [
    '<10% 无暴雷风险',
    '>10% 有暴雷风险',
  ],
  type: 'percentage',
  algorithm(record) {
    const value1 = (record[fNameMap['商誉'].keywordName] || 0) * 100
    const value2 = (record[fNameMap['资产总计'].keywordName] || 0) * 100
    const value = ((value1 / value2) * 100).toFixed(2)
    let type = 3
    if (value < 10) {
      type = 0
    }
    return {
      value: value,
      type,
    }
  }
}

const averageMonetaryFunds = {
  title: '平均货币资金',
  key: fNameMap['货币资金'].keywordName,
  tips: '平均货币资金',
  describe: [],
  description: '货币资金的期末数 + 货币资金的期初数',
  type: 'number',
  algorithm(record) {
    const value1 = (record[fNameMap['货币资金'].keywordName] || 0) * 100
    let value2 = '--'
    if (record.prevYear) {
      value2 = (record.prevYear[fNameMap['货币资金'].keywordName] || 0) * 100
    }
    let value = value1
    if (value2 !== '--') {
      value = (value1 + value2) / 2
    }
    return {
      value: (value / 100).toFixed(2),
    }
  }
}

const interestIncome = {
  title: '财务费用：利息收入',
  key: fNameMap['货币资金'].keywordName,
  tips: '财务费用：利息收入',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.pData) {
      value = record.pData[pNameMap['财务费用：利息收入'].keywordName] || 0
    }
    return {
      value: value,
    }
  }
}

const interestExpenditure = {
  title: '财务费用：利息支出',
  key: fNameMap['货币资金'].keywordName,
  tips: '财务费用：利息支出',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.pData) {
      value = record.pData[pNameMap['财务费用：利息支出'].keywordName] || 0
    }
    return {
      value: value,
    }
  }
}

const interestIncomeAverageMonetaryFunds = {
  title: '财务费用：利息收入 / 平均货币资金',
  key: fNameMap['货币资金'].keywordName,
  tips: '财务费用：利息收入 / 平均货币资金',
  describe: [
    '>2.5% 货币资金是可靠的',
    '2% ~ 2.5% 货币资金的真实性可能有问题',
    '<2% 货币资金的真实性很可能有问题',
  ],
  type: 'percentage',
  algorithm(record) {
    const value1 = averageMonetaryFunds.algorithm(record).value * 100
    let value2 = interestIncome.algorithm(record).value
    let value = '--'
    if (value2 !== '--') {
      value = ((-value2 * 100 / value1) * 100).toFixed(2)
    }

    let type = 3
    if (value > 2.5) {
      type = 0
    } else if (value <= 2.5 && value > 2) {
      type = 1
    }
    
    return {
      value: value,
      type,
    }
  }
}

const netProfit = {
  title: '净利润',
  key: fNameMap['货币资金'].keywordName,
  tips: '净利润',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.pData) {
      value = Number(record.pData[pNameMap['净利润'].keywordName] || 0).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const interestExpenditureNetProfit = {
  title: '财务费用：利息支出 / 净利润',
  key: fNameMap['货币资金'].keywordName,
  tips: '财务费用：利息支出 / 净利润',
  describe: [
    '<10% 货币资金科目造假的风险相对较小',
    '>10% 货币资金的真实性很可能有问题',
  ],
  type: 'percentage',
  algorithm(record) {
    const value1 = interestExpenditure.algorithm(record).value
    const value2 = netProfit.algorithm(record).value
    let value = ''
    if (value1 === '--' || value2 === '--') {
      value = '--'
    } else {
      value = (((value1 * 100) / (value2 * 100)) * 100).toFixed(2)
    }
    let type = 3
    if (value < 10) {
      type = 0
    }
    return {
      value: value,
      type
    }
  }
}

const monetaryFundsInterestingDebt = {
  title: '货币资金 - 有息负债',
  key: fNameMap['交易性金融资产'].keywordName,
  tips: '货币资金 - 有息负债',
  describe: [
    '如果公司有很多货币资金，但是又有很多有息负债，每年需要支付高额利息，那么这家公司的货币资金很有可能有问题',
  ],
  description: '货币资金 - 有息负债',
  type: 'string',
  algorithm(record) {
    const value1 = record[fNameMap['货币资金'].keywordName] || 0
    const value2 = interestingDebt.algorithm(record).value
    const value = (value1 - value2).toFixed(2)
    return {
      value: `${numberToThousands(value1)} - ${numberToThousands(value2)} = ${numberToThousands(value)}`,
    }
  }
}

const constructionProgressFake = {
  title: '应收账款 / 资产总计 & 存货 / 资产总计',
  key: fNameMap['资产总计'].keywordName,
  tips: '应收账款 / 资产总计 & 存货 / 资产总计',
  describe: [
    '如果(在建工程 / 资产总计)比率有较大增幅，(应收账款 / 资产总计 < 1%)且(存货 / 资产总计 < 10%)，公司在快速增长',
    '如果(在建工程 / 资产总计)比率有较大增幅，(应收账款 / 资产总计 > 5%)或(存货 / 资产总计 > 15%)，存在财务造假',
  ],
  type: 'string',
  algorithm(record) {
    const value1 = accountsReceivableRate.algorithm(record).value
    const value2 = stockReceivableRate.algorithm(record).value
    const value3 = constructionProgressTotalAssets.algorithm(record).value
    let type = 3
    if (value1 < 1 && value2 < 10) {
      type = 0
    }
    return {
      value: `${value1}% & ${value2}% (在建工程 / 资产总计 = ${value3}%)`,
      type,
    }
  }
}

const operatingIncome = {
  title: '营业收入',
  key: fNameMap['货币资金'].keywordName,
  tips: '营业收入',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.pData) {
      value = Number(record.pData[pNameMap['其中：营业收入'].keywordName] || 0).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const operatingIncomeRate = {
  title: '营业收入增长率',
  key: fNameMap['货币资金'].keywordName,
  tips: '(本期营业收入 - 上期营业收入) / 上期营业收入',
  describe: [
    '>10% 公司成长较快，前景较好',
    '0% ~ 10% 公司成长缓慢，一般小于10%就可以淘汰',
    '<0% 公司处于衰退之中',
  ],
  type: 'percentage',
  algorithm(record) {
    let value = '--'
    let type = 3
    if (record.pData && record.pData.prevYear) {
      const value1 = operatingIncome.algorithm(record).value * 100
      const value2 = (record.pData.prevYear[pNameMap['其中：营业收入'].keywordName] || 0) * 100
      value = ((value1 - value2) / value2 * 100).toFixed(2)
      if (value > 10) {
        type = 0
      } else if (value > 0 && value <= 10) {
        type = 2
      }
    }
    return {
      value: value,
      type,
    }
  }
}

const operatingCost = {
  title: '营业成本',
  key: fNameMap['货币资金'].keywordName,
  tips: '营业成本',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.pData) {
      value = Number(record.pData[pNameMap['其中：营业成本'].keywordName] || 0).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const grossMargin = {
  title: '毛利率',
  key: fNameMap['货币资金'].keywordName,
  tips: '(营业收入 - 营业成本) / 营业收入',
  describe: [
    '>40% 高毛利率说明公司的产品或服务竞争力较强',
    '<40% 中低毛利率说明公司的产品或服务竞争力较差，一般淘汰',
  ],
  type: 'percentage',
  algorithm(record) {
    let value = '--'
    let type = 3
    if (record.pData) {
      const value1 = (record.pData[pNameMap['其中：营业收入'].keywordName] || 0) * 100
      const value2 = (record.pData[pNameMap['其中：营业成本'].keywordName] || 0) * 100
      value = ((value1 - value2) / value1 * 100).toFixed(2)
      if (value > 40) {
        type = 0
      }
    }
    return {
      value: value,
      type,
    }
  }
}

const grossMarginRate = {
  title: '毛利率波动幅度',
  key: fNameMap['货币资金'].keywordName,
  tips: '(本期毛利率 - 上年毛利率) / 上年毛利率',
  describe: [
    '<10% 优秀的公司',
    '>20% 公司经营或财务造假的风险大',
  ],
  type: 'percentage',
  algorithm(record) {
    let value = '--'
    let type = 3
    if (record.pData && record.pData.prevYear) {
      const value1 = grossMargin.algorithm(record).value * 100
      const value2 = (record.pData.prevYear[pNameMap['其中：营业收入'].keywordName] || 0) * 100
      const value3 = (record.pData.prevYear[pNameMap['其中：营业成本'].keywordName] || 0) * 100
      const value4 = (value2 - value3) / value2 * 100 * 100
      value = ((value1 - value4) / value4 * 100).toFixed(2)
      if (value < 10) {
        type = 0
      }
    }
    return {
      value: value,
      type,
    }
  }
}

const salesExpense = {
  title: '销售费用',
  key: fNameMap['货币资金'].keywordName,
  tips: '销售费用',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.pData) {
      value = Number(record.pData[pNameMap['销售费用'].keywordName] || 0).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const managementExpense = {
  title: '管理费用',
  key: fNameMap['货币资金'].keywordName,
  tips: '管理费用',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.pData) {
      value = Number(record.pData[pNameMap['管理费用'].keywordName] || 0).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const rdExpense = {
  title: '研发费用',
  key: fNameMap['货币资金'].keywordName,
  tips: '研发费用',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.pData) {
      value = Number(record.pData[pNameMap['研发费用'].keywordName] || 0).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const financialExpense = {
  title: '财务费用',
  key: fNameMap['货币资金'].keywordName,
  tips: '财务费用',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.pData) {
      value = Number(record.pData[pNameMap['财务费用'].keywordName] || 0).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const periodExpense = {
  title: '期间费用',
  key: fNameMap['货币资金'].keywordName,
  tips: '销售费用 + 管理费用 + 研发费用 + 财务费用',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.pData) {
      const value1 = salesExpense.algorithm(record).value * 100
      const value2 = managementExpense.algorithm(record).value * 100
      const value3 = rdExpense.algorithm(record).value * 100
      const value4 = financialExpense.algorithm(record).value * 100
      if (value4 > 0) {
        value = ((value1 + value2 + value3 + value4) / 100).toFixed(2)
      } else {
        value = ((value1 + value2 + value3) / 100).toFixed(2)
      }
    }
    return {
      value: value,
    }
  }
}

const periodExpenseRate = {
  title: '期间费用率',
  key: fNameMap['货币资金'].keywordName,
  tips: '(销售费用 + 管理费用 + 研发费用 + 财务费用) / 营业收入',
  describe: [],
  type: 'percentage',
  algorithm(record) {
    let value = '--'
    if (record.pData) {
      const value1 = periodExpense.algorithm(record).value * 100
      const value2 = operatingIncome.algorithm(record).value * 100
      value = (value1 / value2 * 100).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const periodExpenseGrossMarginRate = {
  title: '期间费用率 / 毛利率',
  key: fNameMap['货币资金'].keywordName,
  tips: '期间费用率 / 毛利率',
  describe: [
    '<40% 成本控制能力好，属于优秀的企业',
    '>40% 成本控制能力差，一般把大于60%的公司淘汰掉',
  ],
  type: 'percentage',
  algorithm(record) {
    let value = '--'
    let type = 3
    if (record.pData) {
      const value1 = periodExpenseRate.algorithm(record).value * 100
      const value2 = grossMargin.algorithm(record).value * 100
      value = (value1 / value2 * 100).toFixed(2)
      if (value < 40) {
        type = 0
      }
    }
    return {
      value: value,
      type,
    }
  }
}

const salesExpenseRate = {
  title: '销售费用 / 营业收入',
  key: fNameMap['货币资金'].keywordName,
  tips: '销售费用 / 营业收入',
  describe: [
    '<15% 产品比较容易销售，销售风险相对较小',
    '15% ~ 30% 产品比较难销售，销售风险相对较大',
    '>30% 产品销售难度大，销售风险大，淘汰',
  ],
  type: 'percentage',
  algorithm(record) {
    let value = '--'
    let type = 3
    if (record.pData) {
      const value1 = salesExpense.algorithm(record).value * 100
      const value2 = operatingIncome.algorithm(record).value * 100
      value = (value1 / value2 * 100).toFixed(2)
      if (value < 15) {
        type = 0
      } else if (value >= 15 && value < 30) {
        type = 2
      }
    }
    return {
      value: value,
      type,
    }
  }
}

const taxesAndSurcharges = {
  title: '营业税金及附加',
  key: fNameMap['货币资金'].keywordName,
  tips: '营业税金及附加',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.pData) {
      value = Number(record.pData[pNameMap['营业税金及附加'].keywordName] || 0).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const operatingProfit = {
  title: '营业利润',
  key: fNameMap['货币资金'].keywordName,
  tips: '营业利润',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.pData) {
      value = Number(record.pData[pNameMap['三、营业利润'].keywordName] || 0).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const mainProfit = {
  title: '主营利润',
  key: fNameMap['货币资金'].keywordName,
  tips: '营业收入 - 营业成本 - 期间费用 - 营业税金及附加',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.pData) {
      const value1 = operatingIncome.algorithm(record).value * 100
      const value2 = operatingCost.algorithm(record).value * 100
      const value3 = periodExpense.algorithm(record).value * 100
      const value4 = taxesAndSurcharges.algorithm(record).value * 100
      value = ((value1 - value2 - value3 - value4) / 100).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const mainProfitRate = {
  title: '主营利润率',
  key: fNameMap['货币资金'].keywordName,
  tips: '主营利润 / 营业收入',
  describe: [
    '>15% 主业盈利能力强',
    '<15% 主业盈利能力弱，不具备持续竞争力，淘汰',
  ],
  type: 'percentage',
  algorithm(record) {
    let value = '--'
    let type = 3
    if (record.pData) {
      const value1 = mainProfit.algorithm(record).value * 100
      const value2 = operatingIncome.algorithm(record).value * 100
      value = (value1 / value2 * 100).toFixed(2)
      if (value > 15) {
        type = 0
      }
    }
    return {
      value: value,
      type,
    }
  }
}

const mainProfitOperatingProfitRate = {
  title: '主营利润 / 营业利润',
  key: fNameMap['货币资金'].keywordName,
  tips: '主营利润 / 营业利润',
  describe: [
    '>80% 利润质量高',
    '<80% 利润质量低，不具备持续竞争力，淘汰',
  ],
  type: 'percentage',
  algorithm(record) {
    let value = '--'
    let type = 3
    if (record.pData) {
      const value1 = mainProfit.algorithm(record).value * 100
      const value2 = operatingProfit.algorithm(record).value * 100
      value = (value1 / value2 * 100).toFixed(2)
      if (value > 80) {
        type = 0
      }
    }
    return {
      value: value,
      type,
    }
  }
}

const nonOperatingIncome = {
  title: '营业外收入',
  key: fNameMap['货币资金'].keywordName,
  tips: '营业外收入',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.pData) {
      value = Number(record.pData[pNameMap['营业外收入'].keywordName] || 0).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const operatingExpenses = {
  title: '减：营业外支出',
  key: fNameMap['货币资金'].keywordName,
  tips: '减：营业外支出',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.pData) {
      value = Number(record.pData[pNameMap['减：营业外支出'].keywordName] || 0).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const netNonOperatingIncome = {
  title: '营业外收入净额',
  key: fNameMap['货币资金'].keywordName,
  tips: '营业外收入 - 减：营业外支出',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.pData) {
      const value1 = nonOperatingIncome.algorithm(record).value * 100
      const value2 = operatingExpenses.algorithm(record).value * 100
      value = ((value1 - value2) / 100).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const totalProfit = {
  title: '利润总额',
  key: fNameMap['货币资金'].keywordName,
  tips: '利润总额',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.pData) {
      value = Number(record.pData[pNameMap['四、利润总额'].keywordName] || 0).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const netNonOperatingIncomeTotalProfitRate = {
  title: '营业外收入净额 / 利润总额',
  key: fNameMap['货币资金'].keywordName,
  tips: '营业外收入净额 / 利润总额',
  describe: [
    '<5% 利润质量好，越小越好',
    '>5% 利润质量差，越大越差',
  ],
  type: 'percentage',
  algorithm(record) {
    let value = '--'
    let type = 3
    if (record.pData) {
      const value1 = netNonOperatingIncome.algorithm(record).value * 100
      const value2 = totalProfit.algorithm(record).value * 100
      value = (value1 / value2 * 100).toFixed(2)
      if (value < 5) {
        type = 0
      }
    }
    return {
      value: value,
      type,
    }
  }
}

const netProfitToParent = {
  title: '归属于母公司所有者的净利润',
  key: fNameMap['货币资金'].keywordName,
  tips: '归属于母公司所有者的净利润',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.pData) {
      value = Number(record.pData[pNameMap['归属于母公司所有者的净利润'].keywordName] || 0).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const netProfitToParentRate = {
  title: '归属于母公司所有者的净利润增长率',
  key: fNameMap['货币资金'].keywordName,
  tips: '归属于母公司所有者的净利润增长率',
  describe: [
    '>10% 盈利能力持续性好',
    '<10% 盈利能力持续性差，淘汰掉，小于0属于衰落中',
  ],
  type: 'percentage',
  algorithm(record) {
    let value = '--'
    let type = 3
    if (record.pData && record.pData.prevYear) {
      const value1 = netProfitToParent.algorithm(record).value * 100
      const value2 = (record.pData.prevYear[pNameMap['归属于母公司所有者的净利润'].keywordName] || 0) * 100
      value = ((value1 - value2) / value2 * 100).toFixed(2)
      if (value > 10) {
        type = 0
      }
    }
    return {
      value: value,
      type,
    }
  }
}

const netCashFlowFromOperatingActivities = {
  title: '经营活动产生的现金流量净额',
  key: fNameMap['货币资金'].keywordName,
  tips: '经营活动产生的现金流量净额',
  describe: [
    '越大越好 ',
    '<0 直接淘汰',
  ],
  type: 'number',
  algorithm(record) {
    let value = '--'
    let type = 3
    if (record.cData) {
      value = Number(record.cData[cNameMap['经营活动产生的现金流量净额'].keywordName] || 0).toFixed(2)
      if (value > 0) {
        type = 0
      }
    }
    return {
      value: value,
      type,
    }
  }
}

const netCashFlowsFromInvestingActivities = {
  title: '投资活动产生的现金流量净额',
  key: fNameMap['货币资金'].keywordName,
  tips: '投资活动产生的现金流量净额',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.cData) {
      value = Number(record.cData[cNameMap['投资活动产生的现金流量净额'].keywordName] || 0).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const netCashFlowFromFinancingActivities = {
  title: '筹资活动产生的现金流量净额',
  key: fNameMap['货币资金'].keywordName,
  tips: '筹资活动产生的现金流量净额',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.cData) {
      value = Number(record.cData[cNameMap['筹资活动产生的现金流量净额'].keywordName] || 0).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const cashType = {
  title: '公司现金流量类型',
  key: fNameMap['货币资金'].keywordName,
  tips: '公司现金流量类型',
  describe: [
    '正负负 和 正正负 两种类型为选择对象',
    '不是 正负负 和 正正负 两种类型',
  ],
  type: 'string',
  algorithm(record) {
    let value = '--'
    let type = 3
    if (record.cData) {
      value = ''
      const value1 = netCashFlowFromOperatingActivities.algorithm(record).value
      const value2 = netCashFlowsFromInvestingActivities.algorithm(record).value
      const value3 = netCashFlowFromFinancingActivities.algorithm(record).value
      if (value1 > 0) {
        value += '正'
      } else {
        value += '负'
      }
      if (value2 > 0) {
        value += '正'
      } else {
        value += '负'
      }
      if (value3 > 0) {
        value += '正'
      } else {
        value += '负'
      }
      if (value1 > 0 && value3 < 0) {
        type = 0
      }
    }
    return {
      value: value,
      type,
    }
  }
}

const netCashFlowFromOperatingActivitiesRate = {
  title: '经营活动产生的现金流量净额增长率',
  key: fNameMap['货币资金'].keywordName,
  tips: '经营活动产生的现金流量净额增长率：(本期经营活动产生的现金流量净额 - 上期经营活动产生的现金流量净额) / 上期经营活动产生的现金流量净额',
  describe: [
    '>0% 公司造血能力在提高',
    '<0% 公司造血能力在下降',
  ],
  type: 'percentage',
  algorithm(record) {
    let value = '--'
    let type = 3
    if (record.cData && record.cData.prevYear) {
      const value1 = netCashFlowFromOperatingActivities.algorithm(record).value * 100
      const value2 = (record.cData.prevYear[cNameMap['经营活动产生的现金流量净额'].keywordName] || 0) * 100
      value = ((value1 - value2) / value2 * 100).toFixed(2)
      if (value > 0) {
        type = 0
      }
    }
    return {
      value: value,
      type,
    }
  }
}

const cashReceivedFromSellingGoodsAndProvidingLaborServices = {
  title: '销售商品、提供劳务收到的现金',
  key: fNameMap['货币资金'].keywordName,
  tips: '销售商品、提供劳务收到的现金',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.cData) {
      value = Number(record.cData[cNameMap['销售商品、提供劳务收到的现金'].keywordName] || 0).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const cashReceivedFromSellingGoodsAndProvidingLaborServicesRate = {
  title: '销售商品、提供劳务收到的现金 / 营业收入',
  key: fNameMap['货币资金'].keywordName,
  tips: '销售商品、提供劳务收到的现金 / 营业收入',
  describe: [
    '>100% 公司营业收入质量高，>110%更好',
    '<100% 公司营业收入质量不高',
  ],
  type: 'percentage',
  algorithm(record) {
    let value = '--'
    let type = 3
    if (record.cData) {
      const value1 = cashReceivedFromSellingGoodsAndProvidingLaborServices.algorithm(record).value * 100
      const value2 = operatingIncome.algorithm(record).value * 100
      value = (value1 / value2 * 100).toFixed(2)
      if (value > 100) {
        type = 0
      }
    }
    return {
      value: value,
      type,
    }
  }
}

const netCashFlowFromOperatingActivitiesNetProfitRate = {
  title: '经营活动产生的现金流量净额 / 净利润',
  key: fNameMap['货币资金'].keywordName,
  tips: '经营活动产生的现金流量净额 / 净利润',
  describe: [
    '>100% 净利润含金量高',
    '<100% 净利润含金量低',
  ],
  type: 'percentage',
  algorithm(record) {
    let value = '--'
    let type = 3
    if (record.cData) {
      const value1 = netCashFlowFromOperatingActivities.algorithm(record).value * 100
      const value2 = netProfit.algorithm(record).value * 100
      value = (value1 / value2 * 100).toFixed(2)
      if (value > 100) {
        type = 0
      }
    }
    return {
      value: value,
      type,
    }
  }
}

const cashPaidForPurchaseAndConstruction = {
  title: '购建固定资产、无形资产和其他长期资产支付的现金',
  key: fNameMap['货币资金'].keywordName,
  tips: '购建固定资产、无形资产和其他长期资产支付的现金',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.cData) {
      value = Number(record.cData[cNameMap['购建固定资产、无形资产和其他长期资产支付的现金'].keywordName] || 0).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const cashPaidForPurchaseAndConstructionRate = {
  title: '购建固定资产、无形资产和其他长期资产支付的现金 / 经营活动产生的现金流量净额',
  key: fNameMap['货币资金'].keywordName,
  tips: '购建固定资产、无形资产和其他长期资产支付的现金 / 经营活动产生的现金流量净额',
  describe: [
    '3% ~ 60% 公司增长潜力较大，并且风险相对较小',
    '>60% 风险相对较大',
    '<3% 或 >100% 前者回报较低，后者风险较大',
  ],
  type: 'percentage',
  algorithm(record) {
    let value = '--'
    let type = 3
    if (record.cData) {
      const value1 = cashPaidForPurchaseAndConstruction.algorithm(record).value * 100
      const value2 = netCashFlowFromOperatingActivities.algorithm(record).value * 100
      value = (value1 / value2 * 100).toFixed(2)
      if (value > 3 && value < 60) {
        type = 0
      } if (value >= 60 && value < 100) {
        type = 1
      }
    }
    return {
      value: value,
      type,
    }
  }
}

const cashPaidForDividendsProfitsInterestPayments = {
  title: '分配股利、利润或偿付利息支付的现金',
  key: fNameMap['货币资金'].keywordName,
  tips: '分配股利、利润或偿付利息支付的现金',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.cData) {
      value = Number(record.cData[cNameMap['分配股利、利润或偿付利息支付的现金'].keywordName] || 0).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const cashPaidForDividendsProfitsInterestPaymentsRate = {
  title: '分配股利、利润或偿付利息支付的现金 / 经营活动产生的现金流量净额',
  key: fNameMap['货币资金'].keywordName,
  tips: '分配股利、利润或偿付利息支付的现金 / 经营活动产生的现金流量净额',
  describe: [
    '20% ~ 70% 优秀公司的分红',
    '<20% 公司要么能力有问题，要么品质有问题，>70% 分红比例很难长期持续',
  ],
  type: 'percentage',
  algorithm(record) {
    let value = '--'
    let type = 3
    if (record.cData) {
      const value1 = cashPaidForDividendsProfitsInterestPayments.algorithm(record).value * 100
      const value2 = netCashFlowFromOperatingActivities.algorithm(record).value * 100
      value = ((value1 / value2) * 100).toFixed(2)
      if (value > 20 && value < 70) {
        type = 0
      }
    }
    return {
      value: value,
      type,
    }
  }
}

const netIncreaseInCashAndCashEquivalents = {
  title: '现金及现金等价物净增加额',
  key: fNameMap['货币资金'].keywordName,
  tips: '现金及现金等价物净增加额',
  describe: [],
  type: 'number',
  algorithm(record) {
    let value = '--'
    if (record.cData) {
      value = Number(record.cData[cNameMap['五、现金及现金等价物净增加额'].keywordName] || 0).toFixed(2)
    }
    return {
      value: value,
    }
  }
}

const cashDividends = {
  title: '加分红后的现金及现金等价物净增加额',
  key: fNameMap['货币资金'].keywordName,
  tips: '现金及现金等价物净增加额 + 分配股利、利润或偿付利息支付的现金',
  describe: [
    '>0 这种公司才有被选择的资格',
    '<0 直接淘汰',
  ],
  type: 'number',
  algorithm(record) {
    let value = '--'
    let type = 3
    if (record.cData) {
      const value1 = cashPaidForDividendsProfitsInterestPayments.algorithm(record).value * 100
      const value2 = netIncreaseInCashAndCashEquivalents.algorithm(record).value * 100
      value = ((value1 + value2) / 100).toFixed(2)
      if (value > 0) {
        type = 0
      }
    }
    return {
      value: value,
      type,
    }
  }
}

const balanceCashEquivalents = {
  title: '期末现金及现金等价物余额',
  key: fNameMap['货币资金'].keywordName,
  tips: '期末现金及现金等价物余额',
  describe: [
    '一般钱越多的公司，抗风险能力越强，现金分红的能力也越强',
  ],
  type: 'number',
  algorithm(record) {
    let value = '--'
    let type = 0
    if (record.cData) {
      value = Number(record.cData[cNameMap['期末现金及现金等价物余额'].keywordName] || 0).toFixed(2)
    }
    return {
      value: value,
      type,
    }
  }
}

export const assetsMap = [
  {
    title: '货币资金造假分析',
    keys: [
      endDate,
      averageMonetaryFunds,
      interestingDebt,
      interestIncome,
      interestIncomeAverageMonetaryFunds,
      interestExpenditure,
      netProfit,
      interestExpenditureNetProfit,
      monetaryFundsInterestingDebt,
    ]
  },
  {
    title: '应收账款、预付账款和在建工程造假分析',
    keys: [
      endDate,
      totalAssets,
      accountsReceivable,
      accountsReceivableRateFake,
      prepayments,
      otherAccountsReceivable,
      prepaymentsRateFake,
      constructionProgress,
      constructionProgressTotalAssets,
      constructionProgressFake
    ]
  },
  {
    title: '企业规模、成长性和企业经营相关资产',
    keys: [
      endDate,
      totalAssets,
      totalAssetsGrowthRate,
      businessAssets,
      businessAssetsRate,
    ]
  },
  {
    title: '企业经营资产分析',
    keys: [
      endDate,
      totalAssets,
      quasiMonetaryFunds,
      quasiMonetaryFundsRate,
      accountsReceivable,
      accountsReceivableRate,
      prepayments,
      prepaymentsRate,
      fixedAssets,
      fixedAssetsRate,
    ]
  },
  {
    title: '负债率',
    keys: [
      endDate,
      debt,
      totalAssets,
      debtRate
    ]
  },
  {
    title: '偿债能力',
    keys: [
      endDate,
      quasiMonetaryFunds,
      interestingDebt,
      solvency
    ]
  },
  {
    title: '公司竞争力',
    keys: [
      endDate,
      payableAdvance,
      prepaidReceivable,
      competition
    ]
  },
  {
    title: '产品销售',
    keys: [
      endDate,
      accountsReceivable,
      contractAssets,
      totalAssets,
      productSales
    ]
  },
  {
    title: '资产类型',
    keys: [
      endDate,
      fixedAssets,
      constructionProgress,
      totalAssets,
      assetType
    ]
  },
  {
    title: '公司是否专注',
    keys: [
      endDate,
      totalAssets,
      investmentRatio
    ]
  },
  {
    title: '存货暴雷风险',
    keys: [
      endDate,
      competitionAndAccountsReceivableRate,
      stockAndAccountsReceivableRate,
      totalAssets,
      {
        ...payableAdvance,
        describe: []
      },
      {
        ...prepaidReceivable,
        describe: []
      },
      accountsReceivable,
      stock,
    ]
  },
  {
    title: '商誉暴雷风险',
    keys: [
      endDate,
      goodwill,
      goodwillRate,
    ]
  },
  {
    title: '营业收入和毛利率分析',
    keys: [
      endDate,
      operatingIncome,
      operatingIncomeRate,
      operatingCost,
      grossMargin,
      grossMarginRate,
    ]
  },
  {
    title: '期间费用分析',
    keys: [
      endDate,
      operatingIncome,
      {
        ...grossMargin,
        describe: []
      },
      salesExpense,
      managementExpense,
      rdExpense,
      financialExpense,
      periodExpense,
      periodExpenseRate,
      periodExpenseGrossMarginRate,
      salesExpenseRate,
    ]
  },
  {
    title: '主营利润率分析',
    keys: [
      endDate,
      operatingIncome,
      operatingCost,
      periodExpense,
      taxesAndSurcharges,
      operatingProfit,
      mainProfit,
      mainProfitRate,
      mainProfitOperatingProfitRate,
    ]
  },
  {
    title: '营业外收入分析',
    keys: [
      endDate,
      nonOperatingIncome,
      operatingExpenses,
      netNonOperatingIncome,
      totalProfit,
      netNonOperatingIncomeTotalProfitRate,
    ]
  },
  {
    title: '归属母公司利润分析',
    keys: [
      endDate,
      netProfitToParent,
      netProfitToParentRate,
    ]
  },
  {
    title: '经营活动产生的现金流量分析',
    keys: [
      endDate,
      netCashFlowFromOperatingActivities,
      netCashFlowFromOperatingActivitiesRate,
      cashReceivedFromSellingGoodsAndProvidingLaborServices,
      operatingIncome,
      cashReceivedFromSellingGoodsAndProvidingLaborServicesRate,
      netProfit,
      netCashFlowFromOperatingActivitiesNetProfitRate,
      cashPaidForPurchaseAndConstruction,
      cashPaidForPurchaseAndConstructionRate,
    ]
  },
  {
    title: '现金分红情况分析',
    keys: [
      endDate,
      {
        ...netCashFlowFromOperatingActivities,
        describe: []
      },
      cashPaidForDividendsProfitsInterestPayments,
      cashPaidForDividendsProfitsInterestPaymentsRate,
    ]
  },
  {
    title: '公司现金流动类型分析',
    keys: [
      endDate,
      {
        ...netCashFlowFromOperatingActivities,
        describe: []
      },
      netCashFlowsFromInvestingActivities,
      netCashFlowFromFinancingActivities,
      cashType,
    ]
  },
  {
    title: '公司现金增长分析',
    keys: [
      endDate,
      netIncreaseInCashAndCashEquivalents,
      cashPaidForDividendsProfitsInterestPayments,
      cashDividends,
      balanceCashEquivalents,
    ]
  },
]
