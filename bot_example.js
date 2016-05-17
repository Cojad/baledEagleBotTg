/**
 * Created by longstone on 28/06/15.
 */
'use strict';
var hotload = require("hotload"); //負責動態載入, 使主程式bot.js可以不用重新啟動也能夠自動在handle.js有新版本時直接載入新版本, 拋棄舊版本code


var handle = hotload("./handle.js"); //透過動態載入 對話邏輯
var php = hotload("./php.js"); //透過動態載入 http://phpjs.org/functions/ 的lib
var Bot = require('node-telegram-bot'); //別人寫好的telegram bot函式庫

/**
 * this sample helps understand how the bot works, can also be used for integration tests ;)
 */
var bot = new Bot({
  token: '000000000:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' // 從telegram bot @botfather 那邊獲得自己的bot專屬token
})
.on('message', function (message) {
  handle.msg(bot,message); //當收到訊息後丟給 handle.js內的msg function來處理
})
.start();

