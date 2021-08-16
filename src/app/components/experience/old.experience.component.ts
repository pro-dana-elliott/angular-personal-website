import { Component, OnInit } from '@angular/core';
import {JobModel} from './job.model';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class OldExperienceComponent implements OnInit {
 jobs = [
   new JobModel('Princeton Technology Corporation',
   'Hudson NH',
   'July 2019 - Present',
   'Specializes in electronic contract manufacturing of electro-mechanical and mechanical products.',
   'Programmer',
   'Working with the VP of Manufacturing to implement and improve critical business reporting and processes.' +
     ' Accomplished by implementing both integrated and standalone applications, reports and databases.',
   ['Analyzed, Designed , and Implemented several new process improvement applications.' +
     ' WPF,C#, XAML, SQL Pervasive Database, ADO.NET, ERP, GSS, Excel Crystal Reports',
     'Analyzed, developed, and fixed critical business reports. Crystal Reports',
     'Designed and implemented a multiple source company part lookup application.' +
     ' Allows user to quickly find all relevant information for an assembly containing hundreds of components.' +
     ' Saves hours per assembly over the manual lookup method. WPF,C#, XAML, SQL Pervasive Database, ADO.NET, Excel. ERP, GSS',
     'Fixed their 980 Time reports so this work schedule could be implemented companywide for the employees. ' +
     'Crystal Reports, Pervasive Database, ERP, GSS']),

    new JobModel('Student of Web Applications',
   'Udemy.com & Linda.com',
   'October 2017 - July 2019',
   '',
   'self-study',
   'Learning web application technologies, expanding skill set and built Portfolio.',
   ['Technologies include but not limited to:', 'Angular 8', 'Angular 7', 'Bootstrap 4', 'HTML 5', 'CSS3', 'JavaScript', 'etc.']),

   new  JobModel('Vision Government Solutions',
   'Hudson MA',
   'September 2011 – June 2017',
   'Leading supplier of land parcel management software technology and services to local government organizations.',
   'Software Engineer',
   'Collaborated with a team of engineers analyzing and remediating critical software issues' +
   ' for the company’s computer assisted mass appraisal (CAMA) product.' +
   ' The product consisted of a three-tiered client-server design using C#, WPF, MVVM, SQL, EF, Microsoft SQL Server, VB6, Oracle. ',
   ['Analyzed and developed fixes for critical software issues.',
   'Collaborated with Project Managers, Business Analysts, Product Owner, QA, and other Engineers.',
   'Prioritized and multi-tasked daily to keep projects on schedule. Included participated in daily kanban meeting.',
   'Co-wrote the Import/Export engine for the NEW CAMA application using C#, WPF, SQL, Microsoft SQL Server.' +
   ' Used to move data in and out of the application.',
   'Wrote the Wisconsin PAD utility a Department of Revenue (DOR) import/export application for real estate sales ' +
   'using C#, WinForms, SQL, Microsoft SQL Server, XML. Allows Wisconsin customers to update and submit sales data to DOR.',
   'Oversaw a major release to New York City that included a new Hotel Income screen and related functionality using VB6, SQL, Oracle. ' +
   'Included weekly video meetings with client to demo progress and review outstanding issues.']),

    new JobModel('Putnam Investments',
   'Andover, MA',
   'June 2006 – September 2011',
   'Well, know investment management firm providing actively-managed mutual funds and investment services. ',
   'Software Engineer',
   'Collaborated with a small team of developers and VB administrators.' +
   ' Resolved issues with the company’s core financial and clerical batch processing application. ' +
   'The product consisted of a two-tiered design with a mainframe DB and desktop application using VB6, SQL.',
   ['Analyzed and developed fixes for critical software issues.',
   'Co-wrote the company’s core financial and clerical batch processing application using VB6, SQL.',
   'Created and ran an automated retrieval of DST AWD data from Desktop for conversion testing and maintenance ' +
   'with 100% passing using VB6, SQL.',
   'Composed text report to excel conversion application allowing testers and management to work with financial data using VB6, SQL.',
   'Authored MFPII a financial publishing Quality Control application using VB6, SQL.',
   'Attended weekly department status meetings to review project prioritization.']),
    new JobModel('Engility (formerly Dynamics Research Corporation)',
      'Andover, MA',
      '1998-2005',
      'Engineering services company serving the U.S. Department of Defense.',
      'Software Engineer',
      'Worked with a small team with some QA staff resolving issues with the U.S. Navy’s document archive and ' +
      'retrieval application using VB6, SQL, Access. Also worked on various logistical projects and reports using Fortran and Simul8.',
      ['Department handled contracts for the U.S. Navy requiring a security clearance.',
      'Resolved issues with the document archive and retrieval application allowing users to query and open documents and images of ' +
      ' any size using VB6, SQL, Access, LeadTools.',
      'Integrated third-party imaging tool LeadTools into application allowing images to be viewed.',
      'Sustained document indexing application featuring auto scanning and indexing of documents using VB6, Access.',
      'Maintained various navy repair cycle reports using Fortran.',
      'Wrote a prototype logistics repair simulation for Navy Resources using Simul8.'])];

  constructor() { }

  ngOnInit() {
  }


}
