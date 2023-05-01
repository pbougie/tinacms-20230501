module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("_src/admin/assets");
  eleventyConfig.addPassthroughCopy("_src/uploads");

  eleventyConfig.setLiquidOptions({
    lenientIf: true,
    strictFilters: true,
    strictVariables: true,
  });

  return {
    dir: {
      data: "../_data",
      includes: "../_partials",
      input: "_src",
      layouts: "../_layouts",
      output: "build",
    }
  };

};
