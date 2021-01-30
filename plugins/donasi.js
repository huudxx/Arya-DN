let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ Telkomsel [081238556231]
│ Bisa Juga Donasi Tanpa Uang. Klik link -> _https://linkerload.com/2DCMe_  , dan klik salah satu iklan.
│ Atau Link -> _https://adsafelink.com/gtc5skOZWN_ , dan klik salah satu iklan.
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
