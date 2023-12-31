var request = require('request');

module.exports = async (data) => {
    return new Promise(async (resolve, reject) => {
        var options = {
          'method': 'POST',
          'url': 'https://aivoov.com/api/v1/transcribe',
          'headers': {
            'X-API-KEY': data.apiKey,
          },
          formData: {
            'voice_id': data.voiceId,
            'transcribe_text[]': data.text,
            'engine': data.engine
          }
        };
        request(options, (err, res) => {
            if(err) {
                reject(err)
            }
            resolve(res.body)
        });
    })
}
