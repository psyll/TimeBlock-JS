# TimeBlock JS

![TimeBlock JS](assets/img/header.png "TimeBlock JS")

<p align="center">
	<a href="https://github.com/psyll/TimeBlock-JS/blob/master/LICENSE">
		<img src="https://badgen.net/badge/license/mit" alt="Display">
	</a>
	<img src="https://img.shields.io/github/repo-size/psyll/TimeBlock-JS" alt="Repo Size">
	<img src="https://img.shields.io/github/languages/code-size/psyll/TimeBlock-JS" alt="Code Size">
	<img src="https://img.shields.io/github/last-commit/psyll/TimeBlock-JS" alt="Last commit">
	<img src="https://img.shields.io/github/issues-raw/psyll/TimeBlock-JS" alt="Open issues">

</p>

The `TimeBlock()` function generates time blocks based on a given interval and date by calculating the id, start and end datetimes of the time block, as well as the start and end dates of the previous and next time blocks.

## What is time block?

A time block is a specific period of time that is based on a specific starting point and length of time. It is a useful concept in many fields, such as time statistics, time planning, and time data analysis. Time blocks can be used to divide periods of time into custum units such as seconds, minutes, hours, days, weeks, month, years... etc. and any specifed time interval.

## Parameters

The `TimeBlock()` function has four parameters:

- **`interval`**: `[integer]` - The duration of the time interval in seconds. Default is `1` second
- **`ms`**: *optional `[boolean]` - A parameter indicating whether to include milliseconds in the formatted date strings. The default value is `true`.
- **`date`**: *optional - The date and time to use as the reference point. Default value `new Date()`.
- **`from`**: `[optional]` - Date and time when block counting started. The default value is `1970-01-01T00:00:00.000Z`.

## Output

The function calculates a block of time based on the given interval and reference date, and returns an object with properties representing block details :

- **`id`** `[int]` - The ID number of the current block based on the order starting from the first block, which is `1970-01-01 00:00:00.000`.
- **`idYear`** `[int]` -  The ID of the block in the current year, counted from the start of the year.
- **`start`** `[string]` - The start time of the current block.
- **`end`** `[string]` - The end time of the current block.
- **`prevStart`** `[string]` - The start time of the previous block
- **`prevEnd`** `[string]` - The end time of the previous block
- **`nextStart`** `[string]` - The start time of the next block
- **`nextEnd`** `[string]` - The end time of the next block

All datet and time values are returned in the `YYYY-MM-DD HH:MM:SS.mmm`.

## Where can I use it?

The `TimeBlock` function can be used in a variety of applications where time intervals are relevant. For example, it could be used to generate a calendar or schedule view, to calculate time-based statistics, or to segment data into time-based intervals for analysis. The function could also be modified or extended to support different types of intervals or formatting options.

- `Creating financial charts`: The TimeBlock() function can be used to generate time blocks for financial data, such as stock prices or currency exchange rates. The time blocks can be used to create charts that show the price changes over time.

- `Generating identification keys`: The TimeBlock() function can be used to generate unique identification keys based on the current time and a fixed interval. For example, a system that needs to generate unique IDs for user sessions can use the TimeBlock() function to create keys based on 15-minute intervals.

- `Scheduling tasks`: The TimeBlock() function can be used to schedule tasks at fixed intervals. For example, a system that needs to perform a task every hour can use the TimeBlock() function to generate time blocks for each hour.

- `Tracking website traffic`: The TimeBlock() function can be used to track website traffic over fixed intervals. For example, a website owner can use the TimeBlock() function to generate time blocks for each hour or each day and track the number of visitors during each block.

- `Generating reports`: The TimeBlock() function can be used to generate reports based on time intervals. For example, a system that needs to generate a report every week can use the TimeBlock() function to generate time blocks for each week and generate a report based on the data collected during each block.

## Usage examples

### No parameters - Get the current time block for current date and time.

```js
// No parameters
const block = TimeBlock();
console.log(block);
```
or
```js
// Use the same parameters as the default
const block = TimeBlock(1, true, new Date(), '1970-01-01T00:00:00.000Z');
console.log(block);
```

Output:
```js
{
    id: 1676816521,
    idYear: 1676816521,
    start: "2023-02-19 15:22:01.000",
    end: "2023-02-19 15:22:01.999",
    prevStart: "2023-02-19 15:22:00.000",
    prevEnd: "2023-02-19 15:22:00.999",
    nextStart: "2023-02-19 15:22:02.000",
    nextEnd: "2023-02-19 15:22:02.999"
}
```

### Generate a time block of 1 hour interval for current date time


```js
console.log(TimeBlock(3600));
```

Output:
```js
{
    id: 5461383,
    idYear: 1377,
    start: '2023-02-19 10:00:00.000',
    end: '2023-02-19 10:59:59.999',
    prevStart: '2023-02-19 09:00:00.000',
    prevEnd: '2023-02-19 09:59:59.999',
    nextStart: '2023-02-19 11:00:00.000',
    nextEnd: '2023-02-19 11:59:59.999'
}
```

### Get 1 minute block of given date

```js
const date = new Date('2022-03-21T12:30:00.000Z');
const block = TimeBlock(60, true, date);
console.log(block);
```
Output:
```js
{
    id: 48480000,
    idYear: 48480000,
    start: '2022-03-21 12:30:00.000',
    end: '2022-03-21 12:30:59.999',
    prevStart: '2022-03-21 12:29:00.000',
    prevEnd: '2022-03-21 12:29:59.999',
    nextStart: '2022-03-21 12:31:00.000',
    nextEnd: '2022-03-21 12:31:59.999'
}
```


