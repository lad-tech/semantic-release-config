module.exports = {
    "branches": [
        "master"
    ],
    "plugins": [
        [
            "@semantic-release/commit-analyzer",
            {
                "preset": "angular",
                "releaseRules": [
                    {
                        "type": "docs",
                        "release": false
                    },
                    {
                        "type": "style",
                        "release": false
                    },
                    {
                        "type": "ci",
                        "release": false
                    },
                    {
                        "type": "debug",
                        "release": false
                    },
                    {
                        "type": "test",
                        "release": false
                    },
                    {
                        "type": "build",
                        "release": false
                    },
                    {
                        "type": "refactor",
                        "release": false
                    },
                    {
                        "type": "perf",
                        "release": "patch"
                    },
                    {
                        "type": "fix",
                        "release": "patch"
                    },
                    {
                        "type": "chore",
                        "release": "patch"
                    },
                    {
                        "type": "revert",
                        "release": "patch"
                    }
                ],
                "parserOpts": {
                    "noteKeywords": [
                        "BREAK",
                        "BREAKING CHANGES",
                        "BREAKING CHANGE"
                    ]
                }
            }
        ],
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "CHANGELOG.md"
            }
        ],
        [
            "@semantic-release/npm",
            {
                "npmPublish": false
            }
        ],
        [
            "@semantic-release/git",
            {
                "assets": [
                    "package.json",
                    "packages/**/package.json",
                    "CHANGELOG.md",
                    ["ios/**/Info.plist", "!ios/Pods/**"],
                    ["ios/**/project.pbxproj", "!ios/Pods/**"],
                    "android/app/build.gradle"
                ],
                "message": "chore(release): ${nextRelease.version} - <%= new Date().toLocaleDateString('ru-RU', {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }) %> [skip ci]\n"
            }
        ],
        [
            "@semantic-release/gitlab",
            {
                "assets": [
                    {
                        "path": "CHANGELOG.md",
                        "label": "Changelog"
                    }
                ]
            }
        ]
    ]
}
