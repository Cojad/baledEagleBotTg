// handle.js
module.exports = {
	hlInit: function() { //模組倍hotload給載入時, 要做的事情, 類似object constructor, 不過是初始化這個檔案載入
    console.log("對話邏輯 has been loaded/reloaded");
  },
  msg: function(bot, message) { //這個檔案只有這一個方法是真的有用的...bot收到訊息的處理邏輯全都在這邊處理
    var fs = require('fs'); //fs 是node.JS內建的lib用來讀寫FileSystem
    var colors = require('colors'); //用來console(win的命令提示字元, Linux的shell)上面顯示不同顏色文字方便的第三方lib
    var chance = require('chance').Chance(); //第三方寫好的簡單取亂數的lib

    console.log(message); //把來自Server的message(JSON格式)直接輸出到螢幕上
    fs.appendFile('/root/msg.log', JSON.stringify(message)+"\n", function (err) { if (err) throw err; }); //把所有的訊息記錄在 /root/msg.log
    if(typeof(message.text) === "string" && message.text.charAt(0) === '/') { //只要使用者開頭用 /xxx 來對bot下指令的時候才動作, 不然就忽略訊息
      var txt=message.text.substring(1).split(' ');
      var cmd=txt[0].toLowerCase();
      var str=message.text.substring(cmd.length+2);
      var sObj=message.text.substring(cmd.length+2);
      var sNameFirst=message.from.first_name;
      var sSelf="柯姊2.2";
      console.log(colors.blue('-- ' + cmd +":"+sObj));
      switch (cmd) {
        case "say":
        case "say@baldeaglebot":

          if(sObj!="")
            var msg=sNameFirst + ' 說: ' + sObj;
          else
            var msg=sNameFirst + ' 表示 ...';
          bot.sendMessage({
            chat_id: message.chat.id,
            text: msg
          });
          console.log(colors.green('-- ' + msg));
          break;
        case "eat":
        case "eat@baldeaglebot":
          var i,msg,msg_pool = [];
          var t0=new Date();
          var t1=new Date("2015-10-19 17:30");
          var EatTime = t0.valueOf() - t1.valueOf();

          msg_pool.push('我不小心把' + sNameFirst + ' 給一起吃掉了... ');
          msg_pool.push('嚴禁隨意拍打餵食...');
          msg_pool.push('好像吃的有點多...');
          msg_pool.push('(嚼嚼嚼');
          msg_pool.push('不要叫我一直吃你的排泄物!!');
          msg_pool.push('不想吃!!');
          msg_pool.push('開心吃掉, 聒~');
          msg_pool.push('你給我吃了什麼...我好想吐...(嘔');
          msg_pool.push('才、才不是要特地吃你的呢，笨蛋');
          msg_pool.push('我不是什麼都吃的～嘖！');
          msg_pool.push('拉肚子你要對人家負責喔～(張嘴吞下！');
          msg_pool.push('你怎麼不先吃吃看?（歪頭');
          msg_pool.push('雖然我吃了很多東西了, 但我還可以(吞~');
          msg_pool.push('你知道身為一個鳥, 我根本沒有牙齒嗎? 這讓我很為難啊~嘖');
          msg_pool.push('你知道嗎? 雖然我吃過這麼多東西, 我還是比較喜歡吃鮪魚跟肉肉(嚼嚼嚼~');
          msg_pool.push('飯前要來點酒筍當開胃菜. 這可是天菜啊!');
          msg_pool.push('不要！我會過敏...');
          msg_pool.push('你知道我上次吃這個拉肚子嗎？');
          msg_pool.push('(完食');
          //msg_pool.push('');

          if( sObj.match(/(木可|柯|科)(小| |_)?(姊|姐|女且)/) || sObj.match(/([cCｃＣ][oOｏＯ][jJｊＪ][aAａＡ][dDｄＤ])/) ){ //柯姊
            msg_pool=['你覺得這可能發生嗎?',sNameFirst + ', 你怎不先吃給我看看啊(歪頭','可是你看起來比較好吃耶' ];
          }          if( sObj.match(/(木可|柯|科)(小| |_)?(姊|姐|女且)(\d\.\d)/) ){ //柯姊x.x
            msg_pool=['我怎能吃自己同胞呢?'];
          }
          if( sObj==sSelf ){ //bot自己
            msg_pool=['你叫我吃自己?'];
          }

          if(EatTime) { //手動設定停止吃
          i=chance.integer({min: 0, max: msg_pool.length-1});
          msg=msg_pool[i];
          bot.sendMessage({
            chat_id: message.chat.id,
            text: msg
          });
          console.log(colors.green('-- ' + msg));
          }
          break;
        case "kill":
        case "kill@baldeaglebot":
          var i,msg,msg_pool = [];
          var t0=new Date();
          var t1=new Date("2015-10-19 17:30");
          var EatTime = t0.valueOf() - t1.valueOf();
          if(sObj=="") { //如果沒有受詞
            msg_pool.push(sNameFirst + '看起來殺氣騰騰阿(嘖');
          } else { //有受詞
            msg_pool.push('我今天晚上就去' + sObj + '家埋伏...');
            msg_pool.push('(拿出死亡筆記本寫上' + sObj + '的名字...');
            msg_pool.push('我會雇用柯姊以及社大拿好程式碼和電鋸埋伏' + sObj + '的.');
            msg_pool.push(sNameFirst + ', 今天心情不太好, 不想接單喔...');
            msg_pool.push(sNameFirst + ', 要付我多少佣金阿～～？');
            msg_pool.push('刺殺' + sObj + '失敗...殘念');
          }
          if( sObj.match(/(木可|柯|科)(小| )?(姊|姐|女且)/) || sObj.match(/([cCｃＣ][oOｏＯ][jJｊＪ][aAａＡ][dDｄＤ])/)){
            msg_pool=['你覺得這可能發生嗎?','你猜誰會先死?','這樣好了, 我付你500八炮殺掉柯姊?','這像話嗎?'];
          }
          if( sObj.match(/(木可|柯|科)(小| )?(姊|姐|女且)(\d\.\d)/) ){
            msg_pool=['我跟自己兄弟姊妹打架勝負難分...不幹!'];
          }
          if( sObj==sSelf ){
            msg_pool=['你想殺我?我好怕啊...','你要用八炮殺我?'];
          }

          if(EatTime) { //手動設定停止吃
          i=chance.integer({min: 0, max: msg_pool.length-1});
          msg=msg_pool[i];
          bot.sendMessage({
            chat_id: message.chat.id,
            text: msg
          });
          console.log(colors.green('-- ' + msg));
          }
          break;
        case "諷刺":
        case "嘲笑":
          var i,msg,msg_pool = [];
          var t0=new Date();
          var t1=new Date("2015-10-19 17:30");
          var EatTime = t0.valueOf() - t1.valueOf();
          if(sObj=="") { //如果沒有受詞
            msg_pool.push(sNameFirst + '臉上的表情看起來賤賤的');
          } else { //有受詞
            msg_pool.push('我今天晚上就去' + sObj + '家埋伏...');
            msg_pool.push('(拿出死亡筆記本寫上' + sObj + '的名字...');
            msg_pool.push('我會雇用柯姊以及社大拿好程式碼和電鋸埋伏' + sObj + '的.');
            msg_pool.push(sNameFirst + ', 今天心情不太好, 不想接單喔...');
            msg_pool.push(sNameFirst + ', 要付我多少佣金阿～～？');
            msg_pool.push('刺殺' + sObj + '失敗...殘念');
          }
          if( sObj==sSelf ){
            msg_pool=['你想殺我?我好怕啊...','你要用八炮殺我?'];
          }
          if( sObj.match(/(木可|柯|科)(小| )?(姊|姐|女且)/) || sObj.match(/([cCｃＣ][oOｏＯ][jJｊＪ][aAａＡ][dDｄＤ])/)){
            msg_pool=['你覺得這可能發生嗎?','你猜誰會先死?','這樣好了, 我付你500八炮殺掉柯姊?','這像話嗎?'];
          }
          if( sObj.match(/(木可|柯|科)(小| )?(姊|姐|女且)(\d\.\d)/) ){
            msg_pool=['我跟自己兄弟姊妹打架勝負難分...不幹'];
          }

          if(EatTime) { //手動設定停止吃
          i=chance.integer({min: 0, max: msg_pool.length-1});
          msg=msg_pool[i];
          bot.sendMessage({
            chat_id: message.chat.id,
            text: msg
          });
          console.log(colors.green('-- ' + msg));
          }
          break;
        case "help":
        case "help@baldeaglebot":
          var msg='help - 餵食指南\n' +
                  'kill - 派柯姊2.2處理掉 xxx ex: /kill 老闆\n' +
    							'say - 讓 柯姊2.2 說你講過的話 ex: /say 好想吃八砲\n' +
    							'eat - 讓 柯姊2.2 吃掉你想說的話 ex: /eat 被吃了';
          if( message.chat.id == -36226149 )
            msg += '\n靠北公告欄: https://telegram.me/joinchat/xxxxxxxxxxxxxxxxxxxxxx';

          bot.sendMessage({
            chat_id: message.chat.id,
            text: msg
          });
          break;
        case "board":
        case "board@baldeaglebot":
          if( message.chat.id == -36226149 )
            var msg='靠北公告欄在此！記得加入收聽重要訊息喔~\nhttps://telegram.me/joinchat/xxxxxxxxxxxxxxxxxxxxxx';
          else
            var msg='本群組沒有建立公告欄喔!';
          bot.sendMessage({
            chat_id: message.chat.id,
            text: msg
          });
          break;
        case "joln":
        case "joln@werewolfbot":
        case "jo1n":
        case "jo1n@werewolfbot":
        case "john":
        case "john@werewolfbot":
        case "jolin":
        case "jolin@werewolfbot":
          var msg='請各位認明 /join@werewolfbot 才是正確的指令哦ow<';
          bot.sendMessage({
            chat_id: message.chat.id,
            text: msg,
            reply_to_message_id: message.message_id
          });
          break;
        case "sendPhoto":
          bot.sendPhoto({
            chat_id: message.chat.id,
            caption: 'trololo',
            files: {
              photo: './logo.png'
            }
          });
          break;
        case "sendDocument":
          bot.sendDocument({
            chat_id: message.chat.id,
            files: {
              filename: 'scream',
              contentType: 'audio/ogg',
              stream: fs.createReadStream('./0477.ogg')
            }
          }, console.error);
          break;
        case "sendLocation":
          bot.sendLocation({
            chat_id: message.chat.id,
            latitude: -27.121192,
            longitude: -109.366424,
            reply_to_message_id: message.message_id
          });
          break;
        default:
          break;
      }
    }
  }
}
