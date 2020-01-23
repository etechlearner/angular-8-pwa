let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let webpush = require('web-push');
let app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('This is a push notification server use post');
});

app.post('/subscribe', (req, res) => {
  let sub = req.body;
  res.set('Content-Type', 'application/json');
  webpush.setVapidDetails(
    'mailto:developer.tahirghori@gmail.com',
    "BAhlNbCbzEyraICbjOI_9TAqyIyLK3MLB1Nwu1PHgzcki0LgrbLYaFu8SJzsapRQdme-RqzJnx6AUNRTSUoVQj8", 
    "DwHphbs-rfL6DXNli7dqju0j3eru5VeEXVNkltJJgYU"
  );

  let payload = JSON.stringify({
    "notification": {
      "title": "Blackbox Tech",
      "body": "Thanks for subscribing to my channel",
      "icon": "https://yt3.ggpht.com/a-/AAuE7mCxr-4W53FAxBRcKR0iDk_vPCSAmW-QKFGaFA=s88-mo-c-c0xffffffff-rj-k-no"
    }
  });

  Promise.resolve(webpush.sendNotification(sub, payload))
    .then(() => res.status(200).json({
      message: 'Notification sent'
    }))
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
})

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});


// {"publicKey":"BAhlNbCbzEyraICbjOI_9TAqyIyLK3MLB1Nwu1PHgzcki0LgrbLYaFu8SJzsapRQdme-RqzJnx6AUNRTSUoVQj8",
// "privateKey":"DwHphbs-rfL6DXNli7dqju0j3eru5VeEXVNkltJJgYU"}