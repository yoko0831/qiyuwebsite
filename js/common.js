$(document).ready(function () {
  // 下拉菜单
  $(function () {
    $('#nav>li').hover(function (e) {
      $(this).find(".xiala").stop().slideToggle()
    });
  });
  $('.advantage_group .module img').hover(
    function () {
      $(this).addClass('icon_opa')
    },
    function () {
      $(this).removeClass('icon_opa')
    }
  );
  // 案例选项卡切换
  $(".case_tab_title>li").eq(0).css("background", "#d6a36a").css("color", "white")
  $(".case_tab_title>li").mouseover(function () {
    var index = $(this).index()
    var w = $(".case_tab_main .bon ul li").width()
    $(".bon").stop().animate({ //.stop在此处添加
      "marginLeft": -w * index
    })
    $(this).css("background", "#d6a36a").css("color", "white").siblings().css("background", "#fff").css("color", "#d6a36a")
  })
  // 联系我们图标旋转
  $('.rotateicon').hover(
    function () {
      $(this).addClass('rotateicon2')
    },
    function () {
      $(this).removeClass('rotateicon2')
    }
  )
});
