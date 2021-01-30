let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ Telkomsel [081238556231]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
