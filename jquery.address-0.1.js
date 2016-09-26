;(function ($, window, document, undefined){
	"use strict";
	
	// 기본갑
	var pluginName = 'address',
		defaults = {
			rows: "100"
		};

	//생성자
	function Address (element, options){
		this.element = element;

		this.options = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = plginName;

		this.init();
		
	}


	// 초기화 함수
	Address.prototype.init = function(){
		
	}


	$.fn[pluginName] = function(options) {
		return this.each(function(){
			if(!$.data(this, 'plugin_' + pluginName)){
				$.data(this, 'plugin_' + pluginName, new Address(this, options));
			}
		})
	}

})(jQuery, window, document);
