# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## <small>0.0.29 (2022-06-08)</small>

* refactor: catch redis error ([346a45b](https://github.com/gmahechas/erp/commit/346a45b))
* refactor: change auth by authentication error ([bcf5a01](https://github.com/gmahechas/erp/commit/bcf5a01))
* refactor: change DB_CONNECTION by MONGO ([4c23672](https://github.com/gmahechas/erp/commit/4c23672))
* refactor: filebeat ([2ebe4f7](https://github.com/gmahechas/erp/commit/2ebe4f7))
* refactor: handle mongoose connection error ([ccde750](https://github.com/gmahechas/erp/commit/ccde750))
* refactor: hast genSalt ([1d15ebc](https://github.com/gmahechas/erp/commit/1d15ebc))
* refactor: lambdas ([aae94e0](https://github.com/gmahechas/erp/commit/aae94e0))
* refactor: ms/mf context ([f6f4ee3](https://github.com/gmahechas/erp/commit/f6f4ee3))
* refactor: python ([43026f1](https://github.com/gmahechas/erp/commit/43026f1))
* refactor: remove elastic search ([4e0b24e](https://github.com/gmahechas/erp/commit/4e0b24e))
* refactor: rename erp-common ([1376c8a](https://github.com/gmahechas/erp/commit/1376c8a))
* refactor: send token to ms and verify it ([82e5d37](https://github.com/gmahechas/erp/commit/82e5d37))
* refactor: std lambda ([284ecec](https://github.com/gmahechas/erp/commit/284ecec))
* refactor: timestamp in log ([fa579c2](https://github.com/gmahechas/erp/commit/fa579c2))
* refactor: use vault url from env ([ef1c2fe](https://github.com/gmahechas/erp/commit/ef1c2fe))
* refactor: vault ([2afe591](https://github.com/gmahechas/erp/commit/2afe591))
* feat: clear context ([1071822](https://github.com/gmahechas/erp/commit/1071822))
* feat: context for ms ([46f0cf0](https://github.com/gmahechas/erp/commit/46f0cf0))
* feat: cookie setting to vault ([813b067](https://github.com/gmahechas/erp/commit/813b067))
* feat: fix context ([965d56a](https://github.com/gmahechas/erp/commit/965d56a))
* feat: helmet installed and configured ([7e17f38](https://github.com/gmahechas/erp/commit/7e17f38))
* feat: install cors ([21e822c](https://github.com/gmahechas/erp/commit/21e822c))
* feat: logger in all ms ([a12c84e](https://github.com/gmahechas/erp/commit/a12c84e))
* feat: requestId in lambdas ([e0eb1fb](https://github.com/gmahechas/erp/commit/e0eb1fb))
* feat: requestId ms-0 ([97458aa](https://github.com/gmahechas/erp/commit/97458aa))
* feat: setup daily rotate ([7185788](https://github.com/gmahechas/erp/commit/7185788))
* feat: winston ([17027ff](https://github.com/gmahechas/erp/commit/17027ff))
* fix: auth middleware ([ed88ab3](https://github.com/gmahechas/erp/commit/ed88ab3))
* fix: catch error for vault ([20c0eb4](https://github.com/gmahechas/erp/commit/20c0eb4))
* fix: catch mongo errpr ([c84e46e](https://github.com/gmahechas/erp/commit/c84e46e))
* fix: context ([e83b66b](https://github.com/gmahechas/erp/commit/e83b66b))





## <small>0.0.28 (2022-03-08)</small>

* feat: auth key in vault ([8aa7290](https://github.com/gmahechas/erp/commit/8aa7290))
* feat: express session to ms-utils ([55d5f45](https://github.com/gmahechas/erp/commit/55d5f45))
* feat: fix token ([8d3b8e2](https://github.com/gmahechas/erp/commit/8d3b8e2))
* feat: redis session ([e3ebfe9](https://github.com/gmahechas/erp/commit/e3ebfe9))
* feat: vault configured ([ad076a6](https://github.com/gmahechas/erp/commit/ad076a6))
* feat: vault in python ([b2fec53](https://github.com/gmahechas/erp/commit/b2fec53))
* refactor: auth ([d8b7d52](https://github.com/gmahechas/erp/commit/d8b7d52))
* refactor: axios in vault ([35b99a4](https://github.com/gmahechas/erp/commit/35b99a4))
* refactor: config by ms-x ([d272d45](https://github.com/gmahechas/erp/commit/d272d45))
* refactor: databases secret moved to vault ([2389221](https://github.com/gmahechas/erp/commit/2389221))
* refactor: format some stuff ([6c386f4](https://github.com/gmahechas/erp/commit/6c386f4))
* refactor: read env file sync ([9c4fef0](https://github.com/gmahechas/erp/commit/9c4fef0))





## <small>0.0.27 (2021-12-10)</small>

**Note:** Version bump only for package @gmahechas/erp-common-ms-utils-js





## <small>0.0.26 (2021-12-07)</small>

* feat: erp--common-reactjs ([1ba220a](https://github.com/gmahechas/erp/commit/1ba220a))





## <small>0.0.25 (2021-11-30)</small>

* feat: global consumers ([7783af6](https://github.com/gmahechas/erp/commit/7783af6))
* feat: kafka ([5d18918](https://github.com/gmahechas/erp/commit/5d18918))
* feat: kafka ([577c237](https://github.com/gmahechas/erp/commit/577c237))
* feat: keys for jwt ([6d7b1dc](https://github.com/gmahechas/erp/commit/6d7b1dc))
* feat: ms-4 ([8c4e62b](https://github.com/gmahechas/erp/commit/8c4e62b))
* refactor: change config ([032b767](https://github.com/gmahechas/erp/commit/032b767))
* refactor: common package.json ([e10c7b7](https://github.com/gmahechas/erp/commit/e10c7b7))
* refactor: config interface ([486eba9](https://github.com/gmahechas/erp/commit/486eba9))
* refactor: only use redis 3 in api GW ([2414078](https://github.com/gmahechas/erp/commit/2414078))
* refactor: remove cq interface ([34840c1](https://github.com/gmahechas/erp/commit/34840c1))
* refactor: remove keys from projects ([5c5eea1](https://github.com/gmahechas/erp/commit/5c5eea1))
* refactor: remove query database endpoint ([cad473e](https://github.com/gmahechas/erp/commit/cad473e))





## <small>0.0.24 (2021-10-23)</small>

* feat: auth and handler error graphql ([e611459](https://github.com/gmahechas/erp/commit/e611459))
* feat: createUser ([77029b8](https://github.com/gmahechas/erp/commit/77029b8))
* feat: error handling from ms in api ([5c2c8fe](https://github.com/gmahechas/erp/commit/5c2c8fe))
* feat: express-session redis ([498ccb3](https://github.com/gmahechas/erp/commit/498ccb3))
* feat: general improvements ([d998c08](https://github.com/gmahechas/erp/commit/d998c08))
* feat: jwt implemented ([d5c72d9](https://github.com/gmahechas/erp/commit/d5c72d9))
* feat: ms-0-js ([659aa42](https://github.com/gmahechas/erp/commit/659aa42))
* refactor: APP_PORT as undedfined ([bbede29](https://github.com/gmahechas/erp/commit/bbede29))
* refactor: enn vars name ([5537da9](https://github.com/gmahechas/erp/commit/5537da9))
* refactor: mongo connections ([c2c9c94](https://github.com/gmahechas/erp/commit/c2c9c94))
* refactor: move axios to ms-utils ([75da72b](https://github.com/gmahechas/erp/commit/75da72b))
* refactor: rename registerModelFuncs ([626cacc](https://github.com/gmahechas/erp/commit/626cacc))





## <small>0.0.23 (2021-09-30)</small>

* refactor: config error message - src in paths ([493d514](https://github.com/gmahechas/erp/commit/493d514))
* refactor: mongoose connection ([be24b8b](https://github.com/gmahechas/erp/commit/be24b8b))
* feat: final environments ([ef3b677](https://github.com/gmahechas/erp/commit/ef3b677))
* feat: show database name when connected ([7b5e9e2](https://github.com/gmahechas/erp/commit/7b5e9e2))





## <small>0.0.22 (2021-09-27)</small>

* feat: environments in lambda ([69348e2](https://github.com/gmahechas/erp/commit/69348e2))
* feat: install @types/node in all ms packages ([3763e26](https://github.com/gmahechas/erp/commit/3763e26))
* feat: setup environments ([167a3c1](https://github.com/gmahechas/erp/commit/167a3c1))





## <small>0.0.21 (2021-09-15)</small>

* refactor: move database connection to ms logic ([6fca9b2](https://github.com/gmahechas/erp/commit/6fca9b2))
* refactor: move dot env to ms-utils ([be56d59](https://github.com/gmahechas/erp/commit/be56d59))
* refactor: remove @types/node from all packages ([2eb23fb](https://github.com/gmahechas/erp/commit/2eb23fb))
* refactor: remove iconnec databases file ([bfbffa5](https://github.com/gmahechas/erp/commit/bfbffa5))
* chore: rename iconnnect databases file ([3384ca0](https://github.com/gmahechas/erp/commit/3384ca0))





## <small>0.0.20 (2021-09-09)</small>

**Note:** Version bump only for package @gmahechas/erp-common-ms-utils-js





## <small>0.0.11 (2021-09-09)</small>

**Note:** Version bump only for package @gmahechas/erp-common-ms-utils-js





## <small>0.0.10 (2021-09-09)</small>

* refactor: mongo connection ([2c5e8c8](https://github.com/gmahechas/erp/commit/2c5e8c8))
* refactor: mongo connection ([2543d4b](https://github.com/gmahechas/erp/commit/2543d4b))





## <small>0.0.9 (2021-09-08)</small>

**Note:** Version bump only for package @gmahechas/erp-common-ms-utils-js





## <small>0.0.8 (2021-09-08)</small>

* fix: createConnection mongo ([e311b4f](https://github.com/gmahechas/erp/commit/e311b4f))
* refactor: back to mongoose connect ([7421e9b](https://github.com/gmahechas/erp/commit/7421e9b))
* refactor: change default error ([3665218](https://github.com/gmahechas/erp/commit/3665218))
* refactor: envs ans starupError ([1bf42ff](https://github.com/gmahechas/erp/commit/1bf42ff))





## <small>0.0.7 (2021-09-07)</small>

* feat: mongo connection ([18c703b](https://github.com/gmahechas/erp/commit/18c703b))
* refactor: mongo connection ([fdff1b4](https://github.com/gmahechas/erp/commit/fdff1b4))





## <small>0.0.6 (2021-09-06)</small>

* feat: dot env and ms utils ([e6acc59](https://github.com/gmahechas/erp/commit/e6acc59))
* feat: updates ([8e1817c](https://github.com/gmahechas/erp/commit/8e1817c))
