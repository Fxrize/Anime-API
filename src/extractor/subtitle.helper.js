import axios from "axios";
import * as cheerio from "cheerio";

/*
  Scrape subtitle Indo langsung dari Otakudesu page
  TANPA database
  TANPA API lain
*/

export async function getIndoSubtitle(slug) {
  try {
    // contoh:
    // https://otakudesu.lol/episode/naruto-episode-1/
    const url = `https://otakudesu.lol/episode/${slug}`;

    const { data } = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      },
      timeout: 15000
    });

    const $ = cheerio.load(data);

    // cari link .vtt atau .srt
    let subtitleUrl = null;

    $("a").each((_, el) => {
      const href = $(el).attr("href");
      if (href && (href.endsWith(".vtt") || href.endsWith(".srt"))) {
        subtitleUrl = href;
      }
    });

    return subtitleUrl;
  } catch (e) {
    console.log("Subtitle not found:", e.message);
    return null;
  }
}
