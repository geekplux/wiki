- [BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev) #interview
- [[面试经验] 【地里最全前端面试题型总结】](https://www.1point3acres.com/bbs/thread-907864-1-1.html)
	- 有点标题党了，希望争做地里最全的前端面试题型总结吧!
	- 前端时间加了一个北美前端群，发现里面很多小伙伴对前端职位面什么内容感到非常困惑。有些人觉得前端面试内容太杂，根本不知道如何准备；有些人觉得前端主要准备BFE就可以了；有些人想问是不是前端就不用准备LC了；有些人不清楚前端系统设计到底考什么内容。刚好最近半年，LZ面了大约30家公司的前端Sr职位。面试的公司涵盖各大厂，最近几年刚上市的明星中厂，一些独角兽公司以及一两家LZ本地的上市中厂。拿到了其中一半左右公司的offer。我就以这30家出头的公司作为一个样本，给大家分类罗列一下各种前端面试的题型，以及各题型出现的频率。一方面填补一下地里前端资源贫瘠的空缺；一方面为自己半年来的面试做一个总结，好让自己一下次的面试能快速回忆起一些细节。
	- Notes：
	  各题型出现频率分子父母以公司数量作为单位，不以题目数量作为单位。（同一个公司出现多次同一题型按单次计算频率）
	  LZ不少公司没进到VO，所以分子的数量肯定会相对偏少，看个大概就行。
	  LZ这次基本没有面不太知名的小厂和初创，所以肯定不可能涵盖所有的题型。
	  这个帖子我主要想探讨北美前端面试的题型，不想泄露具体某家公司的面试内容以及具体面了哪家，所以也不要再评论区问我，请见谅。
	  欢迎补充我没有遇到过的题型，也希望互相学习。
	  敲这么多字很累，觉得有收获不要吝惜给米。
	- 前端问题：
	  Build a mini app (出现频率45%)
	  这类型的题是我遇到的前端题型里最常见的，很多公司店面和VO都会考，也是我最喜欢和最擅长的题型。LZ面试里遇过的写mini app的题几乎没有失手过。因为比较考实操，和平时工作里的内容很类似。Senior前端选手以及React写的熟练的应该都会很喜欢这种题。
	  通常mini app的内容和公司的业务相关，可能是公司主打产品里的一小块。当然也会出一些常见的题比如调用Search API显示dropdown or list of items，Image carousel相关的题，todo list，etc。
	  总结这类题的共性是fetch一个endpoint拿数据，进行一些data parsing之后render成UI，加一些User Interaction。其中八成的公司会默认用React写，也有部分公司必须用Vanilla JS。有些题侧重考察不同React hooks的使用，有些题侧重考察promise/async/await和data parsing，有些主要考察存放数据的data structure。
	- Implement a widget (出现频率12%)
	  这类型的题其实和mini app很类似，我单独拿出来主要是因为widget很重要的部分是考察API的设计。API的易用性和可扩展性、Widget的复用性、component的拆分都是考察的一部分。
	  准备这类型题主要就是写几个常见的Widget，例如Image Carousel, Tab Component, Accordion, Dropdown, Star Rating, Tri-state Checkbox。用React和Vanilla JS各写一遍。这个准备的过程其实也相当于准备了mini app的题了。
	- Promise / Callback Challenges (出现频率18%)
	  这类题我属于我面试时候被绊住次数最多的题，也是我认为前端里面相对最难的题型。但是其实透彻了解了promise/async/await以后，这类题也是万变不离其宗的。常见的类型如等到promise resolve以后再fire下一次request，promise在for loop里的应用，把callback转化成promise，callback chain等等。
	  我没有把Implement a promise归入这类题型，但是能熟练Implement promise对于透彻理解promise的原理、用法和变化，和对解决这类题很有帮助。
	- Data Parsing / Data Aggregation (出现频率24%)
	  这类题通常是对于一个array 或者object类型的raw data进行一些处理，按照需求输出结果。这个raw data的来源可以是mock data也可以是从API endpoint获得。
	  这属于前端面试里最很常见也最简单的一类题，如果是mock data的话其实任何语言都可以写，Fullstack/MLE/DS也会考这种题。前端工程师少的公司特别容易出现这类型。这种题除非数据类型特别复杂，不然通常是店面里的一道热身题或者第一问。
	- Implement Native / Lib Methods (出现频率12%)
	  手动实现一个原生的JS/DOM/Browser function或者某些library functions
	  这类型题某几家大厂的前端非常喜欢考，但是出了大厂其实考的很少。这也造成了很多人的错觉说刷BFE就是前端面试主要的准备方式。其实可以理解，大厂喜欢自己造轮子，小厂喜欢用轮子，所以决定了面试风格的截然不同。
	  如果不面大厂，着重准备下Implement Promise，memo，debounce，throttle和curry就可以了。其中Implement Promise我被考了两回，考我还都是不太有名的公司。
	- UI/JS Debug (出现频率9%)
	  这类题通常是download一个project或者在在线IDE里打开一个project，debug其中的问题。通常是6-7个问题，有些面试是带UI的debug，有些面试是纯JS的debug。有些面试会把问题写在readme里，有些面试问题需要自己去找。纯JS的问题通常配备unit tests来检测每一问是否完成。UI debug可以打开devtool进行debug。
	  此类题考验题目的完成度，也考验如何investigate和debug的能力，交流沟通能力也是比较重要的。我遇到过最后一问没解决被降级的情况。
	  因为有6-7道题，有些公司它设置的题目难度不是从易到难的，所以大致浏览一下所有题目，从简单的开始做会很有帮助。
	- Static UI (出现频率12%)
	  通过HTML/CSS实现一个UI样式，有些数据驱动的UI会用JS DOM Manipulation来添加Nodes。
	  这种题比较基础，考察的能力范围有限，通常不会单独出现，会作为一个时间充裕情况下的followup。比较常见的是实现一个居中的Modal，这里作为Senior，你得知道多种居中的方式。
	- JS基础/语法糖 （出现频率6%）
	  这类题通常查考一些this，prototype, __proto__, bind/call/apply, closure, scope的用法和nuances。这类题通常Senior面试很少碰到，NG和Karat会考。大多是给一段代码，问输出结果，以及如何改可以输出想要的结果。
	  这里分享一个JavaScript Questions链接，里面罗列了非常多不同的这类题目。
	- Code Review (出现频率9%)
	  出现的不多，和平时code review差不多，通常不是考察debug逻辑错误，而是以怎样增加的代码的readability和maintainability为出发点进行review。像是better variable/method naming，拆分functions，减少nested if branches，etc。
	- 前端八股文/Domain Knowledge (出现频率18%)
	  所谓八股文，泛指理论知识，原理概念，可谓食之无味，弃之可惜。
	  八股文通常海外的国内公司和Quant公司考的比较多，也有大厂会在前端轮次穿插一些前端Domain Knowledge的宏观问题。我这里把它们并为一类了。
	  国内公司和Quant公司侧重点在于你是不是透彻理解某些技术中的原理和细节。比如：React PureComponent VS Component，URL解析过程。
	  海外公司如果面这类Domain Knowledge的问题通常侧重考查相关领域的经验。 比如：How to deal with XSS，How to investigate a performance issue, Describe various testing strategies。
	  其他
	  OOD - 只遇到过一次，面试topic原本是系统设计的一轮，结果面了个电梯系统，而且面试官不准备白板，让我干说。后来通过里面的朋友了解到这公司一共也就30几个前端工程师。前端面这种OOD的公司不去也罢。这公司onsite还得做presentation，简直有毒。
	  Karat - 只遇到过一次，前20分钟会问一些CSS和JS的基础知识，之后就是纯算法了。虽然LZ不喜欢Karat，但是感觉越来越多公司开始用Karat作为第一轮来删选candidates，我面的这家公司也是最近开始尝试用Karat替代店面。
	  Take Home Project - 某个很神秘的独角兽公司第一轮发了一个Take Home Coding Challenge，HM给的预估完成时间是6-8小时，LZ花了2小时在project setup上，coding可能再花了2小时。我有些低估评判标准了，以为把功能都完成就可以了，但是没想到他们对代码质量要求很高，最后主要挂在了数据结构的选择和以及没怎么写custom styling上。
	- 算法
	  前端算法考察的量和难度都比全栈和后端低很多，但是也不能完全不准备。
	  统计了一下我面的公司，大约40%的公司前端还是以考算法为主，20%的公司就一轮算法，另外大概15%的公司不考算法，剩下有些公司我因为没有完全面完所以不确定。
	  根据我自己的观察，反而是这些考一轮或者不考算法的公司给的包裹普遍比这些考算法为主的公司高。当然也有例外，有些小公司不考算法，甚至连系统设计都不考。
	  通常这些前端以算法为主的公司有以下几个特点：公司产品业务核心在后端、UI不是那么重视；产品还没发展壮大，写产品以fullstack engineer为主；按组面，组里engineer很难自己想出一道好的前端题；Quant以及海外国内公司。
	  这些只考一轮算法的公司通常算法题不会特别绕，不会是那种没做过第一次见想不出来的题。
	  准备过程主攻medium题，但是也不能完全放弃hard。我还是遇到过几次一小时写完几道出几道的那种面试中一轮的第二或第三题是hard的情况。(E.g., Sliding Puzzle，得跑过几个test cases)
	  另外我觉得准备算法的过程对于自己解决问题思考的速度，代码的简洁度，包括对于JS Array|Object|String|Map|Set 各种Native methods的熟练程度还是有很大帮助的。平时工作里算法用的是少，但是数据结构的选择还是经常遇到的，刷题或多或少还是有帮助的。
	- 系统设计
	  通常来说前端职位的系统设计不太会涉及后端的系统设计内容，少量涉及后端的SD都只是大致设计一下后端，不太会深入探究细节。
	  在我拿到Onsite的公司里只有两家公司没有考系统设计，有少数公司会有两轮系统设计，有一家公司店面就是系统设计。
	  有些Bar比较高的系统设计，面试官会在你说出某些设计的时候让你直接implement出来。比如你提到了debounce就让你写一个debounce fn，提到typing时候用debounce减少fetch次数，就要求把debounce应用到typing以及fetch的code也添加上，提到等待fetch过程中可以显示placeholder，就把显示placeholder的逻辑也都添加上。
	  学习前端系统设计的资源不多，Youtube上的JSer和FrontendSystemDesign是很多人都看过的，他们提供了一个很不错的回答模板，但具体到不同的应用和细节，他们的回答还是太千篇一律了，具体怎么回答还是得结合自己的经验和理解。
	  我总结了一下，前端系统设计大致侧重以下三类。具体往哪个方向答也得看面试官想听什么，所以沟通很重要。Senior尽量全程drive conversation，表达自信在系统设计里会很加分，因为也并不是所有面试官都懂各种细节。
	- Rendering Architecture/Performance
	  如何设计更高效的Rendering方式，提供用户更快的加载，更佳的体验，更及时的反馈。不同的应用有不同的设计方式，图片，视频，音频，地图，即时通讯，协同软件每个类型的应用都有自己独特的优化方式以及所涉及到的技术。展示型和交互型的app有它们不同的Performance需求。
	  不少SD会讨论Both Server API Design和Rendering Architecture/Performance，有些情况下你也可以往你自己擅长的方向pivot。
	  常见的题目有设计Instagram，Pinterest，Youtube，Google Map，Chat App以及他们的衍生型产品。一些公司也会选择公司产品的一部分来作为这类系统设计的题目。
	- Widget Design
	  这类系统设计我在之前的前端题里也提过，会更注重Widget API的Design，Reusablility和Extensibility，存储数据的结构，在大数据情况如何保证各种rendering以及user interaction的performance。设计API时要注重Backwards Compatiblity。如何保证数据来源是本地或者server side都可以有很好的支持。A11y也是Widget中很重要的一部分，如何保证鼠标键盘都能实现同一功能，用什么HTML Markup来实现这个Widget。
	  常见的题目有Autocomplete/Typeahead，Image Carousel，Image Zoom, Table，Tree。
	- Server API Design
	  有些系统设计会侧重于Client与Server之间的API endpoint和data schema设计，发送payload以及返回response的数据类型是需要细扣的点。
	  很多公司会选择公司产品的一部分来作为这类系统设计的题目。常见的题目有Google Calendar, Slack, Google Doc, Search App。
	- 产品/项目设计
	  这类设计题在前端面试中比较少遇到，每家的风格都不一样，大致遇到过以下这几类，没有明显的边界，很多考查的能力点是有交错的。面试中和面试官的沟通交流非常重要。
	  Product Design: 主要考察cross-functional的协作能力以及UX Sense，对产品功能的理解以及想象力。面我的是一个Visual Designer。
	  Product/Technical Taste: 主要考察是对于产品的品味，功能的改进，技术的选择。
	  Project Life Cycle: 作为一个Project Lead，拿到一个项目的初始‍‌‌‍‌‍‍‌‍‍‍‌‍‌‍‌‌‍‌‍原型，理解用例，沟通了解需求，如何拆分项目，计划和分配任务，proritize任务，以及预判在执行和验证项目时需要注意的点。
	  Behavior Questions
	  这个其实前后端没啥区别了，但是BQ也是决定level很关键的一轮。随便列举一些常见的题，以及面试官想获取的信息：
	  讲一个Recent Project。
	  a. Cross-functional Impact, 和多少组合作，lead了多少人
	  b. 是否Mentor别人
	  c. 有没有什么complex obstacle
	  d. 从商业和工程不同的角度分析问题
	  e. Balance between long-term and short-term goals
	  f. Any KPI and metrics体现项目的成功性
	  What are the differences between junior and senior engineers? - 对于Senior职责的理解
	  Tell me a time when you fall behind the schedule - 项目管理的能力
	  Tell me a time you disagree with peers. - 倾听力，同理心，沟通合作的能力
	  How to handle conflict management? - 应对突发状况的能力
	  Tell me a time when you receive some negative feedback or criticism. - 情绪管理、学习改进的能力