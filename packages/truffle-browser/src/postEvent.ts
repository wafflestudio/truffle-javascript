const baseUrl = 'https://truffle-api.wafflestudio.com';

export const postEvent = (apiKey: string, body: unknown) =>
  fetch(`${baseUrl}/events`, {
    method: 'POST',
    headers: { 'x-api-key': apiKey, 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
