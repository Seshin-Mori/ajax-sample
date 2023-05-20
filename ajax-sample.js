// ボタンと結果表示領域の要素を取得
const button = document.getElementById("fetchButton");
const resultArea = document.getElementById("resultArea");

// ボタンがクリックされたときの処理
button.addEventListener("click", function () {
  // Fetch APIを使った通信
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // レスポンス（JSON形式）をJSオブジェクトに変換
      return response.json();
    })
    .then((data) => {
      // 結果表示領域をクリア
      resultArea.innerHTML = "";
      // 各投稿データをテーブルの行に変換
      data.forEach((post) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td>${post.id}</td>
                    <td>${post.userId}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                `;
        resultArea.appendChild(row);
      });
    })
    .catch((e) => {
      resultArea.innerHTML = "Error: " + e.message;
    });
});
