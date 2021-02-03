import axios from "axios";

const getGithubRepos = async () => {
  try {
    const { data } = await axios.post(
      "https://api.github.com/graphql",
      {
        query: `{ user (login: "brucegalvez") {
        repositories (first: 20, privacy: PUBLIC, isFork: false) {
          nodes {
            id
            name
            description
            url
            languages (first:3) {
              nodes {
                name
        } } } } } }
      `,
      },
      { headers: { Authorization: `bearer ${process.env.GITHUB_TOKEN}` } }
    );
    return data.data.user.repositories;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getGithubRepos;
