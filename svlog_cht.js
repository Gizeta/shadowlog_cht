let translateAll = (elements, translateTable) => {
    for (let ele of elements) {
        transferElementLang(ele, translateTable);
    }
};

let transferElementLang = (ele, translateTable) => {
    let jp_terms = Object.keys(translateTable)
                         .sort((a, b) => b.length - a.length);

    for (let jp_term of jp_terms) {
        if (haveSubstring(ele.innerHTML, jp_term)) {
            let cht_term = translateTable[jp_term];
            ele.innerHTML = ele.innerHTML.replace(jp_term, cht_term);
        }
    }
};

let haveSubstring = (str, sub_str) => {
    return str.indexOf(sub_str) !== -1;
};

let titles = {
    '使用割合': '使用比率',
    '使用されたリーダー': '使用主戰者',
    '使用デッキタイプ': '使用牌組',
    '使用数': '使用數',
    '勝利数': '勝利數'
};

let classes = {
    'ウィッチ':'巫師',
    'ヴァンパイア': '吸血鬼',
    'ヴァンプ': '吸血鬼',
    'ネクロマンサー': '死靈法師',
    'ネクロ': '死靈法師',
    'エルフ': '精靈',
    'ドラゴン': '龍族',
    'ロイヤル': '皇家護衛',
    'ビショップ': '主教'
};

let decks = {
    '超越ウィッチ': '超越法',
    '秘術ウィッチ': '土印法',
    'テンポウィッチ': '生物法',
    'ニュートラルウィッチ': '中立巫師',
    'ドロシー超越ウィッチ': '阿桃超越法',
    'アグロウィッチ': '快攻巫師',
    '冥府ウィッチ': '冥府巫師',
    '魔導ウィッチ': '魔導巫師',
    'ウィッチ全般': '未分類巫師',

    'ミッドレンジネクロ': '中速死靈',
    '骸の王ネクロ': '骸之王死靈',
    'アグロネクロ': '快攻死靈',
    'ネフティスネクロ': '轉蛋死靈',
    'コントロールネクロ': '控制死靈',
    'コンボ(ﾀｲﾗﾝﾄ)ネクロ': '核彈死',
    'ラストワードネクロ': '死聲死靈',
    'ニュートラルネクロ': '中立死靈',
    '冥府ネクロ': '冥府死靈',
    'ネクロマンサー全般': '未分類死靈',

    'アグロヴァンパイア': '快攻吸血鬼',
    '復讐ヴァンパイア': '復仇吸血鬼',
    'コントロールヴァンプ': '控制吸血鬼',
    'ミッドレンジヴァンプ': '中速吸血鬼',
    'ニュートラルヴァンプ': '中立吸血鬼',
    '冥府ヴァンパイア': '冥府吸血鬼',
    '疾走ヴァンパイア': '疾走吸血鬼',
    'OTKヴァンパイア': 'OTK 血鬼',
    'ヴァンパイア全般': '未分類血鬼',

    '疾走ビショップ': '疾走主教',
    'エイラビショップ': '耶菈主教',
    'イージスビショップ': '天盾主教',
    'エイラセラフビショップ': '耶菈天使敎',
    'セラフビショップ': '熾天使主教',
    'コントロールビショップ': '控制主教',
    'カウントビショップ': '守護主教',
    '陽光ビショップ': '陽光主教',
    '冥府ビショップ': '冥府主教',
    'ニュートラルビショップ': '中立主教',
    '燭台ビショップ': '燭台主教',
    'レリアビショップ': '雷莉亞主教',
    'ビショップ全般': '未分類主教',

    'ランプドラゴン': '跳費龍',
    '原初ドラゴン': '元祖龍',
    '疾走ランプドラゴン': '疾走跳費龍',
    'フェイスドラゴン': '臉龍',
    '疾走ドラゴン': '疾走龍',
    'バーン(OTK)ドラゴン': 'OTK 龍',
    'ミッドレンジドラゴン': '中速龍',
    'ディスカードドラゴン': '棄牌龍',
    'ニュートラルドラゴン': '中立龍',
    'サタンドラゴン': '撒旦龍',
    '庭園ドラゴン': '庭園龍',
    '竜爪ドラゴン': '龍爪龍',
    'ドラゴン全般': '未分類龍族',

    'ニュートラルエルフ': '中立精靈',
    'アグロエルフ': '快攻精靈',
    '(OTK)コンボエルフ': 'OTK 精靈',
    '冥府エルフ': '冥府精靈',
    'ミッド(テンポ)エルフ': '節奏精靈',
    'コントロールエルフ': '控制精靈',
    '白狼エルフ': '白狼精靈',
    '薔薇エルフ': '薔薇精靈',
    '白銀エルフ': '白銀精靈',
    'エルフ全般': '未分類精靈',

    'ミッドレンジロイヤル': '中速皇',
    'アグロロイヤル': '快皇',
    'フェイスロイヤル': '臉皇',
    'コントロールロイヤル': '控皇',
    'ニュートラルロイヤル': '中立皇',
    '指揮官ロイヤル': '指揮官皇',
    '潜伏ロイヤル': '潛伏皇',
    '援護射撃ロイヤル': '砲擊皇',
    '御旗ロイヤル': '旗皇',
    'カエルロイヤル': '蛙皇',
    '冥府ロイヤル': '冥府皇',
    'ロイヤル全般': '未分類皇家'
};

let ths = document.querySelectorAll('th');
let tds = document.querySelectorAll('td');
translateAll(ths, titles);
translateAll(tds, decks);
translateAll(tds, classes);

function injectToAddPage(translatedDecks) {
    if (DeckType && DeckTypePlus) {
        let decks = JSON.parse(translatedDecks);

        (function translateDeckObj() {
            for (let obj of arguments) {
                for (let classId of Object.keys(obj)) {
                    let deckObj = obj[classId];
                    for (let key of Object.keys(deckObj)) {
                        let value = deckObj[key];
                        deckObj[key] = decks[value] || value;
                    }
                }
            }
        })(DeckType, DeckTypePlus);
    
        // rebind events
        $("input[name=myLeader]").change(function(){ChangeDeckType('my')});
        $("input[name=vsLeader]").change(function(){ChangeDeckType('vs')});
    }
}
let injectScript = document.createElement('script');
injectScript.type = 'text/javascript';
injectScript.innerHTML = injectToAddPage.toString() + "\ninjectToAddPage('" + JSON.stringify(decks) + "')";
document.body.appendChild(injectScript);
