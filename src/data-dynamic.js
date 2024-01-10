import { TASK_LIST } from './tasks'

const generateRandomGanttData = (count) => {
  const hourIncrements = [2, 4, 6, 8];
  const generatedData = [];
  let hourIndex = 0;
  let currentDate = new Date('2023-04-01T00:00:00');
  for (let i = 0; i < count; i++) {
    hourIndex = (hourIndex + 1) % hourIncrements.length;
    const hour = hourIncrements[hourIndex];
    currentDate = new Date(currentDate.getTime() + hour * 60 * 60 * 1000);

    const newRow = {
      id: i + 1,
      text: TASK_LIST[Math.floor(Math.random() * TASK_LIST.length)],
      taskNo: i,
      task: 'task description for ' + TASK_LIST[Math.floor(Math.random() * TASK_LIST.length)],
      effort:  Math.floor(Math.random() * 100),
      progress: Math.floor(Math.random() * 100) / 100,
      predecessor: 'task name',
      start_date: currentDate,
      duration: hour,
      parent: 0,
      open: 0,
    };
    generatedData.push(newRow);
  }

  return {
    "data": generatedData,
    "links": [
      {
        "id": 1,
        "source": 1,
        "target": 2,
        "type": "0"
      },
      {
        "id": 2,
        "source": 1,
        "target": 3,
        "type": "0"
      },
      {
        "id": 3,
        "source": 1,
        "target": 4,
        "type": "0"
      },
      {
        "id": 4,
        "source": 2,
        "target": 6,
        "type": "0"
      }
    ]
  };
};

export const SAMPLE_LARGE_NUMBER_OF_DATA_SET = generateRandomGanttData(10000);
