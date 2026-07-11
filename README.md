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

> 数据更新于 2026-07-12，当前共收录 82 个站点。数据来自 [禾维 AI](https://hvoy.ai)，会随站点探测结果和公开信息定期更新。

| 排名 | 站点 | 在线率 | 平均延迟 | 模型数量 | 主要模型厂商 | 用户评分 | 支付方式 | 退款 | 发票 |
| ---: | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| 1 | [CUN.ai](<https://hvoy.ai/relaySite?id=40325&name=CUN.ai&source=awesomeaiplan&position=awesomeaiplan_rank>) | 89.7% | 7400 ms | 22 | Alibaba、Anthropic、DeepSeek、Google、MiniMax、Moonshot AI、OpenAI、智谱 | 4.9（37 条） | USDT、微信、支付宝、信用卡 | 暂无信息 | 暂无信息 |
| 2 | [我的贾维斯](<https://hvoy.ai/leaderboard>) | 92.9% | 5270 ms | 8 | Anthropic、OpenAI | 3.7（3 条） | 暂无信息 | 支持 | 支持 |
| 3 | [SudoCode](<https://hvoy.ai/relaySite?id=40095&name=SudoCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.5% | 4770 ms | 10 | OpenAI、Anthropic | 5（5 条） | USDT、微信、支付宝、对公转账 | 支持 | 支持 |
| 4 | [YKH.AI](<https://hvoy.ai/relaySite?id=39975&name=YKH.AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.4% | 5740 ms | 10 | OpenAI、Anthropic | 5（3 条） | USDT、微信、支付宝、对公转账、信用卡 | 暂无信息 | 支持 |
| 5 | [EiRouter](<https://hvoy.ai/relaySite?id=40369&name=EiRouter&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.8% | 5510 ms | 10 | Anthropic、OpenAI | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 6 | [ModCon](<https://hvoy.ai/relaySite?id=40106&name=ModCon&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 5050 ms | 10 | Anthropic、OpenAI | 5（1 条） | 支付宝 | 暂无信息 | 支持 |
| 7 | [ccgo](<https://hvoy.ai/relaySite?id=40281&name=ccgo&source=awesomeaiplan&position=awesomeaiplan_rank>) | 89.1% | 4700 ms | 4 | Anthropic、OpenAI | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 8 | [云渡](<https://hvoy.ai/relaySite?id=40175&name=%E4%BA%91%E6%B8%A1&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 4750 ms | 10 | OpenAI、Anthropic | 5（1 条） | 微信、支付宝 | 支持 | 支持 |
| 9 | [9527code](<https://hvoy.ai/relaySite?id=39937&name=9527code&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.3% | 5370 ms | 24 | Anthropic、DeepSeek、Google、MiniMax、Moonshot AI、OpenAI、Alibaba、智谱 | 4.9（25 条） | 微信、支付宝、对公转账 | 支持 | 支持 |
| 10 | [XycAi(星道智能)](<https://hvoy.ai/relaySite?id=40216&name=XycAi%28%E6%98%9F%E9%81%93%E6%99%BA%E8%83%BD%29&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 5790 ms | 17 | Anthropic、OpenAI、DeepSeek、Google、智谱 | 5（1 条） | 暂无信息 | 不支持 | 支持 |
| 11 | [灵算](<https://hvoy.ai/relaySite?id=39980&name=%E7%81%B5%E7%AE%97&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.4% | 6920 ms | 10 | Anthropic、OpenAI | 4.8（6 条） | 微信、支付宝 | 支持 | 支持 |
| 12 | [hao.ai](<https://hvoy.ai/relaySite?id=40235&name=hao.ai&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 4080 ms | 10 | Anthropic、OpenAI | 暂无评分 | 微信、支付宝、对公转账、信用卡 | 支持 | 暂无信息 |
| 13 | [Apiporter](<https://hvoy.ai/relaySite?id=40327&name=Apiporter&source=awesomeaiplan&position=awesomeaiplan_rank>) | 90.6% | 9250 ms | 16 | OpenAI、Anthropic、Google、DeepSeek、智谱 | 5（1 条） | 支付宝、对公转账 | 暂无信息 | 支持 |
| 14 | [滴滴打T](<https://hvoy.ai/relaySite?id=40393&name=%E6%BB%B4%E6%BB%B4%E6%89%93T&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.7% | 5590 ms | 19 | OpenAI、Alibaba、Anthropic、DeepSeek、Google、Moonshot AI、智谱 | 暂无评分 | 支付宝 | 暂无信息 | 支持 |
| 15 | [baby](<https://hvoy.ai/relaySite?id=40299&name=baby&source=awesomeaiplan&position=awesomeaiplan_rank>) | 96.2% | 3520 ms | 6 | Anthropic | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 16 | [智惠API](<https://hvoy.ai/relaySite?id=40026&name=%E6%99%BA%E6%83%A0API&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 5260 ms | 12 | Anthropic、Google、OpenAI | 5（34 条） | 微信、支付宝、信用卡 | 支持 | 暂无信息 |
| 17 | [GPTEAM](<https://hvoy.ai/relaySite?id=39923&name=GPTEAM&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.5% | 5450 ms | 23 | Anthropic、DeepSeek、Google、MiniMax、Moonshot AI、OpenAI、Xiaomi、智谱 | 暂无评分 | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 18 | [UU API](<https://hvoy.ai/relaySite?id=39863&name=UU+API&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.2% | 3840 ms | 14 | Anthropic、Google、OpenAI、SpaceXAI | 5（14 条） | USDT、微信、支付宝、对公转账 | 暂无信息 | 支持 |
| 19 | [Chintao AI](<https://hvoy.ai/relaySite?id=39795&name=Chintao+AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 93.2% | 6440 ms | 14 | Anthropic、OpenAI、Google | 暂无评分 | 微信、支付宝 | 支持 | 支持 |
| 20 | [RightCode](<https://hvoy.ai/relaySite?id=39848&name=RightCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.2% | 6810 ms | 23 | Anthropic、DeepSeek、Google、OpenAI、Alibaba、Moonshot AI、智谱 | 4.6（10 条） | 支付宝 | 支持 | 支持 |
| 21 | [LinkAi](<https://hvoy.ai/relaySite?id=40225&name=LinkAi&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.5% | 4650 ms | 11 | OpenAI、Anthropic、Google | 5（1 条） | 支付宝 | 暂无信息 | 暂无信息 |
| 22 | [Toknex](<https://hvoy.ai/relaySite?id=40158&name=Toknex&source=awesomeaiplan&position=awesomeaiplan_rank>) | 94.7% | 3850 ms | 12 | Anthropic、DeepSeek、OpenAI | 3.7（3 条） | 微信、支付宝、信用卡 | 支持 | 支持 |
| 23 | [AOK](<https://hvoy.ai/relaySite?id=40009&name=AOK&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 4640 ms | 11 | Anthropic、Google、OpenAI、智谱 | 暂无评分 | 支付宝、信用卡 | 暂无信息 | 暂无信息 |
| 24 | [Volt](<https://hvoy.ai/relaySite?id=39955&name=Volt&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.1% | 4630 ms | 24 | Anthropic、OpenAI、Alibaba、DeepSeek、Google、MiniMax、Moonshot AI、智谱、SpaceXAI | 5（1 条） | USDT、微信、支付宝、对公转账 | 支持 | 支持 |
| 25 | [DragToken](<https://hvoy.ai/relaySite?id=40419&name=DragToken&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.7% | 5490 ms | 11 | OpenAI、Anthropic | 5（25 条） | 微信、支付宝、对公转账 | 暂无信息 | 暂无信息 |
| 26 | [LLMAPI](<https://hvoy.ai/relaySite?id=39825&name=LLMAPI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 5000 ms | 13 | Anthropic、OpenAI、Google | 3.8（4 条） | 暂无信息 | 支持 | 支持 |
| 27 | [WorldBase.ai](<https://hvoy.ai/relaySite?id=40169&name=WorldBase.ai&source=awesomeaiplan&position=awesomeaiplan_rank>) | 94.1% | 4570 ms | 12 | OpenAI、Anthropic、智谱 | 暂无评分 | 支付宝 | 支持 | 支持 |
| 28 | [天枢](<https://hvoy.ai/relaySite?id=40341&name=%E5%A4%A9%E6%9E%A2&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.1% | 7530 ms | 22 | OpenAI、Anthropic、Alibaba、DeepSeek、Google、MiniMax、Moonshot AI、智谱 | 暂无评分 | USDT、微信、支付宝、对公转账 | 支持 | 支持 |
| 29 | [SevnX](<https://hvoy.ai/relaySite?id=40174&name=SevnX&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.4% | 5060 ms | 9 | OpenAI、Anthropic | 5（2 条） | 支付宝 | 暂无信息 | 暂无信息 |
| 30 | [MuskAI](<https://hvoy.ai/relaySite?id=39946&name=MuskAI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 4770 ms | 24 | OpenAI、Anthropic、DeepSeek、Moonshot AI、Xiaomi、智谱、Alibaba、Google、MiniMax、SpaceXAI | 4.3（3 条） | 暂无信息 | 暂无信息 | 暂无信息 |
| 31 | [Vibe SubsAPI](<https://hvoy.ai/relaySite?id=40432&name=Vibe+SubsAPI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.3% | 6680 ms | 9 | 暂无信息 | 暂无评分 | 支付宝、对公转账 | 支持 | 支持 |
| 32 | [SuiXiang](<https://hvoy.ai/relaySite?id=40328&name=SuiXiang&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 7000 ms | 10 | 暂无信息 | 5（2 条） | 支付宝 | 支持 | 支持 |
| 33 | [球球Token](<https://hvoy.ai/relaySite?id=39921&name=%E7%90%83%E7%90%83Token&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 7980 ms | 16 | OpenAI、Anthropic、Google、SpaceXAI、xAI | 5（1 条） | USDT、微信、支付宝、对公转账、信用卡 | 暂无信息 | 支持 |
| 34 | [AnPin AI](<https://hvoy.ai/relaySite?id=39783&name=AnPin+AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 96.1% | 6140 ms | 7 | Anthropic、OpenAI | 5（1 条） | 暂无信息 | 暂无信息 | 暂无信息 |
| 35 | [悟空API](<https://hvoy.ai/relaySite?id=40357&name=%E6%82%9F%E7%A9%BAAPI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.9% | 5550 ms | 13 | OpenAI、Anthropic、Google | 5（1 条） | 支付宝 | 支持 | 支持 |
| 36 | [AutoRouter](<https://hvoy.ai/relaySite?id=40162&name=AutoRouter&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.3% | 6210 ms | 22 | Anthropic、OpenAI、Google、Alibaba、DeepSeek、Moonshot AI、SpaceXAI、智谱 | 暂无评分 | 微信、支付宝、信用卡 | 支持 | 不支持 |
| 37 | [二狗 API](<https://hvoy.ai/relaySite?id=40285&name=%E4%BA%8C%E7%8B%97+API&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 3350 ms | 10 | Anthropic、OpenAI | 4.2（5 条） | 暂无信息 | 暂无信息 | 暂无信息 |
| 38 | [AIMZ](<https://hvoy.ai/relaySite?id=39944&name=AIMZ&source=awesomeaiplan&position=awesomeaiplan_rank>) | 94.6% | 8720 ms | 8 | Anthropic、OpenAI、Google | 暂无评分 | 微信、支付宝、对公转账 | 支持 | 支持 |
| 39 | [浮生云算](<https://hvoy.ai/relaySite?id=40179&name=%E6%B5%AE%E7%94%9F%E4%BA%91%E7%AE%97&source=awesomeaiplan&position=awesomeaiplan_rank>) | 96.4% | 7560 ms | 12 | OpenAI、Anthropic、SpaceXAI | 5（2 条） | 支付宝 | 支持 | 不支持 |
| 40 | [Claude API](<https://hvoy.ai/relaySite?id=40010&name=Claude+API&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.5% | 4130 ms | 4 | Anthropic | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 41 | [Moniker](<https://hvoy.ai/relaySite?id=40428&name=Moniker&source=awesomeaiplan&position=awesomeaiplan_rank>) | 95.1% | 7180 ms | 14 | Anthropic、OpenAI、Google | 暂无评分 | 支付宝 | 支持 | 支持 |
| 42 | [RunAPI](<https://hvoy.ai/relaySite?id=39850&name=RunAPI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 86.6% | 4840 ms | 27 | Anthropic、Google、OpenAI、Alibaba、DeepSeek、MiniMax、Moonshot AI、SpaceXAI、智谱、xAI | 暂无评分 | 支付宝、对公转账、信用卡 | 支持 | 支持 |
| 43 | [ClaudeCN](<https://hvoy.ai/relaySite?id=39799&name=ClaudeCN&source=awesomeaiplan&position=awesomeaiplan_rank>) | 94.8% | 4640 ms | 14 | Anthropic、OpenAI、DeepSeek、MiniMax、智谱 | 暂无评分 | 微信 | 暂无信息 | 不支持 |
| 44 | [Lumin AI](<https://hvoy.ai/relaySite?id=39827&name=Lumin+AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.6% | 4960 ms | 11 | Anthropic、OpenAI | 5（2 条） | 微信、支付宝 | 支持 | 暂无信息 |
| 45 | [DasuApi](<https://hvoy.ai/relaySite?id=40222&name=DasuApi&source=awesomeaiplan&position=awesomeaiplan_rank>) | 92.9% | 6730 ms | 6 | Anthropic、OpenAI | 4.8（6 条） | 微信 | 支持 | 暂无信息 |
| 46 | [辰数AI](<https://hvoy.ai/relaySite?id=40431&name=%E8%BE%B0%E6%95%B0AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 96.8% | 8410 ms | 4 | 暂无信息 | 暂无评分 | 支付宝、对公转账 | 支持 | 支持 |
| 47 | [哩喵中转栈](<https://hvoy.ai/relaySite?id=39922&name=%E5%93%A9%E5%96%B5%E4%B8%AD%E8%BD%AC%E6%A0%88&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.5% | 5130 ms | 10 | Anthropic、OpenAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 48 | [PackyCode](<https://hvoy.ai/relaySite?id=39842&name=PackyCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 81.8% | 6380 ms | 25 | Anthropic、OpenAI、Google、MiniMax、SpaceXAI、智谱、Alibaba、DeepSeek、Moonshot AI、Xiaomi | 3.5（2 条） | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 49 | [Poixe AI](<https://hvoy.ai/relaySite?id=39845&name=Poixe+AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 95.2% | 4750 ms | 16 | Anthropic、DeepSeek、Google、OpenAI | 5（1 条） | 支付宝、对公转账、信用卡 | 暂无信息 | 暂无信息 |
| 50 | [luchikey](<https://hvoy.ai/relaySite?id=40007&name=luchikey&source=awesomeaiplan&position=awesomeaiplan_rank>) | 92.3% | 11710 ms | 18 | Anthropic、OpenAI、DeepSeek、Google、SpaceXAI、智谱、xAI | 5（4 条） | 微信、支付宝 | 支持 | 支持 |
| 51 | [Frontier Intelligence](<https://hvoy.ai/relaySite?id=39961&name=Frontier+Intelligence&source=awesomeaiplan&position=awesomeaiplan_rank>) | 91.7% | 5070 ms | 10 | Anthropic、OpenAI | 5（5 条） | 微信、支付宝、对公转账、信用卡 | 支持 | 支持 |
| 52 | [routescope](<https://hvoy.ai/relaySite?id=40414&name=routescope&source=awesomeaiplan&position=awesomeaiplan_rank>) | 93.4% | 7610 ms | 10 | 暂无信息 | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 53 | [unity2](<https://hvoy.ai/relaySite?id=39968&name=unity2&source=awesomeaiplan&position=awesomeaiplan_rank>) | 92.4% | 8110 ms | 13 | OpenAI、智谱、Anthropic、Google | 4.9（7 条） | 微信、支付宝 | 支持 | 支持 |
| 54 | [onehop](<https://hvoy.ai/relaySite?id=40358&name=onehop&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.6% | 6340 ms | 19 | Anthropic、DeepSeek、Google、MiniMax、Moonshot AI、OpenAI、智谱 | 暂无评分 | USDT、支付宝、信用卡 | 支持 | 暂无信息 |
| 55 | [聚星AI](<https://hvoy.ai/relaySite?id=40123&name=%E8%81%9A%E6%98%9FAI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 81.8% | 7490 ms | 18 | Anthropic、OpenAI、DeepSeek、Google、Moonshot AI、智谱 | 3（2 条） | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 56 | [Portal](<https://hvoy.ai/relaySite?id=40338&name=Portal&source=awesomeaiplan&position=awesomeaiplan_rank>) | 94.1% | 6360 ms | 4 | OpenAI | 5（1 条） | 微信、支付宝 | 暂无信息 | 暂无信息 |
| 57 | [SadAI](<https://hvoy.ai/relaySite?id=40308&name=SadAI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 7900 ms | 6 | OpenAI、Anthropic | 5（2 条） | 微信、支付宝 | 支持 | 暂无信息 |
| 58 | [优兔API](<https://hvoy.ai/relaySite?id=40404&name=%E4%BC%98%E5%85%94API&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98% | 8140 ms | 11 | Anthropic、OpenAI | 暂无评分 | 微信、支付宝、信用卡 | 支持 | 暂无信息 |
| 59 | [ZZZ](<https://hvoy.ai/relaySite?id=40367&name=ZZZ&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.3% | 7550 ms | 11 | OpenAI、Anthropic | 暂无评分 | 微信、对公转账 | 支持 | 支持 |
| 60 | [AIGateHub](<https://hvoy.ai/relaySite?id=40362&name=AIGateHub&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.4% | 6170 ms | 13 | Anthropic、OpenAI、Google | 5（2 条） | USDT、支付宝、对公转账 | 支持 | 支持 |
| 61 | [NekoCode](<https://hvoy.ai/relaySite?id=39832&name=NekoCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 82.3% | 6260 ms | 10 | Anthropic、OpenAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 62 | [Z-API](<https://hvoy.ai/relaySite?id=40323&name=Z-API&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 5230 ms | 8 | OpenAI、Anthropic、ByteDance | 暂无评分 | 支付宝 | 支持 | 不支持 |
| 63 | [tallius.ai](<https://hvoy.ai/relaySite?id=40206&name=tallius.ai&source=awesomeaiplan&position=awesomeaiplan_rank>) | 63.3% | 5400 ms | 11 | Anthropic、OpenAI、DeepSeek、MiniMax | 5（1 条） | 对公转账、信用卡 | 支持 | 支持 |
| 64 | [ClauqeAI](<https://hvoy.ai/relaySite?id=40126&name=ClauqeAI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 96.6% | 5950 ms | 6 | Anthropic、OpenAI | 5（1 条） | 微信、支付宝 | 支持 | 暂无信息 |
| 65 | [词易](<https://hvoy.ai/relaySite?id=40001&name=%E8%AF%8D%E6%98%93&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.8% | 8030 ms | 8 | OpenAI、Anthropic、Google | 5（5 条） | 支付宝 | 支持 | 支持 |
| 66 | [TieAPI](<https://hvoy.ai/relaySite?id=40274&name=TieAPI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 79.8% | 6110 ms | 13 | Anthropic、OpenAI、Google | 暂无评分 | USDT、微信、支付宝、对公转账 | 支持 | 支持 |
| 67 | [UoCode](<https://hvoy.ai/relaySite?id=39926&name=UoCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 92.2% | 6680 ms | 12 | Anthropic、OpenAI、Google | 暂无评分 | 微信、支付宝 | 支持 | 暂无信息 |
| 68 | [Dmxcode](<https://hvoy.ai/relaySite?id=40415&name=Dmxcode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.3% | 11310 ms | 16 | Anthropic、OpenAI、Google、SpaceXAI、智谱 | 5（1 条） | 微信、支付宝 | 支持 | 支持 |
| 69 | [IKunCode](<https://hvoy.ai/relaySite?id=39819&name=IKunCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 77.2% | 4130 ms | 13 | Anthropic、Google、OpenAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 70 | [ToolCode](<https://hvoy.ai/relaySite?id=40208&name=ToolCode&source=awesomeaiplan&position=awesomeaiplan_rank>) | 80% | 5150 ms | 10 | OpenAI、Anthropic | 暂无评分 | 暂无信息 | 支持 | 暂无信息 |
| 71 | [SudoBug](<https://hvoy.ai/relaySite?id=40298&name=SudoBug&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 6480 ms | 6 | Anthropic、OpenAI | 5（1 条） | 微信、支付宝 | 支持 | 支持 |
| 72 | [Apizh](<https://hvoy.ai/relaySite?id=40339&name=Apizh&source=awesomeaiplan&position=awesomeaiplan_rank>) | 94.9% | 6360 ms | 6 | OpenAI、Anthropic | 暂无评分 | 微信、支付宝 | 支持 | 不支持 |
| 73 | [Hiyo](<https://hvoy.ai/relaySite?id=40267&name=Hiyo&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 7170 ms | 4 | OpenAI | 暂无评分 | 微信、支付宝 | 支持 | 不支持 |
| 74 | [ZIVV API](<https://hvoy.ai/relaySite?id=39970&name=ZIVV+API&source=awesomeaiplan&position=awesomeaiplan_rank>) | 100% | 5130 ms | 11 | Anthropic、OpenAI、Alibaba | 暂无评分 | USDT、微信、支付宝、对公转账、信用卡 | 支持 | 支持 |
| 75 | [A6api](<https://hvoy.ai/relaySite?id=40329&name=A6api&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.9% | 7540 ms | 22 | Anthropic、DeepSeek、Google、MiniMax、Moonshot AI、OpenAI、SpaceXAI、Xiaomi、智谱 | 5（1 条） | USDT、微信、支付宝 | 暂无信息 | 暂无信息 |
| 76 | [Euzhi](<https://hvoy.ai/relaySite?id=40048&name=Euzhi&source=awesomeaiplan&position=awesomeaiplan_rank>) | 97.3% | 10890 ms | 3 | OpenAI | 暂无评分 | 支付宝 | 支持 | 支持 |
| 77 | [ttflows](<https://hvoy.ai/relaySite?id=40406&name=ttflows&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.4% | 6200 ms | 10 | Anthropic、OpenAI | 暂无评分 | 支付宝 | 支持 | 不支持 |
| 78 | [MueMod](<https://hvoy.ai/relaySite?id=40383&name=MueMod&source=awesomeaiplan&position=awesomeaiplan_rank>) | 99.3% | 5570 ms | 9 | Anthropic、OpenAI | 5（2 条） | 支付宝 | 暂无信息 | 支持 |
| 79 | [quotarouter](<https://hvoy.ai/relaySite?id=40385&name=quotarouter&source=awesomeaiplan&position=awesomeaiplan_rank>) | 94.4% | 5560 ms | 14 | Anthropic、DeepSeek、Google、OpenAI | 暂无评分 | USDT、微信、信用卡 | 支持 | 暂无信息 |
| 80 | [夯炸了AI](<https://hvoy.ai/relaySite?id=40111&name=%E5%A4%AF%E7%82%B8%E4%BA%86AI&source=awesomeaiplan&position=awesomeaiplan_rank>) | 98.9% | 5290 ms | 15 | OpenAI、Anthropic、Google、SpaceXAI | 暂无评分 | 暂无信息 | 暂无信息 | 暂无信息 |
| 81 | [SwitchBase](<https://hvoy.ai/relaySite?id=39856&name=SwitchBase&source=awesomeaiplan&position=awesomeaiplan_rank>) | 52.1% | 8820 ms | 10 | Anthropic、OpenAI、Google | 5（3 条） | 微信、支付宝、对公转账 | 支持 | 支持 |
| 82 | [RelayNest](<https://hvoy.ai/relaySite?id=40333&name=RelayNest&source=awesomeaiplan&position=awesomeaiplan_rank>) | 95.7% | 8600 ms | 10 | OpenAI、Anthropic | 5（1 条） | 支付宝 | 暂无信息 | 不支持 |

> 排名和数据仅供参考。正式使用前请先小额充值并自行测试，不要在任何中转站长期存放大额余额。
<!-- HVOY_RANKING_END -->
