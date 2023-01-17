// TODO Add a couple lines about each project
const data = [
  {
    title: 'Yardi Invoice API',
    subtitle: '2022 Vic.ai',
    image: '/images/projects/project1.jpg',
    date: '2023-01-16',
    desc:
      'Built for an artificial intelligence invoicing software company Vic.ai.',

    details: '1. Once invoices are created using clients AI software the data is made available from their API.'
      + '2. Use custom API I created to query their API and get any invoices outstanding.'
      + '3. Deserialize JSON response into objects parsing check for any errors and finally serializing the data into CSV in a format'
       + 'that is ingestible by Yardi Voyager.'
      + '4. Upload newly created CSV file to SFTP server.'
      + '5. Setup multiple tasks and schedules in Yardi that are looking for the ETL files on the SFTP server and if there are any new files downloading them and placing on Yardis file server then being imported into Yardi.'
      + '6. Using SQL stored procedures export any errors or success messages for each payable imported and using Yardis yExport (the '
      + 'only file creation option in Yardi) to export the data in CSV format.'
      + '7. Downloading the newly created Success/Error messages and uploading to my SFTP server.'
      + '8. Upsert Success/Error messages using clients API for them to show from the front-end.',
    url: 'https://www.vic.ai/',
  },
  // {
  //   title: 'Harvest',
  //   subtitle: 'Won 3rd. place in 2015 Techcrunch Disrupt SF Hackathon',
  //   link: 'https://devpost.com/software/harvest',
  //   image: '/images/projects/harvest.jpg',
  //   date: '2015-09-20',
  //   desc:
  //     'Won ~ $7000 in prizes for an advanced, low cost monitoring solution '
  //     + 'for crops. Harvest was designed to catch irrigation leaks, overwatering, '
  //     + 'and nutrient deficiencies at an affordable price for the developing world.',
  // },
  // {
  //   title: 'Space Potato',
  //   subtitle: 'A kickstarter funded potato powered weather balloon.',
  //   link: 'http://www.spacepotato.org',
  //   image: '/images/projects/spacepotato.jpg',
  //   date: '2015-06-28',
  //   desc:
  //     'Launched a potato battery powered weather balloon with two cameras '
  //     + 'and gps transponder. Resulting photos were published in a coffee table book. '
  //     + 'You can email me for a copy.',
  // },
  // {
  //   title: 'Cat Detector',
  //   subtitle: 'A convolutional neural network to classify cats! (and dogs)',
  //   image: '/images/projects/catdetector.jpg',
  //   date: '2015-05-15',
  //   desc:
  //     'Trained a convolutional neural network to classify between ~ 80 cats breeds. '
  //     + 'Over 60,000 cats were classified before server bills made the project too expensive '
  //     + 'to continue hosting.',
  // },
];

export default data;
