var export_function = require('./put_to_s3')

const s3_env_bucket_name = '1day-release.com'
export_function.put_to_s3(s3_env_bucket_name)