### Get the time block for a specific date and time with a different starting date.

```js
const block = TimeBlock(30, true, new Date('2023-02-19T10:45:30.000Z'), '2023-02-19T08:00:00.000Z');
console.log(block);
```
Output
```js
{
  "id": 38,
  "idYear": 4,
  "start": "2023-02-19 10:30:00.000",
  "end": "2023-02-19 10:59:59.999",
  "prevStart": "2023-02-19 10:00:00.000",
  "prevEnd": "2023-02-19 10:29:59.999",
  "nextStart": "2023-02-19 11:00:00.000",
  "nextEnd": "2023-02-19 11:29:59.999"
}
```

### Setting the `ms` parameter to `false` to remove milliseconds from the output.

```js
const block = TimeBlock(1, true);
console.log(block);
```
Output:
```js
{
    id: 1645342230,
    idYear: 1645342230,
    start: '2023-02-19 15:30:30',
    end: '2023-02-19 15:30:30',
    prevStart: '2023-02-19 15:30:29',
    prevEnd: '2023-02-19 15:30:29',
    nextStart: '2023-02-19 15:30:31',
    nextEnd: '2023-02-19 15:30:31'
}
```

### TimeBlock with custom interval and time range

You can use the `TimeBlock` function to generate time blocks with a custom interval and time range. For example, to generate time blocks with a 5-second interval between 2022-01-01T00:00:00.000Z and 2022-01-02T00:00:00.000Z

```js
const interval = 5; // in seconds
const fromDate = '2022-01-01T00:00:00.000Z';
const toDate = '2022-01-02T00:00:00.000Z';

const timeBlocks = [];
let currentDate = new Date(fromDate);
while (currentDate < new Date(toDate)) {
  const block = TimeBlock(interval, true, currentDate);
  timeBlocks.push(block);
  currentDate = new Date(block.nextStart);
}
console.log(timeBlocks);
```

Output:
```js
[
  {
    id: 18000,
    idYear: 518400,
    start: '2022-01-01 00:00:00.000',
    end: '2022-01-01 00:00:04.999',
    prevStart: '2021-12-31 23:59:55.000',
    prevEnd: '2021-12-31 23:59:59.999',
    nextStart: '2022-01-01 00:00:05.000',
    nextEnd: '2022-01-01 00:00:09.999'
  },
  {
    id: 18001,
    idYear: 518401,
    start: '2022-01-01 00:00:05.000',
    end: '2022-01-01 00:00:09.999',
    prevStart: '2022-01-01 00:00:00.000',
    prevEnd: '2022-01-01 00:00:04.999',
    nextStart: '2022-01-01 00:00:10.000',
    nextEnd: '2022-01-01 00:00:14.999'
  },
  ...
  {
    id: 86399,
    idYear: 1036799,
    start: '2022-01-01 23:59:55.000',
    end: '2022-01-01 23:59:59.999',
    prevStart: '2022-01-01 23:59:50.000',
    prevEnd: '2022-01-01 23:59:54.999',
    nextStart: '2022-01-02 00:00:00.000',
    nextEnd: '2022-01-02 00:00:04.999'
  }
]
```

### Generate an array of time blocks for the current day in 15-minute interval

This code generates an array of time blocks for the current day, with each block representing a 15-minute interval. The for loop iterates through each hour and quarter hour of the day and creates a new Date object for each interval. It then calls the TimeBlock function with the appropriate arguments to generate a time block object for that interval, and adds it to the blocks array.

```js
const now = new Date();
const blocks = [];
for (let i = 0; i < 24; i++) {
  for (let j = 0; j < 60; j += 15) {
    const date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), i, j);
    const block = TimeBlock(900, false, date);
    blocks.push(block);
  }
}
console.log(blocks);
```

Output:
```js
[
  {
    id: 300,
    idYear: 222267,
    start: '2023-02-19 00:00:00',
    end: '2023-02-19 00:14:59',
    prevStart: '2023-02-18 23:45:00',
    prevEnd: '2023-02-18 23:59:59',
    nextStart: '2023-02-19 00:15:00',
    nextEnd: '2023-02-19 00:29:59'
  },
  {
    id: 301,
    idYear: 222267,
    start: '2023-02-19 00:15:00',
    end: '2023-02-19 00:29:59',
    prevStart: '2023-02-19 00:00:00',
    prevEnd: '2023-02-19 00:14:59',
    nextStart: '2023-02-19 00:30:00',
    nextEnd: '2023-02-19 00:44:59'
  },
  // more time block objects...
]
```

### Track of website visit statistics with Node.js

In this example, the server keeps track of website visit statistics using an object called visitStats. Whenever a request is made to the server, the `TimeBlock()` function is called with an interval of 60 seconds, which means that visit statistics will be updated in 60-second intervals. The timeBlockId is calculated based on the current time block, and the visitStats object is updated accordingly.

```js
const http = require('http');

// An object to keep track of website visit statistics
const visitStats = {};

// Create a server that responds to all requests with "Hello World!"
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');

  // Update the visit statistics for the current time block
  const timeBlock = TimeBlock(60); // Time block duration is 60 seconds
  const timeBlockId = timeBlock.id;
  if (!visitStats[timeBlockId]) {
    visitStats[timeBlockId] = 0;
  }
  visitStats[timeBlockId]++;
});

// Start the server and log the port number
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

Note that this is just a simple example, and in practice, website visit statistics are usually tracked using more sophisticated tools