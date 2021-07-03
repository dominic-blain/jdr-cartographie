import { GoogleAuth } from 'google-auth-library'
import { google } from 'googleapis'

export const CREDENTIALS = import.meta.env.VITE_GOOGLE_APPLICATION_CREDENTIALS as string
/**
* Instead of specifying the type of client you'd like to use (JWT, OAuth2, etc)
* this library will automatically choose the right client based on the environment.
*/

export async function get() {
  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/spreadsheets.readonly',
    keyFilename: CREDENTIALS
  });
  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client })
  return new Promise(resolve => {
    sheets.spreadsheets.values.get({
      spreadsheetId: '1nXRMnbQf3KPqE7B_dNjUA-sbJpMN8DYigf6ZMCtNnxI',
      range: 'Terrain!B2:CV1000',
      majorDimension: 'COLUMNS'
    }, (err, res) => {
      if (err) resolve({ status: 500 })
      console.log('endpoint', res.data.values)
      resolve({ body: res.data.values })
    })
  }) 
}
