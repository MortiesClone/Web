module.exports = function(grunt){
   grunt.initConfig({
 	less: {
  development: {
    files: {
      "css/result.css": "less/*.less"
    }
  }
}
   });
   grunt.loadNpmTasks('grunt-contrib-less');
};
