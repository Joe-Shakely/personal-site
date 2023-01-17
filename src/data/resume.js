const resume = [
  {
    resume: {
      skillmessage: '',
      education: [
        {
          school: 'California Polytechnic State University, San Luis Obispo',
          degree: 'Bachelor of Science, Business Administration',
          concentration: 'Accounting & Finance',
          graduated: 'December 2012',
        },
      ],
      work: [
        {
          company: 'Shakely Consulting, LLC',
          title: 'Owner',
          years: 'January 2022 - Present',
          bullets: [
            'Lead Developer in an implementation of Power BI for a Financial Technology startup in the credit union industry, created and maintained data visualizations, informed and engaged business partners on key metrics and performance measures.',
            'Consult and implement Yardi Systems’ Investment Management fund accounting software for asset management firms with complex investment hierarchies, cash-flows, and reporting needs.',
            'Setup the database structure and objects used to implement financial consolidations or roll-ups for investment management firms with multiple funds, both international and domestic, while adhering to strict GAAP principles.',
            'Create custom financial, forecast, and investor return reports using complex SQL queries, stored procedures, user-defined functions, and advanced Excel formulas and functions to create multi-worksheet, drillable, and esthetically pleasing graph, chart, and grid-based reports.',
          ],
        },
        {
          company: 'Lincoln Military Housing',
          title: 'Software Engineer',
          years: 'May 2020 - February 2022',
          bullets: [
            "Converted over 80 custom SQL reports written in SAP's Crystal Reports to Microsoft's SSRS and Yardi's Spreadsheet Reporting (YSR) technology, which uses Excel templates in conjunction with customizable SQL queries to create reports.",
            "Converted 35 custom SQL reports using Yardi's scripting engine into Yardi's Spreadsheet Reporting technology (YSR)",
            "Created a custom workflow for moving residential units into down status to more efficiently track occupancy percentages and how this is affects GPR, as well as wrote the custom report using SQL and Yardi's YSR sed by executives to track this data.",
            'Created entirely new leases and designed the process for implementing these leases in Yardi for the entire companies Military Housing portfolio.',
          ],
        },
        {
          company: 'Hott Solutions Corp.',
          title: 'Software Engineer',
          years: 'May 2018 - January 2020',
          bullets: [
            'Create custom financial reports for Residential and Commercial property owners and managers using Microsoft’s SQL Server Reporting Services and Yardi Systems’ spreadsheet reporting technology, cutting down report preparation times from weeks to one press of the submit button.',
            'Implement Yardi Systems’ Investment Management fund accounting software for asset management firms with complex investment hierarchies, cash-flows, and reporting needs, from start to finish of the software implementation lifecycle.',
            'Implement Yardi Systems’ Advanced Budgeting and Forecasting software solution for Commercial and Residential real estate firms creating multi-year forecasts using market lease assumptions, expense models, and in-place leases to forecast NOI as well as below-the line capital adjustments as per client requirements.',
            'Developed an API to migrate approximately 150,000 invoice images and documents from one database (Entrata) to another (Yardi) using SSMS Profiler to extract the necessary table schemas from Entrata and mapping the two data models to one another, then creating temporary tables and stored procedures using dynamic SQL to create insert statements as SQL scripts which fulfilled the necessary Yardi schema requirements to access the images and documents from Yardi’s UI.',
            'Developed API’s for Amazon.com (specifically for Amazon Lockers in multifamily apartment buildings) as well as San Francisco based multifamily data analytics company Rentlytics to automatically and periodically extract resident data using SQL stored procedures along with Yardi’s Service Manager module to export real-time tenant data to each respective client.',
          ],
        },
        {
          company: 'Yardi Systems Inc.',
          title: 'Technical Consultant',
          years: 'January 2013 - May 2018',
          bullets: [
            'Consulted large Commercial and Residential clients using Yardi’s Advanced Budgeting and Forecasting software as well as the Investment Management product for clients moving from Excel as well as other property management software’s like MRI and RealPage.',
            'Created custom SQL solutions utilizing stored procedures, user-defined functions, and dynamic SQL for Investment Management and Advanced Budgeting clients when the standard software did not fit their business needs.',
            'Served as Technical Consultant on JP Morgan Asset Management’s migration from MRI to Yardi Systems.',
            'Supported clients using Yardi’s Investment Management module such as the Canadian Pension Plan Investment Board, Citco Fund Services, and MetLife.',
          ],
        },
      ],
    },
  },
];

export default resume;
