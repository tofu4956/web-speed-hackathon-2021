/**
 * @param {string} url
 * @returns {Promise<ArrayBuffer>}
 */
async function fetchBinary(url) {
  const result = await(await fetch(url)).arrayBuffer();
  return result;
}

/**
 * @template T
 * @param {string} url
 * @returns {Promise<T>}
 */
async function fetchJSON(url) {
  const result = await fetch(url);
  if (result.ok) {
    return result.json();
  }
  return null;
}

/**
 * @template T
 * @param {string} url
 * @param {File} file
 * @returns {Promise<T>}
 */
async function sendFile(url, file) {
  const result = await (await fetch(url, {
    method: 'POST',
    body: file,
  }))
  return result;
}

/**
 * @template T
 * @param {string} url
 * @param {object} data
 * @returns {Promise<T>}
 */
async function sendJSON(url, data) {

  const result = await (await fetch(url,{
    method: 'POST',
    headers: {
      contentType: 'application/json',
    },
    body: JSON.stringify(data),
  })).json();
  return result;
}

export { fetchBinary, fetchJSON, sendFile, sendJSON };
