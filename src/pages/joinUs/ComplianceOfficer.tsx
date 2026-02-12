import complianceOfficer from "@src/assets/images/complianceOfficer.png";
export default function ComplianceOfficer() {
  return (
    <section className="flex flex-col max-w-4xl md:flex-row items-center justify-center gap-10 md:gap-16 px-6 mt-10">
      <div className="max-w-xl text-center md:text-left">
        <h1 className=" text-end text-4xl sm:text-5xl font-bold">
          Compliance Officer
        </h1>

        <h2 className="text-2xl tracking-widest sm:text-3xl text-end  font-light mt-1">
          Key responsibilities
        </h2>
        <ul className="mt-4 space-y-2 list-disc  max-w-md text-justify list-inside  text-sm sm:text-base">
          <li>
            Update and Maintain Support Plans: Regularly review and update
            participants' support plans to reflect their current needs and
            goals, ensuring all documentation is accurate and up-to-date.
          </li>
          <li>
            Documentation and Assessments: Conduct and document assessments as
            needed, ensuring all participant records are compliant with NDIS and
            organizational standards..
          </li>
          <li>
            Monitor Funding Plans: Oversee participants' funding plans to ensure
            they have sufficient resources to afford our support, and provide
            recommendations if adjustments are needed.
          </li>
          <li>
            Assist Reporting Officers: Provide support to reporting officers by
            preparing reports, analyzing data, and identifying trends or areas
            for improvement.
          </li>
          <li>
            Identify Inconsistencies: Monitor participant support activities and
            report any inconsistencies or areas of concern to the reporting
            officer promptly.
          </li>
          <li>
            Compliance Monitoring: Stay informed about changes in NDIS
            guidelines and ensure Casa Community's practices align with the
            latest regulations.
          </li>
          <li>
            Collaboration: Work closely with other team members to ensure a
            holistic approach to participant support, fostering a collaborative
            and supportive work environment.
          </li>
        </ul>
      </div>
      <div className="shrink-0">
        <img src={complianceOfficer} alt="" className="w-48 md:w-56 lg:w-72" />
      </div>
    </section>
  );
}
