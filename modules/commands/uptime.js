module.exports.config = {
  name: "uptime",
  version: "3.0.0",
  hasPermssion: 0,
  credits: "KASHIF RAZA",
  description: "Show bot uptime (text only)",
  commandCategory: "System",
  usages: "",
  cooldowns: 5
};

// Format uptime
function formatUptime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${h}H ${m}M ${s}S`;
}

module.exports.run = async function ({ api, event }) {
  try {
    const uptime = process.uptime();
    const time = formatUptime(uptime);

    const msg = `
╔════════════════╗
        ⏱ BOT UPTIME
╚════════════════╝

⏳ ${time}

━━━━━━━━━━━━━━━
`;

    return api.sendMessage(msg, event.threadID, event.messageID);

  } catch (err) {
    console.error("Uptime command error:", err);
    return api.sendMessage("⚠️ Error while checking uptime.", event.threadID, event.messageID);
  }
};