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
    label: 'institute brochure',
    inputType: 'file',
    name: 'brochure',
    isArray: true,
    validations: [],
    value: [],
  },
  {
    type: 'files',
    label: 'certifications',
    inputType: 'file',
    name: 'Certificates',
    isArray: true,
    validations: [],
    value: [],
  },
  {
    type: 'files',
    label: 'institute/course gallery',
    inputType: 'file',
    name: 'gallery',
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
  {
    label: 'Institute',
    header: 'Add some details of your training institute',
    data: DATA_STEP_1,
  },
  { label: 'Course', header: 'Add course details', data: DATA_STEP_2 },
];

export { STEP_ITEMS };
