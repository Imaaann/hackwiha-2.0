import { ComboBox } from "./ui/ComboBox";

const resourceTypes = [
  {
    value: "Official",
    label: "Official",
  },
  {
    value: "Article",
    label: "Article",
  },
  {
    value: "Feed",
    label: "Feed",
  },
  {
    value: "Video",
    label: "Video",
  },
];

function ResourceTypeSelect() {
  return (
    <ComboBox values={resourceTypes} fallback="Select Type" notFoundText="No valid type found" />
  );
}

export default ResourceTypeSelect;
