const sidebar = [{
  title: 'Difficulty',
  children: [{
    type: 'difficulty',
    mode: 'normal',
    label: 'Normal'
  },
  {
    type: 'difficulty',
    mode: 'hard',
    label: 'Hard'
  },
  {
    type: 'difficulty',
    mode: 'crazy',
    label: 'Crazy'
  }
  ]
}
];

const buttonList = [{
  label: 'RESTART',
  type: 'restart'
}];

export {
  sidebar,
  buttonList
};

export default {};

