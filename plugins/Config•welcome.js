/* agrega lo siguiente en el package.json 
 "canvafy": "^7.2.0",
 agrega en el apartado de dependencias
 -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'
import canvafy from 'canvafy';

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let ppgroup = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || `${global.catalogo}`;
  let img = await (await fetch(`${catalogo}`)).buffer()
  let img2 = await (await fetch(`${catalogo}`)).buffer()

let chat = global.db.data.chats[m.chat];
  const getMentionedJid = () => {
    return m.messageStubParameters.map(param => `${param}@s.whatsapp.net`);
  };

  let who = m.messageStubParameters[0] + '@s.whatsapp.net';
  let user = global.db.data.users[who];

  let userName = user ? user.name : await conn.getName(who);

  if (chat.welcome && m.messageStubType == 27) {
          const imagewel = await new canvafy.WelcomeLeave()
            .setAvatar(img) 
            .setBackground(`image`, `${banner}`)
            .setTitle(`Bienvenid/a @${m.messageStubParameters[0].split`@`[0]}`)
            .setDescription(`Al Grupo ${groupMetadata.subject}`)
            .setBorder("#000000")
            .setAvatarBorder("#F0F8FF")
            .setOverlayOpacity(0.5)
            .build();
    let wel = `┌─★ \`${botname}\`\n│「 𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │ 𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼/𝗮\n   │ ${groupMetadata.subject}\n   │ ${participants.length} *Miembros*\n   └───────────────┈ ⳹\n\n> ${global.dev}`
    await conn.sendMessage(m.chat, { image: { imagewel }, caption: wel,
contextInfo: {
mentionedJid: conn.parseMention(wel),
isForwarded: true,
forwardingScore: 999,
externalAdReply: {
title: `${global.dev} • ${groupMetadata.subject}`,
body: textbot,
thumbnailUrl: catalogo,
sourceUrl: enlace,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m })
  }

  if (chat.welcome && m.messageStubType == 32) {
          const imagebye = await new canvafy.WelcomeLeave()
            .setAvatar(img2) 
            .setBackground(`image`, `${banner}`)
            .setTitle(`Adiós @${m.messageStubParameters[0].split`@`[0]} `)
            .setDescription(`${groupMetadata.subject}`)
            .setBorder("#000000")
            .setAvatarBorder("#F0F8FF")
            .setOverlayOpacity(0.5)
            .build();
   let bye = `┌─★ \`${botname}\`\n│「 𝗔𝗗𝗜𝗢𝗦 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │ 𝗦𝗲 𝗳𝘂𝗲\n   │ 𝗡𝘂𝗻𝗰𝗮 𝘁𝗲 𝗾𝘂𝗶𝘀𝗶𝗺𝗼𝘀 𝗮𝗾𝘂𝗶\n   │ ${participants.length} *Miembros*\n   └───────────────┈ ⳹\n\n> ${global.dev}`
   await conn.sendMessage(m.chat, { image: { imagebye }, caption: bye,
contextInfo: {
mentionedJid: conn.parseMention(bye),
isForwarded: true,
forwardingScore: 999,
externalAdReply: {
title: `${global.dev} • ${groupMetadata.subject}`,
body: textbot,
thumbnailUrl: catalogo,
sourceUrl: enlace,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m })
  }

  if (chat.welcome && m.messageStubType == 28) {
          const imagekick = await new canvafy.WelcomeLeave()
            .setAvatar(img2) 
            .setBackground(`image`, `${banner}`)
            .setTitle(`Fuera Put@ @${m.messageStubParameters[0].split`@`[0]}`)
            .setDescription(`${groupMetadata.subject}`)
            .setBorder("#000000")
            .setAvatarBorder("#F0F8FF")
            .setOverlayOpacity(0.5)
            .build();
    let kick = `┌─★ \`${botname}\`\n│「 𝗔𝗗𝗜𝗢𝗦 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │ 𝗦𝗲 𝗳𝘂𝗲\n   │ 𝗡𝘂𝗻𝗰𝗮 𝘁𝗲 𝗾𝘂𝗶𝘀𝗶𝗺𝗼𝘀 𝗮𝗾𝘂𝗶\n   │ ${participants.length} *Miembros*\n   └───────────────┈ ⳹\n\n> ${global.dev}`
    await conn.sendMessage(m.chat, { image: { imagekick }, caption: kick,
contextInfo: {
mentionedJid: conn.parseMention(kick),
isForwarded: true,
forwardingScore: 999,
externalAdReply: {
title: `${global.dev} • ${groupMetadata.subject}`,
body: textbot,
thumbnailUrl: catalogo,
sourceUrl: enlace,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m })
}}

/*import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true;

  let vn = 'https://qu.ax/cUYg.mp3';
  let vn2 = 'https://qu.ax/cTDa.mp3';
  let welc = welcome;
  let adi = adios;
  let chat = global.db.data.chats[m.chat];
  const getMentionedJid = () => {
    return m.messageStubParameters.map(param => `${param}@s.whatsapp.net`);
  };

  let who = m.messageStubParameters[0] + '@s.whatsapp.net';
  let user = global.db.data.users[who];

  let userName = user ? user.name : await conn.getName(who);

  if (chat.welcome && m.messageStubType === 27) {
    this.sendMessage(m.chat, {
      audio: { url: vn },
      contextInfo: {
        mentionedJid: getMentionedJid(),
        "externalAdReply": {
          "thumbnail": welc,
          "title": "  ͟͞ Ｗ Ｅ Ｌ Ｃ Ｏ Ｍ Ｅ ͟͞  ",
          "body": `${userName}!`,
          "previewType": "PHOTO",
          "thumbnailUrl": null,
          "showAdAttribution": true,
          sourceUrl: [yt, md, channel].sort(() => 0.5 - Math.random())[0]
        }
      },
      ptt: true,
      mimetype: 'audio/mpeg',
      fileName: 'welcome.mp3'
    }, { quoted: fkontak });
  }

  if (chat.welcome && (m.messageStubType === 28 || m.messageStubType === 32)) {
    this.sendMessage(m.chat, {
      audio: { url: vn2 },
      contextInfo: {
        mentionedJid: getMentionedJid(),
        "externalAdReply": {
          "showAdAttribution": true,
          "containsAutoReply": true,
          "title": '  ͟͞ Ａ Ｄ Ｉ Ｏ́ Ｓ ͟͞  ',
          body: `${userName}, se despide.`,
          "previewType": "PHOTO",
          "thumbnailUrl": '',
          "thumbnail": adi,
          "sourceUrl": redes
        }
      }
    }, { quoted: fkontak });
  }
}*/
