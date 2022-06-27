import request from 'request'

export default function GetToken(req, res) {
  const client_id = '1aa3c985303e4ca99f6cb2bcf64b80c0';
  const client_secret = '0d125ab0de6c4d61adc0f1645aa1b69a';

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      const token = body.access_token
      return res.json({token})
    }
  });
}
