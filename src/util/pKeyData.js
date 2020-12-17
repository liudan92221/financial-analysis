const keyArr =  [
  // {
  //   "keywordName": "SECCODE",
  //   "keywordAlias": "证券代码",
  //   "dataType": "varchar",
  //   "suggestName": "SECCODE",
  //   "name": "SECCODE",
  //   "suggestAlias": "证券代码",
  //   "alias": "证券代码",
  //   "describe": ""
  // },
  // {
  //   "keywordName": "SECNAME",
  //   "keywordAlias": "证券简称",
  //   "dataType": "varchar",
  //   "suggestName": "SECNAME",
  //   "name": "SECNAME",
  //   "suggestAlias": "证券简称",
  //   "alias": "证券简称",
  //   "describe": ""
  // },
  // {
  //   "keywordName": "ORGNAME",
  //   "keywordAlias": "机构名称",
  //   "dataType": "varchar",
  //   "suggestName": "ORGNAME",
  //   "name": "ORGNAME",
  //   "suggestAlias": "机构名称",
  //   "alias": "机构名称",
  //   "describe": ""
  // },
  // {
  //   "keywordName": "DECLAREDATE",
  //   "keywordAlias": "公告日期",
  //   "dataType": "date",
  //   "suggestName": "DECLAREDATE",
  //   "name": "DECLAREDATE",
  //   "suggestAlias": "公告日期",
  //   "alias": "公告日期",
  //   "describe": ""
  // },
  // {
  //   "keywordName": "STARTDATE",
  //   "keywordAlias": "开始日期",
  //   "dataType": "date",
  //   "suggestName": "STARTDATE",
  //   "name": "STARTDATE",
  //   "suggestAlias": "开始日期",
  //   "alias": "开始日期",
  //   "describe": ""
  // },
  {
    "keywordName": "ENDDATE",
    "keywordAlias": "截止日期",
    "dataType": "date",
    "suggestName": "ENDDATE",
    "name": "ENDDATE",
    "suggestAlias": "截止日期",
    "alias": "截止日期",
    width: 100,
    "describe": ""
  },
  // {
  //   "keywordName": "F001D",
  //   "keywordAlias": "报告年度",
  //   "dataType": "date",
  //   "suggestName": "F001D",
  //   "name": "F001D",
  //   "suggestAlias": "报告年度",
  //   "alias": "报告年度",
  //   "describe": ""
  // },
  // {
  //   "keywordName": "F002V",
  //   "keywordAlias": "合并类型编码",
  //   "dataType": "varchar",
  //   "suggestName": "F002V",
  //   "name": "F002V",
  //   "suggestAlias": "合并类型编码",
  //   "alias": "合并类型编码",
  //   "describe": ""
  // },
  // {
  //   "keywordName": "F003V",
  //   "keywordAlias": "合并类型",
  //   "dataType": "varchar",
  //   "suggestName": "F003V",
  //   "name": "F003V",
  //   "suggestAlias": "合并类型",
  //   "alias": "合并类型",
  //   "describe": ""
  // },
  // {
  //   "keywordName": "F004V",
  //   "keywordAlias": "报表来源编码",
  //   "dataType": "varchar",
  //   "suggestName": "F004V",
  //   "name": "F004V",
  //   "suggestAlias": "报表来源编码",
  //   "alias": "报表来源编码",
  //   "describe": ""
  // },
  // {
  //   "keywordName": "F005V",
  //   "keywordAlias": "报表来源",
  //   "dataType": "varchar",
  //   "suggestName": "F005V",
  //   "name": "F005V",
  //   "suggestAlias": "报表来源",
  //   "alias": "报表来源",
  //   "describe": ""
  // },
  {
    "keywordName": "F035N",
    "keywordAlias": "一、营业总收入",
    "dataType": "decimal",
    "suggestName": "F035N",
    "name": "F035N",
    "suggestAlias": "一、营业总收入",
    "alias": "一、营业总收入",
    "describe": "单位：元"
  },
  {
    "keywordName": "F006N",
    "keywordAlias": "其中：营业收入",
    "dataType": "decimal",
    "suggestName": "F006N",
    "name": "F006N",
    "suggestAlias": "其中：营业收入",
    "alias": "其中：营业收入",
    "describe": "单位：元"
  },
  {
    "keywordName": "F033N",
    "keywordAlias": "利息收入",
    "dataType": "decimal",
    "suggestName": "F033N",
    "name": "F033N",
    "suggestAlias": "利息收入",
    "alias": "利息收入",
    "describe": "单位：元"
  },
  {
    "keywordName": "F034N",
    "keywordAlias": "已赚保费",
    "dataType": "decimal",
    "suggestName": "F034N",
    "name": "F034N",
    "suggestAlias": "已赚保费",
    "alias": "已赚保费",
    "describe": "单位：元"
  },
  {
    "keywordName": "F042N",
    "keywordAlias": "手续费及佣金收入",
    "dataType": "decimal",
    "suggestName": "F042N",
    "name": "F042N",
    "suggestAlias": "手续费及佣金收入",
    "alias": "手续费及佣金收入",
    "describe": "单位：元"
  },
  {
    "keywordName": "F036N",
    "keywordAlias": "二、营业总成本",
    "dataType": "decimal",
    "suggestName": "F036N",
    "name": "F036N",
    "suggestAlias": "二、营业总成本",
    "alias": "二、营业总成本",
    "describe": "单位：元"
  },
  {
    "keywordName": "F007N",
    "keywordAlias": "其中：营业成本",
    "dataType": "decimal",
    "suggestName": "F007N",
    "name": "F007N",
    "suggestAlias": "其中：营业成本",
    "alias": "其中：营业成本",
    "describe": "单位：元"
  },
  {
    "keywordName": "F043N",
    "keywordAlias": "利息支出",
    "dataType": "decimal",
    "suggestName": "F043N",
    "name": "F043N",
    "suggestAlias": "利息支出",
    "alias": "利息支出",
    "describe": "单位：元"
  },
  {
    "keywordName": "F044N",
    "keywordAlias": "手续费及佣金支出",
    "dataType": "decimal",
    "suggestName": "F044N",
    "name": "F044N",
    "suggestAlias": "手续费及佣金支出",
    "alias": "手续费及佣金支出",
    "describe": "单位：元"
  },
  {
    "keywordName": "F045N",
    "keywordAlias": "退保金",
    "dataType": "decimal",
    "suggestName": "F045N",
    "name": "F045N",
    "suggestAlias": "退保金",
    "alias": "退保金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F046N",
    "keywordAlias": "赔付支出净额",
    "dataType": "decimal",
    "suggestName": "F046N",
    "name": "F046N",
    "suggestAlias": "赔付支出净额",
    "alias": "赔付支出净额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F047N",
    "keywordAlias": "提取保险合同准备金净额",
    "dataType": "decimal",
    "suggestName": "F047N",
    "name": "F047N",
    "suggestAlias": "提取保险合同准备金净额",
    "alias": "提取保险合同准备金净额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F048N",
    "keywordAlias": "保单红利支出",
    "dataType": "decimal",
    "suggestName": "F048N",
    "name": "F048N",
    "suggestAlias": "保单红利支出",
    "alias": "保单红利支出",
    "describe": "单位：元"
  },
  {
    "keywordName": "F049N",
    "keywordAlias": "分保费用",
    "dataType": "decimal",
    "suggestName": "F049N",
    "name": "F049N",
    "suggestAlias": "分保费用",
    "alias": "分保费用",
    "describe": "单位：元"
  },
  {
    "keywordName": "F008N",
    "keywordAlias": "营业税金及附加",
    "dataType": "decimal",
    "suggestName": "F008N",
    "name": "F008N",
    "suggestAlias": "营业税金及附加",
    "alias": "营业税金及附加",
    "describe": "单位：元"
  },
  {
    "keywordName": "F009N",
    "keywordAlias": "销售费用",
    "dataType": "decimal",
    "suggestName": "F009N",
    "name": "F009N",
    "suggestAlias": "销售费用",
    "alias": "销售费用",
    "describe": "单位：元"
  },
  {
    "keywordName": "F010N",
    "keywordAlias": "管理费用",
    "dataType": "decimal",
    "suggestName": "F010N",
    "name": "F010N",
    "suggestAlias": "管理费用",
    "alias": "管理费用",
    "describe": "单位：元"
  },
  {
    "keywordName": "F011N",
    "keywordAlias": "勘探费用",
    "dataType": "decimal",
    "suggestName": "F011N",
    "name": "F011N",
    "suggestAlias": "勘探费用",
    "alias": "勘探费用",
    "describe": "单位：元"
  },
  {
    "keywordName": "F012N",
    "keywordAlias": "财务费用",
    "dataType": "decimal",
    "suggestName": "F012N",
    "name": "F012N",
    "suggestAlias": "财务费用",
    "alias": "财务费用",
    "describe": "单位：元"
  },
  {
    "keywordName": "ZD0121N",
    "keywordAlias": "财务费用：利息收入",
    "dataType": "decimal",
    "suggestName": "ZD0121N",
    "name": "ZD0121N",
    "suggestAlias": "财务费用：利息收入",
    "alias": "财务费用：利息收入",
    "describe": "单位：元"
  },
  {
    "keywordName": "ZD0122N",
    "keywordAlias": "财务费用：利息支出",
    "dataType": "decimal",
    "suggestName": "ZD0122N",
    "name": "ZD0122N",
    "suggestAlias": "财务费用：利息支出",
    "alias": "财务费用：利息支出",
    "describe": "单位：元"
  },
  {
    "keywordName": "F056N",
    "keywordAlias": "研发费用",
    "dataType": "DECIMAL(18,2)",
    "suggestName": "F056N",
    "name": "F056N",
    "suggestAlias": "研发费用",
    "alias": "研发费用",
    "describe": ""
  },
  {
    "keywordName": "F013N",
    "keywordAlias": "资产减值损失",
    "dataType": "decimal",
    "suggestName": "F013N",
    "name": "F013N",
    "suggestAlias": "资产减值损失",
    "alias": "资产减值损失",
    "describe": "单位：元"
  },
  {
    "keywordName": "F014N",
    "keywordAlias": "加：公允价值变动净收益",
    "dataType": "decimal",
    "suggestName": "F014N",
    "name": "F014N",
    "suggestAlias": "加：公允价值变动净收益",
    "alias": "加：公允价值变动净收益",
    "describe": "单位：元"
  },
  {
    "keywordName": "F015N",
    "keywordAlias": "投资收益",
    "dataType": "decimal",
    "suggestName": "F015N",
    "name": "F015N",
    "suggestAlias": "投资收益",
    "alias": "投资收益",
    "describe": "单位：元"
  },
  {
    "keywordName": "F016N",
    "keywordAlias": "其中：对联营企业和合营企业的投资收益",
    "dataType": "decimal",
    "suggestName": "F016N",
    "name": "F016N",
    "suggestAlias": "其中：对联营企业和合营企业的投资收益",
    "alias": "其中：对联营企业和合营企业的投资收益",
    "describe": "单位：元"
  },
  {
    "keywordName": "F037N",
    "keywordAlias": "汇兑收益",
    "dataType": "decimal",
    "suggestName": "F037N",
    "name": "F037N",
    "suggestAlias": "汇兑收益",
    "alias": "汇兑收益",
    "describe": "单位：元"
  },
  {
    "keywordName": "F051N",
    "keywordAlias": "其它收入",
    "dataType": "DECIMAL(18,2)",
    "suggestName": "F051N",
    "name": "F051N",
    "suggestAlias": "其它收入",
    "alias": "其它收入",
    "describe": ""
  },
  {
    "keywordName": "F057N",
    "keywordAlias": "信用减值损失",
    "dataType": "DECIMAL(18,2)",
    "suggestName": "F057N",
    "name": "F057N",
    "suggestAlias": "信用减值损失",
    "alias": "信用减值损失",
    "describe": ""
  },
  {
    "keywordName": "F058N",
    "keywordAlias": "净敞口套期收益",
    "dataType": "DECIMAL(18,2)",
    "suggestName": "F058N",
    "name": "F058N",
    "suggestAlias": "净敞口套期收益",
    "alias": "净敞口套期收益",
    "describe": ""
  },
  {
    "keywordName": "F059N",
    "keywordAlias": "资产处置收益",
    "dataType": "DECIMAL(18,2)",
    "suggestName": "F059N",
    "name": "F059N",
    "suggestAlias": "资产处置收益",
    "alias": "资产处置收益",
    "describe": ""
  },
  {
    "keywordName": "F017N",
    "keywordAlias": "影响营业利润的其他科目",
    "dataType": "decimal",
    "suggestName": "F017N",
    "name": "F017N",
    "suggestAlias": "影响营业利润的其他科目",
    "alias": "影响营业利润的其他科目",
    "describe": "单位：元"
  },
  {
    "keywordName": "F018N",
    "keywordAlias": "三、营业利润",
    "dataType": "decimal",
    "suggestName": "F018N",
    "name": "F018N",
    "suggestAlias": "三、营业利润",
    "alias": "三、营业利润",
    "describe": "单位：元"
  },
  {
    "keywordName": "F019N",
    "keywordAlias": "加：补贴收入",
    "dataType": "decimal",
    "suggestName": "F019N",
    "name": "F019N",
    "suggestAlias": "加：补贴收入",
    "alias": "加：补贴收入",
    "describe": "单位：元"
  },
  {
    "keywordName": "F020N",
    "keywordAlias": "营业外收入",
    "dataType": "decimal",
    "suggestName": "F020N",
    "name": "F020N",
    "suggestAlias": "营业外收入",
    "alias": "营业外收入",
    "describe": "单位：元"
  },
  {
    "keywordName": "F050N",
    "keywordAlias": "其中：非流动资产处置利得",
    "dataType": "decimal",
    "suggestName": "F050N",
    "name": "F050N",
    "suggestAlias": "其中：非流动资产处置利得",
    "alias": "其中：非流动资产处置利得",
    "describe": "单位：元"
  },
  {
    "keywordName": "F021N",
    "keywordAlias": "减：营业外支出",
    "dataType": "decimal",
    "suggestName": "F021N",
    "name": "F021N",
    "suggestAlias": "减：营业外支出",
    "alias": "减：营业外支出",
    "describe": "单位：元"
  },
  {
    "keywordName": "F022N",
    "keywordAlias": "其中：非流动资产处置损失",
    "dataType": "decimal",
    "suggestName": "F022N",
    "name": "F022N",
    "suggestAlias": "其中：非流动资产处置损失",
    "alias": "其中：非流动资产处置损失",
    "describe": "单位：元"
  },
  {
    "keywordName": "F023N",
    "keywordAlias": "加：影响利润总额的其他科目",
    "dataType": "decimal",
    "suggestName": "F023N",
    "name": "F023N",
    "suggestAlias": "加：影响利润总额的其他科目",
    "alias": "加：影响利润总额的其他科目",
    "describe": "单位：元"
  },
  {
    "keywordName": "F024N",
    "keywordAlias": "四、利润总额",
    "dataType": "decimal",
    "suggestName": "F024N",
    "name": "F024N",
    "suggestAlias": "四、利润总额",
    "alias": "四、利润总额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F025N",
    "keywordAlias": "减：所得税",
    "dataType": "decimal",
    "suggestName": "F025N",
    "name": "F025N",
    "suggestAlias": "减：所得税",
    "alias": "减：所得税",
    "describe": "单位：元"
  },
  {
    "keywordName": "F026N",
    "keywordAlias": "加：影响净利润的其他科目",
    "dataType": "decimal",
    "suggestName": "F026N",
    "name": "F026N",
    "suggestAlias": "加：影响净利润的其他科目",
    "alias": "加：影响净利润的其他科目",
    "describe": "单位：元"
  },
  {
    "keywordName": "F027N",
    "keywordAlias": "五、净利润",
    "dataType": "decimal",
    "suggestName": "F027N",
    "name": "F027N",
    "suggestAlias": "五、净利润",
    "alias": "净利润",
    "describe": "单位：元"
  },
  {
    "keywordName": "F060N",
    "keywordAlias": "持续经营净利润",
    "dataType": "DECIMAL(18,2)",
    "suggestName": "F060N",
    "name": "F060N",
    "suggestAlias": "持续经营净利润",
    "alias": "持续经营净利润",
    "describe": ""
  },
  {
    "keywordName": "F061N",
    "keywordAlias": "终止经营净利润",
    "dataType": "DECIMAL(18,2)",
    "suggestName": "F061N",
    "name": "F061N",
    "suggestAlias": "终止经营净利润",
    "alias": "终止经营净利润",
    "describe": ""
  },
  {
    "keywordName": "F028N",
    "keywordAlias": "归属于母公司所有者的净利润",
    "dataType": "decimal(18,2)",
    "suggestName": "F028N",
    "name": "F028N",
    "suggestAlias": "归属于母公司所有者的净利润",
    "alias": "归属于母公司所有者的净利润",
    "describe": "单位：元"
  },
  {
    "keywordName": "F029N",
    "keywordAlias": "少数股东损益",
    "dataType": "decimal(18,2)",
    "suggestName": "F029N",
    "name": "F029N",
    "suggestAlias": "少数股东损益",
    "alias": "少数股东损益",
    "describe": "单位：元"
  },
  {
    "keywordName": "F031N",
    "keywordAlias": "（一）基本每股收益",
    "dataType": "decimal(18,2)",
    "suggestName": "F031N",
    "name": "F031N",
    "suggestAlias": "（一）基本每股收益",
    "alias": "（一）基本每股收益",
    "describe": ""
  },
  {
    "keywordName": "F032N",
    "keywordAlias": "（二）稀释每股收益",
    "dataType": "decimal(18,2)",
    "suggestName": "F032N",
    "name": "F032N",
    "suggestAlias": "（二）稀释每股收益",
    "alias": "（二）稀释每股收益",
    "describe": ""
  },
  {
    "keywordName": "F038N",
    "keywordAlias": "七、其他综合收益",
    "dataType": "decimal(18,2)",
    "suggestName": "F038N",
    "name": "F038N",
    "suggestAlias": "七、其他综合收益",
    "alias": "七、其他综合收益",
    "describe": "单位：元"
  },
  {
    "keywordName": "F039N",
    "keywordAlias": "八、综合收益总额",
    "dataType": "decimal(18,2)",
    "suggestName": "F039N",
    "name": "F039N",
    "suggestAlias": "八、综合收益总额",
    "alias": "八、综合收益总额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F040N",
    "keywordAlias": "其中：归属于母公司",
    "dataType": "decimal(18,2)",
    "suggestName": "F040N",
    "name": "F040N",
    "suggestAlias": "其中：归属于母公司",
    "alias": "其中：归属于母公司",
    "describe": "单位：元"
  },
  {
    "keywordName": "F041N",
    "keywordAlias": "其中：归属于少数股东",
    "dataType": "decimal(18,2)",
    "suggestName": "F041N",
    "name": "F041N",
    "suggestAlias": "其中：归属于少数股东",
    "alias": "其中：归属于少数股东",
    "describe": "单位：元"
  },
  {
    "keywordName": "MEMO",
    "keywordAlias": "备注",
    "dataType": "VARCHAR",
    "suggestName": "MEMO",
    "name": "MEMO",
    "suggestAlias": "备注",
    "alias": "备注",
    "describe": ""
  },
  {
    "keywordName": "F062N",
    "keywordAlias": "其中：利息费用",
    "dataType": "decimal(18,2)",
    "suggestName": "F062N",
    "name": "F062N",
    "suggestAlias": "其中：利息费用",
    "alias": "其中：利息费用",
    "describe": "2019-03-15新增"
  },
  {
    "keywordName": "F063N",
    "keywordAlias": "其中：利息收入",
    "dataType": "decimal(18,2)",
    "suggestName": "F063N",
    "name": "F063N",
    "suggestAlias": "其中：利息收入",
    "alias": "其中：利息收入",
    "describe": "2019-03-15新增"
  },
  {
    "keywordName": "F064N",
    "keywordAlias": "信用减值损失（2019格式）",
    "dataType": "decimal(18,2)",
    "suggestName": "F064N",
    "name": "F064N",
    "suggestAlias": "信用减值损失（2019格式）",
    "alias": "信用减值损失（2019格式）",
    "describe": ""
  },
  {
    "keywordName": "F065N",
    "keywordAlias": "资产减值损失（2019格式）",
    "dataType": "decimal(18,2)",
    "suggestName": "F065N",
    "name": "F065N",
    "suggestAlias": "资产减值损失（2019格式）",
    "alias": "资产减值损失（2019格式）",
    "describe": ""
  }
]

export const pNameMap = {}
export const pKeyMap = {}
for(const item of keyArr) {
  pNameMap[item.alias] = item
  pKeyMap[item.keywordName] = item
}

export default keyArr
