"use strict";

var express = require('express');

var path = require('path');

var app = express();
var port = 5502; // Thiết lập view engine là ejs

app.set('view engine', 'ejs'); // Đường dẫn đến các tệp tĩnh như CSS, JS, hình ảnh
// app.use('/assets', express.static(path.join(__dirname, 'assets')));
// Định nghĩa một route để render view EJS

app.get('/', function (req, res) {
  // req : yêu cầu , res : phản hổi
  var data = {
    name: "Nguyễn Quang HOàng"
  };
  res.render('profile', data);
}); // Khởi động máy chủ

app.listen(port, function () {
  console.log("M\xE1y ch\u1EE7 \u0111ang ch\u1EA1y t\u1EA1i http://localhost:".concat(port));
}); // js thuần
//# sourceMappingURL=profile.dev.js.map
