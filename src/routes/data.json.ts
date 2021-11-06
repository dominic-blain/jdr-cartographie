import { google } from 'googleapis';

export async function get() {
	const APIKey = import.meta.env.VITE_GOOGLE_API_KEY as string;
	const sheets = google.sheets({ version: 'v4', auth: APIKey });
	const tiles = await new Promise((resolve) => {
		sheets.spreadsheets.values.get(
			{
				spreadsheetId: '1nXRMnbQf3KPqE7B_dNjUA-sbJpMN8DYigf6ZMCtNnxI',
				range: 'Terrain!B2:CV1000',
				majorDimension: 'COLUMNS'
			},
			(error, response) => {
				if (error) {
					console.log(error);
					resolve(null);
				}
				resolve(response?.data.values);
			}
		);
	}).catch((error) => {
		console.log(error);
	});
	const buildings = await new Promise((resolve) => {
		sheets.spreadsheets.values.get(
			{
				spreadsheetId: '1nXRMnbQf3KPqE7B_dNjUA-sbJpMN8DYigf6ZMCtNnxI',
				range: 'Bâtiments!A2:E1000',
				majorDimension: 'ROWS'
			},
			(error, response) => {
				if (error) resolve(null);
				const buildings = response.data.values
					.filter((b) => b[0] && b[1])
					.map((b) => {
						// Return valid building
						return {
							name: b[1],
							type: b[0],
							y: parseInt(b[2]),
							x: parseInt(b[3]),
							npcs: b[4]?.split(',') || []
						};
					});
				resolve(buildings);
			}
		);
	}).catch((error) => {
		console.log(error);
	});
	if (buildings && tiles) {
		return {
			body: {
				tiles,
				buildings
			}
		};
	}
}
