// --- Your variables ---
const object = {
  apiKey: "{apiKey}", // Your API key for using Gemini API.
  model: "models/gemini-3-flash-preview",
  accessKey: "sample", // If you want to use an access key for requesting Web Apps, please use this.
  // logSpreadsheetId: "{spreadsheetId}", // If you use this, the logs are stored to Google Spreadsheet.
};

// --- Entry Points ---
const doGet = (e) => main(e);
const doPost = (e) => main(e);

/**
 * Main Dispatcher Function
 * Routes the request to either A2A handler or MCP handler based on the payload or path.
 *
 * @param {EventObject} e - The event object from doGet/doPost
 * @return {ContentService.TextOutput} The JSON response
 */
function main(e) {
  const context = createServerContext_(); // Load sample tools.
  const m = MCPA2Aserver;
  m.a2a = true;
  m.apiKey = object.apiKey;
  m.model = object.model;
  if (object.accessKey) m.accessKey = object.accessKey;
  if (object.logSpreadsheetId) m.logSpreadsheetId = object.logSpreadsheetId;
  const res = m.main(e, context);
  return res;
}

/**
 * Please get the agent card from the following function.
 */
function getAgentCard() {
  const obj = createServerContext_();
  const agentCard = obj.A2AObj.agentCard();
  const disp = JSON.stringify(agentCard, null, 2)
    .split("\n")
    .map((e) => `  ${e}`)
    .join("\n");
  console.log(disp);
}
