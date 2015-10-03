module.exports = function(grunt){
   grunt.initConfig({
 	less: {
  development: {
    files: {
      "result.css": "*.less"
    }
  }
}
   });
   grunt.loadNpmTasks('grunt-contrib-less');
};
