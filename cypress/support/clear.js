const rimraf = require('rimraf');

rimraf.sync('cypress/videos/spec/*.mp4')
rimraf.sync('report/json/*')
rimraf.sync('report/html/*')
rimraf.sync('report/screenshots/*')