# 怎么挑一个靠谱的 AI API 中转站

在国内想安稳地用上最新的 AI API，确实挺折腾。直接找海外官方买，价格贵不说，支付、网络和账号风控都是问题。最怕的是项目跑得好好的，账号突然被误封，工作也跟着停下来。

中转站省掉了不少麻烦，但挑起来并不轻松。我用过一些站，也踩过坑，最后发现真正值得看的无非是下面这些东西。

## 先看它稳不稳

稳定比低价重要。一个站如果隔三岔五宕机，或者一到高峰期就超时，省下来的那点钱根本补不回耽误的事。

我更愿意选已经运行了一段时间、有真实用户在长期使用的站。最好还有用户群，出故障时能找到人，也能看到其他用户的反馈。如果站点出了问题却一直不通知，客服也联系不上，那就算平时再便宜，我也不敢把正式业务放上去。

## 速度不能只看一次测速

接口慢起来真的很难受。聊天时要等，跑程序时并发也上不去。

不过，偶尔测出一次很低的延迟说明不了什么。更该看的是一天中不同时段的平均延迟，以及速度波动有多大。一个站平时 500 ms、高峰期还是 500 ms，往往比平时 200 ms、高峰期突然变成几秒更好用。

## 模型要多，更要是真的

理想的中转站应该能把主流模型放在一起，官方发布新模型后也能尽快跟进。这样不用为了 GPT、Claude、Gemini 或其他模型分别维护几套账号和接口。

但模型多不等于靠谱。遇到价格低得离谱的高价模型，要多留个心眼。市面上确实存在拿便宜模型冒充昂贵模型的情况，比如把低价国产模型包装成国外模型出售。正式使用前，最好自己做几组测试，不要只看后台写了什么模型名称。

## 低价不一定真的便宜

中转站的计费方式很容易藏东西。模型单价看起来低，实际费用还会受到 Token 统计、计费倍率和价格费率的影响。最后花了多少钱，要以真实调用账单为准。

我比较在意站点有没有清楚的价格表，以及账单能不能查到每次请求用了多少 Token、调用了哪个模型、按什么倍率扣费。如果只显示余额少了多少，却查不到明细，哪天出现异常扣费也很难说清楚。

还有一个常被忽略的地方：缓存价格和缓存命中率。正常情况下，缓存 Token 应该比普通输入便宜很多，常见价格大约是普通输入的 10%。有些站会收 15%，还有一些能收到 30%。这部分差异在长对话和大上下文任务里很明显，选站之前最好问清楚，也看看账单是否把缓存 Token 单独列了出来。

## 看谁在运营，也看出了事怎么处理

中转站都有停止运营的风险，没有哪一家能保证永远不出问题。相比来路不明的个人站，我会优先考虑公司主体清楚、已经运行较长时间的服务商。

客服的反应也很说明问题。模型异常时有没有人处理，速率波动时会不会发通知，退款和发票规则是否写清楚，这些细节比首页上的宣传语有用得多。

## 最重要的一句：不要大额充值

无论一个站现在看起来多靠谱，都不要一次充太多。用多少充多少。

这个行业变化很快。模型可能下架，价格可能调整，站点也可能停止运营。充值优惠再诱人，也不值得拿一大笔余额去赌。

## 为什么做这个排行榜

