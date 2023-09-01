// 変数の初期化
let typed = '';
let untyped = '';
let score = 0;

// 必要なHTML要素の取得
const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed');
const wrap = document.getElementById('wrap');
const typedCount = document.getElementById('typedCount');
const count = document.getElementById('count');

// 複数のテキストを格納する配列
const textLists = [
  'Hello World','This is my App','How are you?',
  'Today is sunny','I love JavaScript!','Good morning',
  'I am Japanese','Let it be','Samurai',
  'Typing Game','Information Technology',
  'I want to be a programmer','What day is today?',
  'I want to build a web app','Nice to meet you',
  'Chrome Firefox Edge Safari','machine learning',
  'Brendan Eich','John Resig','React Vue Angular',
  'Netscape Communications','undefined null NaN',
  'Thank you very much','Google Apple Facebook Amazon',
  'ECMAScript','console.log','for while if switch',
  'var let const','Windows Mac Linux iOS Android',
  'programming'
];

// テキストを表示
const createText= () => {
  
  // 正タイプした文字列をクリア
  typed = '';
  typedfield.textContent = typed;

  // 配列のインデックス数からランダムな数値を生成する
  let random = Math.floor(Math.random()*textLists.length);

  // 配列からランダムにテキストを取得し、画面に表示する
  untyped = textLists[random];
  untypedfield.textContent = untyped;
};

// 入力タイプの判定
const keyPress = e =>{
  // 誤タイプの場合
  if (e.key !== untyped.substring(0, 1)) {
    wrap.classList.add('mistyped');
    // 100ms後に背景色を元に戻す
    setTimeout(() => {
    wrap.classList.remove('mistyped');
    }, 100);
    return;
  }

  // 正タイプの場合
  // スコアのインクリメント
  score++;
  typed += untyped.substring(0, 1);
  untyped = untyped.substring(1);
  typedfield.textContent = typed;
  untypedfield.textContent = untyped;
  
  // スコアの表示の変更
  typedCount.textContent = score;

  // テキストがなくなったら新しいテキストを表示
  if(untyped === '') {
    createText();
  }
}


// タイマーの実行
const timer = () => {

  // タイマー部分のHTML要素（p要素）を取得する
  let time = count.textContent;

  const id = setInterval(() => {

    // カウントダウンする
    time--;
    count.textContent = time;

    // カウントが０になったらタイマーを停止する
    if(time <= 0) {
      clearInterval(id);
    }
  }, 1000);
};

// ゲームの開始
createText();
timer();
document.addEventListener('keypress', keyPress);

// 入力タイプ数の表示
