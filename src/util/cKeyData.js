const keyArr = [
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
    "keywordName": "F006N",
    "keywordAlias": "销售商品、提供劳务收到的现金",
    "dataType": "decimal",
    "suggestName": "F006N",
    "name": "F006N",
    "suggestAlias": "销售商品、提供劳务收到的现金",
    "alias": "销售商品、提供劳务收到的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F072N",
    "keywordAlias": "客户存款和同业存放款项净增加额",
    "dataType": "decimal",
    "suggestName": "F072N",
    "name": "F072N",
    "suggestAlias": "客户存款和同业存放款项净增加额",
    "alias": "客户存款和同业存放款项净增加额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F073N",
    "keywordAlias": "向中央银行借款净增加额",
    "dataType": "decimal",
    "suggestName": "F073N",
    "name": "F073N",
    "suggestAlias": "向中央银行借款净增加额",
    "alias": "向中央银行借款净增加额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F074N",
    "keywordAlias": "向其他金融机构拆入资金净增加额",
    "dataType": "decimal",
    "suggestName": "F074N",
    "name": "F074N",
    "suggestAlias": "向其他金融机构拆入资金净增加额",
    "alias": "向其他金融机构拆入资金净增加额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F077N",
    "keywordAlias": "收到原保险合同保费取得的现金",
    "dataType": "decimal",
    "suggestName": "F077N",
    "name": "F077N",
    "suggestAlias": "收到原保险合同保费取得的现金",
    "alias": "收到原保险合同保费取得的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F078N",
    "keywordAlias": "收到再保险业务现金净额",
    "dataType": "decimal",
    "suggestName": "F078N",
    "name": "F078N",
    "suggestAlias": "收到再保险业务现金净额",
    "alias": "收到再保险业务现金净额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F079N",
    "keywordAlias": "保户储金及投资款净增加额",
    "dataType": "decimal",
    "suggestName": "F079N",
    "name": "F079N",
    "suggestAlias": "保户储金及投资款净增加额",
    "alias": "保户储金及投资款净增加额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F080N",
    "keywordAlias": "处置以公允价值计量且其变动计入当期损益的金融资产净增加额",
    "dataType": "decimal",
    "suggestName": "F080N",
    "name": "F080N",
    "suggestAlias": "处置以公允价值计量且其变动计入当期损益的金融资产净增加额",
    "alias": "处置以公允价值计量且其变动计入当期损益的金融资产净增加额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F081N",
    "keywordAlias": "收取利息、手续费及佣金的现金",
    "dataType": "decimal",
    "suggestName": "F081N",
    "name": "F081N",
    "suggestAlias": "收取利息、手续费及佣金的现金",
    "alias": "收取利息、手续费及佣金的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F082N",
    "keywordAlias": "拆入资金净增加额",
    "dataType": "decimal",
    "suggestName": "F082N",
    "name": "F082N",
    "suggestAlias": "拆入资金净增加额",
    "alias": "拆入资金净增加额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F083N",
    "keywordAlias": "回购业务资金净增加额",
    "dataType": "decimal",
    "suggestName": "F083N",
    "name": "F083N",
    "suggestAlias": "回购业务资金净增加额",
    "alias": "回购业务资金净增加额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F007N",
    "keywordAlias": "收到的税费返还",
    "dataType": "decimal",
    "suggestName": "F007N",
    "name": "F007N",
    "suggestAlias": "收到的税费返还",
    "alias": "收到的税费返还",
    "describe": "单位：元"
  },
  {
    "keywordName": "F008N",
    "keywordAlias": "收到其他与经营活动有关的现金",
    "dataType": "decimal",
    "suggestName": "F008N",
    "name": "F008N",
    "suggestAlias": "收到其他与经营活动有关的现金",
    "alias": "收到其他与经营活动有关的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F009N",
    "keywordAlias": "经营活动现金流入小计",
    "dataType": "decimal",
    "suggestName": "F009N",
    "name": "F009N",
    "suggestAlias": "经营活动现金流入小计",
    "alias": "经营活动现金流入小计",
    "describe": "单位：元"
  },
  {
    "keywordName": "F010N",
    "keywordAlias": "购买商品、接受劳务支付的现金",
    "dataType": "decimal",
    "suggestName": "F010N",
    "name": "F010N",
    "suggestAlias": "购买商品、接受劳务支付的现金",
    "alias": "购买商品、接受劳务支付的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F084N",
    "keywordAlias": "客户贷款及垫款净增加额",
    "dataType": "decimal",
    "suggestName": "F084N",
    "name": "F084N",
    "suggestAlias": "客户贷款及垫款净增加额",
    "alias": "客户贷款及垫款净增加额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F085N",
    "keywordAlias": "存放中央银行和同业款项净增加额",
    "dataType": "decimal",
    "suggestName": "F085N",
    "name": "F085N",
    "suggestAlias": "存放中央银行和同业款项净增加额",
    "alias": "存放中央银行和同业款项净增加额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F086N",
    "keywordAlias": "支付原保险合同赔付款项的现金",
    "dataType": "decimal",
    "suggestName": "F086N",
    "name": "F086N",
    "suggestAlias": "支付原保险合同赔付款项的现金",
    "alias": "支付原保险合同赔付款项的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F087N",
    "keywordAlias": "支付利息、手续费及佣金的现金",
    "dataType": "decimal",
    "suggestName": "F087N",
    "name": "F087N",
    "suggestAlias": "支付利息、手续费及佣金的现金",
    "alias": "支付利息、手续费及佣金的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F088N",
    "keywordAlias": "支付保单红利的现金",
    "dataType": "decimal",
    "suggestName": "F088N",
    "name": "F088N",
    "suggestAlias": "支付保单红利的现金",
    "alias": "支付保单红利的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F011N",
    "keywordAlias": "支付给职工以及为职工支付的现金",
    "dataType": "decimal",
    "suggestName": "F011N",
    "name": "F011N",
    "suggestAlias": "支付给职工以及为职工支付的现金",
    "alias": "支付给职工以及为职工支付的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F012N",
    "keywordAlias": "支付的各项税费",
    "dataType": "decimal",
    "suggestName": "F012N",
    "name": "F012N",
    "suggestAlias": "支付的各项税费",
    "alias": "支付的各项税费",
    "describe": "单位：元"
  },
  {
    "keywordName": "F013N",
    "keywordAlias": "支付其他与经营活动有关的现金",
    "dataType": "decimal",
    "suggestName": "F013N",
    "name": "F013N",
    "suggestAlias": "支付其他与经营活动有关的现金",
    "alias": "支付其他与经营活动有关的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F014N",
    "keywordAlias": "经营活动现金流出小计",
    "dataType": "decimal",
    "suggestName": "F014N",
    "name": "F014N",
    "suggestAlias": "经营活动现金流出小计",
    "alias": "经营活动现金流出小计",
    "describe": "单位：元"
  },
  {
    "keywordName": "F015N",
    "keywordAlias": "经营活动产生的现金流量净额",
    "dataType": "decimal",
    "suggestName": "F015N",
    "name": "F015N",
    "suggestAlias": "经营活动产生的现金流量净额",
    "alias": "经营活动产生的现金流量净额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F016N",
    "keywordAlias": "收回投资收到的现金",
    "dataType": "decimal",
    "suggestName": "F016N",
    "name": "F016N",
    "suggestAlias": "收回投资收到的现金",
    "alias": "收回投资收到的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F017N",
    "keywordAlias": "取得投资收益收到的现金",
    "dataType": "decimal",
    "suggestName": "F017N",
    "name": "F017N",
    "suggestAlias": "取得投资收益收到的现金",
    "alias": "取得投资收益收到的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F018N",
    "keywordAlias": "处置固定资产、无形资产和其他长期资产收回的现金净额",
    "dataType": "decimal",
    "suggestName": "F018N",
    "name": "F018N",
    "suggestAlias": "处置固定资产、无形资产和其他长期资产收回的现金净额",
    "alias": "处置固定资产、无形资产和其他长期资产收回的现金净额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F019N",
    "keywordAlias": "处置子公司及其他营业单位收到的现金净额",
    "dataType": "decimal",
    "suggestName": "F019N",
    "name": "F019N",
    "suggestAlias": "处置子公司及其他营业单位收到的现金净额",
    "alias": "处置子公司及其他营业单位收到的现金净额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F020N",
    "keywordAlias": "收到其他与投资活动有关的现金",
    "dataType": "decimal",
    "suggestName": "F020N",
    "name": "F020N",
    "suggestAlias": "收到其他与投资活动有关的现金",
    "alias": "收到其他与投资活动有关的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F021N",
    "keywordAlias": "投资活动现金流入小计",
    "dataType": "decimal",
    "suggestName": "F021N",
    "name": "F021N",
    "suggestAlias": "投资活动现金流入小计",
    "alias": "投资活动现金流入小计",
    "describe": "单位：元"
  },
  {
    "keywordName": "F022N",
    "keywordAlias": "购建固定资产、无形资产和其他长期资产支付的现金",
    "dataType": "decimal",
    "suggestName": "F022N",
    "name": "F022N",
    "suggestAlias": "购建固定资产、无形资产和其他长期资产支付的现金",
    "alias": "购建固定资产、无形资产和其他长期资产支付的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F023N",
    "keywordAlias": "投资支付的现金",
    "dataType": "decimal",
    "suggestName": "F023N",
    "name": "F023N",
    "suggestAlias": "投资支付的现金",
    "alias": "投资支付的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F075N",
    "keywordAlias": "质押贷款净增加额",
    "dataType": "decimal",
    "suggestName": "F075N",
    "name": "F075N",
    "suggestAlias": "质押贷款净增加额",
    "alias": "质押贷款净增加额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F024N",
    "keywordAlias": "取得子公司及其他营业单位支付的现金净额",
    "dataType": "decimal",
    "suggestName": "F024N",
    "name": "F024N",
    "suggestAlias": "取得子公司及其他营业单位支付的现金净额",
    "alias": "取得子公司及其他营业单位支付的现金净额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F025N",
    "keywordAlias": "支付其他与投资活动有关的现金",
    "dataType": "decimal",
    "suggestName": "F025N",
    "name": "F025N",
    "suggestAlias": "支付其他与投资活动有关的现金",
    "alias": "支付其他与投资活动有关的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F026N",
    "keywordAlias": "投资活动现金流出小计",
    "dataType": "decimal",
    "suggestName": "F026N",
    "name": "F026N",
    "suggestAlias": "投资活动现金流出小计",
    "alias": "投资活动现金流出小计",
    "describe": "单位：元"
  },
  {
    "keywordName": "F027N",
    "keywordAlias": "投资活动产生的现金流量净额",
    "dataType": "decimal",
    "suggestName": "F027N",
    "name": "F027N",
    "suggestAlias": "投资活动产生的现金流量净额",
    "alias": "投资活动产生的现金流量净额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F028N",
    "keywordAlias": "吸收投资收到的现金",
    "dataType": "decimal",
    "suggestName": "F028N",
    "name": "F028N",
    "suggestAlias": "吸收投资收到的现金",
    "alias": "吸收投资收到的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F089N",
    "keywordAlias": "其中：子公司吸收少数股东投资收到的现金",
    "dataType": "decimal",
    "suggestName": "F089N",
    "name": "F089N",
    "suggestAlias": "其中：子公司吸收少数股东投资收到的现金",
    "alias": "其中：子公司吸收少数股东投资收到的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F029N",
    "keywordAlias": "取得借款收到的现金",
    "dataType": "decimal",
    "suggestName": "F029N",
    "name": "F029N",
    "suggestAlias": "取得借款收到的现金",
    "alias": "取得借款收到的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F076N",
    "keywordAlias": "发行债券收到的现金",
    "dataType": "decimal",
    "suggestName": "F076N",
    "name": "F076N",
    "suggestAlias": "发行债券收到的现金",
    "alias": "发行债券收到的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F030N",
    "keywordAlias": "收到其他与筹资活动有关的现金",
    "dataType": "decimal",
    "suggestName": "F030N",
    "name": "F030N",
    "suggestAlias": "收到其他与筹资活动有关的现金",
    "alias": "收到其他与筹资活动有关的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F031N",
    "keywordAlias": "筹资活动现金流入小计",
    "dataType": "decimal",
    "suggestName": "F031N",
    "name": "F031N",
    "suggestAlias": "筹资活动现金流入小计",
    "alias": "筹资活动现金流入小计",
    "describe": "单位：元"
  },
  {
    "keywordName": "F032N",
    "keywordAlias": "偿还债务支付的现金",
    "dataType": "decimal",
    "suggestName": "F032N",
    "name": "F032N",
    "suggestAlias": "偿还债务支付的现金",
    "alias": "偿还债务支付的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F033N",
    "keywordAlias": "分配股利、利润或偿付利息支付的现金",
    "dataType": "decimal",
    "suggestName": "F033N",
    "name": "F033N",
    "suggestAlias": "分配股利、利润或偿付利息支付的现金",
    "alias": "分配股利、利润或偿付利息支付的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F090N",
    "keywordAlias": "其中：子公司支付给少数股东的股利、利润",
    "dataType": "decimal",
    "suggestName": "F090N",
    "name": "F090N",
    "suggestAlias": "其中：子公司支付给少数股东的股利、利润",
    "alias": "其中：子公司支付给少数股东的股利、利润",
    "describe": "单位：元"
  },
  {
    "keywordName": "F034N",
    "keywordAlias": "支付其他与筹资活动有关的现金",
    "dataType": "decimal",
    "suggestName": "F034N",
    "name": "F034N",
    "suggestAlias": "支付其他与筹资活动有关的现金",
    "alias": "支付其他与筹资活动有关的现金",
    "describe": "单位：元"
  },
  {
    "keywordName": "F035N",
    "keywordAlias": "筹资活动现金流出小计",
    "dataType": "decimal",
    "suggestName": "F035N",
    "name": "F035N",
    "suggestAlias": "筹资活动现金流出小计",
    "alias": "筹资活动现金流出小计",
    "describe": "单位：元"
  },
  {
    "keywordName": "F036N",
    "keywordAlias": "筹资活动产生的现金流量净额",
    "dataType": "decimal",
    "suggestName": "F036N",
    "name": "F036N",
    "suggestAlias": "筹资活动产生的现金流量净额",
    "alias": "筹资活动产生的现金流量净额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F037N",
    "keywordAlias": "四、汇率变动对现金的影响",
    "dataType": "decimal",
    "suggestName": "F037N",
    "name": "F037N",
    "suggestAlias": "四、汇率变动对现金的影响",
    "alias": "四、汇率变动对现金的影响",
    "describe": "单位：元"
  },
  {
    "keywordName": "F038N",
    "keywordAlias": "四(2)、其他原因对现金的影响",
    "dataType": "decimal",
    "suggestName": "F038N",
    "name": "F038N",
    "suggestAlias": "四(2)、其他原因对现金的影响",
    "alias": "四(2)、其他原因对现金的影响",
    "describe": "单位：元"
  },
  {
    "keywordName": "F039N",
    "keywordAlias": "五、现金及现金等价物净增加额",
    "dataType": "decimal",
    "suggestName": "F039N",
    "name": "F039N",
    "suggestAlias": "五、现金及现金等价物净增加额",
    "alias": "五、现金及现金等价物净增加额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F040N",
    "keywordAlias": "期初现金及现金等价物余额",
    "dataType": "decimal",
    "suggestName": "F040N",
    "name": "F040N",
    "suggestAlias": "期初现金及现金等价物余额",
    "alias": "期初现金及现金等价物余额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F041N",
    "keywordAlias": "期末现金及现金等价物余额",
    "dataType": "decimal",
    "suggestName": "F041N",
    "name": "F041N",
    "suggestAlias": "期末现金及现金等价物余额",
    "alias": "期末现金及现金等价物余额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F044N",
    "keywordAlias": "净利润",
    "dataType": "decimal",
    "suggestName": "F044N",
    "name": "F044N",
    "suggestAlias": "净利润",
    "alias": "净利润",
    "describe": "单位：元"
  },
  {
    "keywordName": "F045N",
    "keywordAlias": "加：资产减值准备",
    "dataType": "decimal",
    "suggestName": "F045N",
    "name": "F045N",
    "suggestAlias": "加：资产减值准备",
    "alias": "加：资产减值准备",
    "describe": "单位：元"
  },
  {
    "keywordName": "F046N",
    "keywordAlias": "固定资产折旧、油气资产折耗、生产性生物资产折旧",
    "dataType": "decimal",
    "suggestName": "F046N",
    "name": "F046N",
    "suggestAlias": "固定资产折旧、油气资产折耗、生产性生物资产折旧",
    "alias": "固定资产折旧、油气资产折耗、生产性生物资产折旧",
    "describe": "单位：元"
  },
  {
    "keywordName": "F091N",
    "keywordAlias": "投资性房地产的折旧及摊销",
    "dataType": "decimal",
    "suggestName": "F091N",
    "name": "F091N",
    "suggestAlias": "投资性房地产的折旧及摊销",
    "alias": "投资性房地产的折旧及摊销",
    "describe": "单位：元"
  },
  {
    "keywordName": "F047N",
    "keywordAlias": "无形资产摊销",
    "dataType": "decimal",
    "suggestName": "F047N",
    "name": "F047N",
    "suggestAlias": "无形资产摊销",
    "alias": "无形资产摊销",
    "describe": "单位：元"
  },
  {
    "keywordName": "F048N",
    "keywordAlias": "长期待摊费用摊销",
    "dataType": "decimal",
    "suggestName": "F048N",
    "name": "F048N",
    "suggestAlias": "长期待摊费用摊销",
    "alias": "长期待摊费用摊销",
    "describe": "单位：元"
  },
  {
    "keywordName": "F049N",
    "keywordAlias": "处置固定资产、无形资产和其他长期资产的损失",
    "dataType": "decimal",
    "suggestName": "F049N",
    "name": "F049N",
    "suggestAlias": "处置固定资产、无形资产和其他长期资产的损失",
    "alias": "处置固定资产、无形资产和其他长期资产的损失",
    "describe": "单位：元"
  },
  {
    "keywordName": "F050N",
    "keywordAlias": "固定资产报废损失",
    "dataType": "decimal",
    "suggestName": "F050N",
    "name": "F050N",
    "suggestAlias": "固定资产报废损失",
    "alias": "固定资产报废损失",
    "describe": "单位：元"
  },
  {
    "keywordName": "F051N",
    "keywordAlias": "公允价值变动损失",
    "dataType": "decimal",
    "suggestName": "F051N",
    "name": "F051N",
    "suggestAlias": "公允价值变动损失",
    "alias": "公允价值变动损失",
    "describe": "单位：元"
  },
  {
    "keywordName": "F052N",
    "keywordAlias": "财务费用",
    "dataType": "decimal",
    "suggestName": "F052N",
    "name": "F052N",
    "suggestAlias": "财务费用",
    "alias": "财务费用",
    "describe": "单位：元"
  },
  {
    "keywordName": "F053N",
    "keywordAlias": "投资损失",
    "dataType": "decimal",
    "suggestName": "F053N",
    "name": "F053N",
    "suggestAlias": "投资损失",
    "alias": "投资损失",
    "describe": "单位：元"
  },
  {
    "keywordName": "F054N",
    "keywordAlias": "递延所得税资产减少",
    "dataType": "decimal",
    "suggestName": "F054N",
    "name": "F054N",
    "suggestAlias": "递延所得税资产减少",
    "alias": "递延所得税资产减少",
    "describe": "单位：元"
  },
  {
    "keywordName": "F055N",
    "keywordAlias": "递延所得税负债增加",
    "dataType": "decimal",
    "suggestName": "F055N",
    "name": "F055N",
    "suggestAlias": "递延所得税负债增加",
    "alias": "递延所得税负债增加",
    "describe": "单位：元"
  },
  {
    "keywordName": "F056N",
    "keywordAlias": "存货的减少",
    "dataType": "decimal",
    "suggestName": "F056N",
    "name": "F056N",
    "suggestAlias": "存货的减少",
    "alias": "存货的减少",
    "describe": "单位：元"
  },
  {
    "keywordName": "F057N",
    "keywordAlias": "经营性应收项目的减少",
    "dataType": "decimal",
    "suggestName": "F057N",
    "name": "F057N",
    "suggestAlias": "经营性应收项目的减少",
    "alias": "经营性应收项目的减少",
    "describe": "单位：元"
  },
  {
    "keywordName": "F058N",
    "keywordAlias": "经营性应付项目的增加",
    "dataType": "decimal",
    "suggestName": "F058N",
    "name": "F058N",
    "suggestAlias": "经营性应付项目的增加",
    "alias": "经营性应付项目的增加",
    "describe": "单位：元"
  },
  {
    "keywordName": "F059N",
    "keywordAlias": "其他",
    "dataType": "decimal",
    "suggestName": "F059N",
    "name": "F059N",
    "suggestAlias": "其他",
    "alias": "其他",
    "describe": "单位：元"
  },
  {
    "keywordName": "F060N",
    "keywordAlias": "经营活动产生的现金流量净额2",
    "dataType": "decimal",
    "suggestName": "F060N",
    "name": "F060N",
    "suggestAlias": "经营活动产生的现金流量净额2",
    "alias": "经营活动产生的现金流量净额2",
    "describe": "单位：元"
  },
  {
    "keywordName": "F062N",
    "keywordAlias": "债务转为资本",
    "dataType": "decimal",
    "suggestName": "F062N",
    "name": "F062N",
    "suggestAlias": "债务转为资本",
    "alias": "债务转为资本",
    "describe": "单位：元"
  },
  {
    "keywordName": "F063N",
    "keywordAlias": "一年内到期的可转换公司债券",
    "dataType": "decimal",
    "suggestName": "F063N",
    "name": "F063N",
    "suggestAlias": "一年内到期的可转换公司债券",
    "alias": "一年内到期的可转换公司债券",
    "describe": "单位：元"
  },
  {
    "keywordName": "F064N",
    "keywordAlias": "融资租入固定资产",
    "dataType": "decimal",
    "suggestName": "F064N",
    "name": "F064N",
    "suggestAlias": "融资租入固定资产",
    "alias": "融资租入固定资产",
    "describe": "单位：元"
  },
  {
    "keywordName": "F066N",
    "keywordAlias": "现金的期末余额",
    "dataType": "decimal",
    "suggestName": "F066N",
    "name": "F066N",
    "suggestAlias": "现金的期末余额",
    "alias": "现金的期末余额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F067N",
    "keywordAlias": "减：现金的期初余额",
    "dataType": "decimal",
    "suggestName": "F067N",
    "name": "F067N",
    "suggestAlias": "减：现金的期初余额",
    "alias": "减：现金的期初余额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F068N",
    "keywordAlias": "加：现金等价物的期末余额",
    "dataType": "decimal",
    "suggestName": "F068N",
    "name": "F068N",
    "suggestAlias": "加：现金等价物的期末余额",
    "alias": "加：现金等价物的期末余额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F069N",
    "keywordAlias": "减：现金等价物的期初余额",
    "dataType": "decimal",
    "suggestName": "F069N",
    "name": "F069N",
    "suggestAlias": "减：现金等价物的期初余额",
    "alias": "减：现金等价物的期初余额",
    "describe": "单位：元"
  },
  {
    "keywordName": "F070N",
    "keywordAlias": "加：其他原因对现金的影响2",
    "dataType": "decimal",
    "suggestName": "F070N",
    "name": "F070N",
    "suggestAlias": "加：其他原因对现金的影响2",
    "alias": "加：其他原因对现金的影响2",
    "describe": "单位：元"
  },
  {
    "keywordName": "F071N",
    "keywordAlias": "现金及现金等价物净增加额2",
    "dataType": "decimal",
    "suggestName": "F071N",
    "name": "F071N",
    "suggestAlias": "现金及现金等价物净增加额2",
    "alias": "现金及现金等价物净增加额2",
    "describe": "单位：元"
  }
]

export const cNameMap = {}
export const cKeyMap = {}
for(const item of keyArr) {
  cNameMap[item.alias] = item
  cKeyMap[item.keywordName] = item
}

export default keyArr
