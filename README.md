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

站点状态和模型价格变得太快，靠手工整理很容易过期。所以我在 [禾维 AI](https://hvoy.ai) 增加了中转站排行榜，后台会持续探测接口，记录在线率和平均延迟，并更新模型价格和服务信息。

我会尽量让数据保持准确，但榜单只能作为挑选时的参考。真正要用之前，还是建议先小额充值，跑一段时间，再决定要不要继续使用。

具体的检测代码目前不再开源，主要是不想让检测方式被针对或绕过。

如果你是中转站站长，也希望加入评测，可以前往 [禾维 AI](https://hvoy.ai) 的 Contact Us 页面提交站点信息。

<!-- HVOY_RANKING_START -->
## AI API 中转站实时排行榜

> 数据更新于 2026-07-19，当前共收录 86 个站点。数据来自 [禾维 AI](https://www.hvoy.ai)，会随站点探测结果和公开信息定期更新。

| 排名 | 站点 | 在线率 | 平均延迟 | 模型数量 | 主要模型厂商 | 用户评分 | 支付方式 | 退款 | 发票 |
| ---: | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| 1 | [CUN.ai](<https://www.hvoy.ai/sites/cunai/>) | 98% | 7870 ms | 25 | 阿里云、Anthropic、DeepSeek、Google、MiniMax、月之暗面、OpenAI、智谱 | 4.8（53 条） | USDT、微信、支付宝、信用卡 | 暂无信息 | 支持 |
| 2 | [9527code](<https://www.hvoy.ai/sites/9527codecom/>) | 98.9% | 4740 ms | 26 | Anthropic、OpenAI、DeepSeek、Google、MiniMax、月之暗面、阿里云、SpaceXAI、智谱 | 5（51 条） | 微信、支付宝、对公转账 | 支持 | 支持 |
| 3 | [ToolCode](<https://www.hvoy.ai/sites/toolcodetop/>) | 100% | 3900 ms | 11 | OpenAI、Anthropic | 暂无评分 | 支付宝 | 支持 | 支持 |
| 4 | [灵算](<https://www.hvoy.ai/sites/lingsuantop/>) | 99.3% | 6740 ms | 11 | Anthropic、OpenAI、Google、SpaceXAI | 4.6（10 条） | USDT、微信、支付宝、对公转账、信用卡 | 支持 | 支持 |
| 5 | [ccgo](<https://www.hvoy.ai/sites/ccgoaicom/>) | 92.1% | 5570 ms | 4 | Anthropic、OpenAI | 5（1 条） | 微信、支付宝、对公转账 | 支持 | 支持 |
| 6 | [XycAi(星道智能)](<https://www.hvoy.ai/sites/xycai/>) | 100% | 5900 ms | 19 | Anthropic、OpenAI、DeepSeek、Google、MiniMax、月之暗面、SpaceXAI、智谱 | 5（1 条） | 暂无信息 | 不支持 | 支持 |
| 7 | [baby](<https://www.hvoy.ai/sites/max20cn/>) | 99.4% | 3510 ms | 6 | Anthropic | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 8 | [hao.ai](<https://www.hvoy.ai/sites/haoai/>) | 97.2% | 3840 ms | 11 | Anthropic、OpenAI | 5（1 条） | 微信、支付宝、对公转账、信用卡 | 支持 | 暂无信息 |
| 9 | [RightCode](<https://www.hvoy.ai/sites/rightcodes/>) | 100% | 6930 ms | 25 | Anthropic、DeepSeek、Google、OpenAI、阿里云、月之暗面、SpaceXAI、智谱 | 4.6（10 条） | 支付宝 | 支持 | 支持 |
| 10 | [LLMAPI](<https://www.hvoy.ai/sites/llmapipro/>) | 99.7% | 5820 ms | 14 | Anthropic、OpenAI、Google | 3.5（4 条） | 暂无信息 | 支持 | 支持 |
| 11 | [ModCon](<https://www.hvoy.ai/sites/modcontop/>) | 99.8% | 4590 ms | 11 | Anthropic、OpenAI | 5（1 条） | 支付宝 | 暂无信息 | 支持 |
| 12 | [Claude API](<https://www.hvoy.ai/sites/claudeapicom/>) | 100% | 4210 ms | 4 | Anthropic | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 13 | [EiRouter](<https://www.hvoy.ai/sites/eiroutercom/>) | 94.8% | 5350 ms | 11 | Anthropic、OpenAI | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 14 | [MuskAI](<https://www.hvoy.ai/sites/apimuskapicc/>) | 100% | 6820 ms | 27 | Anthropic、OpenAI、Google、阿里云、DeepSeek、MiniMax、月之暗面、SpaceXAI、Xiaomi、智谱 | 4.3（3 条） | 暂无信息 | 暂无信息 | 暂无信息 |
| 15 | [PackyCode](<https://www.hvoy.ai/sites/packyapicom/>) | 100% | 5000 ms | 28 | Anthropic、OpenAI、Google、MiniMax、SpaceXAI、智谱、阿里云、DeepSeek、月之暗面、Xiaomi | 3.5（2 条） | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 16 | [UU API](<https://www.hvoy.ai/sites/uuapinet/>) | 99.2% | 3960 ms | 15 | Anthropic、Google、OpenAI、SpaceXAI | 5（14 条） | USDT、微信、支付宝、对公转账 | 暂无信息 | 支持 |
| 17 | [MoreCode](<https://www.hvoy.ai/sites/api1314mcnet/>) | 99.7% | 5310 ms | 26 | 阿里云、Anthropic、DeepSeek、Google、MiniMax、月之暗面、OpenAI、SpaceXAI、Xiaomi、智谱 | 暂无评分 | 暂无信息 | 支持 | 支持 |
| 18 | [SudoCode](<https://www.hvoy.ai/sites/sudocodechat/>) | 100% | 4650 ms | 11 | OpenAI、Anthropic | 4.7（6 条） | USDT、微信、支付宝、对公转账 | 支持 | 支持 |
| 19 | [NekoCode](<https://www.hvoy.ai/sites/nekocodeai/>) | 95.8% | 5700 ms | 11 | Anthropic、OpenAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 20 | [LinkAi](<https://www.hvoy.ai/sites/linkaishop/>) | 100% | 4510 ms | 12 | OpenAI、Anthropic、Google | 5（1 条） | 支付宝 | 暂无信息 | 暂无信息 |
| 21 | [云渡](<https://www.hvoy.ai/sites/yundulat/>) | 98.4% | 4710 ms | 11 | OpenAI、Anthropic | 5（1 条） | 微信、支付宝 | 支持 | 支持 |
| 22 | [Frontier Intelligence](<https://www.hvoy.ai/sites/apifrontierintelligencetech/>) | 99.3% | 5160 ms | 11 | Anthropic、OpenAI | 5（5 条） | 微信、支付宝、对公转账、信用卡 | 支持 | 支持 |
| 23 | [GPTEAM](<https://www.hvoy.ai/sites/portalgpteamservicescom/>) | 97.7% | 6020 ms | 25 | Anthropic、DeepSeek、Google、MiniMax、月之暗面、OpenAI、SpaceXAI、Xiaomi、智谱 | 暂无评分 | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 24 | [AOK](<https://www.hvoy.ai/sites/aokapicom/>) | 99.4% | 5730 ms | 11 | Anthropic、Google、OpenAI、智谱 | 暂无评分 | 支付宝、信用卡 | 暂无信息 | 暂无信息 |
| 25 | [ForApi](<https://www.hvoy.ai/sites/forapiai/>) | 100% | 4900 ms | 11 | Anthropic、OpenAI | 暂无评分 | 微信、支付宝 | 支持 | 暂无信息 |
| 26 | [Vibe SubsAPI](<https://www.hvoy.ai/sites/vibesubsapicom/>) | 98.1% | 6080 ms | 9 | 暂无信息 | 暂无评分 | 支付宝、对公转账 | 支持 | 支持 |
| 27 | [routescope](<https://www.hvoy.ai/sites/routescopeai/>) | 99.7% | 6710 ms | 10 | 暂无信息 | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 28 | [Volt](<https://www.hvoy.ai/sites/voltapiai/>) | 100% | 6520 ms | 25 | Anthropic、Google、OpenAI、阿里云、DeepSeek、MiniMax、月之暗面、智谱、SpaceXAI | 5（1 条） | USDT、微信、支付宝、对公转账 | 支持 | 支持 |
| 29 | [Chintao AI](<https://www.hvoy.ai/sites/chintaocn/>) | 99.7% | 7670 ms | 14 | Anthropic、OpenAI、Google | 暂无评分 | 微信、支付宝 | 支持 | 支持 |
| 30 | [YKH.AI](<https://www.hvoy.ai/sites/apiykhai/>) | 97.3% | 5430 ms | 11 | OpenAI、Anthropic | 5（3 条） | USDT、微信、支付宝、对公转账、信用卡 | 暂无信息 | 支持 |
| 31 | [滴滴打T](<https://www.hvoy.ai/sites/apiddtcom/>) | 97.4% | 4570 ms | 13 | OpenAI、Anthropic、Google、SpaceXAI | 暂无评分 | USDT、微信、支付宝、信用卡 | 暂无信息 | 支持 |
| 32 | [Toknex](<https://www.hvoy.ai/sites/toknexai/>) | 99.4% | 4620 ms | 13 | Anthropic、DeepSeek、OpenAI | 4.2（5 条） | 微信、支付宝、信用卡 | 支持 | 支持 |
| 33 | [Moniker](<https://www.hvoy.ai/sites/aimonikertop/>) | 95.6% | 6450 ms | 19 | Anthropic、OpenAI、DeepSeek、Google、SpaceXAI、智谱 | 暂无评分 | 支付宝 | 支持 | 支持 |
| 34 | [球球Token](<https://www.hvoy.ai/sites/qiuqiutokencom/>) | 100% | 8660 ms | 17 | OpenAI、Anthropic、Google、SpaceXAI、xAI | 5（1 条） | USDT、微信、支付宝、对公转账、信用卡 | 暂无信息 | 支持 |
| 35 | [MueMod](<https://www.hvoy.ai/sites/muemodtop/>) | 98.5% | 5690 ms | 10 | Anthropic、OpenAI | 5（2 条） | 支付宝 | 暂无信息 | 支持 |
| 36 | [ZhonZhuan.ai](<https://www.hvoy.ai/sites/zhonzhuanai/>) | 98.3% | 4210 ms | 5 | 暂无信息 | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 37 | [浮生云算](<https://www.hvoy.ai/sites/fushengyunsuancom/>) | 98.9% | 8740 ms | 14 | OpenAI、Anthropic、SpaceXAI、xAI | 5（2 条） | 支付宝 | 支持 | 不支持 |
| 38 | [我的贾维斯](<https://www.hvoy.ai/sites/apiaijwscom/>) | 94.9% | 5620 ms | 8 | Anthropic、OpenAI | 4（4 条） | 暂无信息 | 支持 | 支持 |
| 39 | [SadAI](<https://www.hvoy.ai/sites/sadaicc/>) | 99.4% | 9630 ms | 8 | OpenAI、SpaceXAI、Anthropic | 5（2 条） | 微信、支付宝 | 支持 | 暂无信息 |
| 40 | [IKunCode](<https://www.hvoy.ai/sites/apiikuncodecc/>) | 99.7% | 4870 ms | 14 | Anthropic、Google、OpenAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 41 | [RunAPI](<https://www.hvoy.ai/sites/runapico/>) | 86.5% | 4460 ms | 28 | Anthropic、Google、OpenAI、SpaceXAI、xAI、阿里云、DeepSeek、月之暗面、智谱 | 暂无评分 | 支付宝、对公转账、信用卡 | 支持 | 支持 |
| 42 | [SuiXiang](<https://www.hvoy.ai/sites/suixiangcom/>) | 99.3% | 7830 ms | 11 | 暂无信息 | 5（2 条） | 支付宝 | 支持 | 支持 |
| 43 | [tallius.ai](<https://www.hvoy.ai/sites/apitalliusai/>) | 100% | 6360 ms | 15 | Anthropic、OpenAI、DeepSeek、MiniMax | 5（1 条） | 对公转账、信用卡 | 支持 | 支持 |
| 44 | [词易](<https://www.hvoy.ai/sites/chiyicncom/>) | 97.8% | 9730 ms | 11 | OpenAI、Anthropic、Google | 5（5 条） | 支付宝 | 支持 | 支持 |
| 45 | [JBB金贝贝](<https://www.hvoy.ai/sites/jbbtcc/>) | 99% | 7800 ms | 19 | OpenAI、Anthropic、Google、DeepSeek、SpaceXAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 46 | [91token](<https://www.hvoy.ai/sites/91tokencom/>) | 100% | 8330 ms | 22 | Anthropic、OpenAI、Google、MiniMax、月之暗面、DeepSeek、Xiaomi | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 47 | [ClaudeCN](<https://www.hvoy.ai/sites/claudecntop/>) | 94.4% | 4350 ms | 15 | Anthropic、DeepSeek、OpenAI、MiniMax、智谱 | 暂无评分 | 微信 | 暂无信息 | 不支持 |
| 48 | [DragToken](<https://www.hvoy.ai/sites/dragtokenscom/>) | 94.5% | 7720 ms | 14 | OpenAI、Anthropic、SpaceXAI、xAI | 5（48 条） | 微信、支付宝、对公转账 | 暂无信息 | 暂无信息 |
| 49 | [WorldBase.ai](<https://www.hvoy.ai/sites/worldbaseai/>) | 79.2% | 5540 ms | 13 | OpenAI、Anthropic、智谱 | 暂无评分 | 支付宝 | 支持 | 支持 |
| 50 | [AutoRouter](<https://www.hvoy.ai/sites/autorouterio/>) | 98.9% | 4550 ms | 22 | OpenAI、Anthropic、Google、阿里云、DeepSeek、月之暗面、SpaceXAI、智谱 | 暂无评分 | 微信、支付宝、信用卡 | 支持 | 不支持 |
| 51 | [tokenshop](<https://www.hvoy.ai/sites/tokenshophomes/>) | 98.3% | 4920 ms | 11 | OpenAI、Anthropic | 5（1 条） | USDT、微信、支付宝 | 支持 | 暂无信息 |
| 52 | [zToken](<https://www.hvoy.ai/sites/aiztokendev/>) | 100% | 5370 ms | 4 | 暂无信息 | 暂无评分 | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 53 | [天枢](<https://www.hvoy.ai/sites/tianshuorg/>) | 97.8% | 8160 ms | 24 | OpenAI、Anthropic、Google、阿里云、DeepSeek、MiniMax、月之暗面、SpaceXAI、智谱 | 暂无评分 | USDT、微信、支付宝、对公转账 | 支持 | 支持 |
| 54 | [我的刀盾](<https://www.hvoy.ai/sites/daodunapicom/>) | 94.8% | 4500 ms | 15 | Anthropic、Google、OpenAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 55 | [Mintpop](<https://www.hvoy.ai/sites/mintpopai/>) | 100% | 6520 ms | 8 | 暂无信息 | 5（1 条） | 微信、支付宝、信用卡 | 暂无信息 | 暂无信息 |
| 56 | [Apiporter](<https://www.hvoy.ai/sites/apiportercom/>) | 92.2% | 8250 ms | 22 | OpenAI、Anthropic、Google、阿里云、DeepSeek、智谱 | 5（2 条） | 支付宝、对公转账 | 暂无信息 | 支持 |
| 57 | [SevnX](<https://www.hvoy.ai/sites/sevnxone/>) | 99% | 5830 ms | 10 | OpenAI、Anthropic | 5（3 条） | 支付宝 | 暂无信息 | 暂无信息 |
| 58 | [unity2](<https://www.hvoy.ai/sites/unity2ai/>) | 96.8% | 6720 ms | 14 | OpenAI、智谱、Anthropic、Google | 4.9（7 条） | 微信、支付宝 | 支持 | 支持 |
| 59 | [AIHUB](<https://www.hvoy.ai/sites/aihubtop/>) | 95.2% | 6940 ms | 4 | 暂无信息 | 暂无评分 | 微信、支付宝 | 支持 | 支持 |
| 60 | [辰数AI](<https://www.hvoy.ai/sites/xzgcasia/>) | 91.9% | 6730 ms | 4 | 暂无信息 | 暂无评分 | 支付宝、对公转账 | 支持 | 支持 |
| 61 | [quotarouter](<https://www.hvoy.ai/sites/quotarouterai/>) | 87.5% | 5400 ms | 15 | Anthropic、DeepSeek、Google、OpenAI | 暂无评分 | USDT、微信、信用卡 | 支持 | 暂无信息 |
| 62 | [聚星AI](<https://www.hvoy.ai/sites/juxingaitop/>) | 100% | 13080 ms | 19 | Anthropic、OpenAI、DeepSeek、Google、月之暗面、智谱 | 3（2 条） | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 63 | [luchikey](<https://www.hvoy.ai/sites/sub2apiluchikeycom/>) | 100% | 11430 ms | 20 | OpenAI、Anthropic、DeepSeek、Google、SpaceXAI、智谱、xAI | 5（4 条） | 微信、支付宝 | 支持 | 支持 |
| 64 | [Z-API](<https://www.hvoy.ai/sites/apitmlabstore/>) | 80% | 5770 ms | 7 | OpenAI、Anthropic、ByteDance | 5（1 条） | 支付宝 | 支持 | 不支持 |
| 65 | [AIGateHub](<https://www.hvoy.ai/sites/apivllmproxycom/>) | 97.5% | 5510 ms | 14 | Anthropic、OpenAI、Google | 5（2 条） | USDT、支付宝、对公转账 | 支持 | 支持 |
| 66 | [AnPin AI](<https://www.hvoy.ai/sites/anpinai/>) | 50.5% | 6870 ms | 10 | Anthropic、OpenAI | 5（1 条） | USDT、微信、支付宝、对公转账 | 暂无信息 | 暂无信息 |
| 67 | [Apizh](<https://www.hvoy.ai/sites/apizhnet/>) | 49.8% | 6180 ms | 7 | OpenAI、Anthropic | 暂无评分 | 微信、支付宝 | 支持 | 不支持 |
| 68 | [ClauqeAI](<https://www.hvoy.ai/sites/apiclauqeai/>) | 90.2% | 5590 ms | 6 | Anthropic、OpenAI | 5（1 条） | 微信、支付宝 | 支持 | 暂无信息 |
| 69 | [AIMZ](<https://www.hvoy.ai/sites/mzlonetop/>) | 96.6% | 8960 ms | 12 | OpenAI、Anthropic、Google | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 70 | [Poixe AI](<https://www.hvoy.ai/sites/poixecom/>) | 73% | 5120 ms | 18 | Anthropic、DeepSeek、Google、OpenAI、SpaceXAI | 5（1 条） | 支付宝、对公转账、信用卡 | 暂无信息 | 暂无信息 |
| 71 | [Euzhi](<https://www.hvoy.ai/sites/apieuzhicom/>) | 100% | 11990 ms | 5 | OpenAI | 暂无评分 | 支付宝 | 支持 | 支持 |
| 72 | [Lumin AI](<https://www.hvoy.ai/sites/ailuminaicc/>) | 99.9% | 5160 ms | 11 | Anthropic、OpenAI | 5（2 条） | 微信、支付宝 | 支持 | 暂无信息 |
| 73 | [瓦瓦AI](<https://www.hvoy.ai/sites/wawapitop/>) | 88.3% | 4940 ms | 12 | OpenAI、Anthropic | 5（24 条） | 微信、支付宝 | 支持 | 支持 |
| 74 | [猪猪 API](<https://www.hvoy.ai/sites/kpzhucom/>) | 94.7% | 6130 ms | 12 | Anthropic、Google、OpenAI | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 75 | [Hiyo](<https://www.hvoy.ai/sites/codexhiyotop/>) | 100% | 5290 ms | 4 | OpenAI | 5（1 条） | USDT、微信、支付宝、信用卡 | 支持 | 不支持 |
| 76 | [夯炸了AI](<https://www.hvoy.ai/sites/apihangzhalecom/>) | 95.9% | 5830 ms | 16 | OpenAI、Anthropic、Google、SpaceXAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 77 | [DawCode](<https://www.hvoy.ai/sites/dawclaudecodecom/>) | 60.3% | 5640 ms | 15 | Anthropic、OpenAI、Google | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 78 | [UoCode](<https://www.hvoy.ai/sites/uocodecom/>) | 73.4% | 6250 ms | 13 | Anthropic、OpenAI、Google | 暂无评分 | 微信、支付宝 | 支持 | 暂无信息 |
| 79 | [A6api](<https://www.hvoy.ai/sites/a6apicom/>) | 98.1% | 6760 ms | 25 | Anthropic、DeepSeek、Google、MiniMax、月之暗面、OpenAI、SpaceXAI、Xiaomi、智谱、xAI | 5（2 条） | USDT、微信、支付宝 | 暂无信息 | 暂无信息 |
| 80 | [ttflows](<https://www.hvoy.ai/sites/apittflowscom/>) | 99.7% | 7070 ms | 10 | Anthropic、OpenAI | 暂无评分 | 支付宝 | 支持 | 不支持 |
| 81 | [悟空API](<https://www.hvoy.ai/sites/wkapiclub/>) | 97.8% | 6060 ms | 15 | OpenAI、Anthropic、Google、SpaceXAI、智谱 | 5（1 条） | 支付宝 | 支持 | 支持 |
| 82 | [SwitchBase](<https://www.hvoy.ai/sites/switchbasevip/>) | 53.9% | 10650 ms | 10 | Anthropic、OpenAI、Google | 5（3 条） | 微信、支付宝、对公转账 | 支持 | 支持 |
| 83 | [优兔API](<https://www.hvoy.ai/sites/apiyou2apicom/>) | 74.1% | 8320 ms | 13 | Anthropic、OpenAI、SpaceXAI | 暂无评分 | 微信、支付宝、信用卡 | 支持 | 暂无信息 |
| 84 | [RelayNest](<https://www.hvoy.ai/sites/relaynesttop/>) | 92.2% | 5590 ms | 11 | OpenAI、Anthropic | 5（1 条） | 支付宝 | 暂无信息 | 不支持 |
| 85 | [ZZZ](<https://www.hvoy.ai/sites/apiej2075com/>) | 84.4% | 5330 ms | 13 | OpenAI、Anthropic、SpaceXAI | 5（1 条） | 微信、对公转账 | 支持 | 支持 |
| 86 | [Modelflare](<https://www.hvoy.ai/sites/modelflaredev/>) | 98.9% | 6270 ms | 10 | OpenAI、Anthropic、月之暗面、SpaceXAI | 5（1 条） | 暂无信息 | 暂无信息 | 暂无信息 |

> 排名和数据仅供参考。正式使用前请先小额充值并自行测试，不要在任何中转站长期存放大额余额。
<!-- HVOY_RANKING_END -->
