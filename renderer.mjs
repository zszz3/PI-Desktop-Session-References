function displayText(value, limit) {
  return Array.from(value.replace(/[\uE000-\uF8FF\uFFFC]/g, " ").replace(/\s+/g, " ").trim()).slice(0, limit).join("");
}

export function onLoad(pi) {
  pi.slots.register({
    slot: "composerTrigger",
    trigger: "@",
    async items({ query }) {
      const page = await pi.dispatch("session.search", { query, limit: 20 });
      return page.items.map((session) => ({
        label: `@${displayText(session.title || session.sessionId, 63)}`,
        detail: displayText(session.snippet || session.title, 256),
        send: `pi-desktop://session/${encodeURIComponent(session.sessionId)}`,
      }));
    },
  });
}
