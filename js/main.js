// クソうらない::未使用
(()=>{
	var btn = document.getElementById("kuso_btn");
	var result = document.getElementById("kuso_result");
	var omikuji = ['ふつう','かため','ころころ','ゆるめ','バリウム'];
	btn.addEventListener('click',function(){		
		var rnd = Math.floor(Math.random() * omikuji.length);
		result.innerHTML = omikuji[rnd]+"<br>ラッキーカラーは茶色";
	});
})();