站点状态和模型价格变得太快，靠手工整理很容易过期。所以我在 [禾维 AI](https://www.hvoy.ai) 增加了中转站排行榜，后台会持续探测接口，记录在线率和平均延迟，并更新模型价格和服务信息。

我会尽量让数据保持准确，但榜单只能作为挑选时的参考。真正要用之前，还是建议先小额充值，跑一段时间，再决定要不要继续使用。

<!-- HVOY_RANKING_START -->
## AI API 中转站实时排行榜

> 数据更新于 2026-07-20，当前共收录 88 个站点。数据来自 [禾维 AI](https://www.hvoy.ai)，会随站点探测结果和公开信息定期更新。

| 排名 | 站点 | 在线率 | 平均延迟 | 模型数量 | 主要模型厂商 | 用户评分 | 支付方式 | 退款 | 发票 |
| ---: | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| 1 | [CUN.ai](<https://www.hvoy.ai/sites/cunai/>) | 97.8% | 8060 ms | 25 | 阿里云、Anthropic、DeepSeek、Google、MiniMax、月之暗面、OpenAI、智谱 | 4.8（53 条） | USDT、微信、支付宝、信用卡 | 暂无信息 | 支持 |
| 2 | [RightCode](<https://www.hvoy.ai/sites/rightcodes/>) | 96.5% | 7180 ms | 25 | Anthropic、DeepSeek、Google、OpenAI、阿里云、月之暗面、SpaceXAI、智谱 | 4.6（10 条） | 支付宝 | 支持 | 支持 |
| 3 | [ToolCode](<https://www.hvoy.ai/sites/toolcodetop/>) | 99.8% | 4110 ms | 11 | OpenAI、Anthropic | 暂无评分 | 支付宝 | 支持 | 支持 |
| 4 | [9527code](<https://www.hvoy.ai/sites/9527codecom/>) | 99.7% | 4940 ms | 26 | Anthropic、OpenAI、DeepSeek、Google、MiniMax、月之暗面、阿里云、SpaceXAI、智谱 | 5（51 条） | 微信、支付宝、对公转账 | 支持 | 支持 |
| 5 | [EiRouter](<https://www.hvoy.ai/sites/eiroutercom/>) | 99.3% | 4920 ms | 11 | Anthropic、OpenAI | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 6 | [NekoCode](<https://www.hvoy.ai/sites/nekocodeai/>) | 95.7% | 6030 ms | 11 | Anthropic、OpenAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 7 | [灵算](<https://www.hvoy.ai/sites/lingsuantop/>) | 98.6% | 6870 ms | 10 | Anthropic、OpenAI、Google、SpaceXAI | 4.6（10 条） | USDT、微信、支付宝、对公转账、信用卡 | 支持 | 支持 |
| 8 | [hao.ai](<https://www.hvoy.ai/sites/haoai/>) | 100% | 3780 ms | 11 | Anthropic、OpenAI | 5（1 条） | 微信、支付宝、对公转账、信用卡 | 支持 | 暂无信息 |
| 9 | [XycAi(星道智能)](<https://www.hvoy.ai/sites/xycai/>) | 99.7% | 6080 ms | 23 | Anthropic、OpenAI、DeepSeek、Google、MiniMax、月之暗面、SpaceXAI、智谱 | 5（1 条） | 暂无信息 | 不支持 | 支持 |
| 10 | [LLMAPI](<https://www.hvoy.ai/sites/llmapipro/>) | 99.2% | 5690 ms | 14 | Anthropic、OpenAI、Google | 3.5（4 条） | 暂无信息 | 支持 | 支持 |
| 11 | [ModCon](<https://www.hvoy.ai/sites/modcontop/>) | 99.4% | 4640 ms | 11 | Anthropic、OpenAI | 5（1 条） | 支付宝 | 暂无信息 | 支持 |
| 12 | [MoreCode](<https://www.hvoy.ai/sites/api1314mcnet/>) | 99.7% | 5280 ms | 26 | 阿里云、Anthropic、DeepSeek、Google、MiniMax、月之暗面、OpenAI、SpaceXAI、Xiaomi、智谱 | 暂无评分 | 暂无信息 | 支持 | 支持 |
| 13 | [PackyCode](<https://www.hvoy.ai/sites/packyapicom/>) | 99.3% | 5170 ms | 28 | Anthropic、OpenAI、Google、MiniMax、SpaceXAI、智谱、阿里云、DeepSeek、月之暗面、Xiaomi | 3.5（2 条） | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 14 | [UU API](<https://www.hvoy.ai/sites/uuapinet/>) | 99.9% | 4040 ms | 15 | Anthropic、Google、OpenAI、SpaceXAI | 5（14 条） | USDT、微信、支付宝、对公转账 | 暂无信息 | 支持 |
| 15 | [ccgo](<https://www.hvoy.ai/sites/ccgoaicom/>) | 92.1% | 5750 ms | 7 | Anthropic、OpenAI | 5（1 条） | 微信、支付宝、对公转账 | 支持 | 支持 |
| 16 | [GPTEAM](<https://www.hvoy.ai/sites/portalgpteamservicescom/>) | 100% | 6030 ms | 25 | Anthropic、DeepSeek、Google、MiniMax、月之暗面、OpenAI、SpaceXAI、Xiaomi、智谱 | 暂无评分 | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 17 | [Vibe SubsAPI](<https://www.hvoy.ai/sites/vibesubsapicom/>) | 100% | 4980 ms | 9 | 暂无信息 | 暂无评分 | 支付宝、对公转账 | 支持 | 支持 |
| 18 | [SudoCode](<https://www.hvoy.ai/sites/sudocodechat/>) | 100% | 4680 ms | 11 | OpenAI、Anthropic | 4.7（6 条） | USDT、微信、支付宝、对公转账 | 支持 | 支持 |
| 19 | [LinkAi](<https://www.hvoy.ai/sites/linkaishop/>) | 100% | 4540 ms | 12 | OpenAI、Anthropic、Google | 5（1 条） | 支付宝 | 暂无信息 | 暂无信息 |
| 20 | [云渡](<https://www.hvoy.ai/sites/yundulat/>) | 98.8% | 4830 ms | 11 | OpenAI、Anthropic | 5（1 条） | 微信、支付宝 | 支持 | 支持 |
| 21 | [MuskAI](<https://www.hvoy.ai/sites/apimuskapicc/>) | 100% | 7950 ms | 27 | Anthropic、OpenAI、Google、阿里云、DeepSeek、MiniMax、月之暗面、SpaceXAI、Xiaomi、智谱 | 4.3（3 条） | 暂无信息 | 暂无信息 | 暂无信息 |
| 22 | [baby](<https://www.hvoy.ai/sites/max20cn/>) | 88.2% | 3340 ms | 6 | Anthropic | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 23 | [Frontier Intelligence](<https://www.hvoy.ai/sites/apifrontierintelligencetech/>) | 99% | 5130 ms | 11 | Anthropic、OpenAI | 5（5 条） | 微信、支付宝、对公转账、信用卡 | 支持 | 支持 |
| 24 | [AOK](<https://www.hvoy.ai/sites/aokapicom/>) | 99.5% | 5330 ms | 11 | Anthropic、Google、OpenAI、智谱 | 暂无评分 | 支付宝、信用卡 | 暂无信息 | 暂无信息 |
| 25 | [WorldBase.ai](<https://www.hvoy.ai/sites/worldbaseai/>) | 96.2% | 5200 ms | 13 | OpenAI、Anthropic、智谱 | 暂无评分 | 支付宝 | 支持 | 支持 |
| 26 | [ForApi](<https://www.hvoy.ai/sites/forapiai/>) | 99.7% | 5140 ms | 11 | Anthropic、OpenAI | 暂无评分 | 微信、支付宝 | 支持 | 暂无信息 |
| 27 | [Volt](<https://www.hvoy.ai/sites/voltapiai/>) | 100% | 6260 ms | 25 | Anthropic、Google、OpenAI、阿里云、DeepSeek、MiniMax、月之暗面、智谱、SpaceXAI | 5（1 条） | USDT、微信、支付宝、对公转账 | 支持 | 支持 |
| 28 | [routescope](<https://www.hvoy.ai/sites/routescopeai/>) | 99.7% | 7040 ms | 10 | 暂无信息 | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 29 | [Toknex](<https://www.hvoy.ai/sites/toknexai/>) | 99.5% | 4590 ms | 13 | Anthropic、DeepSeek、OpenAI | 4.2（5 条） | 微信、支付宝、信用卡 | 支持 | 支持 |
| 30 | [Chintao AI](<https://www.hvoy.ai/sites/chintaocn/>) | 99.4% | 8000 ms | 14 | Anthropic、OpenAI、Google | 暂无评分 | 微信、支付宝 | 支持 | 支持 |
| 31 | [DragToken](<https://www.hvoy.ai/sites/dragtokenscom/>) | 96.4% | 6260 ms | 14 | OpenAI、Anthropic、SpaceXAI、xAI | 5（48 条） | 微信、支付宝、对公转账 | 暂无信息 | 暂无信息 |
| 32 | [我的贾维斯](<https://www.hvoy.ai/sites/apiaijwscom/>) | 96.6% | 5990 ms | 8 | Anthropic、OpenAI | 4（4 条） | 暂无信息 | 支持 | 支持 |
| 33 | [MueMod](<https://www.hvoy.ai/sites/muemodtop/>) | 98.9% | 5950 ms | 10 | Anthropic、OpenAI | 5（2 条） | 支付宝 | 暂无信息 | 支持 |
| 34 | [Moniker](<https://www.hvoy.ai/sites/aimonikertop/>) | 95.1% | 7590 ms | 19 | Anthropic、OpenAI、DeepSeek、Google、SpaceXAI、智谱 | 暂无评分 | 支付宝 | 支持 | 支持 |
| 35 | [滴滴打T](<https://www.hvoy.ai/sites/apiddtcom/>) | 98.2% | 5750 ms | 13 | OpenAI、Anthropic、Google、SpaceXAI | 暂无评分 | USDT、微信、支付宝、信用卡 | 暂无信息 | 支持 |
| 36 | [球球Token](<https://www.hvoy.ai/sites/qiuqiutokencom/>) | 98.2% | 8640 ms | 17 | OpenAI、Anthropic、Google、SpaceXAI、xAI | 5（1 条） | USDT、微信、支付宝、对公转账、信用卡 | 暂无信息 | 支持 |
| 37 | [AIMZ](<https://www.hvoy.ai/sites/mzlonetop/>) | 97.5% | 9410 ms | 12 | OpenAI、Anthropic、Google | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 38 | [浮生云算](<https://www.hvoy.ai/sites/fushengyunsuancom/>) | 98.6% | 9800 ms | 14 | OpenAI、Anthropic、SpaceXAI、xAI | 5（2 条） | 支付宝 | 支持 | 不支持 |
| 39 | [tallius.ai](<https://www.hvoy.ai/sites/apitalliusai/>) | 100% | 6290 ms | 15 | Anthropic、OpenAI、DeepSeek、MiniMax | 5（1 条） | 对公转账、信用卡 | 支持 | 支持 |
| 40 | [Portal](<https://www.hvoy.ai/sites/portal123top/>) | 99.3% | 7500 ms | 5 | OpenAI | 5（1 条） | 微信、支付宝 | 暂无信息 | 支持 |
| 41 | [Z-API](<https://www.hvoy.ai/sites/apitmlabstore/>) | 94% | 5910 ms | 8 | OpenAI、Anthropic、ByteDance | 5（1 条） | 支付宝 | 支持 | 不支持 |
| 42 | [IKunCode](<https://www.hvoy.ai/sites/apiikuncodecc/>) | 100% | 5010 ms | 14 | Anthropic、Google、OpenAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 43 | [JBB金贝贝](<https://www.hvoy.ai/sites/jbbtcc/>) | 99.5% | 7280 ms | 19 | OpenAI、Anthropic、Google、DeepSeek、SpaceXAI、xAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 44 | [RunAPI](<https://www.hvoy.ai/sites/runapico/>) | 86.6% | 4600 ms | 27 | Anthropic、Google、OpenAI、SpaceXAI、xAI、阿里云、DeepSeek、月之暗面、智谱 | 暂无评分 | 支付宝、对公转账、信用卡 | 支持 | 支持 |
| 45 | [天枢](<https://www.hvoy.ai/sites/tianshuorg/>) | 98.8% | 7320 ms | 24 | OpenAI、Anthropic、Google、阿里云、DeepSeek、MiniMax、月之暗面、SpaceXAI、智谱 | 暂无评分 | USDT、微信、支付宝、对公转账 | 支持 | 支持 |
| 46 | [Lumin AI](<https://www.hvoy.ai/sites/ailuminaicc/>) | 99.7% | 5060 ms | 11 | Anthropic、OpenAI | 5（2 条） | 微信、支付宝 | 支持 | 暂无信息 |
| 47 | [SuiXiang](<https://www.hvoy.ai/sites/suixiangcom/>) | 99.3% | 8490 ms | 11 | 暂无信息 | 5（2 条） | 支付宝 | 支持 | 支持 |
| 48 | [91token](<https://www.hvoy.ai/sites/91tokencom/>) | 100% | 8720 ms | 23 | Anthropic、OpenAI、ByteDance、Google、MiniMax、月之暗面、xAI、DeepSeek、Xiaomi | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 49 | [SevnX](<https://www.hvoy.ai/sites/sevnxone/>) | 100% | 5300 ms | 10 | OpenAI、Anthropic | 5（3 条） | 支付宝 | 暂无信息 | 暂无信息 |
| 50 | [unity2](<https://www.hvoy.ai/sites/unity2ai/>) | 96.1% | 6780 ms | 14 | OpenAI、智谱、Anthropic、Google | 4.9（7 条） | 微信、支付宝 | 支持 | 支持 |
| 51 | [我的刀盾](<https://www.hvoy.ai/sites/daodunapicom/>) | 90.7% | 4370 ms | 15 | Anthropic、Google、OpenAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 52 | [Token-AI](<https://www.hvoy.ai/sites/tkenme/>) | 94.9% | 9690 ms | 8 | 暂无信息 | 暂无评分 | USDT、微信、支付宝、对公转账 | 不支持 | 支持 |
| 53 | [AutoRouter](<https://www.hvoy.ai/sites/autorouterio/>) | 98.7% | 4740 ms | 22 | OpenAI、Anthropic、Google、阿里云、DeepSeek、月之暗面、SpaceXAI、智谱 | 暂无评分 | 微信、支付宝、信用卡 | 支持 | 不支持 |
| 54 | [Mintpop](<https://www.hvoy.ai/sites/mintpopai/>) | 100% | 6770 ms | 8 | 暂无信息 | 5（1 条） | 微信、支付宝、信用卡 | 暂无信息 | 暂无信息 |
| 55 | [YKH.AI](<https://www.hvoy.ai/sites/apiykhai/>) | 87.2% | 5520 ms | 11 | OpenAI、Anthropic | 5（3 条） | USDT、微信、支付宝、对公转账、信用卡 | 暂无信息 | 支持 |
| 56 | [zToken](<https://www.hvoy.ai/sites/aiztokendev/>) | 100% | 6120 ms | 4 | 暂无信息 | 暂无评分 | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 57 | [AIGateHub](<https://www.hvoy.ai/sites/apivllmproxycom/>) | 98.1% | 5530 ms | 14 | Anthropic、OpenAI、Google | 5（2 条） | USDT、支付宝、对公转账 | 支持 | 支持 |
| 58 | [智惠API](<https://www.hvoy.ai/sites/apiapi2cncom/>) | 87.1% | 6120 ms | 14 | Anthropic、Google、OpenAI、SpaceXAI | 5（34 条） | 微信、支付宝、信用卡 | 支持 | 暂无信息 |
| 59 | [tokenshop](<https://www.hvoy.ai/sites/tokenshophomes/>) | 97.9% | 5540 ms | 11 | OpenAI、Anthropic | 5（1 条） | USDT、微信、支付宝 | 支持 | 暂无信息 |
| 60 | [ClaudeCN](<https://www.hvoy.ai/sites/claudecntop/>) | 90% | 4180 ms | 15 | Anthropic、DeepSeek、OpenAI、MiniMax、智谱 | 暂无评分 | 微信 | 暂无信息 | 不支持 |
| 61 | [聚星AI](<https://www.hvoy.ai/sites/juxingaitop/>) | 99.6% | 13210 ms | 19 | Anthropic、OpenAI、DeepSeek、Google、月之暗面、智谱 | 3（2 条） | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 62 | [luchikey](<https://www.hvoy.ai/sites/sub2apiluchikeycom/>) | 98.7% | 11760 ms | 21 | OpenAI、Anthropic、DeepSeek、Google、月之暗面、SpaceXAI、智谱、xAI | 5（4 条） | 微信、支付宝 | 支持 | 支持 |
| 63 | [ClauqeAI](<https://www.hvoy.ai/sites/apiclauqeai/>) | 90.5% | 5370 ms | 6 | Anthropic、OpenAI | 5（1 条） | 微信、支付宝 | 支持 | 暂无信息 |
| 64 | [猪猪 API](<https://www.hvoy.ai/sites/kpzhucom/>) | 95.4% | 5630 ms | 12 | Anthropic、Google、OpenAI | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 65 | [Poixe AI](<https://www.hvoy.ai/sites/poixecom/>) | 75.5% | 4760 ms | 18 | Anthropic、DeepSeek、Google、OpenAI、SpaceXAI | 5（1 条） | 支付宝、对公转账、信用卡 | 暂无信息 | 暂无信息 |
| 66 | [AIHUB](<https://www.hvoy.ai/sites/aihubtop/>) | 90% | 7340 ms | 4 | 暂无信息 | 暂无评分 | 微信、支付宝 | 支持 | 支持 |
| 67 | [Apizh](<https://www.hvoy.ai/sites/apizhnet/>) | 50% | 6610 ms | 7 | OpenAI、Anthropic | 暂无评分 | 微信、支付宝 | 支持 | 不支持 |
| 68 | [瓦瓦AI](<https://www.hvoy.ai/sites/wawapitop/>) | 89.3% | 4960 ms | 12 | OpenAI、Anthropic | 5（24 条） | 微信、支付宝 | 支持 | 支持 |
| 69 | [Euzhi](<https://www.hvoy.ai/sites/apieuzhicom/>) | 100% | 12480 ms | 5 | OpenAI | 暂无评分 | 支付宝 | 支持 | 支持 |
| 70 | [词易](<https://www.hvoy.ai/sites/chiyicncom/>) | 97.5% | 9120 ms | 11 | OpenAI、Anthropic、Google | 5（5 条） | 支付宝 | 支持 | 支持 |
| 71 | [SadAI](<https://www.hvoy.ai/sites/sadaicc/>) | 97.6% | 9690 ms | 8 | OpenAI、SpaceXAI、Anthropic | 5（2 条） | 微信、支付宝 | 支持 | 暂无信息 |
| 72 | [Apiporter](<https://www.hvoy.ai/sites/apiportercom/>) | 84.8% | 8980 ms | 22 | OpenAI、Anthropic、Google、阿里云、DeepSeek、智谱 | 5（2 条） | 支付宝、对公转账 | 暂无信息 | 支持 |
| 73 | [AnPin AI](<https://www.hvoy.ai/sites/anpinai/>) | 42.4% | 9160 ms | 10 | Anthropic、OpenAI | 5（1 条） | USDT、微信、支付宝、对公转账 | 暂无信息 | 暂无信息 |
| 74 | [quotarouter](<https://www.hvoy.ai/sites/quotarouterai/>) | 87.6% | 5860 ms | 15 | Anthropic、DeepSeek、Google、OpenAI | 暂无评分 | USDT、微信、信用卡 | 支持 | 暂无信息 |
| 75 | [悟空API](<https://www.hvoy.ai/sites/wkapiclub/>) | 99.5% | 5650 ms | 17 | OpenAI、Anthropic、Google、SpaceXAI、智谱 | 5（1 条） | 支付宝 | 支持 | 支持 |
| 76 | [Hiyo](<https://www.hvoy.ai/sites/codexhiyotop/>) | 100% | 5760 ms | 4 | OpenAI | 5（1 条） | USDT、微信、支付宝、信用卡 | 支持 | 不支持 |
| 77 | [A6api](<https://www.hvoy.ai/sites/a6apicom/>) | 97.3% | 6410 ms | 26 | Anthropic、DeepSeek、Google、MiniMax、月之暗面、OpenAI、SpaceXAI、Xiaomi、智谱、xAI | 5（2 条） | USDT、微信、支付宝 | 暂无信息 | 暂无信息 |
| 78 | [DawCode](<https://www.hvoy.ai/sites/dawclaudecodecom/>) | 61.6% | 5500 ms | 15 | Anthropic、OpenAI、Google | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 79 | [优兔API](<https://www.hvoy.ai/sites/apiyou2apicom/>) | 93.1% | 9000 ms | 13 | Anthropic、OpenAI、SpaceXAI | 暂无评分 | 微信、支付宝、信用卡 | 支持 | 暂无信息 |
| 80 | [UoCode](<https://www.hvoy.ai/sites/uocodecom/>) | 73.9% | 5930 ms | 13 | Anthropic、OpenAI、Google | 暂无评分 | 微信、支付宝 | 支持 | 暂无信息 |
| 81 | [夯炸了AI](<https://www.hvoy.ai/sites/apihangzhalecom/>) | 95.7% | 6030 ms | 16 | OpenAI、Anthropic、Google、SpaceXAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 82 | [ApiBasis](<https://www.hvoy.ai/sites/apibasiscom/>) | 71.7% | 5770 ms | 9 | 暂无信息 | 暂无评分 | 支付宝 | 支持 | 不支持 |
| 83 | [onehop](<https://www.hvoy.ai/sites/onehopai/>) | 87.5% | 6310 ms | 21 | Anthropic、DeepSeek、Google、MiniMax、月之暗面、OpenAI、智谱 | 暂无评分 | USDT、支付宝、信用卡 | 支持 | 暂无信息 |
| 84 | [SwitchBase](<https://www.hvoy.ai/sites/switchbasevip/>) | 53.6% | 10760 ms | 10 | Anthropic、OpenAI、Google | 5（3 条） | 微信、支付宝、对公转账 | 支持 | 支持 |
| 85 | [ttflows](<https://www.hvoy.ai/sites/apittflowscom/>) | 99.7% | 7800 ms | 10 | Anthropic、OpenAI | 暂无评分 | 支付宝 | 支持 | 不支持 |
| 86 | [RelayNest](<https://www.hvoy.ai/sites/relaynesttop/>) | 93.3% | 5730 ms | 11 | OpenAI、Anthropic | 5（1 条） | 支付宝 | 暂无信息 | 不支持 |
| 87 | [Modelflare](<https://www.hvoy.ai/sites/modelflaredev/>) | 97.8% | 5980 ms | 10 | OpenAI、Anthropic、月之暗面、SpaceXAI | 5（1 条） | 暂无信息 | 暂无信息 | 暂无信息 |
| 88 | [ZZZ](<https://www.hvoy.ai/sites/apiej2075com/>) | 92.1% | 9930 ms | 13 | OpenAI、Anthropic、SpaceXAI | 5（1 条） | 微信、对公转账 | 支持 | 支持 |

> 排名和数据仅供参考。正式使用前请先小额充值并自行测试，不要在任何中转站长期存放大额余额。
<!-- HVOY_RANKING_END -->
