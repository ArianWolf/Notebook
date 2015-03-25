var gulp = require('gulp');
var liveServer = require("live-server");

gulp.task('serve', function() {
  var params = {
    port: 8000, // Set the server port. Defaults to 8080. 
    root: './app', // Set root directory that's being server. Defaults to cwd.  
  };
  liveServer.start(params);
});