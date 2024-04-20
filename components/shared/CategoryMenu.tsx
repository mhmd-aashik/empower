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
          <SelectItem value="Health services">Health services</SelectItem>
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
          <SelectItem value="Community gardening">
            Community gardening
          </SelectItem>
          <SelectItem value="Public health initiatives">
            Public health initiatives
          </SelectItem>
          <SelectItem value="Community arts programs">
            Community arts programs
          </SelectItem>
          <SelectItem value="Humanitarian aid">Humanitarian aid</SelectItem>
          <SelectItem value="Music and performing arts">
            Music and performing arts
          </SelectItem>
          <SelectItem value="Advocacy for marginalized communities">
            Advocacy for marginalized communities
          </SelectItem>
          <SelectItem value="Literacy programs">Literacy programs</SelectItem>
          <SelectItem value="Wildlife conservation">
            Wildlife conservation
          </SelectItem>
          <SelectItem value="Emergency response">Emergency response</SelectItem>
          <SelectItem value="Neighborhood revitalization">
            Neighborhood revitalization
          </SelectItem>
          <SelectItem value="Childcare support">Childcare support</SelectItem>
          <SelectItem value="Community centers">Community centers</SelectItem>
          <SelectItem value="Gender equality initiatives">
            Gender equality initiatives
          </SelectItem>
          <SelectItem value="Arts education">Arts education</SelectItem>
          <SelectItem value="Public safety programs">
            Public safety programs
          </SelectItem>
          <SelectItem value="Social justice advocacy">
            Social justice advocacy
          </SelectItem>
          <SelectItem value="Healthcare access programs">
            Healthcare access programs
          </SelectItem>
          <SelectItem value="STEM education">STEM education</SelectItem>
          <SelectItem value="Community outreach">Community outreach</SelectItem>
          <SelectItem value="Urban development">Urban development</SelectItem>
          <SelectItem value="Sustainable agriculture">
            Sustainable agriculture
          </SelectItem>
          <SelectItem value="Disability support services">
            Disability support services
          </SelectItem>
          <SelectItem value="International development">
            International development
          </SelectItem>
          <SelectItem value="Arts therapy">Arts therapy</SelectItem>
          <SelectItem value="Community beautification projects">
            Community beautification projects
          </SelectItem>
          <SelectItem value="Disaster preparedness">
            Disaster preparedness
          </SelectItem>
          <SelectItem value="Youth mentoring programs">
            Youth mentoring programs
          </SelectItem>
          <SelectItem value="Animal rescue organizations">
            Animal rescue organizations
          </SelectItem>
          <SelectItem value="Legal advocacy">Legal advocacy</SelectItem>
          <SelectItem value="Youth sports programs">
            Youth sports programs
          </SelectItem>
          <SelectItem value="Environmental education">
            Environmental education
          </SelectItem>
          <SelectItem value="Refugee resettlement">
            Refugee resettlement
          </SelectItem>
          <SelectItem value="Affordable housing initiatives">
            Affordable housing initiatives
          </SelectItem>
          <SelectItem value="Community empowerment programs">
            Community empowerment programs
          </SelectItem>
          <SelectItem value="Conflict resolution programs">
            Conflict resolution programs
          </SelectItem>
          <SelectItem value="Public policy advocacy">
            Public policy advocacy
          </SelectItem>
          <SelectItem value="Healthcare outreach">
            Healthcare outreach
          </SelectItem>
          <SelectItem value="Community building initiatives">
            Community building initiatives
          </SelectItem>
          <SelectItem value="Food distribution programs">
            Food distribution programs
          </SelectItem>
          <SelectItem value="Cultural preservation">
            Cultural preservation
          </SelectItem>
          <SelectItem value="Poverty alleviation">
            Poverty alleviation
          </SelectItem>
          <SelectItem value="Technology education">
            Technology education
          </SelectItem>
          <SelectItem value="Domestic violence support">
            Domestic violence support
          </SelectItem>
          <SelectItem value="Community policing initiatives">
            Community policing initiatives
          </SelectItem>
          <SelectItem value="Educational equity programs">
            Educational equity programs
          </SelectItem>
          <SelectItem value="Water conservation">Water conservation</SelectItem>
          <SelectItem value="Community radio stations">
            Community radio stations
          </SelectItem>
          <SelectItem value="Home repair programs">
            Home repair programs
          </SelectItem>
          <SelectItem value="Cultural festivals">Cultural festivals</SelectItem>
          <SelectItem value="Disaster recovery">Disaster recovery</SelectItem>
          <SelectItem value="Youth empowerment programs">
            Youth empowerment programs
          </SelectItem>
          <SelectItem value="Health advocacy">Health advocacy</SelectItem>
          <SelectItem value="Artisanal crafts initiatives">
            Artisanal crafts initiatives
          </SelectItem>
          <SelectItem value="Community education">
            Community education
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CategoryMenu;
