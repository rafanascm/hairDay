import { hoursLoad } from '@/modules/form/hours-load.js';

const selectedDate = document.getElementById('date');

export function schedulesDay() {
  const date = selectedDate.value;
  hoursLoad({ date });
}
