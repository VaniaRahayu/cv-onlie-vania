export default function MyApp() {
  return (
    <div className="container mx-auto p-2 text-center pt-15">
      <h2 className="text-grey font-bold">SKILLS</h2>
      <RowSkill skill="Bahasa Pemrograman" level="Basic" />
      <RowSkill skill="Komunikasi" level="Intermediate" />
      <RowSkill skill="Menulis" level="Intermediate" />
      <RowSkill skill="Menggambar Imajinatif" level="Basic" />
    </div>
  );
}

interface RowSkillProps {
  skill: string;
  level: string;
}

function RowSkill(props: RowSkillProps) {
  return (
    <div className="border-2 border-orange-300/75 rounded-lg bg-orange-300 text-black p-2 my-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-6 font-bold">{props.skill}</div>
          <div className="col-span-12 md:col-span-6">{props.level}</div>
        </div>
      </div>
    </div>
  );
}
