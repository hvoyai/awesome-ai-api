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

> 数据更新于 2026-07-21，当前共收录 83 个站点。数据来自 [禾维 AI](https://www.hvoy.ai)，会随站点探测结果和公开信息定期更新。

| 排名 | 站点 | 在线率 | 平均延迟 | 模型数量 | 主要模型厂商 | 用户评分 | 支付方式 | 退款 | 发票 |
| ---: | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| 1 | [CUN.ai](<https://www.hvoy.ai/sites/cunai/>) | 97.1% | 8580 ms | 25 | 阿里云、Anthropic、DeepSeek、Google、MiniMax、月之暗面、OpenAI、智谱 | 4.8（55 条） | USDT、微信、支付宝、信用卡 | 暂无信息 | 支持 |
| 2 | [SudoCode](<https://www.hvoy.ai/sites/sudocodechat/>) | 100% | 5020 ms | 11 | OpenAI、Anthropic | 4.7（6 条） | USDT、微信、支付宝、对公转账 | 支持 | 支持 |
| 3 | [9527code](<https://www.hvoy.ai/sites/9527codecom/>) | 99.4% | 5540 ms | 27 | Anthropic、OpenAI、DeepSeek、Google、MiniMax、月之暗面、阿里云、SpaceXAI、智谱 | 5（52 条） | 微信、支付宝、对公转账 | 支持 | 支持 |
| 4 | [RightCode](<https://www.hvoy.ai/sites/rightcodes/>) | 97.5% | 7310 ms | 25 | Anthropic、DeepSeek、Google、OpenAI、阿里云、月之暗面、SpaceXAI、智谱 | 4.6（10 条） | 支付宝 | 支持 | 支持 |
| 5 | [灵算](<https://www.hvoy.ai/sites/lingsuantop/>) | 98.6% | 6920 ms | 10 | Anthropic、OpenAI、Google、SpaceXAI | 4.6（11 条） | USDT、微信、支付宝、对公转账、信用卡 | 支持 | 支持 |
| 6 | [EiRouter](<https://www.hvoy.ai/sites/eiroutercom/>) | 98.6% | 5620 ms | 11 | Anthropic、OpenAI | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 7 | [hao.ai](<https://www.hvoy.ai/sites/haoai/>) | 100% | 4110 ms | 11 | Anthropic、OpenAI | 5（1 条） | 微信、支付宝、对公转账、信用卡 | 支持 | 暂无信息 |
| 8 | [ToolCode](<https://www.hvoy.ai/sites/toolcodetop/>) | 99.7% | 5470 ms | 11 | OpenAI、Anthropic | 暂无评分 | 支付宝 | 支持 | 支持 |
| 9 | [XycAi(星道智能)](<https://www.hvoy.ai/sites/xycai/>) | 99% | 6820 ms | 23 | Anthropic、OpenAI、DeepSeek、Google、MiniMax、月之暗面、SpaceXAI、智谱 | 5（1 条） | 暂无信息 | 不支持 | 支持 |
| 10 | [Portal](<https://www.hvoy.ai/sites/portal123top/>) | 99.2% | 12800 ms | 5 | OpenAI | 5（1 条） | 微信、支付宝 | 暂无信息 | 支持 |
| 11 | [LLMAPI](<https://www.hvoy.ai/sites/llmapipro/>) | 99.1% | 5630 ms | 14 | Anthropic、OpenAI、Google | 3.5（4 条） | 暂无信息 | 支持 | 支持 |
| 12 | [SevnX](<https://www.hvoy.ai/sites/sevnxone/>) | 98.3% | 5960 ms | 10 | OpenAI、Anthropic | 5（3 条） | 支付宝 | 暂无信息 | 暂无信息 |
| 13 | [MoreCode](<https://www.hvoy.ai/sites/api1314mcnet/>) | 99.4% | 5570 ms | 26 | 阿里云、Anthropic、DeepSeek、Google、MiniMax、月之暗面、OpenAI、SpaceXAI、Xiaomi、智谱 | 暂无评分 | 暂无信息 | 支持 | 支持 |
| 14 | [MuskAI](<https://www.hvoy.ai/sites/apimuskapicc/>) | 99.7% | 8050 ms | 27 | Anthropic、OpenAI、Google、阿里云、DeepSeek、MiniMax、月之暗面、SpaceXAI、Xiaomi、智谱 | 4.3（3 条） | 暂无信息 | 暂无信息 | 暂无信息 |
| 15 | [ModCon](<https://www.hvoy.ai/sites/modcontop/>) | 100% | 5450 ms | 11 | Anthropic、OpenAI | 5（1 条） | 支付宝 | 暂无信息 | 支持 |
| 16 | [UU API](<https://www.hvoy.ai/sites/uuapinet/>) | 99.7% | 4580 ms | 15 | Anthropic、Google、OpenAI、SpaceXAI | 5（14 条） | USDT、微信、支付宝、对公转账 | 暂无信息 | 支持 |
| 17 | [云渡](<https://www.hvoy.ai/sites/yundulat/>) | 99.6% | 5860 ms | 11 | OpenAI、Anthropic | 5（1 条） | 微信、支付宝 | 支持 | 支持 |
| 18 | [ccgo](<https://www.hvoy.ai/sites/ccgoaicom/>) | 91.9% | 6210 ms | 7 | Anthropic、OpenAI | 5（1 条） | 微信、支付宝、对公转账 | 支持 | 支持 |
| 19 | [NekoCode](<https://www.hvoy.ai/sites/nekocodeai/>) | 99.4% | 7190 ms | 11 | Anthropic、OpenAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 20 | [Volt](<https://www.hvoy.ai/sites/voltapiai/>) | 99.3% | 5630 ms | 25 | Anthropic、Google、OpenAI、阿里云、DeepSeek、MiniMax、月之暗面、智谱、SpaceXAI | 5（1 条） | USDT、微信、支付宝、对公转账 | 支持 | 支持 |
| 21 | [Vibe SubsAPI](<https://www.hvoy.ai/sites/vibesubsapicom/>) | 96.9% | 5740 ms | 9 | 暂无信息 | 暂无评分 | 支付宝、对公转账 | 支持 | 支持 |
| 22 | [AOK](<https://www.hvoy.ai/sites/aokapicom/>) | 98.8% | 6570 ms | 11 | Anthropic、Google、OpenAI、智谱 | 暂无评分 | 支付宝、信用卡 | 暂无信息 | 暂无信息 |
| 23 | [我的贾维斯](<https://www.hvoy.ai/sites/apiaijwscom/>) | 99.3% | 6110 ms | 8 | Anthropic、OpenAI | 4（4 条） | 暂无信息 | 支持 | 支持 |
| 24 | [Moniker](<https://www.hvoy.ai/sites/aimonikertop/>) | 97.2% | 6830 ms | 19 | Anthropic、OpenAI、DeepSeek、Google、SpaceXAI、智谱 | 暂无评分 | 支付宝 | 支持 | 支持 |
| 25 | [baby](<https://www.hvoy.ai/sites/max20cn/>) | 95.8% | 3770 ms | 6 | Anthropic | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 26 | [Z-API](<https://www.hvoy.ai/sites/apitmlabstore/>) | 98.6% | 6640 ms | 8 | OpenAI、Anthropic、ByteDance | 5（1 条） | 支付宝 | 支持 | 不支持 |
| 27 | [Apizh](<https://www.hvoy.ai/sites/apizhnet/>) | 75.9% | 5290 ms | 7 | OpenAI、Anthropic | 暂无评分 | 微信、支付宝 | 支持 | 不支持 |
| 28 | [LinkAi](<https://www.hvoy.ai/sites/linkaishop/>) | 95.5% | 5440 ms | 12 | OpenAI、Anthropic、Google | 5（1 条） | 支付宝 | 暂无信息 | 暂无信息 |
| 29 | [tallius.ai](<https://www.hvoy.ai/sites/apitalliusai/>) | 100% | 6400 ms | 15 | Anthropic、OpenAI、DeepSeek、MiniMax | 5（1 条） | 对公转账、信用卡 | 支持 | 支持 |
| 30 | [ForApi](<https://www.hvoy.ai/sites/forapiai/>) | 98.8% | 6610 ms | 11 | Anthropic、OpenAI | 暂无评分 | 微信、支付宝 | 支持 | 暂无信息 |
| 31 | [WorldBase.ai](<https://www.hvoy.ai/sites/worldbaseai/>) | 93.5% | 5250 ms | 13 | OpenAI、Anthropic、智谱 | 暂无评分 | 支付宝 | 支持 | 支持 |
| 32 | [Chintao AI](<https://www.hvoy.ai/sites/chintaocn/>) | 95.2% | 7070 ms | 14 | Anthropic、OpenAI、Google | 暂无评分 | 微信、支付宝 | 支持 | 支持 |
| 33 | [routescope](<https://www.hvoy.ai/sites/routescopeai/>) | 97.2% | 7560 ms | 10 | 暂无信息 | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 34 | [AIMZ](<https://www.hvoy.ai/sites/mzlonetop/>) | 99.2% | 10040 ms | 12 | OpenAI、Anthropic、Google | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 35 | [relaycore](<https://www.hvoy.ai/sites/relaycorecn/>) | 94.2% | 4920 ms | 9 | 暂无信息 | 暂无评分 | 微信 | 支持 | 暂无信息 |
| 36 | [PackyCode](<https://www.hvoy.ai/sites/packyapicom/>) | 88.8% | 5870 ms | 28 | Anthropic、OpenAI、Google、MiniMax、SpaceXAI、智谱、阿里云、DeepSeek、月之暗面、Xiaomi | 3.5（2 条） | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 37 | [RunAPI](<https://www.hvoy.ai/sites/runapico/>) | 86.4% | 4570 ms | 27 | Anthropic、Google、OpenAI、SpaceXAI、xAI、阿里云、DeepSeek、月之暗面、智谱 | 暂无评分 | 支付宝、对公转账、信用卡 | 支持 | 支持 |
| 38 | [Toknex](<https://www.hvoy.ai/sites/toknexai/>) | 99.1% | 4560 ms | 13 | Anthropic、DeepSeek、OpenAI | 4.8（5 条） | 微信、支付宝、信用卡 | 支持 | 支持 |
| 39 | [91token](<https://www.hvoy.ai/sites/91tokencom/>) | 100% | 8210 ms | 15 | Anthropic、DeepSeek、Google、MiniMax、OpenAI、Xiaomi、xAI | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 40 | [悟空API](<https://www.hvoy.ai/sites/wkapiclub/>) | 97.2% | 9450 ms | 17 | OpenAI、Anthropic、Google、SpaceXAI、智谱 | 5（1 条） | 支付宝 | 支持 | 支持 |
| 41 | [滴滴打T](<https://www.hvoy.ai/sites/apiddtcom/>) | 81% | 8050 ms | 13 | OpenAI、Anthropic、Google、SpaceXAI | 暂无评分 | USDT、微信、支付宝、信用卡 | 暂无信息 | 支持 |
| 42 | [unity2](<https://www.hvoy.ai/sites/unity2ai/>) | 89.6% | 6890 ms | 14 | OpenAI、智谱、Anthropic、Google | 4.9（7 条） | 微信、支付宝 | 支持 | 支持 |
| 43 | [ClaudeCN](<https://www.hvoy.ai/sites/claudecntop/>) | 98.8% | 6410 ms | 18 | Anthropic、OpenAI、DeepSeek、Google、MiniMax、智谱 | 暂无评分 | 微信 | 暂无信息 | 不支持 |
| 44 | [Euzhi](<https://www.hvoy.ai/sites/apieuzhicom/>) | 96.4% | 13100 ms | 5 | OpenAI | 暂无评分 | 支付宝 | 支持 | 支持 |
| 45 | [浮生云算](<https://www.hvoy.ai/sites/fushengyunsuancom/>) | 96.4% | 10790 ms | 14 | OpenAI、Anthropic、SpaceXAI、xAI | 5（2 条） | 支付宝 | 支持 | 不支持 |
| 46 | [词易](<https://www.hvoy.ai/sites/chiyicncom/>) | 99% | 9050 ms | 11 | OpenAI、Anthropic、Google | 5（5 条） | 支付宝 | 支持 | 支持 |
| 47 | [我的刀盾](<https://www.hvoy.ai/sites/daodunapicom/>) | 83.7% | 4700 ms | 15 | Anthropic、Google、OpenAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 48 | [AutoRouter](<https://www.hvoy.ai/sites/autorouterio/>) | 99.7% | 5550 ms | 22 | OpenAI、Anthropic、Google、阿里云、DeepSeek、月之暗面、SpaceXAI、智谱 | 暂无评分 | 微信、支付宝、信用卡 | 支持 | 不支持 |
| 49 | [Token-AI](<https://www.hvoy.ai/sites/tkenme/>) | 95.4% | 11170 ms | 8 | 暂无信息 | 暂无评分 | USDT、微信、支付宝、对公转账 | 不支持 | 支持 |
| 50 | [智惠API](<https://www.hvoy.ai/sites/apiapi2cncom/>) | 95.2% | 9710 ms | 14 | Anthropic、Google、OpenAI、SpaceXAI | 5（34 条） | 微信、支付宝、信用卡 | 支持 | 暂无信息 |
| 51 | [zToken](<https://www.hvoy.ai/sites/aiztokendev/>) | 100% | 6550 ms | 4 | 暂无信息 | 暂无评分 | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 52 | [Frontier Intelligence](<https://www.hvoy.ai/sites/apifrontierintelligencetech/>) | 65.5% | 5640 ms | 6 | OpenAI | 5（5 条） | 微信、支付宝、对公转账、信用卡 | 支持 | 支持 |
| 53 | [tokenshop](<https://www.hvoy.ai/sites/tokenshophomes/>) | 98.5% | 5500 ms | 11 | OpenAI、Anthropic | 5（1 条） | USDT、微信、支付宝 | 支持 | 暂无信息 |
| 54 | [夯炸了AI](<https://www.hvoy.ai/sites/apihangzhalecom/>) | 83.4% | 6430 ms | 15 | OpenAI、Anthropic、Google | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 55 | [Mintpop](<https://www.hvoy.ai/sites/mintpopai/>) | 99.4% | 9170 ms | 8 | 暂无信息 | 5（1 条） | 微信、支付宝、信用卡 | 暂无信息 | 暂无信息 |
| 56 | [天枢](<https://www.hvoy.ai/sites/tianshuorg/>) | 80.7% | 8420 ms | 24 | OpenAI、Anthropic、Google、阿里云、DeepSeek、MiniMax、月之暗面、SpaceXAI、智谱 | 暂无评分 | USDT、微信、支付宝、对公转账 | 支持 | 支持 |
| 57 | [聚星AI](<https://www.hvoy.ai/sites/juxingaitop/>) | 96.3% | 11500 ms | 19 | Anthropic、OpenAI、DeepSeek、Google、月之暗面、智谱 | 3（2 条） | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 58 | [DragToken](<https://www.hvoy.ai/sites/dragtokenscom/>) | 69.6% | 6640 ms | 14 | OpenAI、Anthropic、SpaceXAI、xAI | 5（48 条） | 微信、支付宝、对公转账 | 暂无信息 | 暂无信息 |
| 59 | [Poixe AI](<https://www.hvoy.ai/sites/poixecom/>) | 74.4% | 4680 ms | 20 | Anthropic、DeepSeek、Google、月之暗面、OpenAI、SpaceXAI | 5（1 条） | 支付宝、对公转账、信用卡 | 暂无信息 | 暂无信息 |
| 60 | [SadAI](<https://www.hvoy.ai/sites/sadaicc/>) | 85.2% | 9520 ms | 8 | OpenAI、SpaceXAI、Anthropic | 5（2 条） | 微信、支付宝 | 支持 | 暂无信息 |
| 61 | [AnPin AI](<https://www.hvoy.ai/sites/anpinai/>) | 41.5% | 10490 ms | 10 | Anthropic、OpenAI | 5（1 条） | USDT、微信、支付宝、对公转账 | 暂无信息 | 暂无信息 |
| 62 | [Apiporter](<https://www.hvoy.ai/sites/apiportercom/>) | 81% | 10170 ms | 22 | OpenAI、Anthropic、Google、阿里云、DeepSeek、智谱 | 5（2 条） | 支付宝、对公转账 | 暂无信息 | 支持 |
| 63 | [ClauqeAI](<https://www.hvoy.ai/sites/apiclauqeai/>) | 86% | 5220 ms | 6 | Anthropic、OpenAI | 5（1 条） | 微信、支付宝 | 支持 | 暂无信息 |
| 64 | [瓦瓦AI](<https://www.hvoy.ai/sites/wawapitop/>) | 89% | 6430 ms | 12 | OpenAI、Anthropic | 5（24 条） | 微信、支付宝 | 支持 | 支持 |
| 65 | [辰数AI](<https://www.hvoy.ai/sites/xzgcasia/>) | 82.5% | 11380 ms | 4 | 暂无信息 | 暂无评分 | 支付宝、对公转账 | 支持 | 支持 |
| 66 | [AIHUB](<https://www.hvoy.ai/sites/aihubtop/>) | 83.8% | 9380 ms | 4 | 暂无信息 | 暂无评分 | 微信、支付宝 | 支持 | 支持 |
| 67 | [UoCode](<https://www.hvoy.ai/sites/uocodecom/>) | 91.1% | 7430 ms | 12 | Anthropic、OpenAI、Google | 暂无评分 | 微信、支付宝 | 支持 | 暂无信息 |
| 68 | [优兔API](<https://www.hvoy.ai/sites/apiyou2apicom/>) | 94% | 11880 ms | 13 | Anthropic、OpenAI、SpaceXAI | 暂无评分 | 微信、支付宝、信用卡 | 支持 | 暂无信息 |
| 69 | [JBB金贝贝](<https://www.hvoy.ai/sites/jbbtcc/>) | 63.4% | 9150 ms | 19 | OpenAI、Anthropic、Google、DeepSeek、SpaceXAI、xAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 70 | [DawCode](<https://www.hvoy.ai/sites/dawclaudecodecom/>) | 63.1% | 6030 ms | 15 | Anthropic、OpenAI、Google | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 71 | [A6api](<https://www.hvoy.ai/sites/a6apicom/>) | 97.5% | 7450 ms | 26 | Anthropic、DeepSeek、Google、MiniMax、月之暗面、OpenAI、SpaceXAI、Xiaomi、智谱、xAI | 5（2 条） | USDT、微信、支付宝 | 暂无信息 | 暂无信息 |
| 72 | [Hiyo](<https://www.hvoy.ai/sites/codexhiyotop/>) | 100% | 7430 ms | 4 | OpenAI | 5（1 条） | USDT、微信、支付宝、信用卡 | 支持 | 不支持 |
| 73 | [ttflows](<https://www.hvoy.ai/sites/apittflowscom/>) | 97.3% | 6230 ms | 10 | Anthropic、OpenAI | 暂无评分 | 支付宝 | 支持 | 不支持 |
| 74 | [quotarouter](<https://www.hvoy.ai/sites/quotarouterai/>) | 82% | 6160 ms | 15 | Anthropic、DeepSeek、Google、OpenAI | 暂无评分 | USDT、微信、信用卡 | 支持 | 暂无信息 |
| 75 | [onehop](<https://www.hvoy.ai/sites/onehopai/>) | 96.1% | 6690 ms | 21 | Anthropic、DeepSeek、Google、MiniMax、月之暗面、OpenAI、智谱 | 暂无评分 | USDT、支付宝、信用卡 | 支持 | 暂无信息 |
| 76 | [AIGateHub](<https://www.hvoy.ai/sites/apivllmproxycom/>) | 84.7% | 7310 ms | 14 | Anthropic、OpenAI、Google | 5（2 条） | USDT、支付宝、对公转账 | 支持 | 支持 |
| 77 | [Dmxcode](<https://www.hvoy.ai/sites/kuaidmxcodecom/>) | 88.2% | 9150 ms | 17 | Anthropic、OpenAI、Google、SpaceXAI、智谱 | 5（1 条） | 微信、支付宝 | 支持 | 支持 |
| 78 | [RelayNest](<https://www.hvoy.ai/sites/relaynesttop/>) | 87.4% | 7180 ms | 11 | OpenAI、Anthropic | 5（1 条） | 支付宝 | 暂无信息 | 不支持 |
| 79 | [猪猪 API](<https://www.hvoy.ai/sites/kpzhucom/>) | 75.8% | 7000 ms | 13 | Anthropic、OpenAI、Google | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 80 | [SwitchBase](<https://www.hvoy.ai/sites/switchbasevip/>) | 53.5% | 11050 ms | 10 | Anthropic、OpenAI、Google | 5（3 条） | 微信、支付宝、对公转账 | 支持 | 支持 |
| 81 | [Modelflare](<https://www.hvoy.ai/sites/modelflaredev/>) | 97.6% | 7390 ms | 10 | OpenAI、Anthropic、月之暗面、SpaceXAI | 5（1 条） | 暂无信息 | 暂无信息 | 暂无信息 |
| 82 | [ZZZ](<https://www.hvoy.ai/sites/apiej2075com/>) | 72.9% | 11340 ms | 13 | OpenAI、Anthropic、SpaceXAI | 5（1 条） | 微信、对公转账 | 支持 | 支持 |
| 83 | [ApiBasis](<https://www.hvoy.ai/sites/apibasiscom/>) | 80.1% | 6260 ms | 15 | OpenAI、Anthropic、Google、SpaceXAI、xAI | 暂无评分 | 支付宝 | 支持 | 不支持 |

> 排名和数据仅供参考。正式使用前请先小额充值并自行测试，不要在任何中转站长期存放大额余额。
<!-- HVOY_RANKING_END -->
