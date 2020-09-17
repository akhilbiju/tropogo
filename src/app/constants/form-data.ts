import { Validators } from '@angular/forms';

const DATA_STEP_1 = [
  {
    type: 'input',
    label: 'Firstname',
    inputType: 'text',
    name: 'Firstname',
    isArray: false,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Firstname needed',
      },
    ],
    value: null,
  },
  {
    type: 'files',
    label: 'certificate',
    inputType: 'file',
    name: 'Certificates',
    isArray: true,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'certificate needed',
      },
    ],
    value: [],
  },
];

const DATA_STEP_2 = [
  {
    type: 'input',
    label: 'LastName',
    inputType: 'text',
    name: 'LastName',
    isArray: false,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'LastName needed',
      },
    ],
    value: null,
  },
  {
    type: 'batch',
    label: 'Batch',
    inputType: 'batch',
    name: 'batch',
    isArray: true,
    validations: [],
    value: [],
  },
];

const STEP_ITEMS = [
  { label: 'Institute', data: DATA_STEP_1 },
  { label: 'Course', data: DATA_STEP_2 },
];

export { STEP_ITEMS };
