(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{318:function(v,_,e){v.exports=e.p+"assets/img/classLoader.68953cf7.jpg"},319:function(v,_,e){v.exports=e.p+"assets/img/classLoader2.01606027.jpg"},320:function(v,_,e){v.exports=e.p+"assets/img/classLoader3.2d53acca.jpg"},489:function(v,_,e){"use strict";e.r(_);var t=e(10),a=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"jvm"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jvm"}},[v._v("#")]),v._v(" JVM")]),v._v(" "),_("h2",{attrs:{id:"类加载-初始化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#类加载-初始化"}},[v._v("#")]),v._v(" 类加载-初始化")]),v._v(" "),_("h3",{attrs:{id:"加载过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#加载过程"}},[v._v("#")]),v._v(" 加载过程")]),v._v(" "),_("p",[_("img",{attrs:{src:e(318),alt:""}})]),v._v(" "),_("p",[v._v("三大步骤:")]),v._v(" "),_("ul",[_("li",[v._v("Loading")]),v._v(" "),_("li",[v._v("Linking")]),v._v(" "),_("li",[v._v("Initialization")])]),v._v(" "),_("p",[v._v("详细介绍:")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("Loading")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("双亲委派，主要出于安全来考虑")]),v._v(" "),_("p",[v._v("加载一个类,先从自定义加载器开始,向parent方向检查是否加载过这个类,如果有,返回,如果没有继续,到了Bootstrap,如果还没有,则向下询问子类,如果加载过了,则返回,否则继续,到了自定义Custom,如果还没有,抛出ClassNotFound异常.")]),v._v(" "),_("p",[v._v("如果说你自己的加载器,直接重写个String类,那是不是非常不安全,如果双亲委派,他需要去父方向找.而不会加载它自己的,只会加载一次.!")]),v._v(" "),_("p",[_("img",{attrs:{src:e(319),alt:""}})]),v._v(" "),_("p",[_("img",{attrs:{src:e(320),alt:""}})])]),v._v(" "),_("li",[_("p",[v._v("LazyLoading 五种情况(不重要)")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("–new getstatic putstatic invokestatic指令，访问final变量除外")]),v._v(" "),_("p",[v._v("–java.lang.reflect对类进行反射调用时")]),v._v(" "),_("p",[v._v("–初始化子类的时候，父类首先初始化")]),v._v(" "),_("p",[v._v("–虚拟机启动时，被执行的主类必须初始化")]),v._v(" "),_("p",[v._v("–动态语言支持java.lang.invoke.MethodHandle解析的结果为REF_getstatic REF_putstatic REF_invokestatic的方法句柄时，该类必须初始化")])])])]),v._v(" "),_("li",[_("p",[v._v("ClassLoader的源码重点")]),v._v(" "),_("ol",[_("li",[v._v("findInCache(自底向顶从这里找是否已经加载过) -> parent.loadClass(加载方法) -> findClass(自顶向底用这个方法加载)")])])]),v._v(" "),_("li",[_("p",[v._v("自定义类加载器")]),v._v(" "),_("ol",[_("li",[v._v("extends ClassLoader")]),v._v(" "),_("li",[v._v("overwrite findClass() -> defineClass(byte[] -> Class clazz)")]),v._v(" "),_("li",[v._v("加密")]),v._v(" "),_("li",[_("font",{attrs:{color:"red"}},[v._v("第一节课遗留问题：parent是如何指定的，打破双亲委派，学生问题桌面图片")]),v._v(" "),_("ol",[_("li",[v._v("用super(parent)指定")]),v._v(" "),_("li",[v._v("双亲委派的打破\n"),_("ol",[_("li",[v._v("如何打破：重写loadClass（）")]),v._v(" "),_("li",[v._v("何时打破过？\n"),_("ol",[_("li",[v._v("JDK1.2之前，自定义ClassLoader都必须重写loadClass()")]),v._v(" "),_("li",[v._v("ThreadContextClassLoader可以实现基础类调用实现类代码，通过thread.setContextClassLoader指定")]),v._v(" "),_("li",[v._v("热启动，热部署\n"),_("ol",[_("li",[v._v("osgi tomcat 都有自己的模块指定classloader（可以加载同一类库的不同版本）")])])])])])])])])],1)])]),v._v(" "),_("li",[_("p",[v._v("混合执行 编译执行 解释执行")]),v._v(" "),_("ol",[_("li",[v._v("检测热点代码：-XX:CompileThreshold = 10000")])])])])]),v._v(" "),_("li",[_("p",[v._v("Linking")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("Verification")]),v._v(" "),_("ol",[_("li",[v._v("验证文件是否符合JVM规定")])])]),v._v(" "),_("li",[_("p",[v._v("Preparation")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("静态成员变量赋默认值")]),v._v(" "),_("blockquote",[_("p",[v._v("(默认值!不是初始值.例如,int的默认值是0,加载一个类,static int i = 8,在这里,i将被赋值为0,在第三大步才会被赋值为8 )")])])])])]),v._v(" "),_("li",[_("p",[v._v("Resolution")]),v._v(" "),_("ol",[_("li",[v._v("将类、方法、属性等符号引用解析为直接引用\n常量池中的各种符号引用解析为指针、偏移量等内存地址的直接引用")])])])])]),v._v(" "),_("li",[_("p",[v._v("Initializing")]),v._v(" "),_("ol",[_("li",[v._v("调用类初始化代码，给静态成员变量赋初始值")])])])]),v._v(" "),_("p",[v._v("小总结：")]),v._v(" "),_("ol",[_("li",[v._v("load - 默认值 - 初始值")]),v._v(" "),_("li",[v._v("new - 申请内存 - 默认值 - 初始值")])]),v._v(" "),_("h2",{attrs:{id:"jmm-java-memory-model-java内存模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jmm-java-memory-model-java内存模型"}},[v._v("#")]),v._v(" JMM java memory model java内存模型")]),v._v(" "),_("h3",{attrs:{id:"_1-硬件层数据一致性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-硬件层数据一致性"}},[v._v("#")]),v._v(" 1.硬件层数据一致性")]),v._v(" "),_("p",[v._v("协议很多,MESI只是其中一种,intel x86 用MESI")]),v._v(" "),_("h4",{attrs:{id:"mesi协议中的状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mesi协议中的状态"}},[v._v("#")]),v._v(" MESI协议中的状态")]),v._v(" "),_("p",[_("code",[v._v("CPU")]),v._v("中每个缓存行（"),_("code",[v._v("caceh line")]),v._v(")使用4种状态进行标记（使用额外的两位("),_("code",[v._v("bit")]),v._v(")表示):")]),v._v(" "),_("p",[_("strong",[v._v("M: 被修改（Modified)")])]),v._v(" "),_("p",[v._v("该缓存行只被缓存在该"),_("code",[v._v("CPU")]),v._v("的缓存中，并且是被修改过的（"),_("code",[v._v("dirty")]),v._v("),即与主存中的数据不一致，该缓存行中的内存需要在未来的某个时间点（允许其它"),_("code",[v._v("CPU")]),v._v("读取请主存中相应内存之前）写回（"),_("code",[v._v("write back")]),v._v("）主存。")]),v._v(" "),_("p",[v._v("当被写回主存之后，该缓存行的状态会变成独享（"),_("code",[v._v("exclusive")]),v._v(")状态。")]),v._v(" "),_("p",[_("strong",[v._v("E: 独享的（Exclusive)")])]),v._v(" "),_("p",[v._v("该缓存行只被缓存在该"),_("code",[v._v("CPU")]),v._v("的缓存中，它是未被修改过的（"),_("code",[v._v("clean")]),v._v(")，与主存中数据一致。该状态可以在任何时刻当有其它"),_("code",[v._v("CPU")]),v._v("读取该内存时变成共享状态（"),_("code",[v._v("shared")]),v._v(")。")]),v._v(" "),_("p",[v._v("同样地，当"),_("code",[v._v("CPU")]),v._v("修改该缓存行中内容时，该状态可以变成"),_("code",[v._v("Modified")]),v._v("状态。")]),v._v(" "),_("p",[_("strong",[v._v("S: 共享的（Shared)")])]),v._v(" "),_("p",[v._v("该状态意味着该缓存行可能被多个"),_("code",[v._v("CPU")]),v._v("缓存，并且各个缓存中的数据与主存数据一致（"),_("code",[v._v("clean")]),v._v(")，当有一个"),_("code",[v._v("CPU")]),v._v("修改该缓存行中，其它"),_("code",[v._v("CPU")]),v._v("中该缓存行可以被作废（变成无效状态（"),_("code",[v._v("Invalid")]),v._v("））。")]),v._v(" "),_("p",[_("strong",[v._v("I: 无效的（Invalid）")])]),v._v(" "),_("p",[v._v("该缓存是无效的（可能有其它"),_("code",[v._v("CPU")]),v._v("修改了该缓存行）。")]),v._v(" "),_("p",[_("a",{attrs:{href:"https://www.cnblogs.com/z00377750/p/9180644.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("MESI文章"),_("OutboundLink")],1)]),v._v(" "),_("p",[v._v("以前CPU直接就是总线锁,现代CPU的数据一致性实现 = 缓存锁(MESI ...) + 总线锁")]),v._v(" "),_("p",[v._v("读取缓存以cache line为基本单位，目前64bytes")]),v._v(" "),_("p",[v._v("位于同一缓存行的两个不同数据，被两个不同CPU锁定，产生互相影响的伪共享问题")]),v._v(" "),_("p",[v._v("伪共享问题：JUC/c_028_FalseSharing")]),v._v(" "),_("p",[v._v("使用缓存行的对齐能够提高效率")]),v._v(" "),_("h3",{attrs:{id:"_2-乱序问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-乱序问题"}},[v._v("#")]),v._v(" 2.乱序问题")]),v._v(" "),_("p",[v._v("CPU为了提高指令执行效率，会在一条指令执行过程中（比如去内存读数据（慢100倍）），去同时执行另一条指令，前提是，两条指令没有依赖关系")]),v._v(" "),_("p",[v._v("https://www.cnblogs.com/liushaodong/p/4777308.html")]),v._v(" "),_("p",[v._v("写操作也可以进行合并")]),v._v(" "),_("p",[v._v("https://www.cnblogs.com/liushaodong/p/4777308.html")]),v._v(" "),_("p",[v._v("JUC/029_WriteCombining")]),v._v(" "),_("p",[v._v("乱序执行的证明：JVM/jmm/Disorder.java")]),v._v(" "),_("p",[v._v("原始参考：https://preshing.com/20120515/memory-reordering-caught-in-the-act/")]),v._v(" "),_("h3",{attrs:{id:"_3-如何保证特定情况下不乱序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何保证特定情况下不乱序"}},[v._v("#")]),v._v(" 3.如何保证特定情况下不乱序")]),v._v(" "),_("p",[v._v("硬件内存屏障 X86")]),v._v(" "),_("blockquote",[_("p",[v._v("sfence:  store| 在sfence指令前的写操作当必须在sfence指令后的写操作前完成。\nlfence：load | 在lfence指令前的读操作当必须在lfence指令后的读操作前完成。\nmfence：modify/mix | 在mfence指令前的读写操作当必须在mfence指令后的读写操作前完成。")])]),v._v(" "),_("blockquote",[_("p",[v._v("原子指令，如x86上的”lock …” 指令是一个Full Barrier，执行时会锁住内存子系统来确保执行顺序，甚至跨多个CPU。Software Locks通常使用了内存屏障或原子指令来实现变量可见性和保持程序顺序")])]),v._v(" "),_("p",[v._v("JVM级别如何规范（JSR133）")]),v._v(" "),_("blockquote",[_("p",[v._v("LoadLoad屏障：\n对于这样的语句Load1; LoadLoad; Load2，")]),v._v(" "),_("p",[v._v("在Load2及后续读取操作要读取的数据被访问前，保证Load1要读取的数据被读取完毕。")]),v._v(" "),_("p",[v._v("StoreStore屏障：")]),v._v(" "),_("p",[v._v("对于这样的语句Store1; StoreStore; Store2，")]),v._v(" "),_("p",[v._v("在Store2及后续写入操作执行前，保证Store1的写入操作对其它处理器可见。")]),v._v(" "),_("p",[v._v("LoadStore屏障：")]),v._v(" "),_("p",[v._v("对于这样的语句Load1; LoadStore; Store2，")]),v._v(" "),_("p",[v._v("在Store2及后续写入操作被刷出前，保证Load1要读取的数据被读取完毕。")]),v._v(" "),_("p",[v._v("StoreLoad屏障：\n对于这样的语句Store1; StoreLoad; Load2，")]),v._v(" "),_("p",[v._v("​\t 在Load2及后续所有读取操作执行前，保证Store1的写入对所有处理器可见。")])]),v._v(" "),_("p",[v._v("volatile的实现细节")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("字节码层面\nACC_VOLATILE")])]),v._v(" "),_("li",[_("p",[v._v("JVM层面\nvolatile内存区的读写 都加屏障")]),v._v(" "),_("blockquote",[_("p",[v._v("StoreStoreBarrier")]),v._v(" "),_("p",[v._v("volatile 写操作")]),v._v(" "),_("p",[v._v("StoreLoadBarrier")])]),v._v(" "),_("blockquote",[_("p",[v._v("LoadLoadBarrier")]),v._v(" "),_("p",[v._v("volatile 读操作")]),v._v(" "),_("p",[v._v("LoadStoreBarrier")])])]),v._v(" "),_("li",[_("p",[v._v("OS和硬件层面\nhttps://blog.csdn.net/qq_26222859/article/details/52235930\nhsdis - HotSpot Dis Assembler\nwindows lock 指令实现 | MESI实现")])])]),v._v(" "),_("p",[v._v("synchronized实现细节")]),v._v(" "),_("ol",[_("li",[v._v("字节码层面\nACC_SYNCHRONIZED\nmonitorenter monitorexit")]),v._v(" "),_("li",[v._v("JVM层面\nC C++ 调用了操作系统提供的同步机制")]),v._v(" "),_("li",[v._v("OS和硬件层面\nX86 : lock cmpxchg / xxx\n"),_("a",{attrs:{href:"https://blog.csdn.net/21aspnet/article/details/88571740",target:"_blank",rel:"noopener noreferrer"}},[v._v("https"),_("OutboundLink")],1),_("a",{attrs:{href:"https://blog.csdn.net/21aspnet/article/details/88571740",target:"_blank",rel:"noopener noreferrer"}},[v._v("😕/blog.csdn.net/21aspnet/article/details/"),_("OutboundLink")],1),_("a",{attrs:{href:"https://blog.csdn.net/21aspnet/article/details/88571740",target:"_blank",rel:"noopener noreferrer"}},[v._v("88571740"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=a.exports}}]);