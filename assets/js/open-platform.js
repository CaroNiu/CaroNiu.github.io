(function () {
  async function updateGithubCard() {
    const el = document.querySelector('[data-github-profile]');
    if (!el) return;

    const user = el.dataset.githubProfile;
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) throw new Error('GitHub API unavailable');
      const data = await response.json();
      el.innerHTML = `
        <strong>@${data.login}</strong> · ${data.public_repos} 个公开仓库
        <br>Followers: ${data.followers} · Following: ${data.following}
      `;
    } catch (error) {
      el.textContent = 'GitHub 数据加载失败，请稍后重试。';
    }
  }

  async function bindQuoteTool() {
    const button = document.querySelector('[data-load-quote]');
    const output = document.querySelector('[data-quote-output]');
    if (!button || !output) return;

    const loadQuote = async function () {
      output.textContent = '加载中...';
      try {
        const response = await fetch('https://v1.hitokoto.cn/?encode=json');
        if (!response.ok) throw new Error('quote api error');
        const data = await response.json();
        output.innerHTML = `“${data.hitokoto}” —— ${data.from || '未知来源'}`;
      } catch (error) {
        output.textContent = '一言接口不可用，请稍后重试。';
      }
    };

    button.addEventListener('click', loadQuote);
    loadQuote();
  }

  async function bindGithubIssuesTool() {
    const button = document.querySelector('[data-load-issues]');
    const output = document.querySelector('[data-issues-output]');
    if (!button || !output) return;

    const owner = button.dataset.repoOwner;
    const repo = button.dataset.repoName;

    const loadIssues = async function () {
      output.textContent = '加载中...';
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues?state=open&per_page=5`);
        if (!response.ok) throw new Error('issues api error');
        const issues = await response.json();
        if (!Array.isArray(issues) || issues.length === 0) {
          output.textContent = '当前暂无待办 Issue。';
          return;
        }

        output.innerHTML = '<ul>' + issues
          .filter((item) => !item.pull_request)
          .slice(0, 5)
          .map((issue) => `<li><a href="${issue.html_url}" target="_blank" rel="noopener noreferrer">#${issue.number} ${issue.title}</a></li>`)
          .join('') + '</ul>';
      } catch (error) {
        output.textContent = 'Issue 数据加载失败，请检查仓库配置。';
      }
    };

    button.addEventListener('click', loadIssues);
    loadIssues();
  }

  updateGithubCard();
  bindQuoteTool();
  bindGithubIssuesTool();
})();
