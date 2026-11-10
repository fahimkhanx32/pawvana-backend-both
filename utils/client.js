const { WEB_URLS } = require("../config/settings");

/**
 * Which front end made this request?
 * The web storefront sends an Origin (or Referer) header; the mobile app does not.
 * Returns the web origin (e.g. http://localhost:5173) if it is one of WEB_URL, otherwise null (= mobile app).
 */
const webBase = (req) => {
  const raw = req.get("origin") || req.get("referer") || "";
  try {
    const origin = new URL(raw).origin;
    return WEB_URLS.includes(origin) ? origin : null;
  } catch {
    return null;
  }
};

module.exports = { webBase };
