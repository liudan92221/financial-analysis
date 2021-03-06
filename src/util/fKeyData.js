const keyArr = [
  // {
  //   "keywordName": "SECNAME",
  //   "keywordAlias": "证券简称",
  //   "dataType": "varchar",
  //   "suggestName": "SECNAME",
  //   "name": "SECNAME",
  //   "suggestAlias": "证券简称",
  //   "alias": "证券简称",
  //   width: 80,
  //   "describe": ""
  // },
  // {
  //   "keywordName": "SECCODE",
  //   "keywordAlias": "证券代码",
  //   "dataType": "varchar",
  //   "suggestName": "SECCODE",
  //   "name": "SECCODE",
  //   "suggestAlias": "证券代码",
  //   "alias": "证券代码",
  //   width: 80,
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
    "keywordName": "F006N",
    "keywordAlias": "货币资金",
    "dataType": "decimal",
    "suggestName": "F006N",
    "name": "F006N",
    "suggestAlias": "货币资金",
    "alias": "货币资金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F077N",
    "keywordAlias": "结算备付金",
    "dataType": "decimal",
    "suggestName": "F077N",
    "name": "F077N",
    "suggestAlias": "结算备付金",
    "alias": "结算备付金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F078N",
    "keywordAlias": "拆出资金",
    "dataType": "decimal",
    "suggestName": "F078N",
    "name": "F078N",
    "suggestAlias": "拆出资金",
    "alias": "拆出资金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F007N",
    "keywordAlias": "以公允价值计量且其变动计入当期损益的金融资产(20190322弃用)",
    "dataType": "decimal",
    "suggestName": "F007N",
    "name": "F007N",
    "suggestAlias": "以公允价值计量且其变动计入当期损益的金融资产(20190322弃用)",
    "alias": "以公允价值计量且其变动计入当期损益的金融资产(20190322弃用)",
    "describe": "单位：元"
  },
  {
    "keywordName": "F080N",
    "keywordAlias": "衍生金融资产",
    "dataType": "decimal",
    "suggestName": "F080N",
    "name": "F080N",
    "suggestAlias": "衍生金融资产",
    "alias": "衍生金融资产",
    "describe": "单位：元"
  },
  {
    "keywordName": "F008N",
    "keywordAlias": "应收票据",
    "dataType": "decimal",
    "suggestName": "F008N",
    "name": "F008N",
    "suggestAlias": "应收票据",
    "alias": "应收票据",
    "describe": "单位：元"
  },
  {
    "keywordName": "F009N",
    "keywordAlias": "应收账款",
    "dataType": "decimal",
    "suggestName": "F009N",
    "name": "F009N",
    "suggestAlias": "应收账款",
    "alias": "应收账款",
    "describe": "单位：元"
  },
  {
    "keywordName": "F010N",
    "keywordAlias": "预付款项",
    "dataType": "decimal",
    "suggestName": "F010N",
    "name": "F010N",
    "suggestAlias": "预付款项",
    "alias": "预付款项",
    "describe": "单位：元"
  },
  {
    "keywordName": "F081N",
    "keywordAlias": "应收保费",
    "dataType": "decimal",
    "suggestName": "F081N",
    "name": "F081N",
    "suggestAlias": "应收保费",
    "alias": "应收保费",
    "describe": "单位：元"
  },
  {
    "keywordName": "F082N",
    "keywordAlias": "应收分保账款",
    "dataType": "decimal",
    "suggestName": "F082N",
    "name": "F082N",
    "suggestAlias": "应收分保账款",
    "alias": "应收分保账款",
    "describe": "单位：元"
  },
  {
    "keywordName": "F083N",
    "keywordAlias": "应收分保合同准备金",
    "dataType": "decimal",
    "suggestName": "F083N",
    "name": "F083N",
    "suggestAlias": "应收分保合同准备金",
    "alias": "应收分保合同准备金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F013N",
    "keywordAlias": "其中：应收利息",
    "dataType": "decimal",
    "suggestName": "F013N",
    "name": "F013N",
    "suggestAlias": "其中：应收利息",
    "alias": "其中：应收利息",
    "describe": "单位：元"
  },
  {
    "keywordName": "F014N",
    "keywordAlias": "其中：应收股利",
    "dataType": "decimal",
    "suggestName": "F014N",
    "name": "F014N",
    "suggestAlias": "其中：应收股利",
    "alias": "其中：应收股利",
    "describe": "单位：元"
  },
  {
    "keywordName": "F011N",
    "keywordAlias": "其他应收款",
    "dataType": "decimal",
    "suggestName": "F011N",
    "name": "F011N",
    "suggestAlias": "其他应收款",
    "alias": "其他应收款",
    "describe": "单位：元"
  },
  {
    "keywordName": "F012N",
    "keywordAlias": "应收关联公司款",
    "dataType": "decimal",
    "suggestName": "F012N",
    "name": "F012N",
    "suggestAlias": "应收关联公司款",
    "alias": "应收关联公司款",
    "describe": "单位：元"
  },
  {
    "keywordName": "F084N",
    "keywordAlias": "买入返售金融资产",
    "dataType": "decimal",
    "suggestName": "F084N",
    "name": "F084N",
    "suggestAlias": "买入返售金融资产",
    "alias": "买入返售金融资产",
    "describe": "单位：元"
  },
  {
    "keywordName": "F015N",
    "keywordAlias": "存货",
    "dataType": "decimal",
    "suggestName": "F015N",
    "name": "F015N",
    "suggestAlias": "存货",
    "alias": "存货",
    "describe": "单位：元"
  },
  {
    "keywordName": "F016N",
    "keywordAlias": "其中：消耗性生物资产",
    "dataType": "decimal",
    "suggestName": "F016N",
    "name": "F016N",
    "suggestAlias": "其中：消耗性生物资产",
    "alias": "其中：消耗性生物资产",
    "describe": "单位：元"
  },
  {
    "keywordName": "F085N",
    "keywordAlias": "划分为持有待售的资产",
    "dataType": "decimal",
    "suggestName": "F085N",
    "name": "F085N",
    "suggestAlias": "划分为持有待售的资产",
    "alias": "划分为持有待售的资产",
    "describe": "单位：元"
  },
  {
    "keywordName": "F079N",
    "keywordAlias": "发放贷款及垫款-流动资产",
    "dataType": "decimal",
    "suggestName": "F079N",
    "name": "F079N",
    "suggestAlias": "发放贷款及垫款-流动资产",
    "alias": "发放贷款及垫款-流动资产",
    "describe": "单位：元"
  },
  {
    "keywordName": "F017N",
    "keywordAlias": "一年内到期的非流动资产",
    "dataType": "decimal",
    "suggestName": "F017N",
    "name": "F017N",
    "suggestAlias": "一年内到期的非流动资产",
    "alias": "一年内到期的非流动资产",
    "describe": "单位：元"
  },
  {
    "keywordName": "F117N",
    "keywordAlias": "交易性金融资产",
    "dataType": "DECIMAL(18,2)",
    "suggestName": "F117N",
    "name": "F117N",
    "suggestAlias": "交易性金融资产",
    "alias": "交易性金融资产",
    "describe": "单位：元"
  },
  {
    "keywordName": "F118N",
    "keywordAlias": "应收票据及应收账款",
    "dataType": "DECIMAL(18,2)",
    "suggestName": "F118N",
    "name": "F118N",
    "suggestAlias": "应收票据及应收账款",
    "alias": "应收票据及应收账款",
    "describe": "单位：元"
  },
  {
    "keywordName": "F119N",
    "keywordAlias": "合同资产",
    "dataType": "DECIMAL(18,2)",
    "suggestName": "F119N",
    "name": "F119N",
    "suggestAlias": "合同资产",
    "alias": "合同资产",
    "describe": "单位：元"
  },
  {
    "keywordName": "F018N",
    "keywordAlias": "其他流动资产",
    "dataType": "decimal",
    "suggestName": "F018N",
    "name": "F018N",
    "suggestAlias": "其他流动资产",
    "alias": "其他流动资产",
    "describe": "单位：元"
  },
  {
    "keywordName": "F019N",
    "keywordAlias": "流动资产合计",
    "dataType": "decimal",
    "suggestName": "F019N",
    "name": "F019N",
    "suggestAlias": "流动资产合计",
    "alias": "流动资产合计",
    "describe": "单位：元"
  },
  {
    "keywordName": "F086N",
    "keywordAlias": "发放贷款及垫款-非流动资产",
    "dataType": "decimal",
    "suggestName": "F086N",
    "name": "F086N",
    "suggestAlias": "发放贷款及垫款-非流动资产",
    "alias": "发放贷款及垫款-非流动资产",
    "describe": "单位：元"
  },
  {
    "keywordName": "F020N",
    "keywordAlias": "可供出售金融资产",
    "dataType": "decimal",
    "suggestName": "F020N",
    "name": "F020N",
    "suggestAlias": "可供出售金融资产",
    "alias": "可供出售金融资产",
    "describe": "单位：元"
  },
  {
    "keywordName": "F021N",
    "keywordAlias": "持有至到期投资",
    "dataType": "decimal",
    "suggestName": "F021N",
    "name": "F021N",
    "suggestAlias": "持有至到期投资",
    "alias": "持有至到期投资",
    "describe": "单位：元"
  },
  {
    "keywordName": "F022N",
    "keywordAlias": "长期应收款",
    "dataType": "decimal",
    "suggestName": "F022N",
    "name": "F022N",
    "suggestAlias": "长期应收款",
    "alias": "长期应收款",
    "describe": "单位：元"
  },
  {
    "keywordName": "F023N",
    "keywordAlias": "长期股权投资",
    "dataType": "decimal",
    "suggestName": "F023N",
    "name": "F023N",
    "suggestAlias": "长期股权投资",
    "alias": "长期股权投资",
    "describe": "单位：元"
  },
  {
    "keywordName": "F024N",
    "keywordAlias": "投资性房地产",
    "dataType": "decimal",
    "suggestName": "F024N",
    "name": "F024N",
    "suggestAlias": "投资性房地产",
    "alias": "投资性房地产",
    "describe": "单位：元"
  },
  {
    "keywordName": "F025N",
    "keywordAlias": "固定资产",
    "dataType": "decimal",
    "suggestName": "F025N",
    "name": "F025N",
    "suggestAlias": "固定资产",
    "alias": "固定资产",
    "describe": "单位：元"
  },
  {
    "keywordName": "F026N",
    "keywordAlias": "在建工程",
    "dataType": "decimal",
    "suggestName": "F026N",
    "name": "F026N",
    "suggestAlias": "在建工程",
    "alias": "在建工程",
    "describe": "单位：元"
  },
  {
    "keywordName": "F027N",
    "keywordAlias": "工程物资",
    "dataType": "decimal",
    "suggestName": "F027N",
    "name": "F027N",
    "suggestAlias": "工程物资",
    "alias": "工程物资",
    "describe": "单位：元"
  },
  {
    "keywordName": "F028N",
    "keywordAlias": "固定资产清理",
    "dataType": "decimal",
    "suggestName": "F028N",
    "name": "F028N",
    "suggestAlias": "固定资产清理",
    "alias": "固定资产清理",
    "describe": "单位：元"
  },
  {
    "keywordName": "F029N",
    "keywordAlias": "生产性生物资产",
    "dataType": "decimal",
    "suggestName": "F029N",
    "name": "F029N",
    "suggestAlias": "生产性生物资产",
    "alias": "生产性生物资产",
    "describe": "单位：元"
  },
  {
    "keywordName": "F030N",
    "keywordAlias": "油气资产",
    "dataType": "decimal",
    "suggestName": "F030N",
    "name": "F030N",
    "suggestAlias": "油气资产",
    "alias": "油气资产",
    "describe": "单位：元"
  },
  {
    "keywordName": "F031N",
    "keywordAlias": "无形资产",
    "dataType": "decimal",
    "suggestName": "F031N",
    "name": "F031N",
    "suggestAlias": "无形资产",
    "alias": "无形资产",
    "describe": "单位：元"
  },
  {
    "keywordName": "F032N",
    "keywordAlias": "开发支出",
    "dataType": "decimal",
    "suggestName": "F032N",
    "name": "F032N",
    "suggestAlias": "开发支出",
    "alias": "开发支出",
    "describe": "单位：元"
  },
  {
    "keywordName": "F033N",
    "keywordAlias": "商誉",
    "dataType": "decimal",
    "suggestName": "F033N",
    "name": "F033N",
    "suggestAlias": "商誉",
    "alias": "商誉",
    "describe": "单位：元"
  },
  {
    "keywordName": "F034N",
    "keywordAlias": "长期待摊费用",
    "dataType": "decimal",
    "suggestName": "F034N",
    "name": "F034N",
    "suggestAlias": "长期待摊费用",
    "alias": "长期待摊费用",
    "describe": "单位：元"
  },
  {
    "keywordName": "F035N",
    "keywordAlias": "递延所得税资产",
    "dataType": "decimal",
    "suggestName": "F035N",
    "name": "F035N",
    "suggestAlias": "递延所得税资产",
    "alias": "递延所得税资产",
    "describe": "单位：元"
  },
  {
    "keywordName": "F116N",
    "keywordAlias": "债权投资",
    "dataType": "DECIMAL(18,2)",
    "suggestName": "F116N",
    "name": "F116N",
    "suggestAlias": "债权投资",
    "alias": "债权投资",
    "describe": "单位：元"
  },
  {
    "keywordName": "F110N",
    "keywordAlias": "其他债权投资",
    "dataType": "DECIMAL(18,2)",
    "suggestName": "F110N",
    "name": "F110N",
    "suggestAlias": "其他债权投资",
    "alias": "其他债权投资",
    "describe": "单位：元"
  },
  {
    "keywordName": "F111N",
    "keywordAlias": "其他权益工具投资",
    "dataType": "DECIMAL(18,2)",
    "suggestName": "F111N",
    "name": "F111N",
    "suggestAlias": "其他权益工具投资",
    "alias": "其他权益工具投资",
    "describe": "单位：元"
  },
  {
    "keywordName": "F112N",
    "keywordAlias": "其他非流动金融资产",
    "dataType": "DECIMAL(18,2)",
    "suggestName": "F112N",
    "name": "F112N",
    "suggestAlias": "其他非流动金融资产",
    "alias": "其他非流动金融资产",
    "describe": "单位：元"
  },
  {
    "keywordName": "F036N",
    "keywordAlias": "其他非流动资产",
    "dataType": "decimal",
    "suggestName": "F036N",
    "name": "F036N",
    "suggestAlias": "其他非流动资产",
    "alias": "其他非流动资产",
    "describe": "单位：元"
  },
  {
    "keywordName": "F037N",
    "keywordAlias": "非流动资产合计",
    "dataType": "decimal",
    "suggestName": "F037N",
    "name": "F037N",
    "suggestAlias": "非流动资产合计",
    "alias": "非流动资产合计",
    "describe": "单位：元"
  },
  {
    "keywordName": "F038N",
    "keywordAlias": "资产总计",
    "dataType": "decimal",
    "suggestName": "F038N",
    "name": "F038N",
    "suggestAlias": "资产总计",
    "alias": "资产总计",
    "describe": "单位：元"
  },
  {
    "keywordName": "ZD038N",
    "keywordAlias": "上年资产总计",
    "dataType": "decimal",
    "suggestName": "ZD038N",
    "name": "ZD038N",
    "suggestAlias": "上年资产总计",
    "alias": "上年资产总计",
    "describe": "单位：元"
  },
  {
    "keywordName": "F039N",
    "keywordAlias": "短期借款",
    "dataType": "decimal",
    "suggestName": "F039N",
    "name": "F039N",
    "suggestAlias": "短期借款",
    "alias": "短期借款",
    "describe": "单位：元"
  },
  {
    "keywordName": "F087N",
    "keywordAlias": "向中央银行借款",
    "dataType": "decimal",
    "suggestName": "F087N",
    "name": "F087N",
    "suggestAlias": "向中央银行借款",
    "alias": "向中央银行借款",
    "describe": "单位：元"
  },
  {
    "keywordName": "F088N",
    "keywordAlias": "吸收存款及同业存放",
    "dataType": "decimal",
    "suggestName": "F088N",
    "name": "F088N",
    "suggestAlias": "吸收存款及同业存放",
    "alias": "吸收存款及同业存放",
    "describe": "单位：元"
  },
  {
    "keywordName": "F089N",
    "keywordAlias": "拆入资金",
    "dataType": "decimal",
    "suggestName": "F089N",
    "name": "F089N",
    "suggestAlias": "拆入资金",
    "alias": "拆入资金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F040N",
    "keywordAlias": "以公允价值计量且其变动计入当期损益的金融负债（20190322弃用）",
    "dataType": "decimal",
    "suggestName": "F040N",
    "name": "F040N",
    "suggestAlias": "以公允价值计量且其变动计入当期损益的金融负债（20190322弃用）",
    "alias": "以公允价值计量且其变动计入当期损益的金融负债（20190322弃用）",
    "describe": "单位：元"
  },
  {
    "keywordName": "F090N",
    "keywordAlias": "衍生金融负债",
    "dataType": "decimal",
    "suggestName": "F090N",
    "name": "F090N",
    "suggestAlias": "衍生金融负债",
    "alias": "衍生金融负债",
    "describe": "单位：元"
  },
  {
    "keywordName": "F041N",
    "keywordAlias": "应付票据",
    "dataType": "decimal",
    "suggestName": "F041N",
    "name": "F041N",
    "suggestAlias": "应付票据",
    "alias": "应付票据",
    "describe": "单位：元"
  },
  {
    "keywordName": "F042N",
    "keywordAlias": "应付账款",
    "dataType": "decimal",
    "suggestName": "F042N",
    "name": "F042N",
    "suggestAlias": "应付账款",
    "alias": "应付账款",
    "describe": "单位：元"
  },
  {
    "keywordName": "F043N",
    "keywordAlias": "预收款项",
    "dataType": "decimal",
    "suggestName": "F043N",
    "name": "F043N",
    "suggestAlias": "预收款项",
    "alias": "预收款项",
    "describe": "单位：元"
  },
  {
    "keywordName": "F091N",
    "keywordAlias": "卖出回购金融资产款",
    "dataType": "decimal",
    "suggestName": "F091N",
    "name": "F091N",
    "suggestAlias": "卖出回购金融资产款",
    "alias": "卖出回购金融资产款",
    "describe": "单位：元"
  },
  {
    "keywordName": "F092N",
    "keywordAlias": "应付手续费及佣金",
    "dataType": "decimal",
    "suggestName": "F092N",
    "name": "F092N",
    "suggestAlias": "应付手续费及佣金",
    "alias": "应付手续费及佣金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F044N",
    "keywordAlias": "应付职工薪酬",
    "dataType": "decimal",
    "suggestName": "F044N",
    "name": "F044N",
    "suggestAlias": "应付职工薪酬",
    "alias": "应付职工薪酬",
    "describe": "单位：元"
  },
  {
    "keywordName": "F045N",
    "keywordAlias": "应交税费",
    "dataType": "decimal",
    "suggestName": "F045N",
    "name": "F045N",
    "suggestAlias": "应交税费",
    "alias": "应交税费",
    "describe": "单位：元"
  },
  {
    "keywordName": "F046N",
    "keywordAlias": "其中：应付利息",
    "dataType": "decimal",
    "suggestName": "F046N",
    "name": "F046N",
    "suggestAlias": "其中：应付利息",
    "alias": "其中：应付利息",
    "describe": "单位：元"
  },
  {
    "keywordName": "F047N",
    "keywordAlias": "其中：应付股利",
    "dataType": "decimal",
    "suggestName": "F047N",
    "name": "F047N",
    "suggestAlias": "其中：应付股利",
    "alias": "其中：应付股利",
    "describe": "单位：元"
  },
  {
    "keywordName": "F048N",
    "keywordAlias": "其他应付款",
    "dataType": "decimal",
    "suggestName": "F048N",
    "name": "F048N",
    "suggestAlias": "其他应付款",
    "alias": "其他应付款",
    "describe": "单位：元"
  },
  {
    "keywordName": "F049N",
    "keywordAlias": "应付关联公司款",
    "dataType": "decimal",
    "suggestName": "F049N",
    "name": "F049N",
    "suggestAlias": "应付关联公司款",
    "alias": "应付关联公司款",
    "describe": "单位：元"
  },
  {
    "keywordName": "F093N",
    "keywordAlias": "应付分保账款",
    "dataType": "decimal",
    "suggestName": "F093N",
    "name": "F093N",
    "suggestAlias": "应付分保账款",
    "alias": "应付分保账款",
    "describe": "单位：元"
  },
  {
    "keywordName": "F094N",
    "keywordAlias": "保险合同准备金",
    "dataType": "decimal",
    "suggestName": "F094N",
    "name": "F094N",
    "suggestAlias": "保险合同准备金",
    "alias": "保险合同准备金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F095N",
    "keywordAlias": "代理买卖证券款",
    "dataType": "decimal",
    "suggestName": "F095N",
    "name": "F095N",
    "suggestAlias": "代理买卖证券款",
    "alias": "代理买卖证券款",
    "describe": "单位：元"
  },
  {
    "keywordName": "F096N",
    "keywordAlias": "代理承销证券款",
    "dataType": "decimal",
    "suggestName": "F096N",
    "name": "F096N",
    "suggestAlias": "代理承销证券款",
    "alias": "代理承销证券款",
    "describe": "单位：元"
  },
  {
    "keywordName": "F097N",
    "keywordAlias": "划分为持有待售的负债",
    "dataType": "decimal",
    "suggestName": "F097N",
    "name": "F097N",
    "suggestAlias": "划分为持有待售的负债",
    "alias": "划分为持有待售的负债",
    "describe": "单位：元"
  },
  {
    "keywordName": "F050N",
    "keywordAlias": "一年内到期的非流动负债",
    "dataType": "decimal",
    "suggestName": "F050N",
    "name": "F050N",
    "suggestAlias": "一年内到期的非流动负债",
    "alias": "一年内到期的非流动负债",
    "describe": "单位：元"
  },
  {
    "keywordName": "F098N",
    "keywordAlias": "预计负债-流动负债",
    "dataType": "decimal",
    "suggestName": "F098N",
    "name": "F098N",
    "suggestAlias": "预计负债-流动负债",
    "alias": "预计负债-流动负债",
    "describe": "单位：元"
  },
  {
    "keywordName": "F099N",
    "keywordAlias": "递延收益-流动负债",
    "dataType": "decimal",
    "suggestName": "F099N",
    "name": "F099N",
    "suggestAlias": "递延收益-流动负债",
    "alias": "递延收益-流动负债",
    "describe": "单位：元"
  },
  {
    "keywordName": "F113N",
    "keywordAlias": "交易性金融负债",
    "dataType": "DECIMAL(18,2)",
    "suggestName": "F113N",
    "name": "F113N",
    "suggestAlias": "交易性金融负债",
    "alias": "交易性金融负债",
    "describe": "单位：元"
  },
  {
    "keywordName": "F114N",
    "keywordAlias": "应付票据及应付账款",
    "dataType": "DECIMAL(18,2)",
    "suggestName": "F114N",
    "name": "F114N",
    "suggestAlias": "应付票据及应付账款",
    "alias": "应付票据及应付账款",
    "describe": "单位：元"
  },
  {
    "keywordName": "F115N",
    "keywordAlias": "合同负债",
    "dataType": "DECIMAL(18,2)",
    "suggestName": "F115N",
    "name": "F115N",
    "suggestAlias": "合同负债",
    "alias": "合同负债",
    "describe": "单位：元"
  },
  {
    "keywordName": "F051N",
    "keywordAlias": "其他流动负债",
    "dataType": "decimal",
    "suggestName": "F051N",
    "name": "F051N",
    "suggestAlias": "其他流动负债",
    "alias": "其他流动负债",
    "describe": "单位：元"
  },
  {
    "keywordName": "F052N",
    "keywordAlias": "流动负债合计",
    "dataType": "decimal",
    "suggestName": "F052N",
    "name": "F052N",
    "suggestAlias": "流动负债合计",
    "alias": "流动负债合计",
    "describe": "单位：元"
  },
  {
    "keywordName": "F053N",
    "keywordAlias": "长期借款",
    "dataType": "decimal",
    "suggestName": "F053N",
    "name": "F053N",
    "suggestAlias": "长期借款",
    "alias": "长期借款",
    "describe": "单位：元"
  },
  {
    "keywordName": "F054N",
    "keywordAlias": "应付债券",
    "dataType": "decimal",
    "suggestName": "F054N",
    "name": "F054N",
    "suggestAlias": "应付债券",
    "alias": "应付债券",
    "describe": "单位：元"
  },
  {
    "keywordName": "F100N",
    "keywordAlias": "其中：优先股-非流动负债",
    "dataType": "decimal",
    "suggestName": "F100N",
    "name": "F100N",
    "suggestAlias": "其中：优先股-非流动负债",
    "alias": "其中：优先股-非流动负债",
    "describe": "单位：元"
  },
  {
    "keywordName": "F101N",
    "keywordAlias": "永续债-非流动负债",
    "dataType": "decimal",
    "suggestName": "F101N",
    "name": "F101N",
    "suggestAlias": "永续债-非流动负债",
    "alias": "永续债-非流动负债",
    "describe": "单位：元"
  },
  {
    "keywordName": "F055N",
    "keywordAlias": "长期应付款",
    "dataType": "decimal",
    "suggestName": "F055N",
    "name": "F055N",
    "suggestAlias": "长期应付款",
    "alias": "长期应付款",
    "describe": "单位：元"
  },
  {
    "keywordName": "F102N",
    "keywordAlias": "长期应付职工薪酬",
    "dataType": "decimal",
    "suggestName": "F102N",
    "name": "F102N",
    "suggestAlias": "长期应付职工薪酬",
    "alias": "长期应付职工薪酬",
    "describe": "单位：元"
  },
  {
    "keywordName": "F056N",
    "keywordAlias": "专项应付款",
    "dataType": "decimal",
    "suggestName": "F056N",
    "name": "F056N",
    "suggestAlias": "专项应付款",
    "alias": "专项应付款",
    "describe": "单位：元"
  },
  {
    "keywordName": "F057N",
    "keywordAlias": "预计负债",
    "dataType": "decimal",
    "suggestName": "F057N",
    "name": "F057N",
    "suggestAlias": "预计负债",
    "alias": "预计负债",
    "describe": "单位：元"
  },
  {
    "keywordName": "F075N",
    "keywordAlias": "递延收益-非流动负债",
    "dataType": "decimal",
    "suggestName": "F075N",
    "name": "F075N",
    "suggestAlias": "递延收益-非流动负债",
    "alias": "递延收益-非流动负债",
    "describe": "单位：元"
  },
  {
    "keywordName": "F058N",
    "keywordAlias": "递延所得税负债",
    "dataType": "decimal",
    "suggestName": "F058N",
    "name": "F058N",
    "suggestAlias": "递延所得税负债",
    "alias": "递延所得税负债",
    "describe": "单位：元"
  },
  {
    "keywordName": "F059N",
    "keywordAlias": "其他非流动负债",
    "dataType": "decimal",
    "suggestName": "F059N",
    "name": "F059N",
    "suggestAlias": "其他非流动负债",
    "alias": "其他非流动负债",
    "describe": "单位：元"
  },
  {
    "keywordName": "F060N",
    "keywordAlias": "非流动负债合计",
    "dataType": "decimal",
    "suggestName": "F060N",
    "name": "F060N",
    "suggestAlias": "非流动负债合计",
    "alias": "非流动负债合计",
    "describe": "单位：元"
  },
  {
    "keywordName": "F061N",
    "keywordAlias": "负债合计",
    "dataType": "decimal",
    "suggestName": "F061N",
    "name": "F061N",
    "suggestAlias": "负债合计",
    "alias": "负债合计",
    "describe": "单位：元"
  },
  {
    "keywordName": "F062N",
    "keywordAlias": "实收资本（或股本）",
    "dataType": "decimal",
    "suggestName": "F062N",
    "name": "F062N",
    "suggestAlias": "实收资本（或股本）",
    "alias": "实收资本（或股本）",
    "describe": "单位：元"
  },
  {
    "keywordName": "F103N",
    "keywordAlias": "其他权益工具",
    "dataType": "decimal",
    "suggestName": "F103N",
    "name": "F103N",
    "suggestAlias": "其他权益工具",
    "alias": "其他权益工具",
    "describe": "单位：元"
  },
  {
    "keywordName": "F104N",
    "keywordAlias": "其中：优先股-所有者权益",
    "dataType": "decimal",
    "suggestName": "F104N",
    "name": "F104N",
    "suggestAlias": "其中：优先股-所有者权益",
    "alias": "其中：优先股-所有者权益",
    "describe": "单位：元"
  },
  {
    "keywordName": "F105N",
    "keywordAlias": "永续债-所有者权益",
    "dataType": "decimal",
    "suggestName": "F105N",
    "name": "F105N",
    "suggestAlias": "永续债-所有者权益",
    "alias": "永续债-所有者权益",
    "describe": "单位：元"
  },
  {
    "keywordName": "F063N",
    "keywordAlias": "资本公积",
    "dataType": "decimal",
    "suggestName": "F063N",
    "name": "F063N",
    "suggestAlias": "资本公积",
    "alias": "资本公积",
    "describe": "单位：元"
  },
  {
    "keywordName": "F066N",
    "keywordAlias": "减：库存股",
    "dataType": "decimal",
    "suggestName": "F066N",
    "name": "F066N",
    "suggestAlias": "减：库存股",
    "alias": "减：库存股",
    "describe": "单位：元"
  },
  {
    "keywordName": "F074N",
    "keywordAlias": "其他综合收益",
    "dataType": "decimal",
    "suggestName": "F074N",
    "name": "F074N",
    "suggestAlias": "其他综合收益",
    "alias": "其他综合收益",
    "describe": "单位：元"
  },
  {
    "keywordName": "F072N",
    "keywordAlias": "专项储备",
    "dataType": "decimal",
    "suggestName": "F072N",
    "name": "F072N",
    "suggestAlias": "专项储备",
    "alias": "专项储备",
    "describe": "单位：元"
  },
  {
    "keywordName": "F064N",
    "keywordAlias": "盈余公积",
    "dataType": "decimal",
    "suggestName": "F064N",
    "name": "F064N",
    "suggestAlias": "盈余公积",
    "alias": "盈余公积",
    "describe": "单位：元"
  },
  {
    "keywordName": "F076N",
    "keywordAlias": "一般风险准备",
    "dataType": "decimal",
    "suggestName": "F076N",
    "name": "F076N",
    "suggestAlias": "一般风险准备",
    "alias": "一般风险准备",
    "describe": "单位：元"
  },
  {
    "keywordName": "F065N",
    "keywordAlias": "未分配利润",
    "dataType": "decimal",
    "suggestName": "F065N",
    "name": "F065N",
    "suggestAlias": "未分配利润",
    "alias": "未分配利润",
    "describe": "单位：元"
  },
  {
    "keywordName": "F068N",
    "keywordAlias": "外币报表折算价差",
    "dataType": "decimal",
    "suggestName": "F068N",
    "name": "F068N",
    "suggestAlias": "外币报表折算价差",
    "alias": "外币报表折算价差",
    "describe": "单位：元"
  },
  {
    "keywordName": "F073N",
    "keywordAlias": "归属于母公司所有者权益",
    "dataType": "decimal",
    "suggestName": "F073N",
    "name": "F073N",
    "suggestAlias": "归属于母公司所有者权益",
    "alias": "归属于母公司所有者权益",
    "describe": "单位：元"
  },
  {
    "keywordName": "F067N",
    "keywordAlias": "少数股东权益",
    "dataType": "decimal",
    "suggestName": "F067N",
    "name": "F067N",
    "suggestAlias": "少数股东权益",
    "alias": "少数股东权益",
    "describe": "单位：元"
  },
  {
    "keywordName": "F069N",
    "keywordAlias": "非正常经营项目收益调整",
    "dataType": "decimal",
    "suggestName": "F069N",
    "name": "F069N",
    "suggestAlias": "非正常经营项目收益调整",
    "alias": "非正常经营项目收益调整",
    "describe": "单位：元"
  },
  {
    "keywordName": "F070N",
    "keywordAlias": "所有者权益（或股东权益）合计",
    "dataType": "decimal",
    "suggestName": "F070N",
    "name": "F070N",
    "suggestAlias": "所有者权益（或股东权益）合计",
    "alias": "所有者权益（或股东权益）合计",
    "describe": "单位：元"
  },
  {
    "keywordName": "F071N",
    "keywordAlias": "负债和所有者（或股东权益）合计",
    "dataType": "decimal",
    "suggestName": "F071N",
    "name": "F071N",
    "suggestAlias": "负债和所有者（或股东权益）合计",
    "alias": "负债和所有者（或股东权益）合计",
    "describe": "单位：元"
  },
  {
    "keywordName": "MEMO",
    "keywordAlias": "备注",
    "dataType": "varchar",
    "suggestName": "MEMO",
    "name": "MEMO",
    "suggestAlias": "备注",
    "alias": "备注",
    "describe": ""
  },
  {
    "keywordName": "F120N",
    "keywordAlias": "应收款项融资",
    "dataType": "decimal(18,2)",
    "suggestName": "F120N",
    "name": "F120N",
    "suggestAlias": "应收款项融资",
    "alias": "应收款项融资",
    "describe": "2019年8月新增"
  },
  {
    "keywordName": "F121N",
    "keywordAlias": "使用权资产",
    "dataType": "decimal(18,2)",
    "suggestName": "F121N",
    "name": "F121N",
    "suggestAlias": "使用权资产",
    "alias": "使用权资产",
    "describe": "2019年8月新增"
  },
  {
    "keywordName": "F122N",
    "keywordAlias": "租赁负债",
    "dataType": "decimal(18,2)",
    "suggestName": "F122N",
    "name": "F122N",
    "suggestAlias": "租赁负债",
    "alias": "租赁负债",
    "describe": "2019年8月新增"
  }
]

export const fNameMap = {}
export const fKeyMap = {}
for(const item of keyArr) {
  fNameMap[item.alias] = item
  fKeyMap[item.keywordName] = item
}

export default keyArr
