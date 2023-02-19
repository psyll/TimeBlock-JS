/**
 * @author: jarek@psyll.com (Jarosław Szulc)
 * @license: MIT
 * @description:
 * The TimeBlock() function generates time blocks based on a given interval
 * and date by calculating the start and end datetimes of the time block,
 * as well as the start and end dates of the previous and next time blocks.
 */

/**
 *
 * @param {number} interval The duration of the time interval in seconds. Default is `1` second
 * @param {bool} ms A parameter indicating whether to include milliseconds in the formatted date strings. The default value is `true`.
 * @param {string} date The date and time to use as the reference point. Default value `new Date()`.
 * @param {string} from Date and time when block counting started. The default value is `1970-01-01T00:00:00.000Z`.
 * @returns
 */
function TimeBlock(interval = 1, ms = true, date = new Date(), from = '1970-01-01T00:00:00.000Z') {
	if (typeof interval !== 'number') {
		throw new Error('TimeBlock interval must be a number');
	}
	if (typeof ms !== 'boolean') {
		throw new Error('TimeBlock ms must be a boolean value');
	}
	const startDate = new Date(from);
	const diffInMs = date - startDate;
	const intervalInMs = interval * 1000;
	const intervalCount = Math.floor(diffInMs / intervalInMs);
	const start = new Date(startDate.getTime() + intervalCount * intervalInMs);
	const end = new Date(start.getTime() + intervalInMs - 1);
	const prevStart = new Date(start.getTime() - intervalInMs);
	const prevEnd = new Date(end.getTime() - intervalInMs);
	const nextStart = new Date(start.getTime() + intervalInMs);
	const nextEnd = new Date(end.getTime() + intervalInMs);
	const pad = (num) => String(num).padStart(2, '0');
	const formatDate = (date) => {
		const year = date.getFullYear();
		const month = pad(date.getMonth() + 1);
		const day = pad(date.getDate());
		const hours = pad(date.getHours());
		const minutes = pad(date.getMinutes());
		const seconds = pad(date.getSeconds());
		const milliseconds = ms ? `.${String(date.getMilliseconds()).padStart(3, '0')}` : '';
		return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}${milliseconds}`;
	};
	const id = Math.floor(start.getTime() / (intervalInMs));
	const idYear = Math.floor(diffInMs / intervalInMs);
	return {
		id: id,
		idYear: idYear,
		start: formatDate(start),
		end: formatDate(end),
		prevStart: formatDate(prevStart),
		prevEnd: formatDate(prevEnd),
		nextStart: formatDate(nextStart),
		nextEnd: formatDate(nextEnd),
	};
}