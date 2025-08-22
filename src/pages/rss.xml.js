import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  
  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => 
    new Date(b.data.pubDate) - new Date(a.data.pubDate)
  );
  
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    language: 'zh-CN',
    
    // Enhanced RSS items
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`,
      
      // Additional metadata
      author: '零一格物团队',
      categories: ['AI', '数据分析', '教育技术'],
      
      // Custom namespace for enhanced RSS
      customData: `
        <content:encoded><![CDATA[${post.data.description}]]></content:encoded>
        ${post.data.heroImage ? `<media:thumbnail url="${context.site}${post.data.heroImage}" />` : ''}
      `,
    })),
    
    // Custom RSS XML namespaces
    xmlns: {
      content: "http://purl.org/rss/1.0/modules/content/",
      media: "http://search.yahoo.com/mrss/",
    },
  });
}
