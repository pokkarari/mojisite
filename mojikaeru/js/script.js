//スクロールして下からふわっと
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
});


//スクロールしてからSVG文字アニメーション
// $(function(){
//   var target = $(".st1").offset().top;
//   var windowHeight = $(window).height();
//   var flg = false;
//   var scrolltop = 0;
//   var startPoint = 0;

//   var mySVG = $('.st1').drawsvg({
//       duration:1000,
//       stagger:400,
//       easing:'swing',
//       reverse:false
//   });
//   $(window).on('scroll resize',function(){
//       scrolltop = $(window).scrollTop();
//       windowHeight = $(window).height();
//       startPoint = scrolltop + windowHeight - 100;
//       console.log('scrolltop:'+scrolltop);
//       console.log("target:"+target);
//       console.log("startPoint:"+startPoint);
//       if(startPoint > target){
//           if(flg==false){
//             flg = true;
//             mySVG.drawsvg('animate');
//             console.log("アニメーション")
//           }
//       }
//   });
// });





//スクロールでid移動
$(document).ready(function(){
    $("a").click(function(){
        //移動速度の設定を一番最初に決めておく
        var speed = 6;

        //現在の位置
        var currentPos = $(window).scrollTop();
        // クリックしたa要素のhref属性の値を取得
        var selector = $(this).attr("href")
        console.log(selector);
        // 目的位置を取得する　Y座標.top
        var pos = $(selector).offset().top;
            console.log(pos);
            //現在地から目的位置までの距離を絶対値として取得 絶対値math.abs();
        var dist = pos - currentPos;
        console.log(dist);
        // 移動にかかる時間
        var t = dist / speed;
      // スムーズスクロール
        $("html, body").animate({
            scrollTop: pos
        }, t);

        // ページの再読み込み防止
        return false;
    });
});

// //下にあるトップへ戻るボタン 動かない
// $(function($){
// 	var $jsPagetop = $('#js-pageTop');
// 	var DURATION = 300;

// 	$jsPagetop.on('click', function (e) {
// 		e.preventDefault();
// 		$('html, body').stop().animate({
// 			scrollTop: 0
// 		}, DURATION, 'easeOutQuad');
// 	});
// });


//上部の固定ナビゲーション
$(function() {
  // 上部固定させるナビゲーションメニューの id を $nav とする
  var $nav = $('#fixed-nav');
  // 上部固定させたときに padding-top を設定させたい箇所の id を $container とする
  var $container = $('#container');
  // メニューの top 座標を取得する
  var $offsetTop = $nav.offset().top;
  var $fixedMenu = function() {
    // スクロール位置がメニューの top 座標を超えたらナビゲーションを上部固定にする
    if ($(window).scrollTop() > $offsetTop) {
      // .css() を使って固定用の CSS プロパティを付与
      $nav.css({
        'position': 'fixed',
        'top': '0',
        'z-index': '999'
      });
      // paddingを付与
      $container.css({
        'padding-top': '60px'
      });
    } else {
      $nav.css({
        'position': '',
        'top': '',
        'z-index': ''
      })
      $container.css({
        'padding-top': ''
      });
    }
  }
  $(window).scroll($fixedMenu);
  // スマートフォン用に touchmove を使う
  $('body').bind('touchmove', $fixedMenu);
});


//marphext.jsプラグイン  文字が切り替わるアニメーション
$(function() {
$("#js-rotating").Morphext({
    // アニメーションのタイプ
    animation: "flipInX",
    // 区切り（パイプライン「|」などでも可
    separator: ",",
    // 表示するスピード
    speed: 1500
});
});


