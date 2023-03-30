const _ = require('lodash');
const arr = [0,1,false,2, '', 3];
console.log(_.compact(arr));

var saves = ['profile', 'settings'];
 
var done = _.after(3, function() {
  console.log('done saving!');
});
 
// _.forEach(saves, function(type) {
//   console.log({ 'type': type, 'complete': done });
// });



done();
done();
done();

// To understand the syntax check:
// https://www.sitepoint.com/understanding-ecmascript-6-template-strings/  template literals
// https://www.sitepoint.com/preparing-ecmascript-6-destructuring-assignment/ object destructuring
// https://thecodebarbarian.com/whats-new-in-es2019-flat-flatmap-catch.html#arrayflat-and-arrayflatmap  Array.prototype.flatMap()


// https://www.sitepoint.com/comparison-javascript-linting-tools/ learn what a linter is
// https://www.sitepoint.com/npm-guide/ a beginners guide to npm manager

// https://www.sitepoint.com/webpack-beginner-guide/  A Beginner’s Guide to Webpack
// https://www.sitepoint.com/up-and-running-with-eslint-the-pluggable-javascript-linter/  Up and Running with ESLint—the Pluggable JavaScript Linter
// https://www.sitepoint.com/introduction-gulp-js/  An Introduction to Gulp.js
// https://www.sitepoint.com/unit-test-javascript-mocha-chai/ Unit Test Your JavaScript Using Mocha and Chai
// https://www.sitepoint.com/anatomy-of-a-modern-javascript-application/ The Anatomy of a Modern JavaScript Application

// https://blog.logrocket.com/node-js-multithreading-worker-threads-why-they-matter/  Node.js multithreading
// https://www.sitepoint.com/guide-to-npm-as-a-build-tool/  A Guide to Using npm as a Build Tool


// https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/  understanding module formats
// https://sailsjs.com/studio look at this

/* jshint esversion: 6 */   
function upcase(strings, ...values) {
    return values.map(name => name[0].toUpperCase() + name.slice(1))
      .join(' ') + strings[2];
  }
  
  const person = {
    first: 'brendan',
    last: 'eich',
    age: 56,
    position: 'CEO of Brave Software',
  };
  
  const { first, last } = person;
  const emoticon = [ ['┌', '('], ['˘', '⌣'], ['˘', ')', 'ʃ'] ];
  
  console.log(
    upcase`${first} ${last} is the creator of JavaScript! ` + emoticon.flat().join('')
  );