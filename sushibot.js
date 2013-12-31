var Twit = require('twit');
var http = require('http');
var httpreq = require('httpreq');
var T = new Twit({
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: ''
})

    function sushibot() {

        for (var i = 0; i < 1000; i++) {
            httpreq.get('http://randomword.setgetgo.com/get.php', function (err, res) {
                if (err) return console.log(err);
                word = (res.body);
                console.log(word);
                T.post('statuses/update', {
                    status: word
                }, function (err, reply) {});
            });
        }
    }
sushibot();