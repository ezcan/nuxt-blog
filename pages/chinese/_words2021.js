const words = [
  // あ 無新增
  'ああああ亞啞娃阿哀愛相間挨姶會逢青蒼碧葵朱赤垢紅証曉曉茜龝秋晃晶惡握曙顎渥淺淺朝麻旭葦足腳芦鰺梓東汗邊仇值價頭壓斡扱宛後跡穴兄姉姐虻油尼網雨飴絢綾鮎彩嵐新或粟泡袷安庵按暗案闇鞍餡殷杏',
  // い 無新增
  'いいいいいい以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺醫井亥戌韋羿家彥庵雷碇息域幾育郁池憩功勲勳石礎泉磯礒一壱壹弌溢逸稻鰯茨芋允印咽員因姻引飲淫胤蔭院陰隱韻殷吋',
  // う 新增 1 字：海
  'うううう右宇烏羽迂雨卯上魚兔牛丑氏潮後鵜窺碓臼渦噓歌唄唱詩宴內家器欝蔚腕鰻項姥厩初馬海海梅裏浦瓜漆鱗閏噂云運雲',
  // え 新增 1 字：榮
  'ええええええ荏繪得江會餌叡營嬰影映曳栄榮永泳洩瑛盈穎穎英衛詠銳液疫益驛枝悅謁越閱榎蝦夷襟衿厭円苫園堰奄宴延怨掩援沿演炎焰煙燕猿緣艷苑薗遠鉛鴛鹽',
  // お 新增 1 字：泓
  'おおおお於汙甥凹央往應押旺橫歐毆王扇皇櫻翁襖鶯鷗黃凰狼泓丘岡沖荻奧億屋憶臆桶長鴛雄牡乙夫弟男鬼斧己帶主面表親折俺卸御恩溫穩音女',
  // か 新增 1 字：海
  'かかか下化仮何伽價佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊日暇俄峨我牙畫臥芽蛾賀雅餓駕介會解回塊壞迴快怪悔恢懷戒拐改廣藪舩魁晦械海海灰界皆繪芥蟹開階貝蚕凱劾外咳害崖慨概涯礙蓋街該鎧骸浬馨楓蛙香鏡垣柿礪鍵鈎劃嚇各廓拡攪格核殼獲確穫覺角赫較郭閣隔革學岳樂樂額顎筧陰影蔭崖掛笠棧傘樫橿梶鰍貸頭柏數霞風肩方片型敵形貌潟刀塊且克勝割喝恰括活渴滑葛褐劼轄鰹桂糧叶椛樺門鼎要金鐘庚鞄株兜竈蒲甲壁釜鎌噛鴨栢茅萱窯紙神髮雷瓶鷗粥空唐柄烏体仮狩刈苅彼川皮革側蛙瓦乾侃冠寒刊勘勸卷喚堪姦完官寬干幹患感慣憾換敢柑桓棺款歡汗漢澗灌環甘監看竿管簡緩缶翰肝艦莞觀諫貫還鑑間閑關陷韓館館丸含岸巖玩癌眼岩翫贋雁頑顏願',
  // き 無新增
  'きき企伎危喜器基奇嬉寄岐希木黃樹幾忌揮機旗既期棋棄磯機歸毅氣汽畿祈季稀紀徽規記貴起軌輝飢騎鬼龜毀嵜几暉偽儀妓宜戲技擬欺犧疑祇義蟻誼議魏掬菊鞠后岸傷絆北吉吉狐吃喫桔橘詰砧杵黍卻客腳虐逆丘久仇清休及吸宮弓急救朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠拳渠虛許距遽鋸漁禦魚亨享京供俠僑兇競共凶協匡卿叫喬境峽強彊怯恐恭挾教橋槁況狂狹矯胸脅興蕎鄉鏡響姜饗驚仰凝堯曉業餃局曲極玉桐粁僅勤均巾布際錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀',
  // く 無新增
  'くく久九俱句區狗玖矩苦軀驅駈駒具愚虞喰空偶寓遇隅杭莖釘草鎖串櫛釧藥屑癖曲口唇屈掘窟沓靴轡国國那窪熊隈組粂雲倉藏藏瞑栗繰吳吳紅黑鐵桑桒鍬勲君薰訓勲勳群軍郡',
  // け 無新增
  'けけけ毛卦袈祁係傾刑兄啟圭珪型契形徑惠慶慧憩揭攜敬景桂溪畦稽系經繼繫罫莖荊螢計詣警輕頸雞奎芸迎鯨劇戟擊激隙桁傑欠決潔穴結血訣月煙獸件儉倦健兼券劍喧圈堅嫌建憲懸拳捲檢權牽犬獻研硯絹縣肩見謙賢軒遣鍵險顯驗鹼腱元原嚴幻弦減源玄現絃舷鉉言諺限',
  // こ 無新增
  'ここ乎個古呼固姑孤己庫弧戶苔子仔故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午吳吾娛後御悟梧檎瑚碁語誤護醐鯉戀乞聲肥交佼倖光洸公功効勾厚口向后喉坑垢好孔孝宏工巧巷幸廣庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鑛礦鋼閤降項香高高鴻候侯晧皓姜滉吼竑剛劫號合壕拷濠豪轟氷麴克刻告国國穀酷鵠黑獄心志漉腰輿梢答甑忽惚骨狛込事言琴異壽此諺粉拳米曆頃毀今困坤墾婚恨懇昏昆根梱混痕紺艮魂渾',
  // さ 無新增
  'ささ些佐叉唆嵯左差查沙瑳砂詐鎖裟磋坐座挫債催再最哉塞妻宰彩才採栽歲濟災采犀碎砦祭齋齋細菜裁載際崔劑在材罪財早幸冴竿坂阪逆性界堺境榊肴咲杯盃魚先崎崎埼碕嵜岬鷺魁作削咋搾昨朔柵窄策索錯炸櫻櫻酒鮭笹匙冊刷察拶撮擦札殺薩雜皐鯖捌里悟智聰暫殘澤澤條錆寂樣侍鮫鞘皿更晒三傘參山慘撒散棧燦珊產算纂蚕讚贊贊酸餐斬',
  // し 無新增
  'しし仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止死氏獅祉私糸紙紫肢脂至視視詞詩試誌諮資熾賜雌飼齒摯疵事似侍兒兒寺慈持時次滋治爾璽痔磁示而耳自蒔辭幸椎爺鹽潮汐鹿梓式識鴫竺軸茂繁宍猪靜閑雫滴下舌七叱執失嫉室悉濕漆疾質實實蔀品科篠忍偲柴芝屡蕊島嶋嶌霜縞舍寫射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釋鯱錫若寂弱惹主取守手姑朱殊狩珠種腫趣酒首壽十揉尻汁儒受呪壽授樹綬需囚收周宗就州修脩愁拾洲秀秋終繡習臭舟蒐眾襲讐蹴輯週酋酬集醜壽什住充從戎柔涉獸縱重銃叔夙宿淑祝縮肅塾熟出術述俊峻春瞬竣舜巡駿准循旬楯殉詢淳準潤盾純遵醇順處初所暑曙渚渚庶緒署書薯藷諸助敘女序徐恕鋤除傷償勝匠升召哨商唱嘗獎獎妾娼宵將小少尚生庄床廠彰承抄招掌捷昇翔昌昭晶松梢樟樵沼消涉湘燒焦照症省硝礁祥祥穪章笑粧紹肖菖蔣蕉衝裳訟頌証詔詳象賞醬鉦鍾鐘障鞘蕭上丈丞乘冗剩城場壤孃常情擾条杖淨狀疊穰蒸讓釀錠條囑埴飾拭植殖燭織職色觸食蝕辱白代銀伸信侵唇娠寢尻印徵標心慎振新晉森榛浸深申疹真神秦紳臣芯薪審親診身真辛進針震晨人仁刃塵壬尋甚尽腎訊迅陣靭笥殿椹',
  // す 無新增
  'すす諏州巢須醮圖廚逗吹垂帥推水炊睡粹翠慧衰遂醉錐錘隨隨瑞髓崇嵩數樞趨雛据末姿隙鋤杉椙直助介輔祐祐菅頗筋煤鈴薄雀獎獎昂條硯裾簾京渾澄摺墨炭角李寸',
  // せ 無新增
  'せせ世背脊瀨畝是凄制勢勢姓征性成政整星晴棲栖正清牲生盛精聖聲製西誠誓請晟逝醒青靜齊齊稅脆隻席惜戚斥昔析石積籍績咳堰關責赤跡蹟碩切拙接攝攝折設竊節說雪絕舌錢蟬芹競仙先千占宣專尖川戰扇撰栓栴泉淺淺洗染潛煎煽旋穿箭線纖羨腺舛船薦詮賤踐踐選遷錢銑閃鮮塹前善漸然全禪繕膳糎',
  // そ 無新增
  'そそ噌塑岨措曾曾楚狙疏疏礎祖租粗素組蘇訴阻遡鼠僧創雙叢倉喪壯奏爽宋層匝惣想搜掃插搔操早曹巢槍槽漕燥爭瘦相窸糟總綜聰草莊葬蒼藻裝走送遭颯鎗霜騷像增憎臟藏贈造翔候促側則即息捉束測足速俗屬賊族續底卒袖外苑其園薗梵傍空天虛某揃存孫尊損村遜',
  // た 無新增
  'たた田他多太汰詑唾墮妥惰打柁舵楕陀駄驒体堆對耐岱帶待怠態戴替泰滯胎腿苔袋貸退逮隊黛鯛代台大第醍題橙平高高鷹貴隆寶滝瀧薪卓啄宅托擇拓澤濯琢託鐸濁諾巧匠工竹丈岳茸武猛健毅凧蛸只唯叩但疊質館達橘忽辰竜奪脫巽豎縱盾楯立辿店棚掌谷狸種胤束度旅玉珠彈靈魂賜民為溜鱈樽誰俵丹單嘆坦担探旦歎淡湛炭短端簞綻耽胆貪蛋誕眈鍛團壇彈斷暖檀段男談',
  // ち 無新增
  'ちち千血值知地弛乳恥智池痴稚置致蜘遲馳茅力契築畜竹筑蓄逐父秩窒巷茶嗟嫡著中仲宙忠抽昼柱注虫衷註酎鑄駐樗瀦猪苧著貯丁兆凋喋寵帖帳廳弔張彫徵懲挑暢朝潮牒町眺聽脹腸蝶笘趙調諜超跳銚長頂鳥勅捗直朕塵沈珍賃鎮陳椹',
  // つ 無新增
  'つつつつ津墜椎朔序槌追鎚痛通杖束柄塚栂司官宰摑月槻次機佃漬柘辻蔦綴鍔土槌壤戊筒統堤鼓葛伝綱紘維恒常角唾椿翼燕粒潰瞑坪壺嬬紬局妻罪爪艷露面弦吊釣鶴靍劍',
  // て 無新增
  'てて手掌亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄遞邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鐵寺照輝典填天展店添纏甜貼轉顛點傳殿澱田電',
  // と 無新增
  'とと十戶兔吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥礪努度土奴問樋怒倒黨冬凍刀唐塔塘套宕島嶋悼投搭東桃檮棟盜淘湯濤灯燈當痘禱等答筒糖統到董蕩藤討謄豆踏逃透通鐙陶頭騰鬥橙働動同堂導憧撞洞瞳童胴萄道銅峠徹鴇伽匿得德瀆特督禿篤毒獨讀刺床常所處年歲敏稔栃橡凸突椴屆轟隣殿帳鳶罪苫富富友共伴供朋智巴豐虎寅酉鳥雞虜砦弗瀞噸屯惇敦沌豚遁頓吞眈曇鈍丼貪',
  // な 無新增
  'なな名菜奈那內尚猶直中仲乍凪薙汀渚渚情無梨謎灘捺七何鍋生鉛並波浪淚楢馴也成鳴繩畷南楠軟難汝爾',
  // に 無新增
  'にに二丹荷尼弍邇匂賑肉西虹錦廿偽贋日乳入如尿韮庭雞任妊忍認',
  // ぬ 無新增
  'ぬぬ濡沼糠主布',
  // ね 無新增
  'ねね子音根禰禰寧葱猫熱年念粘捻撚燃',
  // の 無新增
  'のの乃逎野之埜囊惱濃納能腦膿農軒禾鋸覗後喉咽蚤糊則函紀憲呪',
  // は 無新增
  'はは巴刃葉齒端場把播霸杷波派琶破婆罵芭馬薔俳廢摔排敗杯盃牌背灰肺輩配倍培媒梅楳煤狽買賣賠陪這蠅秤矧萩伯剝博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麥函箱硲箸肇始初一柱筈斜蓮櫨幡旗肌膚畑畠裸八鉢蜂潑發醱髮伐罰抜筏閥茉鳩花華鼻話噺塙羽羽母幅浜濱濱蛤林隼原腹針梁遙遙伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範采煩頒飯絆挽晚番盤磐蕃蠻曼饅',
  // ひ 無新增
  'ひひ匪卑日火否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹燈費避非飛樋簸備尾微枇毘琵眉美鼻柊稗東光匹疋髭彥彥膝菱肘肱聖歪弼額左必畢筆逼棺羊人雛檜檜丙暇閑姬媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲玹平炳蒜蛭鰭尋廣弘廣品彬斌浜瀕貧賓頻敏瓶',
  // ふ 無新增
  'ふふ不付埠夫婦富富布府怖扶敷斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風笛葺蕗伏副復幅服福腹複覆袋節藤襖淵渕弗払沸仏物鮒舟船舩麓冬分吻噴墳憤扮焚奮粉糞紛雰文聞',
  // へ 無新增
  'へへ丙部併兵塀幣平弊柄炳並蔽閉秉陛米頁僻壁癖璧碧別瞥蔑箆紅蛇偏變片篇編邊反遍邊邊便勉娩弁鞭屁',
  // ほ 無新增
  'ほほ保帆舖鋪圃捕步甫補輔穗募墓慕戊暮母簿菩倣俸包呆報奉寶峰峯崩庖抱捧放方朋法泡烹砲縫胞芳萌蓬蜂褒訪豐邦鋒飽鳳鵬幫彗乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頰他外北僕卜墨撲朴牧睦穆釦勃矛星螢沒程殆骨炎譽杋洞堀濠幌奔本翻凡盆們梵',
  // ま 無新增
  'まま摩磨魔麻埋妹昧枚每哩真眞前牧薪槙槙幕膜枕鮪柾鱒桝枡亦俁又股町街松抹末沫茉祭迄的窸円愛眼疎幻儘繭鞠丸希稀麿万慢滿漫蔓曼萬槇',
  // み 無新增
  'みみ味未三實魅已箕帝幹右巫命尊操岬水瑞湖店溝晦道路滿密蜜貢綠翠湊蓑簑皆港稔南源峰實耳耳宮京都脈幸妙瞑粍民眠珉',
  // む 無新增
  'むむ務夢無牟矛霧鵡昔麥椋骸婿虫娘鞭六旨胸棟村邑群紫室',
  // め 無新增
  'めめ目芽眼冥名命明盟迷銘鳴姪瞑妾飯雌牝滅免棉綿緬面麵',
  // も 無新增
  'もも喪摸模茂妄孟毛猛盲網耗蒙儲木默目杢勿餅持尤元本基素許戻物者籾椛揉百股桃貰森守杜唐問悶紋門匆們',
  // や 新增 2 字：藪鑓
  'やややや也八矢谷哉屋家冶夜爺耶野彌灸刃館館輩族厄役約藥譯躍奕櫓邸社安靖康奴宿柳藪山病藪鑓',
  // ゆ 無新增
  'ゆゆゆゆ愉愈湯油癒諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕結侑故床雪柚豐指弓夢',
  // よ 無新增
  'よよよよ予余與世代四譽輿預夜豫與宵傭幼妖容庸揚搖擁曜楊樣洋溶熔鎔用窯羊耀燿葉蓉要謠踊遙遙陽養燁慾抑欲沃浴翌翼邪由吉吉葦淀鎧萬甦',
  // ら 無新增
  'らら羅等螺裸薇來來賴雷磊洛絡落酪亂卵嵐欄濫藍蘭覽',
  // り 新增 1 字：霖
  'りり利吏履李梨理璃痢裏裡里離莉陸律率立葎廖掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼獵療瞭稜糧良諒遼量陵領力綠倫厘林淋燐琳臨輪隣鱗麟凜霖',
  // る 無新增
  'るる瑠流壘淚累類',
  // れ 無新增
  'れれ令伶禮冷勵嶺怜玲例苓鈴隸零靈麗齡黎莉磊曆歷列劣烈裂廉戀憐漣煉簾練聯蓮連鍊',
  // ろ 無新增
  'ろろ呂魯櫓爐賂路露勞婁廊弄朗朗樓榔浪漏牢狼籠老聾蠟郎六麓祿肋錄論',
  // わ 無新增
  'わわわわ倭和話輪環歪賄猥吾我若脇惑椊譯技業厄禍鷲亙棉綿腸私亘罠鰐詫藁蕨童割椀灣碗腕',
]

export default words
