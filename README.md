### @npm/semantic-release-config

Template semantic-release-config for mobile projects

### Usage

- `yarn add -D semantic-release @npm/semantic-release-config`
- add scripts into `package.json`:     
```json
{
  "name": "...",
  "version": "...",
  "scripts": {
    "postversion": "npx react-native-version -A",
    "release": "semantic-release"
  }
}

```
- create `.releaserc.json` inside you project with:
```json
{
  "extends": "@npm/semantic-release-config"
}
```
- add gitlab [variables](https://github.com/semantic-release/gitlab#configuration)
  - GL_URL or GITLAB_URL
  - GL_TOKEN or GITLAB_TOKEN