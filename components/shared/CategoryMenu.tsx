import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
};

const CategoryMenu = ({ value, onChangeHandler }: DropdownProps) => {
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Social services">Social services</SelectItem>
          <SelectItem value="Arts and culture">Arts and culture</SelectItem>
          <SelectItem value="Advocacy and activism">
            Advocacy and activism
          </SelectItem>
          <SelectItem value="Health service">Health services</SelectItem>
          <SelectItem value="Education">Education</SelectItem>
          <SelectItem value="Environmental conservation">
            Environmental conservation
          </SelectItem>
          <SelectItem value="Animal welfare">Animal welfare</SelectItem>
          <SelectItem value="Disaster relief">Disaster relief</SelectItem>
          <SelectItem value="Community development">
            Community development
          </SelectItem>
          <SelectItem value="Human rights">Human rights</SelectItem>
          <SelectItem value="Elderly care">Elderly care</SelectItem>
          <SelectItem value="Youth development">Youth development</SelectItem>
          <SelectItem value="Hunger relief">Hunger relief</SelectItem>
          <SelectItem value="Homelessness support">
            Homelessness support
          </SelectItem>
          <SelectItem value="Refugee assistance">Refugee assistance</SelectItem>
          <SelectItem value="Legal aid">Legal aid</SelectItem>
          <SelectItem value="Sports and recreation">
            Sports and recreation
          </SelectItem>
          <SelectItem value="Technology and digital literacy">
            Technology and digital literacy
          </SelectItem>
          <SelectItem value="Civic engagement">Civic engagement</SelectItem>
          <SelectItem value="Historical preservation">
            Historical preservation
          </SelectItem>
          <SelectItem value="Mental health support">
            Mental health support
          </SelectItem>
          <SelectItem value="Global development">Global development</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CategoryMenu;
