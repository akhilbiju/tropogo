import { Validators } from '@angular/forms';

const DATA_STEP_1 = [
  {
    type: 'input',
    label: 'Firstname',
    inputType: 'text',
    name: 'Firstname',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Firstname needed',
      },
    ],
  },
];

const DATA_STEP_2 = [
  {
    type: 'input',
    label: 'LastName',
    inputType: 'text',
    name: 'LastName',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'LastName needed',
      },
    ],
  },
];

const STEP_ITEMS = [
  { label: 'Institute', data: DATA_STEP_1 },
  { label: 'Course', data: DATA_STEP_2 },
];

export { STEP_ITEMS };
