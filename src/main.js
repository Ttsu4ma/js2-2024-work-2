// const weapons = [
//   { name: "大剣", image: "./images/taiken.jpg" },
//   { name: "太刀", image: "./images/tati.jpg" },
//   { name: "片手剣", image: "./images/katate.jpg" },
//   { name: "双剣", image: "./images/souken.jpg" },
//   { name: "ハンマー", image: "./images/hunmer.jpg" },
//   { name: "狩猟笛", image: "./images/fue.jpg" },
//   { name: "ランス", image: "./images/ransu.jpg" },
//   { name: "ガンランス", image: "./images/gansu.jpg" },
//   { name: "スラッシュアックス", image: "./images/suraaku.jpg" },
//   { name: "チャージアックス", image: "./images/tyaaku.jpg" },
//   { name: "操虫棍", image: "./images/soutyu.jpg" },
//   { name: "弓", image: "./images/yumi.jpg" },
//   { name: "ライトボウガン", image: "./images/raito.jpg" },
//   { name: "ヘビィボウガン", image: "./images/hevy.jpg" },
// ];

// // ボタンがクリックされたときの処理
// document.querySelector('#weapon').addEventListener('click', () => {
//   // ランダムで2つの武器を選択
//   const randomWeapon1 = weapons[Math.floor(Math.random() * weapons.length)];
//   let randomWeapon2;
  
//   // 2つ目の武器が1つ目と同じ武器にならないようにする
//   do {
//     randomWeapon2 = weapons[Math.floor(Math.random() * weapons.length)];
//   } while (randomWeapon1 === randomWeapon2);

//   // 武器1の名前と画像を表示
//   document.querySelector('#weapon1-name').textContent = randomWeapon1.name;
//   document.querySelector('#weapon1-img').src = randomWeapon1.image;
//   document.querySelector('#weapon1-img').alt = randomWeapon1.name;

//   // 武器2の名前と画像を表示
//   document.querySelector('#weapon2-name').textContent = randomWeapon2.name;
//   document.querySelector('#weapon2-img').src = randomWeapon2.image;
//   document.querySelector('#weapon2-img').alt = randomWeapon2.name;
// });

const weapons = [
  { name: "大剣", image: "./images/taiken.jpg" },
  { name: "太刀", image: "./images/tati.jpg" },
  { name: "片手剣", image: "./images/katate.jpg" },
  { name: "双剣", image: "./images/souken.jpg" },
  { name: "ハンマー", image: "./images/hunmer.jpg" },
  { name: "狩猟笛", image: "./images/fue.jpg" },
  { name: "ランス", image: "./images/ransu.jpg" },
  { name: "ガンランス", image: "./images/gansu.jpg" },
  { name: "スラッシュアックス", image: "./images/suraaku.jpg" },
  { name: "チャージアックス", image: "./images/tyaaku.jpg" },
  { name: "操虫棍", image: "./images/soutyu.jpg" },
  { name: "弓", image: "./images/yumi.jpg" },
  { name: "ライトボウガン", image: "./images/raito.jpg" },
  { name: "ヘビィボウガン", image: "./images/hevy.jpg" },
];

// 武器一覧をHTMLのリストに表示
const weaponList = document.getElementById('weapon-list');
weapons.forEach(weapon => {
  const label = document.createElement('label');
  label.innerHTML = `<input type="checkbox" value="${weapon.name}" /> ${weapon.name}<img src="${weapon.image}" alt="${weapon.name}" />`;
  weaponList.appendChild(label);
});

// ボタンがクリックされたときの処理
document.querySelector('#weapon').addEventListener('click', () => {
  // 選択された武器を取得
  const selectedWeapons = Array.from(document.querySelectorAll('#weapon-list input:checked'))
    .map(input => input.value);

  // 2つ以上選ばれていない場合はエラーメッセージ
  if (selectedWeapons.length < 2) {
    alert("2つ以上の武器を選んでください！");
    return;
  }

  // ランダムに2つの武器を選択（同じ武器が選ばれないようにする）
  const randomWeapon1 = weapons.find(weapon => weapon.name === selectedWeapons[Math.floor(Math.random() * selectedWeapons.length)]);
  let randomWeapon2;

  // 2つ目の武器が1つ目と同じ武器にならないようにする
  do {
    randomWeapon2 = weapons.find(weapon => weapon.name === selectedWeapons[Math.floor(Math.random() * selectedWeapons.length)]);
  } while (randomWeapon1 === randomWeapon2);

  // 武器1の名前と画像を表示
  document.querySelector('#weapon1-name').textContent = randomWeapon1.name;
  document.querySelector('#weapon1-img').src = randomWeapon1.image;
  document.querySelector('#weapon1-img').alt = randomWeapon1.name;

  // 武器2の名前と画像を表示
  document.querySelector('#weapon2-name').textContent = randomWeapon2.name;
  document.querySelector('#weapon2-img').src = randomWeapon2.image;
  document.querySelector('#weapon2-img').alt = randomWeapon2.name;
});