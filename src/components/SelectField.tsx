import { ComboBox } from "./ui/ComboBox";

function SelectField() {
  const values = [
    {
      value: "Mathematics",
      label: "Math",
    },
    {
      value: "Biology",
      label: "Bio",
    },
    {
      value: "Chemistry",
      label: "Chemistry",
    },
    {
      value: "Physics",
      label: "Physics",
    },
    {
      value: "Computer science",
      label: "CS",
    },
    {
      value: "Engineering",
      label: "Engineering",
    },
  ];

  return <ComboBox values={values} fallback="Select Field" notFoundText="Field not found." />;
}

export default SelectField;
