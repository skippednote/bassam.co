const gulp = require("gulp");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const workbox = require("workbox-build");
const svgo = require("gulp-svgo");
const imagemin = require("gulp-imagemin");
const exec = require("child_process").exec;
const gulpSequence = require("gulp-sequence");

const config = {
  sass: {
    src: "sass/styles.scss",
    dest: "static/",
    files: "sass/**/*.scss"
  },
  js: {
    src: "js/app.js",
    dest: "static/"
  },
  svg: {
    src: "svg/**/*.svg",
    dest: "themes/bsm/layouts/partials/svg"
  },
  images: {
    src: "imgs/**/*",
    dest: "static/imgs/"
  }
};

gulp.task("sass", function() {
  return gulp
    .src(config.sass.src)
    .pipe(
      sass({
        includePaths: ["./node_modules"]
      }).on("error", sass.logError)
    )
    .pipe(cssnano())
    .pipe(gulp.dest(config.sass.dest));
});

gulp.task("sass:watch", function() {
  gulp.watch(config.sass.files, ["sass"]);
});

gulp.task("js", function() {
  return gulp
    .src(config.js.src)
    .pipe(uglify())
    .pipe(gulp.dest(config.js.dest));
});

gulp.task("sw", () => {
  return workbox
    .injectManifest({
      globDirectory: "public",
      globPatterns: [
        "**/*.{html,js,css,svg,mp3}",
        "imgs/bassam/banner-portrait.jpg",
        "imgs/bassam/banner.jpg"
      ],
      swSrc: `js/sw.js`,
      swDest: `static/sw.js`
    })
    .then(() => {
      console.info("Service worker generation completed.");
    })
    .catch(error => {
      console.warn("Service worker generation failed: " + error);
    });
});

gulp.task("svg", function() {
  return gulp
    .src(config.svg.src)
    .pipe(svgo({ precision: 4 }))
    .pipe(gulp.dest(config.svg.dest));
});

gulp.task("img", function() {
  return gulp
    .src(config.images.src)
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 })
      ])
    )
    .pipe(gulp.dest(config.images.dest));
});

gulp.task("hugo", function(cb) {
  exec("hugo", function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task(
  "default",
  gulpSequence("sass", "js", "svg", "img", "hugo", "sw", "hugo")
);
