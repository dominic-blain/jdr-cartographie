import { google } from 'googleapis'

export async function get() {
  const APIKey = import.meta.env.VITE_GOOGLE_API_KEY as string
  const sheets = google.sheets({ version: 'v4', auth: APIKey })
  return new Promise(resolve => {
    sheets.spreadsheets.values.get({
      spreadsheetId: '1nXRMnbQf3KPqE7B_dNjUA-sbJpMN8DYigf6ZMCtNnxI',
      range: 'Terrain!B2:CV1000',
      majorDimension: 'COLUMNS'
    }, (err, res) => {
      if (err) resolve({ status: 500 })
      resolve({ body: res?.data.values })
    })
  }).catch(error => {
    console.log(error)
  })
}
