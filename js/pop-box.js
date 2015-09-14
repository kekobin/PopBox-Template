var PopBox = function() {
	this.$popMask = $("#popMask"); //遮罩
}

PopBox.prototype.showPopup = function(element) {
	this.$popMask.show();
	$(element).css('z-index', 999);
	this.popupCenter(element).show();
}

PopBox.prototype.popupCenter = function(element) {
	var windowWidth = document.documentElement.clientWidth;
    var $element = $(element);
    var popupWidth = $element.width();
    var popupHeight = $element.height();

    $element.css({
        'position' : 'absolute',
        'top' : ($(window).height() - popupHeight) / 2 + $(document).scrollTop(),//scrollTop为往上面进去多少这里的top就要相应往下走多少
        'left' : (windowWidth - popupWidth) / 2
    });
    return $element;
}

PopBox.prototype.closePopup = function(element) {
	this.$popMask.hide();
    $(element).hide();
}

