const Migrations = artifacts.require("./FirstContract.sol");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
