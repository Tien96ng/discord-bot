const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hernon')
		.setDescription('viper lineups'),
	async execute(interaction) {
		await interaction.reply('Did someone mention Hernon? :man_with_chinese_cap: \nGive the boy a follow @ https://www.linkedin.com/in/kevinhernon253/');
	},
};
