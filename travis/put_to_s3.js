var AWS = require('aws-sdk')
var fs = require('fs')
var mime = require('mime-types')

var dir = './dist'
var s3 = new AWS.S3()

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-northeast-1'
})

function put_to_s3_sdk(file, s3_env_bucket_name) {
  distination_path = file.replace('./dist/', '')
  var params = {
    Bucket: s3_env_bucket_name,
    Key: distination_path,
    Body: fs.readFileSync(file),
    ContentType: mime.lookup(file)
  }

  s3.putObject(params, function(err, data) {
    if (err) console.log(err, err.stack)
  })
}

exports.put_to_s3 = function(s3_env_bucket_name) {
  const dir_files_name = fs.readdirSync(dir)
  dir_files_name.forEach(dir_file => {
    file_path = dir + '/' + dir_file
    if (fs.statSync(file_path).isDirectory()) {
      // ディレクトリの場合（第二階層までしか対応していない）
      fs.readdirSync(file_path).forEach(deep_file => {
        console.log(file_path + '/' + deep_file)
        put_to_s3_sdk(file_path + '/' + deep_file, s3_env_bucket_name)
      })
    } else {
      // ファイルの場合
      put_to_s3_sdk(file_path, s3_env_bucket_name)
    }
  })
}
