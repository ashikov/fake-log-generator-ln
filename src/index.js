import _ from 'lodash';

const getRandomDate = (start, end) => (new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())));

const getRandomIp = () => `${_.random(1, 255)}.${_.random(1, 255)}.${_.random(1, 255)}.${_.random(1, 255)}`;

const formatDate = (date) => {
  const year = date.getFullYear();

  let day = date.getDate().toString();
  if (day.length <= 1) {
    day = `0${day}`;
  }

  let month = date.getMonth() + 1;
  if (month < 10) {
      month = `0${month}`;
  }

  let hours = date.getHours().toString();
  if (hours.length <= 1) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes().toString();
  if (minutes.length <= 1) {
    minutes = `0${minutes}`;
  }

  let seconds = date.getSeconds().toString();
  if (seconds.length <= 1) {
    seconds = `0${seconds}`;
  }

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
};


const generateLog = (length = 10) => {

    const messages = [
        'ssh: successfully authenticated',
        'ssh: successfully logged out',
        'ssh: connection dropped by timeout',
        'ssh: invalid connection'
    ];

    const array = new Array(+length);
    const emptyLines = _.fill(array, undefined);

    const lines = emptyLines.map((item) => {
      const date = getRandomDate(new Date(2021, 0, 1), new Date());
      const ip = getRandomIp();
      const messageIndex = _.random(0, messages.length - 1);
      const message = messages[messageIndex];

      return { date, data:  `localhost ${message} from ${ip}`};
    });
    
    const sortedLines = _.sortBy(lines, ({ date }) => date);
    
    const result = sortedLines.map(({ date, data }) => {
       const formattedDate = formatDate(date);

       return `${formattedDate} ${data}`;
    });
    
    return result;
};

export default generateLog;
