const data = [
  {
    title: 'Yardi Invoice API',
    subtitle: '2022 Vic.ai',
    image: '/images/projects/project1.jpg',
    video: '/images/projects/Yardi API Interface 01.13.2023.mp4',
    date: '2023-01-16',
    desc: 'Built for an artificial intelligence invoicing software company Vic.ai.',
    details: [
      'Once invoices are created using clients AI software the data is made available from their API.\n',
      'Use custom API I created to query their API and get any invoices outstanding.',
      'Deserialize JSON response into objects parsing check for any errors and finally serializing the data into CSV in a format that is ingestible by Yardi Voyager.',
      'Upload newly created CSV file to SFTP server.',
      'Setup multiple tasks and schedules in Yardi that are looking for the ETL files on the SFTP server and if there are any new files downloading them and placing on Yardis file server then being imported into Yardi.',
      'Using SQL stored procedures export any errors or success messages for each payable imported and using Yardis yExport (the ',
      'only file creation option in Yardi) to export the data in CSV format.',
      'Downloading the newly created Success/Error messages and uploading to my SFTP server.',
      'Upsert Success/Error messages using clients API for them to show from the front-end.',
    ],
    url: 'https://www.vic.ai/',
  },
];

export default data;
