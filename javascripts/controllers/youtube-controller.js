(function($) {
    var youtubeController = {
        __name: 'youtube.sample.YoutubeController',
        _youtubeLogic: youtube.sample.YoutubeLogic,
        _keyword: '',
        '#search submit': function(context, $el) {
	    context.event.preventDefault();
	    this._keyword = $el.find("#keyword").val();
	    this._search(this._keyword, 1);
        },
	_search: function(keyword, index) {
            //検索ロジックが返すpromiseオブジェクトを変数に保持する
            var promise = this._youtubeLogic.search(keyword, index, 6);
            //検索ロジック完了
            promise.done(function(data) {
                //総件数を表示
                alert(data.feed.openSearch$totalResults.$t);
            });
            // promiseオブジェクトを返す
            return promise;
        },
    };
    h5.core.expose(youtubeController);
})(jQuery);
$(function(){
    h5.core.controller('#container', youtube.sample.YoutubeController);
});
