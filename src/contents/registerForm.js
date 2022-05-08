const inputs = [
  {
    id: 1,
    name: 'firstname',
    type: 'text',
    iconName: 'fa-solid fa-user',
    placeholder: 'First Name',
    errorMessage:
            "First Name should be 3-16 characters and shouldn't include any special character!",
    pattern: '^[A-Za-z0-9]{3,16}$',
    required: true,
  },
  {
    id: 2,
    name: 'lastname',
    type: 'text',
    iconName: 'fa-solid fa-user',
    placeholder: 'Last Name',
    errorMessage:
        "Last Name should be 3-16 characters and shouldn't include any special character!",
    pattern: '^[A-Za-z0-9]{3,16}$',
    required: true,
  },
  {
    id: 3,
    name: 'email',
    type: 'email',
    iconName: 'fa-solid fa-at',
    placeholder: 'Email Address',
    errorMessage: 'It should be a valid email address!',
    required: true,
  },
  {
    id: 4,
    name: 'password',
    type: 'password',
    iconName: 'fa-solid fa-key',
    placeholder: 'Password',
    errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
    pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$',
    required: true,
  },
];

const icons = [
  {
    id: 1,
    alt: 'Google Logo',
    source: 'https://img.icons8.com/color/48/000000/google-logo.png',
    url: 'https://google.com',
  },
  {
    id: 2,
    alt: 'Google Drive',
    source: 'https://img.icons8.com/color/48/000000/google-drive--v1.png',
    url: 'https://www.google.com/drive/',
  },
  {
    id: 3,
    alt: 'Gmail',
    source: 'https://img.icons8.com/color/48/000000/gmail-new.png',
    url: 'https://www.google.com/gmail/',
  },
];

export { inputs, icons };
