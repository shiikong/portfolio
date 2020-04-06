$(function(){
	// viewport
	function setViewPort() { 
		var viewPortName = document.getElementById("viewPort");
		var viewPortWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		if(1025 >= viewPortWidth && viewPortWidth >= 769){
		viewPortName.setAttribute("content","width=1024, target-densitydpi=device-dpi , user-scalable=no");
		}else if(768 >= viewPortWidth && viewPortWidth >= 641){
		viewPortName.setAttribute("content","width=768, target-densitydpi=device-dpi , user-scalable=no"); 
		}else if(640 >= viewPortWidth){
		viewPortName.setAttribute("content","width=640, target-densitydpi=device-dpi , user-scalable=no"); 
		}else{
		viewPortName.setAttribute("content","width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi"); 
		}
	};
	setViewPort();

	$(window).scroll(function() {
		// header fix
		var viewPortWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		if(viewPortWidth >= 641){
			if ($(window).scrollTop() > 0) {
				$('#header').css({ background: '#fff', color: '#333', '-moz-box-shadow': '0 0 10px rgba(0, 0, 0, 0.2)', '-webkit-box-shadow': '0 0 10px rgba(0, 0, 0, 0.2)', ' box-shadow': '0 0 10px rgba(0, 0, 0, 0.2)' });
			} else if ($(window).scrollTop() == 0) {
				$('#header').css({ background: 'none', color: '#fff', '-moz-box-shadow': 'none', '-webkit-box-shadow': 'none', 'box-shadow': 'none' });
			}
		}
		else if(640 >= viewPortWidth){
			if ($(window).scrollTop() > 0) {
				$('#header').css({ background: '#333', color: '#fff', '-moz-box-shadow': '0 0 10px rgba(0, 0, 0, 0.2)', '-webkit-box-shadow': '0 0 10px rgba(0, 0, 0, 0.2)', ' box-shadow': '0 0 10px rgba(0, 0, 0, 0.2)' });
			} else if ($(window).scrollTop() == 0) {
				$('#header').css({ background: 'none', color: '#fff', '-moz-box-shadow': 'none', '-webkit-box-shadow': 'none', 'box-shadow': 'none' });
			}
		}
		$('#logo_home').click(function() {
			$('html, body').stop().animate({ scrollTop : 0 }, 500);
		});

		// scrollTop
		// if ( 500 < $(window).scrollTop() ) {
		// 	$('#btn_top').fadeOut();
		// }else if( $(window).scrollTop() < $(document).height() - $(window).height() - 500) {
		// 	$('#btn_top').fadeOut();
		// }else{
		// 	$('#btn_top').fadeIn();
		// }
		$('#btn_top').click(function() {
			$('html, body').stop().animate({ scrollTop : 0 }, 500);
		});
	});

	// loading
	$(window).on('load', function () {
		$('#loading').fadeOut(1000,"swing");
		//$('html, body').css({ 'overflow-y': 'auto' });
	});

	// gnb click
	$('#gnb ul li a').click(function () {
		var txt = $(event.target).text().toLowerCase();
		var position = $('#'+txt).offset();
        $('html, body').stop().animate( { scrollTop : position.top }, 500) ;
	});

	// topFullscreen
	indexSection();
	function indexSection(){
		var w = $(window).width();
		var h = $(window).height();
		$('#index').css({'width':w+'px', 'height':h+'px'});
	}
	$(window).resize(function(){
		indexSection();
	});

	// isotope button on
	$('.filter-button-group button').click(function(){
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
	});

	// career list
	var lst = $('.herstory .list > li').length;
	test();
	function test(){
		for(var i=0; i<lst; i++){
			$('.herstory .list > li:eq('+i+')').css({'top': i*50+'px'});
		}
	}

	/*parallax
	if ($(window).scrollTop() > 0) {
        $("p").animate({top: "+=100px"});
	}else{
	}

	/* $(window).scroll(function(){
  		parallax();
	});
	function parallax(){
		var scrolled = $(window).scrollTop();
		$('#content .section2').css('opacity',-(scrolled*0.2));
	}*/

  //****************************
  // Isotope Load more button
  //****************************
  var initShow =8; //number of items loaded on init & onclick load more button
  var counter = initShow; //counter for load more button
  var iso = $grid.data('isotope'); // get Isotope instance

  loadMore(initShow); //execute function onload

  function loadMore(toShow) {
    $grid.find(".hidden").removeClass("hidden");

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
      return item.element;
    });
    $(hiddenElems).addClass('hidden');
    $grid.isotope('layout');

    //when no more to load, hide show more button
    if (hiddenElems.length == 0) {
      jQuery("#btn_more").hide();
    } else {
      jQuery("#btn_more").show();
    };

  }

  //append load more button
  $('.itemBoxWrap').after('<button id="btn_more" class="ff-quick">More</button>');

  //when load more button clicked
  $("#btn_more").click(function() {
    if ($('#filters').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      $('#filters').data('clicked', false);
    } else {
      counter = counter;
    };
    counter = counter + initShow;

    loadMore(counter);
  });

  //when filter button clicked
  $("#filters").click(function() {
    $(this).data('clicked', true);

    loadMore(initShow);
  });

  //AOS
  var myAOS = function(){
    AOS.init({
        easing:'ease-out-back',
        duration:1600
    });
  }
  myAOS();
});