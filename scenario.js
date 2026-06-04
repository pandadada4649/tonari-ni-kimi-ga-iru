// ===================================
// 隣に、君がいる — シナリオデータ
// ===================================
// 編集ガイド：
//   s: 話者名（'葵' / '澪' / '上司'）
//   t: 台詞テキスト（\nで改行）
//   n: ナレーション（sなしで使う）
//   voice: ボイスファイル名（aoi_01など）
//   bg: 背景グラデ（'bg-office' / 'bg-night'）
//   bgImg: 背景画像ファイル名
//   chara: 立ち絵表示（true/false）
//   charaImg: 立ち絵ファイル名
//   heart: ♡エフェクト（true）
//   chapterLabel/chapterText: チャプタータイトル
//   narration: ナレーション文体（true）
// ===================================

const script = [

  // ==================== PROLOGUE ====================
  {chapterLabel:'Prologue', chapterText:'まさか、君が', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:false},

  {n:'四月の第二週。\n月曜の朝礼は、いつも通り十分で終わった。\n誰かの携帯が一度だけ鳴って、誰かが咳払いをして、上司がホワイトボードに今月の目標を書いた。\nいつもと同じ、何でもない朝だった。\n最後に上司が言った。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:false},

  {s:'上司', t:'来週から、中途採用の方が一名加わります。白石 葵さんです。営業企画の経験があるので、即戦力として活躍してもらう予定です。よろしくお願いします。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:false},

  {n:'それだけだった。\nみんな特に反応もなく、各自の席に戻っていった。\n新しい人が来るのは珍しくない。\n半年に一度くらいのペースで誰かが入って、誰かが辞める。\n澪もそのつもりで、立ち上がろうとした。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:false},

  {n:'でも、足が一瞬だけ止まった。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:false},

  {s:'澪', t:'——白石、葵。', narration:true, bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:false},

  {n:'心臓が、一拍だけ変な音を立てた。\nまさか、と思った。\nでも、そんなに珍しい名前でもない。\n白石なんて全国にいくらでもいるし、葵だって珍しくない。\n同じ名前の別人なんて、いくらでもいる。\n大学を出てから、もう四年も経つんだし。\nそもそも、もう終わったことだし。\n終わらせたんだし。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:false},

  {s:'澪', t:'違う。絶対違う。気にしない。', narration:true, bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:false},

  {n:'自分の席に座って、パソコンを開いた。\nログイン画面が表示されて、パスワードを打ち込んで、メールを確認した。\n全部、いつも通りの動作だった。\nでも画面の文字が、しばらく頭に入ってこなかった。\n視線はモニターを向いているのに、頭の中では名前を繰り返していた。\n白石、葵。白石、葵。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:false},

  {n:'次の月曜日。\n澪はいつもより十分早く出社した。\n理由は特にない、と自分に言い聞かせた。\nただ少し早く起きただけ。\n電車が空いてて気持ちよかっただけ。\nそういうことにしておいた。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:false},

  {n:'午前十時。会議室に全員が集まった。\nドアが開くのを、なんとなく見ていた。\n自分でも気づかないくらい、息を止めていた。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:false},

  {n:'ドアが開いた。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:false},

  {s:'澪', t:'——あ。', narration:true, bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'一瞬で、わかった。\n黒い髪が、肩の少し下まで伸びていた。\n静かな目が、部屋全体をさっと見渡した。\n少しだけ前より大人になった顔。\nでも、間違えるわけがなかった。\n四年経っても、すぐにわかった。\nわかってしまった。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'白石 葵。\n大学の頃、ずっと好きだった人。\n一度も告白できないまま、卒業した。\nもう二度と会わないと思っていた。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'葵', t:'白石 葵です。前職では営業企画を担当していました。まだ慣れないことも多いと思いますが、迷惑をかけないよう努めます。よろしくお願いします。', voice:'aoi_01', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'短い挨拶だった。\n愛想笑いも、緊張した様子もない。\nただ、静かにそこに立っていた。\n周りが「よろしく」「どこから来たの」と声をかける中、葵は一つ一つに短く答えた。\n笑ってはいたけど、目は笑っていなかった。\n昔から、そういう人だった。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'覚えてないよな。\n同じ学部だったけど、そんなに話したわけじゃない。\n講義で同じ教室にいたことは何度もあって、廊下ですれ違ったこともあって、一度だけ図書館で隣の席になったことがある。\nそれだけだ。\n私が一方的に好きだっただけで、向こうにとっては顔も名前も覚えていない相手のはずで。\nそれは四年前も今も、たぶん変わらない。', narration:true, bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'卒業の日に、心の中でちゃんとお別れしたし。\nせいせいした、って思ったし。\n——本当に？\n\n……うるさい。終わったことだから。', narration:true, bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'その日、白石さんの隣の席が澪に割り振られた。\n総務の田中さんが「一ノ瀬さん、よろしくね」と笑顔で言った。\n澪は笑顔で「はい」と答えた。\n内心では思った。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'なんで。', narration:true, bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'午後。葵は黙って引き継ぎ資料を読んでいた。\n澪は自分の仕事をしながら、気配だけを感じていた。\n葵はほとんど動かない。\nコーヒーも飲まず、スマホも触らず、ただ読んでいる。\n集中すると完全に静止する人だった。\n大学の頃もそうだった。\n講義中、ずっと前を向いていた。\nノートも几帳面に取っていて、消しゴムで丁寧に消して、また書き直していた。\n横顔がきれいだと思って、ノートに落書きしたことがある。\n自分でも気持ち悪いと思いながら、消せなかった。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'……思い出さなくていいから。', narration:true, bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'昼休み。みんなが挨拶しに行く中、葵は一人でパソコンに向かっていた。\nお弁当を広げながら、なんとなく横目で見ていた。\n画面を見ながら何かを打ち込んでいる。スマホも見ない。周りの会話にも入らない。\nでも不思議と、浮いている感じがしなかった。\n自分の世界をちゃんと持っている人みたいで、それがなんか、好きだと思った。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'変わってないな。昔から、あんな感じだった。\n同じ学部でも、誰かと群れてるところ見たことなかった。\nお昼も一人で食べてて、でも全然寂しそうじゃなくて。\nむしろ、一人の方が好きなんだろうなって思ってた。\nそれが、なんか、好きだったんだよな——', narration:true, bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'思考を止めた。\nお弁当のふたを閉めた。\n食欲がなくなった。\n自分でもびっくりするくらい、簡単にあの頃に戻れてしまう。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'やめやめ。終わったことだから。', narration:true, bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:false},

  {n:'帰り際。デスクの電気を消して、バッグを肩にかけて、エレベーターのボタンを押した。\n扉が開くのを待ちながら、今日のタスクを頭の中で整理していた。\nそのとき、後ろから声がした。', bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:false},

  {s:'葵', t:'一ノ瀬さん。', bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'心臓が跳ねた。\n振り返ると、葵が立っていた。\nバッグを肩にかけて、まっすぐ澪を見ていた。\n廊下の蛍光灯の下で、その目が静かに光っていた。', bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'え……はい、なんですか？', bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'葵', t:'今日の引き継ぎ資料、わかりやすくまとめてくれていましたね。助かりました。', bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'澪', t:'あ……ありがとうございます。私が作ったわけじゃないんですけど、去年整理し直したやつで。', bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'葵', t:'そうなんですか。でも、読みやすかったです。', bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'エレベーターが来た。\n二人で乗り込んで、一階で扉が開いて、ロビーで別れた。\n葵は「お疲れ様でした」とだけ言って、先に出ていった。\n自動ドアの向こうに、すっと消えていった。', bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:false},

  {s:'澪', t:'覚えてない。やっぱり、覚えてない。\n当たり前だよ。向こうは何も知らないんだから。\n私が一方的に好きだっただけで、葵にとっては赤の他人で。\n今日初めて話した、隣の席の同僚で。\nそれだけ。', narration:true, bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:false},

  {n:'わかっていた。\nちゃんとわかっていた。\nわかった上で、それでも——', bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:false},

  {s:'澪', t:'なんでまだ、心臓がうるさいんだろ。', narration:true, bg:'bg-night', bgImg:'bg_street.png', stars:true, chara:false},

  {n:'その夜、お風呂に入りながら、ずっとそのことを考えていた。\nシャワーを浴びながら、葵の声を思い出した。\n低くて、静かで、余計なものが何も入っていない声。\n「一ノ瀬さん」って呼ばれた瞬間を、何度も再生してしまった。\n熱いお湯の中で、四年前の感覚がじわじわと戻ってくる。', bg:'bg-night', bgImg:'bg_room.png', stars:true, chara:false},

  {s:'澪', t:'もう終わったはずだった。\n卒業の日、ちゃんと心の中で別れを告げた。\nせいせいした、って思った。\n四年間、一度も思い出さなかった。\n——本当に？', narration:true, bg:'bg-night', bgImg:'bg_room.png', stars:true, chara:false},

  {n:'正直に答えると、思い出さないようにしていただけかもしれない。\n意識して、鍵をかけて、引き出しの奥にしまっていただけかもしれない。\nそれを今日、目の前に現れたあの人が、あっさり開けていった。', bg:'bg-night', bgImg:'bg_room.png', stars:true, chara:false},

  {s:'澪', t:'……まずい。全然、終わってなかった。', narration:true, bg:'bg-night', bgImg:'bg_room.png', stars:true, chara:false},

  // ==================== CHAPTER 1 ====================
  {chapterLabel:'Chapter 1', chapterText:'距離の測り方', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:false},

  {n:'葵が来てから、二週間が経った。\n澪は毎朝、心に言い聞かせてから出社した。\n余計に話しかけない。目を合わせすぎない。\n名前を呼ばれてもびっくりしない。\n普通の同僚として、普通に接する。\nただそれだけでいい。\n簡単なことのはずだった。\n——そのはずだった。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:false},

  {n:'月曜の朝。出社したら葵はもう席についていた。\n定時より三十分早い。\n静かにパソコンに向かって、もう仕事を始めている。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'早いな。……昔からこういう人だっけ。', narration:true, bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'思い出そうとして、やめた。\n思い出すたびに、ろくなことにならない。\nおはようございます、と声をかけて、自分の席に座った。\n葵も短く「おはようございます」と返した。\nそれだけで、また少し心臓がうるさくなった。\n本当に情けない。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'午前中、隣から静かなキーボードの音が聞こえていた。\n葵は集中するとまったく動かない。\n画面だけ見て、コーヒーも飲まずに打ち続ける。\n息をしているのかと思うくらい、静止している。\n澪はそれを横目で見ながら、自分の仕事をした。\n見ているつもりはなかった。でも気づいたら見ていた。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'葵', t:'一ノ瀬さん、この数字、先週のと合ってますか。', voice:'aoi_02', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'澪', t:'ちょっと待って……あ、ここ一桁ずれてる。先週のファイル、送りましょうか？', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'葵', t:'お願いできますか。', voice:'aoi_03', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'澪', t:'今送ります。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'ファイルを送ったら、三分後にチャットが来た。\n「ありがとうございます。助かりました。」\nたった一行。\nでもそれを三回読んだ。\n三回読んで、馬鹿みたいだと思った。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'また私に聞いてきた。他の人には聞かないのに。\n……席が隣だから。それだけ。\nうん、それだけ。絶対それだけ。', narration:true, bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'そういうことが、何度かあった。\n資料の確認。会議室の場所。備品の置き場所。\nいつも、静かな声で「一ノ瀬さん」と呼んできた。\n他の人には自分で調べるのに、なぜか澪には聞いてくる。\n席が隣だから、というのが一番合理的な説明だった。\nそれ以外の意味なんてないと、頭ではわかっていた。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'名前、呼ばれるたびにびっくりしちゃうの、なんとかならないかな。\n三年目なのに、新人みたいな心臓してる。\n情けない。本当に情けない。', narration:true, bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'火曜日の午後。葵が小さなため息をついた。\n珍しかった。あの人がため息をつくのを、初めて見た気がした。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'どうかしました？', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'葵', t:'……このシステム、入力項目多くないですか。', voice:'aoi_04', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'澪', t:'あー……多いですよね。前の担当者が作ったやつで、誰も変えようとしないんですよ。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'葵', t:'非効率ですね。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'澪', t:'そうなんですよ。私もずっとそう思ってて。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'葵', t:'……変えたら怒られますか。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'澪', t:'（笑いながら）提案するだけなら、たぶん大丈夫ですよ。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'葵', t:'そうですか。じゃあ考えてみます。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'それだけの会話だった。\nでも帰り道、その会話を何度も思い返してしまった。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'葵と、普通に話した。\nシステムの話なんて、本当に普通のことなのに。\nなんでこんなに嬉しいんだろ。\n……ダメだ。距離縮めたらダメなのに。', narration:true, bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'水曜日。チームで小さなミスがあって、午後から空気が重かった。\n担当者が謝り続けていて、上司が険しい顔をしていて、周りはみんな余計なことを言わないようにしていた。\n葵はそんな中でも、黙々と自分の仕事を続けていた。\n動じている様子が全くない。\n別に冷たいわけじゃなくて、ただ、自分のやることをやっている、という感じ。\n夕方、みんなが少しずつ帰り始めた頃、葵がぽつりと言った。\n周りには聞こえないくらい、小さな声で。', bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'葵', t:'あのミス、構造的な問題ですよね。個人のせいにしても、また起きますよ。来週の定例で、フローを見直す提案、してみようと思っていて。……一ノ瀬さん、一緒にどうですか。', voice:'aoi_05', bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'澪だけに向けた言葉だった。\n静かで、でも確信があって、迷いがない声だった。', bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'え。\n誘われた。\n仕事の話だけど、誘われた。\n一緒に、って言った。\n落ち着け。落ち着け、私。', narration:true, bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'……うん、やろう。', bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'葵', t:'ありがとうございます。', bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'葵はそれだけ言って、また画面に向き直った。\nなんでもないことみたいに。\n澪にとっては全然なんでもないことじゃなかったけど、それは黙っていた。', bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'帰り道、ずっとにやけてしまって、自分が嫌になった。\n電車の窓に映った自分の顔を見て、もっと嫌になった。', bg:'bg-night', bgImg:'bg_street.png', stars:true, chara:false},

  {s:'澪', t:'仕事の話だから。普通のことだから。\n一緒に提案を考えましょう、それだけの話だから。\n「一緒にどうですか」って、誰にでも言える言葉だから。\nわかってる。わかってるのに。', narration:true, bg:'bg-night', bgImg:'bg_street.png', stars:true, chara:false},

  {n:'木曜日の昼休み。食堂が混んでいて、葵が一人でトレーを持ったまま立っているのが見えた。\nどこに座ろうか探している。いつもは一人で静かに食べているのに、今日は席が全然空いていない。\n少し困ったような顔をしていた。あの葵が困った顔をしているのが、なんか珍しくて、なんか可愛くて。\n行こうか三秒くらい迷って、気づいたら声をかけていた。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'白石さん、こっち座ります？', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'葵', t:'……いいんですか。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'澪', t:'どうぞどうぞ。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'向かい合って食べた。\n最初はほとんど無言だった。\n葵はごはんを食べながら、スマホも見ずに、ただ食べていた。\n変な人だな、と思った。今どき食事中にスマホを見ない人なんて珍しい。\nでも嫌じゃなかった。\nむしろ、一緒にいて不思議と落ち着いた。\n無言なのに、気まずくない。\nこういう沈黙が苦じゃない人だ、と思った。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'葵', t:'一ノ瀬さんって、この会社長いんですか。……四年。なんか、違うと思って出てきました。うまく言えないんですけど、やってることが自分じゃなくていい気がして。ある日急に嫌になって辞めました。貯金使いながら半年くらいぼーっとしてから、また働こうと思って。……地味ですね。', voice:'aoi_06', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'澪', t:'地味じゃないですよ。なんか、いいなって思いました。ちゃんと自分の声聞けてる感じがして。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'葵', t:'一ノ瀬さんは、ここ好きですか。この会社。……いいですね、それ。', voice:'aoi_07', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'葵はそれ以上は言わなかった。\nでも「いいですね、それ」の声が、少しだけ柔らかかった。\nほんの少しだけ。気づかない人は気づかないくらい。\nでも気づいた。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'あ。\nこの人、こういうこと話すんだ。\nクールに見えるけど、ちゃんと自分の気持ちがある人なんだ。\n自分がどう感じたか、何が嫌だったか、何がいいと思ったか。\n全部ちゃんと持っている。\n昔から、そうだった気がする。\n講義中、先生に意見を言える人だった。\nみんなが黙ってるとき、一人だけ手を挙げてた。\n答えが間違ってても、堂々としてた。\nかっこいいと思ってた。ずっと、かっこいいと思ってた。', narration:true, bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'お昼が終わって、席に戻った。\n葵は「ごちそうさまでした」と言って、すぐに仕事に戻った。\n特別なことは何もなかった。\nただのお昼ご飯だった。\nでもその日の午後、全然仕事に集中できなかった。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'……全然、終わってない。\nむしろ、どんどんひどくなってる。\nまずい。本当にまずい。\nどうするんだ、私。', narration:true, bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'金曜日の夕方。葵と二人で、定例会議用の資料を作った。\n二時間、隣に座って、画面を並べて、同じ数字を見ていた。\n葵は無駄なことを言わない。\nでも、必要なことは全部言う。\n澪が「ここどうしますか」と聞くと、必ず自分の考えを答えた。\n「どっちでもいいです」とは言わなかった。\n意見が違うときは、なぜそう思うかを静かに説明した。\n押しつけがましくなくて、でも引きすぎなくて。\n一緒に仕事してて、こんなに気持ちいい人は初めてかもしれない。', bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'こういう人、一緒に仕事してて気持ちいいな。', narration:true, bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'そう思ってから、ちょっと悲しくなった。', bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'仕事の話だけしてれば、普通に好きになれる人なのに。\nいや、もう普通に好きになってるけど。\n全然普通じゃないくらい、好きになってるけど。', narration:true, bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'資料が完成して、葵が「ありがとうございました」と頭を下げた。\nほんの少しだけ、いつもより柔らかい声だった。\n一緒に仕事した後だからかもしれない。\nそれとも、少しだけ気を許してくれたのかもしれない。\nそんなこと、確かめる方法は何もないけど。', bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'……気のせいじゃないといいな。', narration:true, bg:'bg-office', bgImg:'bg_evening_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'帰り道、夜風が少し冷たかった。\n四月も終わりに近づいていた。\n白い息が夜の空気に溶けていった。', bg:'bg-night', bgImg:'bg_street.png', stars:true, chara:false},

  {s:'澪', t:'どうしよう。\nこんなに好きになるつもりじゃなかったのに。\n同じ職場で、毎日隣にいて、普通に話して。\n資料まで一緒に作って。\n無理だよ、こんなの。\nどんどん好きになっていく。止められない。', narration:true, bg:'bg-night', bgImg:'bg_street.png', stars:true, chara:false},

  {n:'でも——', bg:'bg-night', bgImg:'bg_street.png', stars:true, chara:false},

  {s:'澪', t:'明日も会えるんだよな。', narration:true, bg:'bg-night', bgImg:'bg_street.png', stars:true, chara:false},

  {n:'そう思ったら、少しだけ足が軽くなった。\n悪い気はしなかった。\nそれが余計にまずかった。', bg:'bg-night', bgImg:'bg_street.png', stars:true, chara:false},

  // ==================== CHAPTER 2 ====================
  {chapterLabel:'Chapter 2', chapterText:'一ヶ月だけ', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:false},

  {n:'月曜日の朝。\nいつも通り出社したら、葵がデスクの前で立ったままスマホを見ていた。\n座らずに、ずっと画面を見ている。\n眉が少しだけ寄っていた。\n珍しかった。あの人が表情を動かすのは、珍しかった。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'おはようございます。どうかしました？', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'葵', t:'……おはようございます。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'葵はスマホをしまって、席に座った。\nそれだけだった。\n何も言わなかった。\nでも、なんとなく、いつもと違う気がした。\n空気が少し重い。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'なんだろ。気になる。\n……気にしない。仕事しよ。\n私が首を突っ込むことじゃない。', narration:true, bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'午前中はお互い黙って仕事をした。\n隣からキーボードの音は聞こえていたけど、いつもより少なかった。\n止まる回数が多い。\n昼前に、葵がため息をついた。\n今週二回目だ、と思った。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'また、システムですか？', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'葵', t:'……いや、違います。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'それきり、葵は何も言わなかった。\n澪も聞かなかった。\n聞きたかったけど、聞けなかった。\nそういう関係じゃない、まだ。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'昼休み。食堂に向かおうとしたら、葵に呼び止められた。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'葵', t:'一ノ瀬さん、少しいいですか。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'澪', t:'はい。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'葵', t:'……相談があって。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'葵が「相談」という言葉を使うのを、初めて聞いた気がした。\n何でも自分で解決する人だと思っていたから、少し意外だった。\n食堂に行くのをやめて、椅子を引いて向き直った。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'葵', t:'実は、部屋のことで困っていて。今月末で今の仮住まいを出なきゃいけないんですけど、次に入りたい部屋に、まだ前の人が住んでて。入居できるのが来月頭になってしまって。ホテルも調べたんですけど、一ヶ月だと結構な金額になってしまって。他に知り合いもいないし、どうしようかと思って。\n……図々しいのはわかってます。でも、一ノ瀬さんしか頼める人がいなくて。もし嫌なら、全然断ってもらっていいので。一ヶ月だけ、部屋に置いてもらえませんか。生活費は必ず出します。家事も手伝います。絶対に迷惑はかけません。', voice:'aoi_08', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'まっすぐな目だった。\n逃げない目。\n昔からこういう人だった。\n頼むときも、ちゃんと目を見て頼む人だった。\n「迷惑はかけません」って言いながら、それが迷惑なことくらいわかってるはずで。\nでもそれでも頼んでいる。\n他に選択肢がないから。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'え。\nえ、え、え。\n毎日、同じ部屋にいるってこと？\n朝も夜も？\nご飯も一緒に食べて、生活を共にするってこと？\n一ヶ月間？', narration:true, bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'心臓がうるさかった。\n断る理由なんていくらでもあった。\n部屋が狭い。生活リズムが違う。そもそもまだそんなに仲良くない。\n職場の同僚とルームシェアなんて、どう考えてもリスクがある。\n全部、正当な理由だった。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'でも。', narration:true, bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'葵が困っている。\nこの人が誰かに頭を下げている。\n他に頼める人がいない。\n——それだけだった。\nそれだけで、もう答えは出ていた気がした。\n自分でもびっくりするくらい、すんなりと。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'……わかった。いいよ。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'葵', t:'……本当に？', voice:'aoi_09', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'澪', t:'うん。でも、ちゃんとルール決めよう。お互い気持ちよく過ごせるように。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},
  {s:'葵', t:'……ありがとうございます。本当に、助かります。', voice:'aoi_10', heart:true, bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'葵が、少しだけ息を吐いた。\nほんの少し、肩の力が抜けた気がした。\nほんの少しだけ、表情が緩んだ。\nそんな顔、初めて見た。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {s:'澪', t:'あ、この人にもこういう顔があるんだ。\n困ったり、安心したりするんだ。\n当たり前のことなのに、なんか、胸に刺さった。', narration:true, bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:true, charaImg:'aoi_normal.png'},

  {n:'そう思ったら、胸がぎゅっとなった。', bg:'bg-office', bgImg:'bg_office.png', stars:false, chara:false},

  {s:'澪', t:'……私、何やってるんだろ。\n好きな人を、自分の部屋に住まわせるって。\n毎日顔を見て、声を聞いて、生活を共にして。\nそんなことして、平気でいられるわけがない。\n正気じゃない。完全に正気じゃない。', narration:true, bg:'bg-night', bgImg:'bg_room.png', stars:true, chara:false},

  {n:'でも——', bg:'bg-night', bgImg:'bg_room.png', stars:true, chara:false},

  {s:'澪', t:'後悔は、してなかった。\n不思議なくらい、してなかった。', narration:true, bg:'bg-night', bgImg:'bg_room.png', stars:true, chara:false},

  {n:'その夜、帰り道に一人でルールを考えた。\nスマホのメモアプリを開いて、真面目に打ち込んだ。\n光熱費は折半。\n冷蔵庫は共有していい。\nお風呂は時間をずらす。\n休日は干渉しない。\n来客は事前に連絡する。', bg:'bg-night', bgImg:'bg_room.png', stars:true, chara:false},

  {n:'真面目にメモしながら、途中で手が止まった。\n画面を見つめたまま、動けなくなった。', bg:'bg-night', bgImg:'bg_room.png', stars:true, chara:false},

  {s:'澪', t:'葵が毎日うちにいる。\n起きたら葵がいて、帰ったら葵がいて。\nご飯食べて、お風呂入って、おやすみって言って、寝て。\n同じ空間で、同じ時間を過ごす。\n一ヶ月間。', narration:true, bg:'bg-night', bgImg:'bg_room.png', stars:true, chara:false},

  {n:'スマホを伏せた。\n夜空を見上げた。\n星が少しだけ見えた。', bg:'bg-night', bgImg:'bg_room.png', stars:true, chara:false},

  {s:'澪', t:'一ヶ月、耐えられるかな。\n……耐えるって、何を。', narration:true, bg:'bg-night', bgImg:'bg_room.png', stars:true, chara:false},

  {n:'深呼吸をした。\n家に帰って、布団に倒れ込んだ。', bg:'bg-night', bgImg:'bg_room.png', stars:true, chara:false},

  {s:'澪', t:'絶対に、気づかれないようにしないと。\n普通の同僚として、普通に過ごす。\nルームシェアなんてよくあること。社会人なら普通のこと。\nそれだけ。それだけでいい。', narration:true, bg:'bg-night', bgImg:'bg_room.png', stars:true, chara:false},

  {n:'——一ヶ月のはずだった。', bg:'bg-night', bgImg:'bg_room.png', stars:true, chara:false},

  // END
  {type:'end', bg:'bg-evening', bgImg:'bg_room.png', stars:true, chara:false},
];
