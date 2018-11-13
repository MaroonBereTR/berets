const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**BİLGİ**")
        .setImage("https://cdn.discordapp.com/avatars/242272591828615169/0b250d041aafca5716bd9c5da3afba1b.png?size=2048")
        .setThumbnail("http://www.beycan.net/eklenen/bayrak/turk_bayragi_buyuk_3.jpg")
        .setColor(0x00AE86)
        .addField("Discord Bot Davet Linki", "https://www.kisa.link/LmzU", true)
        .addField("Kurucunun Discord Davet Linki", "https://discord.gg/Azx3PCU", true)
        .addField("Kurucusu", "MaroonBereTR", true)
        .addField("Kendi Discord Adresinin Toplumu", `
        *Çok İyi Bir Oyuncu Topluluğu
   *Bazı Oyunlarda Serverlerimiz Var
   `, true)
   .addField("Botun Komutu", `,yardım Komutu İle Tüm Komutları Öğrenebilirsiniz.`, true)


   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot Kendi ve Kurucusunun hakkında bilgi verir',
  usage: 'bilgi'
};
