const MysticBets = artifacts.require("MysticBets");

module.exports = function (deployer) {
  deployer.deploy(MysticBets, "MysticBets", "MBT", 18, 10000000000);
};