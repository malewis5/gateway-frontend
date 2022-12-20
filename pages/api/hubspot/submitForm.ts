// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = '07069083-a8f2-4ab7-8bc6-17f3fe5caf7c';
  const ipAddress = req.headers['x-real-ip'] || req.socket.remoteAddress;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip,deflate,compress',
    },
  };

  const body = JSON.stringify({
    fields: [
      {
        name: 'firstname',
        value: req.body.values.firstName,
      },
      {
        name: 'lastname',
        value: req.body.values.lastName,
      },
      {
        name: 'email',
        value: req.body.values.email,
      },
      {
        name: 'phone',
        value: req.body.values.telephone,
      },
      {
        name: 'message',
        value: req.body.values.message,
      },
    ],
    context: {
      pageUri: req.body.location,
      hutk: req.body.hubspotUtkCookie,
      ipAddress: ipAddress,
    },
  });
  try {
    const hubspotResponse = await axios.post(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      body,
      config
    );
    res.status(200).json({ response: hubspotResponse.data });
  } catch (e) {
    res.status(500).send('Error submitting Hubspot form);
  }
}
