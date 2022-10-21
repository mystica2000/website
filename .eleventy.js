const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt,className,load) {

    sizes = "(min-width: 50em) 50vw, 100vw"

    let metadata = await Image(src, {
        widths: [600,800,1200],
        formats: ["webp", null],
        urlPath: '/assets/images',
        outputDir: '_site/assets/images'
      });

      let imageAttributes = {
        class: className,
        alt,
        sizes,
        loading: load,
        decoding: "async",
      };



    return Image.generateHTML(metadata, imageAttributes);
}



module.exports = (eleventyConfig) =>
{
    eleventyConfig.addPassthroughCopy('src/css')
    eleventyConfig.addPassthroughCopy('src/js')
    eleventyConfig.addPassthroughCopy('src/assets')
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    eleventyConfig.addLiquidShortcode("image", imageShortcode);
    eleventyConfig.addJavaScriptFunction("image", imageShortcode);


    eleventyConfig.addShortcode("ahref",function(aahref,text,className) {

      let str = `<a href="${aahref}" class="${className}">${text}</a>`
      return str
    });

    return {
        dir: {
            input: './src/',
        }
    }
}