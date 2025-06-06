// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const workspaceRoot = path.resolve(__dirname, "../..");
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

config.watchFolders = [workspaceRoot];
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules")
];

config.resolver.extraNodeModules = {
  ui: path.resolve(workspaceRoot, "packages/ui")
};

config.watchFolders.push(path.resolve(workspaceRoot, "packages/ui"));

config.resolver.disableHierarchicalLookup = true;

module.exports = config;