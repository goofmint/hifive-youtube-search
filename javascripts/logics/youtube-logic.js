(function($) {
    var URL = 'http://gdata.youtube.com/feeds/api/videos';
    var youtubeLogic = {
        __name: 'youtube.sample.YoutubeLogic',
	search: function(keyword, startIndex, maxResults) {
	    var promise = h5.ajax(URL, {
		dataType: 'jsonp',
		data: {
		    'q': keyword,
		    'v': 2,
		    'max-results': maxResults,
		    'alt': 'json-in-script',
		    'start-index': startIndex
		},
		cache: true
	    });
	    // Promiseオブジェクト(jqXHRオブジェクト)を返す
	    return promise;
	}
    };
    //ロジックを単体で実行できるように公開する
    h5.core.expose(youtubeLogic);
})(jQuery);  
