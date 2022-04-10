const MysticBets = artifacts.require("Mizuchi");

module.exports = function (deployer) {
  // deployer.deploy(MysticBets, "MysticBets", "MBT", 18, 10000000000);
  deployer.deploy(MysticBets);
};