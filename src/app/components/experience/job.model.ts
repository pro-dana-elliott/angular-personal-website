export class JobModel {
  constructor(
    public company_name: string,
    public company_location: string,
    public employment_dates: string,
    public company_desc: string,
    public position_title: string,
    public position_summary: string,
    public position_highlights: string[]
  ) {}
}
