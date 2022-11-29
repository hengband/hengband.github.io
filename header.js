
new Vue({
    el: "#app",
  data: function() {
    return {
    text: "aaaa",
	  header: '<header>\
<section id="title"> \
      <img class="tama1" src="/image/tama.gif" alt="tama" /> \
      <img class="tama2" src="/image/tama.gif" alt="tama" /> \
      <img class="tama3" src="/image/tama.gif" alt="tama" /> \
      <img class="tama4" src="/image/tama.gif" alt="tama" /> \
      <img \
        id="hengTitle" \
        src="/image/hengband_title2021.png" \
        alt="変愚蛮怒 Hengband" \
      /> \
      <img class="tama4" src="/image/tama.gif" alt="tama" /> \
      <img class="tama3" src="/image/tama.gif" alt="tama" /> \
      <img class="tama2" src="/image/tama.gif" alt="tama" /> \
      <img class="tama1" src="/image/tama.gif" alt="tama" /> \
    </section> \
    <section id="mainMenu"> \
      <a href="/index.html">トップ</a> \
      <a href="/download.html">ダウンロード</a> \
      <a href="/score.html">スコア</a> \
      <a href="/development.html">開発</a> \
      <a href="/lists.html">コミュニティ</a> \
      <a href="/history.html">バージョン履歴</a> \
      <a href="/link.html">関連リンク</a> \
      <a href="/jlicense.html">著作権表記</a> \
      <span>English (Coming Soon?)</span> \
    </section></header>',
    footer: '<footer>\
      <section>\
        各ページへのリンクは御自由にどうぞ。/ Link Free.<br />\
        2022 Hengband Dev Team.\
        <a href="mailto:hengband-dev@lists.sourceforge.jp">hengband-dev@lists.sourceforge.jp</a><br />\
      </section>\
      <section>\
        Powered by\
        <a href="https://osdn.net/" class="footer_banner">\
          <img src="//osdn.net/sflogo.php?group_id=541" border="0" alt="OSDN" />\
        </a>\
      </section>\
    </footer>'
    }
  },
  computed: {
    markedTest() {
      var self = this;
      axios.get("/md/web_update.md")
      .then(function (response) {
        self.text = response.data;
      })
      .catch(function (error) {
      });
      return marked.parse(self.text, {});
    }
  }
});
