const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// 데이터를 저장할 배열
const dataStore = [];

app.post('/save', (req, res) => {
  const { ip, latitude, longitude } = req.body;

  // 데이터 저장
  const newData = {
    ip,
    latitude,
    longitude,
    timestamp: new Date().toISOString()
  };
  dataStore.push(newData);

  console.log('저장된 데이터:', newData);
  res.json({ message: '데이터 저장 완료!', data: newData });
});

// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
