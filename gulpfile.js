/**
 * Created by cnaisin06 on 2017/7/10.
 */
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
    return gulp.src("./canvas.js")// ES6 Դ���ŵ�·��
        .pipe(babel())
        .pipe(gulp.dest("dist")); //ת���� ES5 ��ŵ�·��
});