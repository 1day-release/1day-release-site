var AWS = require('aws-sdk')
var fs = require('fs')

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: Aprocess.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-northeast-1'
})

var dir = './dist'
var s3 = new AWS.S3()
fs.readdir(dir, function(err, files) {
  if (err) throw err
  files.filter(function(file) {
    var params = {
      Bucket: 'dev.1day-release.com',
      Key: file,
      Body: fs.readFileSync(dir + file),
      ContentType: mime.lookup(file)
    }
    s3.putObject(params, function(err, data) {
      if (err) console.log(err, err.stack)
      else console.log(data)
    })
  })
})
console.log('test')
console.log(process.env)
