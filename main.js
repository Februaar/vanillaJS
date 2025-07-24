const app = document.getElementById("app");

function render() {
  app.innerHTML = `
  <h1>CSR 방식</h1>
  <P>이 콘텐츠는 브라우저에서 JS로 그렸습니다.</P>
  <button id="loadBtn">데이터 불러오기</button>
  <div id="dataArea"></div>
  `;

  document.getElementById("loadBtn").addEventListener("click", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    document.getElementById("dataArea").innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.body}</p>
    `;
  });
}

render();
