import { GitContributors } from "/Users/mac/IdeaProjects/own/tanga/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.90_vuepress@2.0.0-rc.20/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/Users/mac/IdeaProjects/own/tanga/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.90_vuepress@2.0.0-rc.20/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
