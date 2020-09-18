import { Validators } from '@angular/forms';

const DATA_STEP_1 = [
  {
    type: 'logo',
    label: 'Institute logo',
    inputType: 'file',
    name: 'logo',
    isArray: false,
    validations: [],
    value: null,
  },
  {
    type: 'input',
    label: 'Name of institute',
    inputType: 'text',
    name: 'InstituteName',
    isArray: false,
    placeholder: 'Indian Institute of Drones',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Add Institute name',
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
    label: 'Course name',
    inputType: 'text',
    name: 'CourseName',
    placeholder: 'Add course name',
    isArray: false,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Add course name',
      },
    ],
    value: null,
  },
  {
    type: 'select',
    label: 'Aircraft type',
    inputType: 'text',
    name: 'AircraftType',
    isArray: false,
    options: [
      { label: 'Multi Rotar', value: 'multirotar' },
      { label: 'Fixed Wing', value: 'fixedwing' },
    ],
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Select Aircraft Type',
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
  {
    type: 'input',
    label: 'Course details',
    inputType: 'textarea',
    name: 'CourseDetails',
    placeholder: 'Add details',
    isArray: false,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Add course details',
      },
    ],
    value: null,
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
