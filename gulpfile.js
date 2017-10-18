var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var gutil = require("gulp-util");
var nodemon = require('gulp-nodemon');

function bundle () {
  return tsProject.src()
          .pipe(tsProject())
          .js.pipe(gulp.dest("dist"));
}

gulp.task("compile", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task('develop', function () {
  var stream = nodemon({
    "watch": ["src"],
    "ext": "ts",
    "exec": "node ./dist/main.js",
    "tasks": ["compile"]
  });
  stream
      .on('restart', function () {
        console.log('restarted!')
      })
      .on('crash', function() {
        console.error('Application has crashed!\n')
         stream.emit('restart', 10)  // restart the server in 10 seconds
      });
})

gulp.task("default", bundle);

