//https://eth-goerli.g.alchemy.com/v2/K-V2upZZPV-4Nj7ZSfYMzAF3lvuWun2r

require('@nomiclabs/hardhat-waffle');

module.exports = {
	solidity: '0.8.0',
	networks: {
		goerli: {
			url: 'https://eth-goerli.g.alchemy.com/v2/K-V2upZZPV-4Nj7ZSfYMzAF3lvuWun2r',
			accounts: [
				'255189f230e05b90b8faea9ad80d3e8be2f85605af9d0bfdf1cfacc5db80dbf0',
			],
		},
	},
};
