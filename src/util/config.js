import _fKeyArr, { fNameMap, fKeyMap } from './fKeyData'
import _pKeyArr, { pNameMap, pKeyMap } from './pKeyData'
import _cKeyArr, { cNameMap, cKeyMap } from './cKeyData'

export const nameMap = {
  f: '资产负债表',
  p: '利润表',
  c: '现金流量表',
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
      value = record.pData[pNameMap['净利润'].keywordName] || 0
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
]
