import CommunitySupportWorker from "./CommunitySupportWorker";
import ComplianceOfficer from "./ComplianceOfficer";
import ProductionTech from "./ProductionTech";
import SupportWorker from "./SupportWorker";
import WeHaveSpace from "./WeHaveSpace";

export default function joinUs() {
  return (
    <div className="flex flex-col gap-10">
      <WeHaveSpace />
      <ProductionTech />
      <SupportWorker />
      <ComplianceOfficer />
      <CommunitySupportWorker />
    </div>
  );
}
