(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{929:function(a,t,_){"use strict";_.r(t);var r=_(17),s=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"与哈希函数有关的数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与哈希函数有关的数据结构"}},[a._v("#")]),a._v(" 与哈希函数有关的数据结构")]),a._v(" "),t("h3",{attrs:{id:"认识哈希函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#认识哈希函数"}},[a._v("#")]),a._v(" 认识哈希函数")]),a._v(" "),t("p",[a._v("1）输入参数data，假设是in类型，特征：可能性无穷大，比如str类型的参数\n2）输出参数类型out，特征：可能性可以很大，但一定是有穷尽的\n3）哈希函数没有任何随机的机制，固定的输入一定是固定的输出\n4）输入无穷多但输出值有限，所以不同输入也可能输出相同（哈希碰撞）\n5）==再相似的不同输入，得到的输出值，会几乎均匀的分布在out域上==\n重点：第5条！")]),a._v(" "),t("h3",{attrs:{id:"哈希函数的实际应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#哈希函数的实际应用"}},[a._v("#")]),a._v(" 哈希函数的实际应用")]),a._v(" "),t("p",[a._v("哈希表的设计")]),a._v(" "),t("p",[a._v("我们都大概知道HashMap,他的实现,是一个数组,数组节点下挂着单项链表,长了以后会变成红黑树.大概这样")]),a._v(" "),t("p",[a._v("![image-20240625223437446](/Users/fengshouli/Library/Application Support/typora-user-images/image-20240625223437446.png)")]),a._v(" "),t("p",[a._v("就是根据key,每次算出一个Hash值,然后%数组长度,算出他应该挂在哪个位置上.根据hash值会均匀分布的特性,数据会分布很均匀.")]),a._v(" "),t("h3",{attrs:{id:"hashmap的复杂度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashmap的复杂度"}},[a._v("#")]),a._v(" HashMap的复杂度")]),a._v(" "),t("p",[a._v("O(1),只是常数时间比较大,但是,时间复杂度就是O(1)")]),a._v(" "),t("p",[a._v("我们认为,map扩容时候,就是消耗最大的时候,我们假设,map最挫逼的情况,2个值就会迫使我扩容.1变2,2变4,4变8,8变16......")]),a._v(" "),t("p",[a._v("也就是我们认为可能3,5,9,17,33个数来的时候,可能要扩容,之前的都均匀分布了嘛.每次扩容一倍.等比数列")]),a._v(" "),t("p",[a._v("即使这种最挫逼的情况,N个数,扩容logN次.每次,涉及扩容那么多个数,平均下来,单次就是O(1),")]),a._v(" "),t("h3",{attrs:{id:"布隆过滤器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#布隆过滤器"}},[a._v("#")]),a._v(" 布隆过滤器")]),a._v(" "),t("p",[a._v("有失败率,可以控制很低但是失败率避免不了,和面试官聊的时候,如果不允许有失败率,那肯定不是用布隆过滤器.")]),a._v(" "),t("p",[a._v("如果在黑名单里的,一定不会失误,失误的是,如果他不在,可能误报.")]),a._v(" "),t("h3",{attrs:{id:"爬虫用例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#爬虫用例"}},[a._v("#")]),a._v(" 爬虫用例")]),a._v(" "),t("p",[a._v("假如有多个爬虫,我不能让他们爬重复的网址内容,太浪费了,我可以爬一个,就给他放到布隆过滤器里.爬之前,先检查爬过没.")]),a._v(" "),t("h3",{attrs:{id:"url黑名单题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url黑名单题"}},[a._v("#")]),a._v(" url黑名单题")]),a._v(" "),t("p",[a._v("假设,有100亿个黑名单url,每个名单64字节,如果搭一个服务,最简单就是个hashset,6400亿字节,640g内存支持这个服务.")]),a._v(" "),t("h4",{attrs:{id:"实现过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现过程"}},[a._v("#")]),a._v(" 实现过程")]),a._v(" "),t("h4",{attrs:{id:"_1-位图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-位图"}},[a._v("#")]),a._v(" 1.位图")]),a._v(" "),t("p",[a._v("我们假设int[10]的数组,一个int值是4字节,32位,10个长度就是320位,换算成bit[],bit[0]就是第1个int的第0位,bit[31]就是第1个int的最后一位.所以我们看着定义了一个int[10],实际上定义的是bit[320],叫m数组")]),a._v(" "),t("h4",{attrs:{id:"_2-哈希值描黑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-哈希值描黑"}},[a._v("#")]),a._v(" 2.哈希值描黑")]),a._v(" "),t("p",[a._v("我们假设用三个哈希函数,先别管为啥是三个,反正就是计算三个值,%一下,然后我们可以大概再m里对应位置均匀找到3个点,描黑(逻辑上,打个标记)")]),a._v(" "),t("h4",{attrs:{id:"_3-取值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-取值"}},[a._v("#")]),a._v(" 3.取值")]),a._v(" "),t("p",[a._v("当我们要判断时候,同样的哈希方法,找到三个值,取出来,看看,有一个白,说明,没记录过,全黑,就是有记录.")]),a._v(" "),t("h4",{attrs:{id:"_4-问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-问题"}},[a._v("#")]),a._v(" 4.问题")]),a._v(" "),t("p",[a._v("如果我的m定的很小,而数据量很大的时候,哈希函数很多,一次描黑很多点,%完了可能给所有的点都描黑了,失败率就急剧升高.所以,m定多大?哈希函数定多少个?需要考虑.(m茫茫大,又会浪费空间.)")]),a._v(" "),t("h4",{attrs:{id:"_5-失误率图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-失误率图"}},[a._v("#")]),a._v(" 5.失误率图")]),a._v(" "),t("p",[a._v("如果说,m很小,则失误率几乎为100%,如果m无限大,失误率无限接近0,但是到不了0.我们取一个符合我们失误率的m即可,例如万分之一,0.01%的时候,m的大小,有公式.需要背下来.只需要知道,样本量大小n,失误率p,直接得到m大小,怎么来的,不需要知道.")]),a._v(" "),t("p",[a._v("![image-20240625230604003](/Users/fengshouli/Library/Application Support/typora-user-images/image-20240625230604003.png)")]),a._v(" "),t("p",[a._v("![image-20240625231803550](/Users/fengshouli/Library/Application Support/typora-user-images/image-20240625231803550.png)")]),a._v(" "),t("h4",{attrs:{id:"_6-哈希函数取多少个"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-哈希函数取多少个"}},[a._v("#")]),a._v(" 6.哈希函数取多少个?")]),a._v(" "),t("p",[a._v("如果取1个,那就可能样本量不够,失误率可能变高,如果取1000w个,那m会被极速耗尽.所以,过多,过少,都不行.趋势图如图所示.第二个公式,至于m,n有关.")]),a._v(" "),t("p",[a._v("![image-20240625231242428](/Users/fengshouli/Library/Application Support/typora-user-images/image-20240625231242428.png)")]),a._v(" "),t("p",[a._v("![image-20240625231813354](/Users/fengshouli/Library/Application Support/typora-user-images/image-20240625231813354.png)")]),a._v(" "),t("h4",{attrs:{id:"_7-最后算出真实失误率"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-最后算出真实失误率"}},[a._v("#")]),a._v(" 7.最后算出真实失误率.")]),a._v(" "),t("p",[a._v("![image-20240625231513818](/Users/fengshouli/Library/Application Support/typora-user-images/image-20240625231513818.png)")]),a._v(" "),t("h3",{attrs:{id:"问答技巧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问答技巧"}},[a._v("#")]),a._v(" 问答技巧")]),a._v(" "),t("ol",[t("li",[a._v("问是否允许有失误率,如果允许,那就是布隆过滤器,如果不允许,那肯定不是了.")]),a._v(" "),t("li",[a._v("当我算出m时候,我可以估算至少需要多少空间,例如上面的题,17G.我问问面试官,我是否可以多给点,例如20G,这样失误率就会更低了.argue过程.")]),a._v(" "),t("li",[a._v("如果同意了,则带着真实的m'去求k,真实哈希函数个数.大约13个.")]),a._v(" "),t("li",[a._v("真实失误率一定比预估的0.0001小.")])]),a._v(" "),t("h3",{attrs:{id:"去哪找13个哈希函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#去哪找13个哈希函数"}},[a._v("#")]),a._v(" 去哪找13个哈希函数?")]),a._v(" "),t("p",[a._v("我有2个即可,f1(),f2().")]),a._v(" "),t("p",[a._v("第1个1*f1()+f2().")]),a._v(" "),t("p",[a._v("第2个2*f1()+f2().")]),a._v(" "),t("p",[a._v("第n个,n*f1()+f2().")]),a._v(" "),t("h3",{attrs:{id:"一致性哈希"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一致性哈希"}},[a._v("#")]),a._v(" 一致性哈希")]),a._v(" "),t("p",[a._v("==分布式存储结构最常见的结构==")]),a._v(" "),t("p",[a._v("![image-20240625232936720](/Users/fengshouli/Library/Application Support/typora-user-images/image-20240625232936720.png)")]),a._v(" "),t("p",[a._v("1）哈希域变成环的设计")]),a._v(" "),t("p",[a._v("2）虚拟节点技术")]),a._v(" "),t("p",[a._v("==只要面好点的公司,不问一致性哈希,说不过去的.==")]),a._v(" "),t("p",[a._v("上面的图中显示,我们一个数据来了以后,我们最普通的就是,将这个数据的key,%3,看看,放到哪个a/b/c数据库服务器上,我们可以均匀的分压.")]),a._v(" "),t("p",[a._v("痛点:我们当要加减机器的时候,这时候,涉及数据迁移的问题,这个时候,迁移的数据量是全量的.太痛了.因为以前是%3,现在%4,不全部迁移一遍,数据找不到了.")]),a._v(" "),t("h4",{attrs:{id:"哈希域变成环的设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#哈希域变成环的设计"}},[a._v("#")]),a._v(" 哈希域变成环的设计")]),a._v(" "),t("p",[a._v("我们把这个abc放到一个环上,例如1~2^64-1个位置的环,三个机器,例如以ip地址,机器号什么的,哈希一下,一定坐落在这个环上某个位置,")]),a._v(" "),t("p",[a._v("但是,我们的数据,是通过哈希key来决定放哪里的,例如,昏头了,拿国家名来分,虽然一共200多个国家呢,但是,中美就特别多,所以有的服务就压力很大,有的服务压力很小.所以什么key适合,只能从业务挖掘.")]),a._v(" "),t("h4",{attrs:{id:"虚拟节点技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟节点技术"}},[a._v("#")]),a._v(" 虚拟节点技术")]),a._v(" "),t("p",[a._v("这里还要考虑一些问题")]),a._v(" "),t("p",[a._v("1.虽然哈希可以做到均分,但是只有3个,实在是样本量太小了啊.不一定完全那么均衡.即使他真的均衡了,一人1/3,如果此时加机器呢,一定在某个1/3里,这时候,肯定就又不均衡了.")]),a._v(" "),t("p",[a._v("2.解决这个问题.我给三台机器,m1,m2,m3分配1000个字符串,哪个机器有哪些字符串, 我能查到,哪些字符串属于哪个机器,我也能查到,那我给m1,m2,m3各做1000个虚拟节点,互相查都很方便,")]),a._v(" "),t("p",[a._v("我让这1000个节点帮我上环,数据实际归属,归三台机器.这样下来,数据分布超均衡.")]),a._v(" "),t("p",[a._v("这时候,我加机器,同样,给1000个虚拟节点,一样均衡.数据大约迁移,,m1,m2.m3各1/12,迁移到m4,共1/4,不用全量了,很爽.剩下三台机器3/4,各1/4,")])])}),[],!1,null,null,null);t.default=s.exports}}]);