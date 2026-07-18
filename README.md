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

> 数据更新于 2026-07-18，当前共收录 89 个站点。数据来自 [禾维 AI](https://hvoy.ai)，会随站点探测结果和公开信息定期更新。

| 排名 | 站点 | 在线率 | 平均延迟 | 模型数量 | 主要模型厂商 | 用户评分 | 支付方式 | 退款 | 发票 |
| ---: | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| 1 | [LLMAPI](<https://hvoy.ai/relaySite?id=39825&name=LLMAPI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.7% | 5360 ms | 14 | Anthropic、OpenAI、Google | 3.8（4 条） | 暂无信息 | 支持 | 支持 |
| 2 | [CUN.ai](<https://hvoy.ai/leaderboard>) | 97.1% | 8300 ms | 23 | 阿里云、Anthropic、DeepSeek、Google、MiniMax、月之暗面、OpenAI、智谱 | 4.8（50 条） | USDT、微信、支付宝、信用卡 | 暂无信息 | 暂无信息 |
| 3 | [SudoCode](<https://hvoy.ai/relaySite?id=40095&name=SudoCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.7% | 4900 ms | 11 | OpenAI、Anthropic | 4.7（6 条） | USDT、微信、支付宝、对公转账 | 支持 | 支持 |
| 4 | [9527code](<https://hvoy.ai/relaySite?id=39937&name=9527code&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.1% | 5450 ms | 26 | Anthropic、OpenAI、DeepSeek、Google、MiniMax、月之暗面、阿里云、SpaceXAI、智谱 | 5（50 条） | 微信、支付宝、对公转账 | 支持 | 支持 |
| 5 | [我的贾维斯](<https://hvoy.ai/relaySite?id=40324&name=%E6%88%91%E7%9A%84%E8%B4%BE%E7%BB%B4%E6%96%AF&source=awesomeaiplan&position=awesomeaiplan_rank>) | 96.8% | 7670 ms | 8 | Anthropic、OpenAI | 4（4 条） | 暂无信息 | 支持 | 支持 |
| 6 | [灵算](<https://hvoy.ai/relaySite?id=39980&name=%E7%81%B5%E7%AE%97&source=awesomeaiplan&position=awesomeaiplan_rank>) | 74.4% | 7300 ms | 11 | Anthropic、OpenAI、Google | 4.6（10 条） | USDT、微信、支付宝、对公转账、信用卡 | 支持 | 支持 |
| 7 | [hao.ai](<https://hvoy.ai/relaySite?id=40235&name=hao.ai&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 4210 ms | 11 | Anthropic、OpenAI | 5（1 条） | 微信、支付宝、对公转账、信用卡 | 支持 | 暂无信息 |
| 8 | [baby](<https://hvoy.ai/relaySite?id=40299&name=baby&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.4% | 3720 ms | 9 | Anthropic、OpenAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 9 | [XycAi(星道智能)](<https://hvoy.ai/relaySite?id=40216&name=XycAi%28%E6%98%9F%E9%81%93%E6%99%BA%E8%83%BD%29&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.7% | 6210 ms | 19 | Anthropic、OpenAI、DeepSeek、Google、SpaceXAI、智谱 | 5（1 条） | 暂无信息 | 不支持 | 支持 |
| 10 | [云渡](<https://hvoy.ai/relaySite?id=40175&name=%E4%BA%91%E6%B8%A1&source=awesomeaiplan&position=awesomeaiplan_rank>) | 94.1% | 5390 ms | 11 | OpenAI、Anthropic | 5（1 条） | 微信、支付宝 | 支持 | 支持 |
| 11 | [EiRouter](<https://hvoy.ai/relaySite?id=40369&name=EiRouter&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.1% | 6000 ms | 11 | Anthropic、OpenAI | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 12 | [ToolCode](<https://hvoy.ai/relaySite?id=40208&name=ToolCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 5390 ms | 11 | OpenAI、Anthropic | 暂无评分 | 支付宝 | 支持 | 支持 |
| 13 | [ForApi](<https://hvoy.ai/relaySite?id=40429&name=ForApi&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.1% | 5700 ms | 11 | Anthropic、OpenAI | 暂无评分 | 微信、支付宝 | 支持 | 暂无信息 |
| 14 | [Claude API](<https://hvoy.ai/relaySite?id=40010&name=Claude+API&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.4% | 4930 ms | 4 | Anthropic | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 15 | [滴滴打T](<https://hvoy.ai/relaySite?id=40393&name=%E6%BB%B4%E6%BB%B4%E6%89%93T&source=awesomeaiplan&position=awesomeaiplan_rank>) | 92.2% | 5610 ms | 13 | OpenAI、Anthropic、Google、SpaceXAI | 暂无评分 | USDT、微信、支付宝 | 暂无信息 | 支持 |
| 16 | [Portal](<https://hvoy.ai/relaySite?id=40338&name=Portal&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 7260 ms | 5 | OpenAI | 5（1 条） | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 17 | [MoreCode](<https://hvoy.ai/relaySite?id=40201&name=MoreCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 5130 ms | 26 | 阿里云、Anthropic、DeepSeek、Google、MiniMax、月之暗面、OpenAI、SpaceXAI、Xiaomi、智谱 | 暂无评分 | 暂无信息 | 支持 | 支持 |
| 18 | [MuskAI](<https://hvoy.ai/relaySite?id=39946&name=MuskAI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.7% | 7330 ms | 27 | Anthropic、OpenAI、Google、阿里云、DeepSeek、MiniMax、月之暗面、SpaceXAI、Xiaomi、智谱 | 4.3（3 条） | 暂无信息 | 暂无信息 | 暂无信息 |
| 19 | [UU API](<https://hvoy.ai/relaySite?id=39863&name=UU+API&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.3% | 4280 ms | 15 | Anthropic、Google、OpenAI、SpaceXAI | 5（14 条） | USDT、微信、支付宝、对公转账 | 暂无信息 | 支持 |
| 20 | [LinkAi](<https://hvoy.ai/relaySite?id=40225&name=LinkAi&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.7% | 5000 ms | 12 | OpenAI、Anthropic、Google | 5（1 条） | 支付宝 | 暂无信息 | 暂无信息 |
| 21 | [GPTEAM](<https://hvoy.ai/relaySite?id=39923&name=GPTEAM&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.2% | 6980 ms | 25 | Anthropic、DeepSeek、Google、MiniMax、月之暗面、OpenAI、SpaceXAI、Xiaomi、智谱 | 暂无评分 | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 22 | [Frontier Intelligence](<https://hvoy.ai/relaySite?id=39961&name=Frontier+Intelligence&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.3% | 5460 ms | 11 | Anthropic、OpenAI | 5（5 条） | 微信、支付宝、对公转账、信用卡 | 支持 | 支持 |
| 23 | [智惠API](<https://hvoy.ai/relaySite?id=40026&name=%E6%99%BA%E6%83%A0API&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.6% | 6000 ms | 14 | Anthropic、Google、OpenAI、SpaceXAI | 5（34 条） | 微信、支付宝、信用卡 | 支持 | 暂无信息 |
| 24 | [Vibe SubsAPI](<https://hvoy.ai/relaySite?id=40432&name=Vibe+SubsAPI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.4% | 5610 ms | 9 | 暂无信息 | 暂无评分 | 支付宝、对公转账 | 支持 | 支持 |
| 25 | [NekoCode](<https://hvoy.ai/relaySite?id=39832&name=NekoCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.7% | 6100 ms | 11 | Anthropic、OpenAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 26 | [Z-API](<https://hvoy.ai/relaySite?id=40323&name=Z-API&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.6% | 5910 ms | 8 | OpenAI、Anthropic、ByteDance | 5（1 条） | 支付宝 | 支持 | 不支持 |
| 27 | [RightCode](<https://hvoy.ai/relaySite?id=39848&name=RightCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 94.2% | 7120 ms | 25 | Anthropic、DeepSeek、Google、OpenAI、阿里云、月之暗面、SpaceXAI、智谱 | 4.6（10 条） | 支付宝 | 支持 | 支持 |
| 28 | [AnPin AI](<https://hvoy.ai/relaySite?id=39783&name=AnPin+AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.2% | 6130 ms | 10 | Anthropic、OpenAI | 5（1 条） | USDT、微信、支付宝、对公转账 | 暂无信息 | 暂无信息 |
| 29 | [Moniker](<https://hvoy.ai/relaySite?id=40428&name=Moniker&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.8% | 5780 ms | 19 | Anthropic、OpenAI、DeepSeek、Google、SpaceXAI、智谱 | 暂无评分 | 支付宝 | 支持 | 支持 |
| 30 | [PackyCode](<https://hvoy.ai/relaySite?id=39842&name=PackyCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 93.4% | 6340 ms | 28 | Anthropic、OpenAI、Google、MiniMax、SpaceXAI、智谱、阿里云、DeepSeek、月之暗面、Xiaomi | 3.5（2 条） | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 31 | [DragToken](<https://hvoy.ai/relaySite?id=40419&name=DragToken&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.4% | 6550 ms | 12 | OpenAI、Anthropic | 5（46 条） | 微信、支付宝、对公转账 | 暂无信息 | 暂无信息 |
| 32 | [AOK](<https://hvoy.ai/relaySite?id=40009&name=AOK&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.4% | 6300 ms | 11 | Anthropic、Google、OpenAI、智谱 | 暂无评分 | 支付宝、信用卡 | 暂无信息 | 暂无信息 |
| 33 | [YKH.AI](<https://hvoy.ai/relaySite?id=39975&name=YKH.AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.7% | 6950 ms | 11 | OpenAI、Anthropic | 5（3 条） | USDT、微信、支付宝、对公转账、信用卡 | 暂无信息 | 支持 |
| 34 | [Apizh](<https://hvoy.ai/relaySite?id=40339&name=Apizh&source=awesomeaiplan&position=awesomeaiplan_rank>) | 72.6% | 5490 ms | 7 | OpenAI、Anthropic | 暂无评分 | 微信、支付宝 | 支持 | 不支持 |
| 35 | [AIMZ](<https://hvoy.ai/relaySite?id=39944&name=AIMZ&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.4% | 8470 ms | 12 | OpenAI、Anthropic、Google | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 36 | [WorldBase.ai](<https://hvoy.ai/relaySite?id=40169&name=WorldBase.ai&source=awesomeaiplan&position=awesomeaiplan_rank>) | 90.2% | 6320 ms | 13 | OpenAI、Anthropic、智谱 | 暂无评分 | 支付宝 | 支持 | 支持 |
| 37 | [球球Token](<https://hvoy.ai/relaySite?id=39921&name=%E7%90%83%E7%90%83Token&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.4% | 9290 ms | 17 | OpenAI、Anthropic、Google、SpaceXAI、xAI | 5（1 条） | USDT、微信、支付宝、对公转账、信用卡 | 暂无信息 | 支持 |
| 38 | [Toknex](<https://hvoy.ai/relaySite?id=40158&name=Toknex&source=awesomeaiplan&position=awesomeaiplan_rank>) | 95.6% | 5730 ms | 13 | Anthropic、DeepSeek、OpenAI | 4.2（5 条） | 微信、支付宝、信用卡 | 支持 | 支持 |
| 39 | [词易](<https://hvoy.ai/relaySite?id=40001&name=%E8%AF%8D%E6%98%93&source=awesomeaiplan&position=awesomeaiplan_rank>) | 89.2% | 8820 ms | 11 | OpenAI、Anthropic、Google | 5（5 条） | 支付宝 | 支持 | 支持 |
| 40 | [routescope](<https://hvoy.ai/relaySite?id=40414&name=routescope&source=awesomeaiplan&position=awesomeaiplan_rank>) | 95% | 7200 ms | 10 | 暂无信息 | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 41 | [Chintao AI](<https://hvoy.ai/relaySite?id=39795&name=Chintao+AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 95.2% | 7030 ms | 14 | Anthropic、OpenAI、Google | 暂无评分 | 微信、支付宝 | 支持 | 支持 |
| 42 | [SuiXiang](<https://hvoy.ai/relaySite?id=40328&name=SuiXiang&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 8490 ms | 11 | 暂无信息 | 5（2 条） | 支付宝 | 支持 | 支持 |
| 43 | [RunAPI](<https://hvoy.ai/relaySite?id=39850&name=RunAPI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 86.2% | 4850 ms | 29 | Anthropic、Google、OpenAI、SpaceXAI、xAI、阿里云、DeepSeek、MiniMax、月之暗面、智谱 | 暂无评分 | 支付宝、对公转账、信用卡 | 支持 | 支持 |
| 44 | [浮生云算](<https://hvoy.ai/relaySite?id=40179&name=%E6%B5%AE%E7%94%9F%E4%BA%91%E7%AE%97&source=awesomeaiplan&position=awesomeaiplan_rank>) | 96.7% | 10830 ms | 13 | OpenAI、Anthropic、SpaceXAI | 5（2 条） | 支付宝 | 支持 | 不支持 |
| 45 | [天枢](<https://hvoy.ai/relaySite?id=40341&name=%E5%A4%A9%E6%9E%A2&source=awesomeaiplan&position=awesomeaiplan_rank>) | 96.3% | 8420 ms | 24 | OpenAI、Anthropic、Google、阿里云、DeepSeek、MiniMax、月之暗面、SpaceXAI、智谱 | 暂无评分 | USDT、微信、支付宝、对公转账 | 支持 | 支持 |
| 46 | [Lumin AI](<https://hvoy.ai/relaySite?id=39827&name=Lumin+AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.1% | 5330 ms | 11 | Anthropic、OpenAI | 5（2 条） | 微信、支付宝 | 支持 | 暂无信息 |
| 47 | [ccgo](<https://hvoy.ai/relaySite?id=40281&name=ccgo&source=awesomeaiplan&position=awesomeaiplan_rank>) | 91.8% | 8360 ms | 4 | Anthropic、OpenAI | 5（1 条） | 微信、支付宝、对公转账 | 支持 | 支持 |
| 48 | [ClaudeCN](<https://hvoy.ai/relaySite?id=39799&name=ClaudeCN&source=awesomeaiplan&position=awesomeaiplan_rank>) | 93.9% | 4980 ms | 15 | Anthropic、DeepSeek、OpenAI、MiniMax、智谱 | 暂无评分 | 微信 | 暂无信息 | 不支持 |
| 49 | [Volt](<https://hvoy.ai/relaySite?id=39955&name=Volt&source=awesomeaiplan&position=awesomeaiplan_rank>) | 82.6% | 5260 ms | 25 | Anthropic、Google、OpenAI、阿里云、DeepSeek、MiniMax、月之暗面、智谱、SpaceXAI | 5（1 条） | USDT、微信、支付宝、对公转账 | 支持 | 支持 |
| 50 | [zToken](<https://hvoy.ai/relaySite?id=40443&name=zToken&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.3% | 5930 ms | 4 | 暂无信息 | 暂无评分 | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 51 | [ZhonZhuan.ai](<https://hvoy.ai/relaySite?id=40449&name=ZhonZhuan.ai&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.8% | 6000 ms | 5 | 暂无信息 | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 52 | [ModCon](<https://hvoy.ai/relaySite?id=40106&name=ModCon&source=awesomeaiplan&position=awesomeaiplan_rank>) | 76.5% | 5670 ms | 11 | Anthropic、OpenAI | 5（1 条） | 支付宝 | 暂无信息 | 支持 |
| 53 | [Apiporter](<https://hvoy.ai/relaySite?id=40327&name=Apiporter&source=awesomeaiplan&position=awesomeaiplan_rank>) | 95% | 10330 ms | 22 | OpenAI、Anthropic、Google、阿里云、DeepSeek、智谱 | 5（2 条） | 支付宝、对公转账 | 暂无信息 | 支持 |
| 54 | [SevnX](<https://hvoy.ai/relaySite?id=40174&name=SevnX&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.7% | 5740 ms | 10 | OpenAI、Anthropic | 5（3 条） | 支付宝 | 暂无信息 | 暂无信息 |
| 55 | [瓦瓦AI](<https://hvoy.ai/relaySite?id=40422&name=%E7%93%A6%E7%93%A6AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.8% | 5590 ms | 12 | OpenAI、Anthropic | 5（24 条） | 微信、支付宝 | 支持 | 支持 |
| 56 | [91token](<https://hvoy.ai/relaySite?id=40462&name=91token&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 7010 ms | 23 | Anthropic、OpenAI、MiniMax、月之暗面、DeepSeek、Google、Xiaomi、智谱 | 暂无评分 | 微信、支付宝 | 支持 | 支持 |
| 57 | [辰数AI](<https://hvoy.ai/relaySite?id=40431&name=%E8%BE%B0%E6%95%B0AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 94.8% | 6420 ms | 4 | 暂无信息 | 暂无评分 | 支付宝、对公转账 | 支持 | 支持 |
| 58 | [我的刀盾](<https://hvoy.ai/relaySite?id=40121&name=%E6%88%91%E7%9A%84%E5%88%80%E7%9B%BE&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.6% | 4880 ms | 15 | Anthropic、Google、OpenAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 59 | [AIGateHub](<https://hvoy.ai/relaySite?id=40362&name=AIGateHub&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.5% | 5760 ms | 14 | Anthropic、OpenAI、Google | 5（2 条） | USDT、支付宝、对公转账 | 支持 | 支持 |
| 60 | [MueMod](<https://hvoy.ai/relaySite?id=40383&name=MueMod&source=awesomeaiplan&position=awesomeaiplan_rank>) | 80% | 6530 ms | 10 | Anthropic、OpenAI | 5（2 条） | 支付宝 | 暂无信息 | 支持 |
| 61 | [AutoRouter](<https://hvoy.ai/relaySite?id=40162&name=AutoRouter&source=awesomeaiplan&position=awesomeaiplan_rank>) | 76.2% | 5360 ms | 22 | OpenAI、Anthropic、Google、阿里云、DeepSeek、月之暗面、SpaceXAI、智谱 | 暂无评分 | 微信、支付宝、信用卡 | 支持 | 不支持 |
| 62 | [JBB金贝贝](<https://hvoy.ai/relaySite?id=40437&name=JBB%E9%87%91%E8%B4%9D%E8%B4%9D&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.5% | 8990 ms | 21 | OpenAI、Anthropic、Google、DeepSeek、SpaceXAI、Xiaomi、智谱、xAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 63 | [ClauqeAI](<https://hvoy.ai/relaySite?id=40126&name=ClauqeAI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 95.5% | 6040 ms | 6 | Anthropic、OpenAI | 5（1 条） | 微信、支付宝 | 支持 | 暂无信息 |
| 64 | [猪猪 API](<https://hvoy.ai/relaySite?id=40446&name=%E7%8C%AA%E7%8C%AA+API&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.4% | 6140 ms | 12 | Anthropic、Google、OpenAI | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 65 | [Mintpop](<https://hvoy.ai/relaySite?id=40395&name=Mintpop&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.4% | 8070 ms | 8 | 暂无信息 | 5（1 条） | 微信、支付宝、信用卡 | 暂无信息 | 暂无信息 |
| 66 | [聚星AI](<https://hvoy.ai/relaySite?id=40123&name=%E8%81%9A%E6%98%9FAI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.3% | 12410 ms | 19 | Anthropic、OpenAI、DeepSeek、Google、月之暗面、智谱 | 3（2 条） | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 67 | [优兔API](<https://hvoy.ai/relaySite?id=40404&name=%E4%BC%98%E5%85%94API&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.5% | 8790 ms | 13 | Anthropic、OpenAI、SpaceXAI | 暂无评分 | 微信、支付宝、信用卡 | 支持 | 暂无信息 |
| 68 | [IKunCode](<https://hvoy.ai/relaySite?id=39819&name=IKunCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 95% | 6010 ms | 14 | Anthropic、Google、OpenAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 69 | [luchikey](<https://hvoy.ai/relaySite?id=40007&name=luchikey&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.7% | 12470 ms | 20 | OpenAI、Anthropic、DeepSeek、Google、SpaceXAI、智谱、xAI | 5（4 条） | 微信、支付宝 | 支持 | 支持 |
| 70 | [quotarouter](<https://hvoy.ai/relaySite?id=40385&name=quotarouter&source=awesomeaiplan&position=awesomeaiplan_rank>) | 87.5% | 5840 ms | 15 | Anthropic、DeepSeek、Google、OpenAI | 暂无评分 | USDT、微信、信用卡 | 支持 | 暂无信息 |
| 71 | [SadAI](<https://hvoy.ai/relaySite?id=40308&name=SadAI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.4% | 9810 ms | 8 | OpenAI、SpaceXAI、Anthropic | 5（2 条） | 微信、支付宝 | 支持 | 暂无信息 |
| 72 | [tokenshop](<https://hvoy.ai/relaySite?id=40445&name=tokenshop&source=awesomeaiplan&position=awesomeaiplan_rank>) | 96.7% | 5720 ms | 11 | OpenAI、Anthropic | 5（1 条） | USDT、微信、支付宝 | 支持 | 暂无信息 |
| 73 | [Poixe AI](<https://hvoy.ai/relaySite?id=39845&name=Poixe+AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 70.2% | 5710 ms | 18 | Anthropic、DeepSeek、Google、OpenAI、SpaceXAI | 5（1 条） | 支付宝、对公转账、信用卡 | 暂无信息 | 暂无信息 |
| 74 | [UoCode](<https://hvoy.ai/relaySite?id=39926&name=UoCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 88.5% | 6250 ms | 13 | Anthropic、OpenAI、Google | 暂无评分 | 微信、支付宝 | 支持 | 暂无信息 |
| 75 | [Euzhi](<https://hvoy.ai/relaySite?id=40048&name=Euzhi&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.9% | 13150 ms | 5 | OpenAI | 暂无评分 | 支付宝 | 支持 | 支持 |
| 76 | [ZZZ](<https://hvoy.ai/relaySite?id=40367&name=ZZZ&source=awesomeaiplan&position=awesomeaiplan_rank>) | 57.6% | 9010 ms | 13 | OpenAI、Anthropic、SpaceXAI | 5（1 条） | 微信、对公转账 | 支持 | 支持 |
| 77 | [noonoo](<https://hvoy.ai/relaySite?id=40459&name=noonoo&source=awesomeaiplan&position=awesomeaiplan_rank>) | 81.8% | 3500 ms | 8 | 暂无信息 | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 78 | [tallius.ai](<https://hvoy.ai/relaySite?id=40206&name=tallius.ai&source=awesomeaiplan&position=awesomeaiplan_rank>) | 83.8% | 8120 ms | 15 | Anthropic、OpenAI、DeepSeek、MiniMax | 5（1 条） | 对公转账、信用卡 | 支持 | 支持 |
| 79 | [AIHUB](<https://hvoy.ai/relaySite?id=40447&name=AIHUB&source=awesomeaiplan&position=awesomeaiplan_rank>) | 82.1% | 7870 ms | 3 | 暂无信息 | 暂无评分 | 微信、支付宝 | 支持 | 支持 |
| 80 | [悟空API](<https://hvoy.ai/relaySite?id=40357&name=%E6%82%9F%E7%A9%BAAPI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.9% | 5750 ms | 15 | Anthropic、Google、OpenAI、SpaceXAI | 5（1 条） | 支付宝 | 支持 | 支持 |
| 81 | [DawCode](<https://hvoy.ai/relaySite?id=39807&name=DawCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 59.7% | 5370 ms | 15 | Anthropic、OpenAI、Google | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 82 | [夯炸了AI](<https://hvoy.ai/relaySite?id=40111&name=%E5%A4%AF%E7%82%B8%E4%BA%86AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 94.8% | 5880 ms | 16 | OpenAI、Anthropic、Google、SpaceXAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 83 | [Hiyo](<https://hvoy.ai/relaySite?id=40267&name=Hiyo&source=awesomeaiplan&position=awesomeaiplan_rank>) | 86% | 4620 ms | 4 | OpenAI | 5（1 条） | USDT、微信、支付宝、信用卡 | 支持 | 不支持 |
| 84 | [ttflows](<https://hvoy.ai/relaySite?id=40406&name=ttflows&source=awesomeaiplan&position=awesomeaiplan_rank>) | 94.4% | 5770 ms | 10 | Anthropic、OpenAI | 暂无评分 | 支付宝 | 支持 | 不支持 |
| 85 | [SwitchBase](<https://hvoy.ai/relaySite?id=39856&name=SwitchBase&source=awesomeaiplan&position=awesomeaiplan_rank>) | 54.1% | 11060 ms | 10 | Anthropic、OpenAI、Google | 5（3 条） | 微信、支付宝、对公转账 | 支持 | 支持 |
| 86 | [A6api](<https://hvoy.ai/relaySite?id=40329&name=A6api&source=awesomeaiplan&position=awesomeaiplan_rank>) | 89.7% | 8220 ms | 25 | Anthropic、DeepSeek、Google、MiniMax、月之暗面、OpenAI、SpaceXAI、Xiaomi、智谱、xAI | 5（1 条） | USDT、微信、支付宝 | 暂无信息 | 暂无信息 |
| 87 | [OfficesAI](<https://hvoy.ai/relaySite?id=40231&name=OfficesAI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 94.6% | 8870 ms | 19 | OpenAI、Anthropic、Google、MiniMax、月之暗面、智谱 | 5（1 条） | 暂无信息 | 暂无信息 | 支持 |
| 88 | [Modelflare](<https://hvoy.ai/relaySite?id=40382&name=Modelflare&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.3% | 6440 ms | 10 | OpenAI、Anthropic、月之暗面、SpaceXAI | 5（1 条） | 暂无信息 | 暂无信息 | 暂无信息 |
| 89 | [RelayNest](<https://hvoy.ai/relaySite?id=40333&name=RelayNest&source=awesomeaiplan&position=awesomeaiplan_rank>) | 86.2% | 6980 ms | 11 | OpenAI、Anthropic | 5（1 条） | 支付宝 | 暂无信息 | 不支持 |

> 排名和数据仅供参考。正式使用前请先小额充值并自行测试，不要在任何中转站长期存放大额余额。
<!-- HVOY_RANKING_END -->
