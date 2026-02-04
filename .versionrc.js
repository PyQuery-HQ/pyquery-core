const tracker = {
  readVersion: function(contents) {
    // Regex to find the version string inside quotes
    const match = contents.match(/(?:version|__version__) = "(.*)"/);
    return match ? match[1] : null;
  },
  writeVersion: function(contents, version) {
    // Replace the version string while preserving the surrounding key
    return contents.replace(/(version|__version__) = ".*"/, `$1 = "${version}"`);
  }
};

module.exports = {
  "tag-prefix": "",
  "types": [
    {
      "type": "chore",
      "section": "Others 🔧",
      "hidden": false
    },
    {
      "type": "revert",
      "section": "Reverts ◀",
      "hidden": false
    },
    {
      "type": "feat",
      "section": "Features 🔥",
      "hidden": false
    },
    {
      "type": "fix",
      "section": "Bug Fixes 🛠",
      "hidden": false
    },
    {
      "type": "improvement",
      "section": "Feature Improvements 🛠",
      "hidden": false
    },
    {
      "type": "docs",
      "section": "Docs 📃",
      "hidden": false
    },
    {
      "type": "style",
      "section": "Styling 🎨",
      "hidden": false
    },
    {
      "type": "refactor",
      "section": "Code Refactoring 🖌",
      "hidden": false
    },
    {
      "type": "perf",
      "section": "Performance Improvements 🏎",
      "hidden": false
    },
    {
      "type": "test",
      "section": "Tests 🧪",
      "hidden": false
    },
    {
      "type": "build",
      "section": "Build System 🏗",
      "hidden": false
    },
    {
      "type": "ci",
      "section": "CI 🛠",
      "hidden": false
    }
  ],
   bumpFiles: [
    {
      filename: "package.json",
      type: "json"
    },
    {
      filename: "pyproject.toml",
      updater: tracker
    },
    {
      filename: "src/pyquery_core/__init__.py",
      updater: tracker
    }
  ]
}