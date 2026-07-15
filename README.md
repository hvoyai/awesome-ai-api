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

> 数据更新于 2026-07-15，当前共收录 86 个站点。数据来自 [禾维 AI](https://hvoy.ai)，会随站点探测结果和公开信息定期更新。

| 排名 | 站点 | 在线率 | 平均延迟 | 模型数量 | 主要模型厂商 | 用户评分 | 支付方式 | 退款 | 发票 |
| ---: | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| 1 | [CUN.ai](<https://hvoy.ai/relaySite?id=40325&name=CUN.ai&source=awesomeaiplan&position=awesomeaiplan_rank>) | 93.2% | 7740 ms | 22 | Alibaba、Anthropic、DeepSeek、Google、MiniMax、Moonshot AI、OpenAI、智谱 | 4.9（41 条） | USDT、微信、支付宝、信用卡 | 暂无信息 | 暂无信息 |
| 2 | [hao.ai](<https://hvoy.ai/leaderboard>) | 99.2% | 4460 ms | 10 | Anthropic、OpenAI | 5（1 条） | 微信、支付宝、对公转账、信用卡 | 支持 | 暂无信息 |
| 3 | [灵算](<https://hvoy.ai/relaySite?id=39980&name=%E7%81%B5%E7%AE%97&source=awesomeaiplan&position=awesomeaiplan_rank>) | 93.6% | 6760 ms | 10 | Anthropic、OpenAI | 4.9（7 条） | 微信、支付宝 | 支持 | 支持 |
| 4 | [我的贾维斯](<https://hvoy.ai/relaySite?id=40324&name=%E6%88%91%E7%9A%84%E8%B4%BE%E7%BB%B4%E6%96%AF&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.8% | 6980 ms | 8 | Anthropic、OpenAI | 3.7（3 条） | 暂无信息 | 支持 | 支持 |
| 5 | [云渡](<https://hvoy.ai/relaySite?id=40175&name=%E4%BA%91%E6%B8%A1&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.2% | 5350 ms | 10 | OpenAI、Anthropic | 5（1 条） | 微信、支付宝 | 支持 | 支持 |
| 6 | [SudoCode](<https://hvoy.ai/relaySite?id=40095&name=SudoCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.4% | 6240 ms | 10 | OpenAI、Anthropic | 4.7（6 条） | USDT、微信、支付宝、对公转账 | 支持 | 支持 |
| 7 | [EiRouter](<https://hvoy.ai/relaySite?id=40369&name=EiRouter&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.1% | 6280 ms | 10 | Anthropic、OpenAI | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 8 | [ToolCode](<https://hvoy.ai/relaySite?id=40208&name=ToolCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.5% | 6220 ms | 10 | OpenAI、Anthropic | 暂无评分 | 支付宝 | 支持 | 支持 |
| 9 | [ModCon](<https://hvoy.ai/relaySite?id=40106&name=ModCon&source=awesomeaiplan&position=awesomeaiplan_rank>) | 94.4% | 5480 ms | 10 | Anthropic、OpenAI | 5（1 条） | 支付宝 | 暂无信息 | 支持 |
| 10 | [9527code](<https://hvoy.ai/relaySite?id=39937&name=9527code&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.2% | 6020 ms | 25 | Anthropic、OpenAI、DeepSeek、Google、MiniMax、Moonshot AI、Alibaba、SpaceXAI、智谱 | 5（45 条） | 微信、支付宝、对公转账 | 支持 | 支持 |
| 11 | [MuskAI](<https://hvoy.ai/relaySite?id=39946&name=MuskAI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.7% | 4900 ms | 25 | Anthropic、OpenAI、Google、Alibaba、DeepSeek、MiniMax、Moonshot AI、SpaceXAI、Xiaomi、智谱 | 4.3（3 条） | 暂无信息 | 暂无信息 | 暂无信息 |
| 12 | [baby](<https://hvoy.ai/relaySite?id=40299&name=baby&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.4% | 4320 ms | 6 | Anthropic | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 13 | [ccgo](<https://hvoy.ai/relaySite?id=40281&name=ccgo&source=awesomeaiplan&position=awesomeaiplan_rank>) | 91.2% | 6860 ms | 4 | Anthropic、OpenAI | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 14 | [XycAi(星道智能)](<https://hvoy.ai/relaySite?id=40216&name=XycAi%28%E6%98%9F%E9%81%93%E6%99%BA%E8%83%BD%29&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.4% | 6860 ms | 18 | Anthropic、OpenAI、DeepSeek、Google、SpaceXAI、智谱 | 5（1 条） | 暂无信息 | 不支持 | 支持 |
| 15 | [UU API](<https://hvoy.ai/relaySite?id=39863&name=UU+API&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99% | 4380 ms | 14 | Anthropic、Google、OpenAI、SpaceXAI | 5（14 条） | USDT、微信、支付宝、对公转账 | 暂无信息 | 支持 |
| 16 | [Claude API](<https://hvoy.ai/relaySite?id=40010&name=Claude+API&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.4% | 6250 ms | 4 | Anthropic | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 17 | [Vibe SubsAPI](<https://hvoy.ai/relaySite?id=40432&name=Vibe+SubsAPI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.1% | 5450 ms | 9 | 暂无信息 | 暂无评分 | 支付宝、对公转账 | 支持 | 支持 |
| 18 | [词易](<https://hvoy.ai/relaySite?id=40001&name=%E8%AF%8D%E6%98%93&source=awesomeaiplan&position=awesomeaiplan_rank>) | 96.2% | 8070 ms | 10 | OpenAI、Anthropic、Google | 5（5 条） | 支付宝 | 支持 | 支持 |
| 19 | [Volt](<https://hvoy.ai/relaySite?id=39955&name=Volt&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.7% | 4910 ms | 24 | Anthropic、OpenAI、Alibaba、DeepSeek、Google、MiniMax、Moonshot AI、智谱、SpaceXAI | 5（1 条） | USDT、微信、支付宝、对公转账 | 支持 | 支持 |
| 20 | [GPTEAM](<https://hvoy.ai/relaySite?id=39923&name=GPTEAM&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.7% | 6610 ms | 24 | Anthropic、DeepSeek、Google、MiniMax、Moonshot AI、OpenAI、SpaceXAI、Xiaomi、智谱 | 暂无评分 | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 21 | [智惠API](<https://hvoy.ai/relaySite?id=40026&name=%E6%99%BA%E6%83%A0API&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.1% | 6330 ms | 13 | Anthropic、Google、OpenAI、SpaceXAI | 5（34 条） | 微信、支付宝、信用卡 | 支持 | 暂无信息 |
| 22 | [RightCode](<https://hvoy.ai/relaySite?id=39848&name=RightCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.7% | 7650 ms | 24 | Anthropic、DeepSeek、Google、OpenAI、Alibaba、Moonshot AI、SpaceXAI、智谱 | 4.6（10 条） | 支付宝 | 支持 | 支持 |
| 23 | [WorldBase.ai](<https://hvoy.ai/relaySite?id=40169&name=WorldBase.ai&source=awesomeaiplan&position=awesomeaiplan_rank>) | 95.6% | 5070 ms | 12 | OpenAI、Anthropic、智谱 | 暂无评分 | 支付宝 | 支持 | 支持 |
| 24 | [LLMAPI](<https://hvoy.ai/relaySite?id=39825&name=LLMAPI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.6% | 6490 ms | 13 | Anthropic、OpenAI、Google | 3.8（4 条） | 暂无信息 | 支持 | 支持 |
| 25 | [YKH.AI](<https://hvoy.ai/relaySite?id=39975&name=YKH.AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 96.4% | 6390 ms | 10 | OpenAI、Anthropic | 5（3 条） | USDT、微信、支付宝、对公转账、信用卡 | 暂无信息 | 支持 |
| 26 | [unity2](<https://hvoy.ai/relaySite?id=39968&name=unity2&source=awesomeaiplan&position=awesomeaiplan_rank>) | 96.8% | 7940 ms | 13 | OpenAI、智谱、Anthropic、Google | 4.9（7 条） | 微信、支付宝 | 支持 | 支持 |
| 27 | [LinkAi](<https://hvoy.ai/relaySite?id=40225&name=LinkAi&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.8% | 5950 ms | 11 | OpenAI、Anthropic、Google | 5（1 条） | 支付宝 | 暂无信息 | 暂无信息 |
| 28 | [Chintao AI](<https://hvoy.ai/relaySite?id=39795&name=Chintao+AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.7% | 7160 ms | 14 | Anthropic、OpenAI、Google | 暂无评分 | 微信、支付宝 | 支持 | 支持 |
| 29 | [NekoCode](<https://hvoy.ai/relaySite?id=39832&name=NekoCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 96.7% | 6400 ms | 10 | Anthropic、OpenAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 30 | [DragToken](<https://hvoy.ai/relaySite?id=40419&name=DragToken&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.7% | 6800 ms | 11 | OpenAI、Anthropic | 5（39 条） | 微信、支付宝、对公转账 | 暂无信息 | 暂无信息 |
| 31 | [AutoRouter](<https://hvoy.ai/relaySite?id=40162&name=AutoRouter&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.8% | 6620 ms | 21 | Anthropic、OpenAI、Google、Alibaba、DeepSeek、Moonshot AI、SpaceXAI、智谱 | 暂无评分 | 微信、支付宝、信用卡 | 支持 | 不支持 |
| 32 | [瓦瓦AI](<https://hvoy.ai/relaySite?id=40422&name=%E7%93%A6%E7%93%A6AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 95.6% | 6490 ms | 10 | 暂无信息 | 暂无评分 | 微信、支付宝 | 支持 | 支持 |
| 33 | [Toknex](<https://hvoy.ai/relaySite?id=40158&name=Toknex&source=awesomeaiplan&position=awesomeaiplan_rank>) | 91.8% | 5180 ms | 12 | Anthropic、DeepSeek、OpenAI | 3.7（3 条） | 微信、支付宝、信用卡 | 支持 | 支持 |
| 34 | [MueMod](<https://hvoy.ai/relaySite?id=40383&name=MueMod&source=awesomeaiplan&position=awesomeaiplan_rank>) | 96.7% | 6450 ms | 9 | Anthropic、OpenAI | 5（2 条） | 支付宝 | 暂无信息 | 支持 |
| 35 | [SudoBug](<https://hvoy.ai/relaySite?id=40298&name=SudoBug&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.5% | 7930 ms | 9 | Anthropic、OpenAI | 5（1 条） | 微信、支付宝 | 支持 | 支持 |
| 36 | [Frontier Intelligence](<https://hvoy.ai/relaySite?id=39961&name=Frontier+Intelligence&source=awesomeaiplan&position=awesomeaiplan_rank>) | 95.9% | 5600 ms | 10 | Anthropic、OpenAI | 5（5 条） | 微信、支付宝、对公转账、信用卡 | 支持 | 支持 |
| 37 | [二狗 API](<https://hvoy.ai/relaySite?id=40285&name=%E4%BA%8C%E7%8B%97+API&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.8% | 3750 ms | 10 | Anthropic、OpenAI | 4.2（5 条） | 暂无信息 | 暂无信息 | 暂无信息 |
| 38 | [AIMZ](<https://hvoy.ai/relaySite?id=39944&name=AIMZ&source=awesomeaiplan&position=awesomeaiplan_rank>) | 94.9% | 9250 ms | 8 | Anthropic、OpenAI、Google | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 39 | [Apiporter](<https://hvoy.ai/relaySite?id=40327&name=Apiporter&source=awesomeaiplan&position=awesomeaiplan_rank>) | 93.1% | 8840 ms | 21 | OpenAI、Anthropic、Google、Alibaba、DeepSeek、智谱 | 5（1 条） | 支付宝、对公转账 | 暂无信息 | 支持 |
| 40 | [球球Token](<https://hvoy.ai/relaySite?id=39921&name=%E7%90%83%E7%90%83Token&source=awesomeaiplan&position=awesomeaiplan_rank>) | 96.2% | 9160 ms | 16 | OpenAI、Anthropic、Google、SpaceXAI、xAI | 5（1 条） | USDT、微信、支付宝、对公转账、信用卡 | 暂无信息 | 支持 |
| 41 | [浮生云算](<https://hvoy.ai/relaySite?id=40179&name=%E6%B5%AE%E7%94%9F%E4%BA%91%E7%AE%97&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97% | 9190 ms | 12 | OpenAI、Anthropic、SpaceXAI | 5（2 条） | 支付宝 | 支持 | 不支持 |
| 42 | [天枢](<https://hvoy.ai/relaySite?id=40341&name=%E5%A4%A9%E6%9E%A2&source=awesomeaiplan&position=awesomeaiplan_rank>) | 86.3% | 8070 ms | 23 | OpenAI、Anthropic、Alibaba、DeepSeek、Google、MiniMax、Moonshot AI、SpaceXAI、智谱 | 暂无评分 | USDT、微信、支付宝、对公转账 | 支持 | 支持 |
| 43 | [Poixe AI](<https://hvoy.ai/relaySite?id=39845&name=Poixe+AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 96.1% | 5500 ms | 17 | Anthropic、DeepSeek、Google、OpenAI、SpaceXAI | 5（1 条） | 支付宝、对公转账、信用卡 | 暂无信息 | 暂无信息 |
| 44 | [夯炸了AI](<https://hvoy.ai/relaySite?id=40111&name=%E5%A4%AF%E7%82%B8%E4%BA%86AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 96.7% | 6320 ms | 15 | OpenAI、Anthropic、Google、SpaceXAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 45 | [AnPin AI](<https://hvoy.ai/relaySite?id=39783&name=AnPin+AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 93.6% | 7200 ms | 7 | Anthropic、OpenAI | 5（1 条） | 暂无信息 | 暂无信息 | 暂无信息 |
| 46 | [ClaudeCN](<https://hvoy.ai/relaySite?id=39799&name=ClaudeCN&source=awesomeaiplan&position=awesomeaiplan_rank>) | 93.8% | 4900 ms | 14 | Anthropic、DeepSeek、OpenAI、MiniMax、智谱 | 暂无评分 | 微信 | 暂无信息 | 不支持 |
| 47 | [Portal](<https://hvoy.ai/relaySite?id=40338&name=Portal&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.3% | 7210 ms | 4 | OpenAI | 5（1 条） | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 48 | [SevnX](<https://hvoy.ai/relaySite?id=40174&name=SevnX&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.1% | 5430 ms | 9 | OpenAI、Anthropic | 5（2 条） | 支付宝 | 暂无信息 | 暂无信息 |
| 49 | [聚星AI](<https://hvoy.ai/relaySite?id=40123&name=%E8%81%9A%E6%98%9FAI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.2% | 12000 ms | 18 | Anthropic、OpenAI、DeepSeek、Google、Moonshot AI、智谱 | 3（2 条） | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 50 | [RunAPI](<https://hvoy.ai/relaySite?id=39850&name=RunAPI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 86.2% | 5440 ms | 27 | Anthropic、Google、OpenAI、SpaceXAI、xAI、Alibaba、DeepSeek、MiniMax、Moonshot AI、智谱 | 暂无评分 | 支付宝、对公转账、信用卡 | 支持 | 支持 |
| 51 | [Lumin AI](<https://hvoy.ai/relaySite?id=39827&name=Lumin+AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.6% | 5580 ms | 11 | Anthropic、OpenAI | 5（2 条） | 微信、支付宝 | 支持 | 暂无信息 |
| 52 | [Apizh](<https://hvoy.ai/relaySite?id=40339&name=Apizh&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.5% | 5260 ms | 6 | OpenAI、Anthropic | 暂无评分 | 微信、支付宝 | 支持 | 不支持 |
| 53 | [AOK](<https://hvoy.ai/relaySite?id=40009&name=AOK&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.9% | 6640 ms | 11 | Anthropic、Google、OpenAI、智谱 | 暂无评分 | 支付宝、信用卡 | 暂无信息 | 暂无信息 |
| 54 | [routescope](<https://hvoy.ai/relaySite?id=40414&name=routescope&source=awesomeaiplan&position=awesomeaiplan_rank>) | 94.4% | 7210 ms | 10 | 暂无信息 | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 55 | [Moniker](<https://hvoy.ai/relaySite?id=40428&name=Moniker&source=awesomeaiplan&position=awesomeaiplan_rank>) | 88.4% | 7670 ms | 15 | Anthropic、OpenAI、Google、SpaceXAI | 暂无评分 | 支付宝 | 支持 | 支持 |
| 56 | [哩喵中转栈](<https://hvoy.ai/relaySite?id=39922&name=%E5%93%A9%E5%96%B5%E4%B8%AD%E8%BD%AC%E6%A0%88&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.2% | 6300 ms | 10 | Anthropic、OpenAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 57 | [我的刀盾](<https://hvoy.ai/relaySite?id=40121&name=%E6%88%91%E7%9A%84%E5%88%80%E7%9B%BE&source=awesomeaiplan&position=awesomeaiplan_rank>) | 83.8% | 4910 ms | 14 | Anthropic、Google、OpenAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 58 | [zToken](<https://hvoy.ai/relaySite?id=40443&name=zToken&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.5% | 5870 ms | 4 | 暂无信息 | 暂无评分 | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 59 | [PackyCode](<https://hvoy.ai/relaySite?id=39842&name=PackyCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 74.4% | 7500 ms | 25 | Anthropic、OpenAI、Google、MiniMax、SpaceXAI、智谱、Alibaba、DeepSeek、Moonshot AI、Xiaomi | 3.5（2 条） | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 60 | [AIGateHub](<https://hvoy.ai/relaySite?id=40362&name=AIGateHub&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.3% | 6010 ms | 13 | Anthropic、OpenAI、Google | 5（2 条） | USDT、支付宝、对公转账 | 支持 | 支持 |
| 61 | [A6api](<https://hvoy.ai/relaySite?id=40329&name=A6api&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.1% | 7510 ms | 23 | Anthropic、DeepSeek、Google、MiniMax、Moonshot AI、OpenAI、SpaceXAI、Xiaomi、智谱、xAI | 5（1 条） | USDT、微信、支付宝 | 暂无信息 | 暂无信息 |
| 62 | [Modelflare](<https://hvoy.ai/relaySite?id=40382&name=Modelflare&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.2% | 7470 ms | 6 | 暂无信息 | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 63 | [ZZZ](<https://hvoy.ai/relaySite?id=40367&name=ZZZ&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.8% | 9300 ms | 12 | OpenAI、Anthropic、SpaceXAI | 5（1 条） | 微信、对公转账 | 支持 | 支持 |
| 64 | [ForApi](<https://hvoy.ai/relaySite?id=40429&name=ForApi&source=awesomeaiplan&position=awesomeaiplan_rank>) | 82% | 5790 ms | 10 | Anthropic、OpenAI | 暂无评分 | 微信、支付宝 | 支持 | 暂无信息 |
| 65 | [quotarouter](<https://hvoy.ai/relaySite?id=40385&name=quotarouter&source=awesomeaiplan&position=awesomeaiplan_rank>) | 77.5% | 6380 ms | 14 | Anthropic、DeepSeek、Google、OpenAI | 暂无评分 | USDT、微信、信用卡 | 支持 | 暂无信息 |
| 66 | [优兔API](<https://hvoy.ai/relaySite?id=40404&name=%E4%BC%98%E5%85%94API&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.6% | 9510 ms | 12 | Anthropic、OpenAI、SpaceXAI | 暂无评分 | 微信、支付宝、信用卡 | 支持 | 暂无信息 |
| 67 | [UoCode](<https://hvoy.ai/relaySite?id=39926&name=UoCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 92.2% | 6990 ms | 12 | Anthropic、OpenAI、Google | 暂无评分 | 微信、支付宝 | 支持 | 暂无信息 |
| 68 | [ClauqeAI](<https://hvoy.ai/relaySite?id=40126&name=ClauqeAI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.7% | 6350 ms | 6 | Anthropic、OpenAI | 5（1 条） | 微信、支付宝 | 支持 | 暂无信息 |
| 69 | [TieAPI](<https://hvoy.ai/relaySite?id=40274&name=TieAPI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 91.5% | 7130 ms | 13 | Anthropic、OpenAI、Google | 暂无评分 | USDT、微信、支付宝、对公转账 | 支持 | 支持 |
| 70 | [Mintpop](<https://hvoy.ai/relaySite?id=40395&name=Mintpop&source=awesomeaiplan&position=awesomeaiplan_rank>) | 96% | 8120 ms | 8 | 暂无信息 | 5（1 条） | 微信、支付宝、信用卡 | 暂无信息 | 暂无信息 |
| 71 | [Z-API](<https://hvoy.ai/relaySite?id=40323&name=Z-API&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.4% | 5560 ms | 8 | OpenAI、Anthropic、ByteDance | 暂无评分 | 支付宝 | 支持 | 不支持 |
| 72 | [辰数AI](<https://hvoy.ai/relaySite?id=40431&name=%E8%BE%B0%E6%95%B0AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 92% | 9860 ms | 4 | 暂无信息 | 暂无评分 | 支付宝、对公转账 | 支持 | 支持 |
| 73 | [JBB金贝贝](<https://hvoy.ai/relaySite?id=40437&name=JBB%E9%87%91%E8%B4%9D%E8%B4%9D&source=awesomeaiplan&position=awesomeaiplan_rank>) | 90.5% | 7110 ms | 19 | OpenAI、Anthropic、Google、DeepSeek、SpaceXAI、智谱、xAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 74 | [SadAI](<https://hvoy.ai/relaySite?id=40308&name=SadAI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 96.9% | 10800 ms | 6 | OpenAI、Anthropic | 5（2 条） | 微信、支付宝 | 支持 | 暂无信息 |
| 75 | [tallius.ai](<https://hvoy.ai/relaySite?id=40206&name=tallius.ai&source=awesomeaiplan&position=awesomeaiplan_rank>) | 77.2% | 8480 ms | 14 | Anthropic、OpenAI、DeepSeek、MiniMax | 5（1 条） | 对公转账、信用卡 | 支持 | 支持 |
| 76 | [IKunCode](<https://hvoy.ai/relaySite?id=39819&name=IKunCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 85.4% | 5620 ms | 13 | Anthropic、Google、OpenAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 77 | [Euzhi](<https://hvoy.ai/relaySite?id=40048&name=Euzhi&source=awesomeaiplan&position=awesomeaiplan_rank>) | 96.2% | 12840 ms | 3 | OpenAI | 暂无评分 | 支付宝 | 支持 | 支持 |
| 78 | [DawCode](<https://hvoy.ai/relaySite?id=39807&name=DawCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 60.3% | 5560 ms | 14 | Anthropic、OpenAI、Google | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 79 | [JBBtoken](<https://hvoy.ai/relaySite?id=40292&name=JBBtoken&source=awesomeaiplan&position=awesomeaiplan_rank>) | 39.4% | 7140 ms | 17 | OpenAI、Anthropic、DeepSeek、Google、MiniMax、智谱 | 暂无评分 | USDT、微信、支付宝、对公转账、信用卡 | 支持 | 支持 |
| 80 | [Hiyo](<https://hvoy.ai/relaySite?id=40267&name=Hiyo&source=awesomeaiplan&position=awesomeaiplan_rank>) | 78.3% | 5610 ms | 4 | OpenAI | 5（1 条） | USDT、微信、支付宝、信用卡 | 支持 | 不支持 |
| 81 | [Dmxcode](<https://hvoy.ai/relaySite?id=40415&name=Dmxcode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 89.8% | 8300 ms | 16 | Anthropic、OpenAI、Google、SpaceXAI、智谱 | 5（1 条） | 微信、支付宝 | 支持 | 支持 |
| 82 | [ttflows](<https://hvoy.ai/relaySite?id=40406&name=ttflows&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.4% | 7770 ms | 10 | Anthropic、OpenAI | 暂无评分 | 支付宝 | 支持 | 不支持 |
| 83 | [SwitchBase](<https://hvoy.ai/relaySite?id=39856&name=SwitchBase&source=awesomeaiplan&position=awesomeaiplan_rank>) | 48.8% | 11170 ms | 10 | Anthropic、OpenAI、Google | 5（3 条） | 微信、支付宝、对公转账 | 支持 | 支持 |
| 84 | [luchikey](<https://hvoy.ai/relaySite?id=40007&name=luchikey&source=awesomeaiplan&position=awesomeaiplan_rank>) | 93.9% | 14090 ms | 19 | OpenAI、Anthropic、DeepSeek、Google、SpaceXAI、智谱、xAI | 5（4 条） | 微信、支付宝 | 支持 | 支持 |
| 85 | [OfficesAI](<https://hvoy.ai/relaySite?id=40231&name=OfficesAI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 92.1% | 9130 ms | 18 | OpenAI、Anthropic、Google、MiniMax、Moonshot AI、智谱 | 5（1 条） | 暂无信息 | 暂无信息 | 支持 |
| 86 | [RelayNest](<https://hvoy.ai/relaySite?id=40333&name=RelayNest&source=awesomeaiplan&position=awesomeaiplan_rank>) | 83.7% | 6670 ms | 10 | OpenAI、Anthropic | 5（1 条） | 支付宝 | 暂无信息 | 不支持 |

> 排名和数据仅供参考。正式使用前请先小额充值并自行测试，不要在任何中转站长期存放大额余额。
<!-- HVOY_RANKING_END -->
