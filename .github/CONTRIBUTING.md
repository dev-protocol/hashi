# Contributing to Hashi
Be sure to read the [Code of Conduct](https://github.com/dev-protocol/.github/blob/main/CODE_OF_CONDUCT.md) first before proceeding.

## Workflow Digest
1. Create a fork of this repository and clone it locally.
2. Do `npm install` or `yarn install` to install all dependencies.
   - If you're working on the documentation, be sure to `cd` into the `/docs` directory.
   - Or, if you're working on the tests, be sure to `cd` into the `/tests` directory.
   - Additionally, there are details you need to know about installing dependencies [here](#installing-dependencies).
 
3. Open a new branch from main with the following format:

```text
[username]-[issue-number]_[issue-title]
```

4. Code code code.
5. Create a pull request.
6. Wait for the pull request to be reviewed.
   - If the pull request is approved, the pull request will be merged into the main branch.
7. 🎉 Congratulations! You've successfully contributed to Hashi.

## Details on Contributing
### Contributing Scopes
When contributing to Hashi, it is important to keep in mind what a contributor can code and cannot code.

- Authoring new components are almost always left up to the internal team working on the design system.
- Code deviating from the specifications is NOT allowed. Follow the specifications in the design docs or in the `/specs` directory.

### Installing Dependencies
The current dependency list will always be compatible with the latest version of Hashi. However, the root directory, the tests and dev versions of the docs require the current in-development version of Hashi (aka the version you're working on). Not to fret, the directories mentioned have always linked their dependencies to the in-development version.

### Code Style
If you're worried about code style, we've provided an `.editorconfig` file for you to consume.
