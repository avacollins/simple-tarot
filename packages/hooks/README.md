# @simpletarot/hooks

## Overview

This package provides the data fetching and application state management for the ui components to be shared in mobile and web applications.

[Apollo Client](https://www.apollographql.com/docs/react) is used to query the graph-api and maintain a local application state in cache.

## Contents

`src/account` provide interactions and data connections for account screens in mobile app.

`src/graph` includes shared modules required by apollo client.

## State

State is maintained by providing type policies for the shape of the application cache. Type policies connect directly to the graph-api and can also add additional local variables to the global application state as required.


*Note that usage of other state management packages such as redux is considered an anti-pattern when using apollo client.

## Hooks

Hooks map state to ui components by exposing an api for a single component and connecting it to application state.

Hooks are documented in the Storybook UI library alongside the component they are implemented in for specific inputs.

## Changelog

Generated by [semantic-release](https://github.com/semantic-release/semantic-release) and [conventional commits](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-conventionalcommits) analyzer to generate notes and semver increments via git commit messages.

[Changelog](./CHANGELOG.md)