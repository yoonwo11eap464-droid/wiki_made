module.exports = function (eleventyConfig) {
  // admin(Decap CMS), 이미지, 스타일 파일은 그대로 복사
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/style.css");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
