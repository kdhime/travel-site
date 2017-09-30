var gulp=require('gulp');

var watch=require('gulp-watch');
var postcss=require('gulp-postcss');
var autoprefixer =require('autoprefixer'),cssvars=require('postcss-simple-vars'),nested=require('postcss-nested');
gulp.task('default',function(){
  console.log("This is the first gulp tasks");
});

gulp.task('html',function(){
  console.log("Running the html");
});

gulp.task('styles',function(){
 return gulp.src('./app/assets/styles/styles.css')
 .pipe(postcss([cssvars,nested,autoprefixer]))
 .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch',function(){
 watch('./app/index.html',function(){
   gulp.start('html');
 })

 watch('./app/assets/styles/**/*.css',function(){
   gulp.start('styles');
 })

});
