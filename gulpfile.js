// Requires
const gulp = require('gulp');
const babel = require('gulp-babel');

// Include plugins
// css
const less = require('gulp-less');
const nano = require('gulp-cssnano');
const uncss = require('gulp-uncss');
const autoprefixer = require('gulp-autoprefixer');

const critical = require('critical').stream;
const plumber = require('gulp-plumber');
// JS
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
// html
const extender = require('gulp-html-extend');
const twig = require('gulp-twig');
const htmlmin = require('gulp-htmlmin');
// img
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
// all
const gulpsync = require('gulp-sync')(gulp);
const rename = require('gulp-rename');
const taskListing = require('gulp-task-listing');
const browserSync = require('browser-sync');
const when = require('gulp-if');
const argv = require('yargs').argv;
const data = require('./src/data.json');
const ghPages = require('gulp-gh-pages-will');



// Add a task to render the output
gulp.task('help', taskListing);

// Paths
const source = './src';
const assets = './src/assets';
const dist = './dist';
const distAssets = './dist/assets';

// Tâche css = LESS + autoprefixer + unCSS
gulp.task('css', () => {
  return gulp.src(`${assets}/less/style.less`)
    .pipe(plumber({
        errorHandler: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
    .pipe(less())
	.pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(when(argv.prod, uncss({
      html: [`${dist}/*.html`],
      timeout: 1000,
      ignore: [
        /slick/,
        /active/,
        /next/,
        /prev/,
        /wf-/,
		/Gallery/,
		/icon/,
		/container/,
		/h/
    ]
    })))
    .pipe(when(argv.prod, nano()))
    // .pipe(plumber.stop())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(`${distAssets}/css`))
    .pipe(browserSync.stream());
});

gulp.task('twig', () => {
    return gulp.src(`${source}/views/*.twig`)
        .pipe(twig({
            data: data
        }))
        .pipe(when(argv.prod, htmlmin({
          collapseWhitespace: false,
          removeComments: true
        })))
        .pipe(gulp.dest(dist));
});

// Tâche "critical" = critical inline CSS
gulp.task('critical', gulpsync.sync(['twig', 'css']), function(cb) {
  return  gulp.src(dist + '/*.html')
    .pipe(when(argv.prod, critical({
		base: dist,
		dest: 'assets/css/critical.min.css',
		// dest: dist + '/index-critical.html',
		inline: false,
		minify: true,
		extract: true,
		css: [ dist + '/assets/css/style.min.css' ],
		ignore: ['@font-face',/url\(/],
		dimensions: [{
		height: 480,
		width: 320
		}, {
		height: 1440,
		width: 2560
		}]
  	})))
    .pipe(gulp.dest(dist));

  // critical.generate({
  //     inline: true,
  //     base: 'dist/',
  //     src: 'index.html',
  //     dest: 'dist/index-critical.html',
  //     minify: true,
  //     width: 320,
  //     height: 480
  // });
});

gulp.task('js', () => {
 return gulp.src([`${assets}/js/*.js`, `${assets}/js/**/*.js`])
    .pipe(when(!argv.prod, sourcemaps.init()))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(when(argv.prod, uglify()))
    .pipe(concat('scripts.js'))
    .pipe(when(!argv.prod, sourcemaps.write('.')))
    .pipe(when(argv.prod, rename({
      suffix: '.min'
    })))
    .pipe(gulp.dest(`${distAssets}/js`))
    .pipe(browserSync.stream());
});

gulp.task('loadcss', () => {
 return gulp.src([
      source + '/js/unused/loadcss.js'
    ])
    .pipe(uglify())
    .pipe(gulp.dest(`${dist}/js/unused`))
    .pipe(rename({
      suffix: '.min'
    }))
});

// Tâche "img" = Images optimisées
gulp.task('img', () => {
  return gulp.src(source + '/img/*.{png,jpg,jpeg,gif,svg}')
    .pipe(imagemin())
    .pipe(gulp.dest(`${dist}/img`));
});

// Minify any new image
gulp.task('uploads', () => {
  return gulp.src(`${assets}/uploads/**`)
  	.pipe(newer(`${distAssets}/uploads`))
    .pipe(imagemin())
    .pipe(gulp.dest(`${distAssets}/uploads`));
});

gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: dist
        }
    });
});

gulp.task('ghPages', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
		force: true
	}));
});

// Tâche "build" = toutes les tâches ensemble
gulp.task('build', gulpsync.sync(['critical', 'css', ['js', 'img', 'uploads']]));
gulp.task('deploy', gulpsync.sync(['build', 'ghPages']));

gulp.task('watch', () => {
  browserSync.init({
      server: {
          baseDir: dist
      }
  });
  gulp.watch(`${assets}/uploads/**`, ['uploads']);
  gulp.watch([`${assets}/less/*.less`, `${assets}/less/**/*.less`], ['css']);
  gulp.watch([`${assets}/js/*.js`, `${assets}/js/module/*.js`], ['js', browserSync.reload]);
  gulp.watch([`${source}/views/*.twig`, `${source}/views/**/*.twig`], ['twig', browserSync.reload]);
});

// Default task
gulp.task('default', ['watch']);
