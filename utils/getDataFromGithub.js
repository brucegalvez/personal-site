import axios from "axios";

const getGithubRepos = async () => {
  try {
    const { data } = await axios.post(
      "https://api.github.com/graphql",
      {
        query: `{
          user (login: "brucegalvez") {
            bio
            avatarUrl
            repositories (first: 20, privacy: PUBLIC, isFork: false) {
              nodes {
                id
                name
                description
                openGraphImageUrl
                url
                repositoryTopics (first: 3) {
                  nodes { topic { name } }
                }
                languages (first: 3) {
                  nodes { name, color } 
                } 
              } 
            } 
          } 
        }
      `,
      },
      { headers: { Authorization: `bearer ${process.env.GITHUB_TOKEN}` } }
    );
    return data.data.user;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getGithubRepos;
