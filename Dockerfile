FROM registry.gitlab.com/gitlab-org/release-cli:latest

RUN apk update && apk add nodejs yarn git
RUN yarn global add conventional-changelog-cli @commitlint/cli

COPY Release-Tool/release-config /release-config

RUN cd /release-config && yarn

