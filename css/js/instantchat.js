function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

$.get('/cdn-cgi/trace', function(data) {
	pattern = /(?:[0-9]{1,3}\.){3}[0-9]{1,3}/
	ip = pattern.exec(data)[0]

	window.instantChatBotUidName = ' ' + ip;
	window.__arsfChatIdg = '1001205733949';
	var newScript = document.createElement('script');
	newScript.type = 'text/javascript';
	newScript.src = '//cafechat.app/start.js';
	document.getElementsByTagName("head")[0].appendChild(newScript);
})

