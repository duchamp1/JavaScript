myImage = new Array(	        // 画像ファイル名の設定
    "img/Harada_Tomoyo.jpg",	// 原田知世
    "img/Kikukawa_Rei.jpg",		// 菊川怜
    "img/Koizumi_Kyoko.jpg",	// 小泉今日子
    "img/Minamino_Yoko.jpg",	// 南野陽子
    "img/Nakamori_Akina.jpg",	// 中森明菜
    "img/Natsume_Masako.jpg",	// 夏目雅子
    "img/Yamaguchi_Tomoko.jpg"	// 山口智子
);	
myNowCnt = -1;		    // 現在表示している配列番号
myflg = 0;		        // どっちを表示して、どっちを消すかのフラグ
function myChange(){	// スライドショーメイン関数
    myNowCnt = (myNowCnt<myImage.length-1) ? myNowCnt+1 : 0;		// 次の配列番号
    myflg = (myflg==0) ? 1 : 0;	                                    // 表示・非表示フラグ反転
    if (myflg == 0){
        document.getElementById("idshow1").src = myImage[myNowCnt];	// 次の画像をセットする
        document.getElementById("idshow1").className = "fadein";	// フェードイン
        document.getElementById("idshow2").className = "fadeout";	// フェードアウト
    }else{
        document.getElementById("idshow2").src = myImage[myNowCnt];	// 次の画像をセットする
        document.getElementById("idshow1").className = "fadeout";	// フェードアウト
        document.getElementById("idshow2").className = "fadein";	// フェードイン
    }
    setTimeout( "myChange()" , 3000 );					            // 3秒周期に画像を更新する
}	
