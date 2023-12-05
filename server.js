const http = require('http');

// 요청을 처리하기 위한 웹 서버 객체를 생성합니다.
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('hello world');
  response.end();
});

// 접속할 수 있는 포트를 할당하여 서버를 요청 대기상태로 만듭니다.
server.listen(3000, () => {
  console.log('server is listening on port 3000');
});
