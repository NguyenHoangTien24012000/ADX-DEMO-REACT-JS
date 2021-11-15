
const {src, dest, series, watch} = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const browsersync = require('browser-sync').create();


// function Sass

function scssTask(){
    return src('src/sass/style.scss', {sourcemaps : true})
        .pipe(sass())
        .pipe(dest('dist', {sourcemaps: '.'}))

}

// javascript task


// browsersync task
function browsersyncServer(cb){
    browsersync.init({
        server : {
            baseDir : '.'
        }
    });
    cb();
}


function browserReload(cb){
    browsersync.reload();
    cb();
}

// Watch tasks
function watchTask(){
    watch('*.html', browserReload);
    watch(['src/sass/**/*.scss', 'src/js/**/*.js'], series(scssTask, browserReload))
}


// default gulp task

exports.default = series(
    scssTask,
    browsersyncServer,
    watchTask
)
