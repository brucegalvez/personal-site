import cheerio from "cheerio";
import axios from "axios";

const scrapeBehanceProfile = async () => {
  try {
    const { data } = await axios.get("http://behance.net/brucegalvez");
    const $ = cheerio.load(data);
    const projects = $(".ProjectCoverNeue-root-2lV")
      .toArray()
      .map((project) => {
        const sel = $(project);
        const imgSrc = sel.find(".ProjectCoverNeue-image-13g").attr("src");
        const title = sel.find(".Title-title-3nk").html();
        const url = sel.find(".js-project-link").attr("href");
        const stats = sel
          .find(".Stats-stats-1iI > span")
          .toArray()
          .map((stat) => $(stat).text());
        const res = {
          imgSrc,
          title,
          stats: { likes: stats[0], views: stats[1] },
          url,
        };
        return res;
      });
    // let projects = [];
    // projectsRaw.forEach(async (projectRaw) => {
    //   const projectPage = await axios.get(projectRaw.url);
    //   const $2 = cheerio.load(projectPage.data);
    //   const tags = $2(".ProjectTools-fieldLabel-38p")
    //     .toArray()
    //     .map((tag) => {
    //       const sel = $2(tag);
    //       return sel.html();
    //     });
    //   const description = $2(".ProjectInfo-projectDescription-3_S").html();
    //   projects.push({
    //     ...projectRaw,
    //     tags,
    //     description,
    //   });
    // });
    // console.log(projects);

    // fs.writeFile(
    //   "./data/behance.json",
    //   JSON.stringify({ projects, date: new Date().getTime() }),
    //   { flag: "w" },
    //   (err) => {
    //     if (err) console.log(err);
    //   }
    // );
    return projects;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export default scrapeBehanceProfile;
