import { useState } from "react";
// css
import "./teamPage.css";

// components
import ChatBot from "../../components/chatbot/ChatBot";
import Footer from "../../components/footer/Footer";
import TeamPageHeader from "./TeamPageHeader";
import TeamPageLeft from "./TeamPageLeft";
import TeamPageLeftEdit from "./TeamPageLeftEdit";
import TeamEditModal from "./TeamEditModal";
import TeamPageRight from "./TeamPageRight";
import TeamPageRightEdit from "./TeamPageRightEdit";
import CoachEditModal from "./CoachEditModal";

const TeamPage = () => {
  const [editMode, setEditMode] = useState(false);
  const [teamEdit, setTeamEdit] = useState(false);
  const [coachEdit, setCoachEdit] = useState(false);
  const [dataForm, setDataForm] = useState({
    address: "123 Street Name City, ST 01234",
    email: "email@address.com",
    phone: "(555) 555-555",
    social: "Facebook  Instagram",
    link: "websiteaddress.com",
    timing: "Monday - Friday , 5-10pm",
  });

  const [teamForm, setTeamForm] = useState({
    description:
      "Founded in 1776, Lorem ipsum dolor sit amet consectetur. Rutrum blandit tortor proin arcu nunc cursus ut nulla. Eu nec platea elit ut feugiat. Morbi sit tincidunt massa tempor. Pharetra mauris vel accumsan fusce.",
    difficulty: "elite",
    gender: "Male",
    age: "5-12",
    teamtype: "AAU Travel Team",
    league: "Nike",
    isbasketball: "Yes",
    tryouts: "12/21/23, 8 - 10pm 123 Street Name, City, ST 01234",
    gymspace: "Scholl Name",
    cost: "$200/m",
  });
  return (
    <>
      <section className="teamPage">
        <TeamPageHeader editMode={editMode} setTeamEdit={setTeamEdit} />

        <div className="teamPage__content">
          {editMode === true ? (
            <>
              <TeamPageLeftEdit
                setEditMode={setEditMode}
                setDataForm={setDataForm}
                dataForm={dataForm}
              />
              <TeamPageRightEdit
                teamForm={teamForm}
                setTeamForm={setTeamForm}
                setCoachEdit={setCoachEdit}
              />
            </>
          ) : (
            <>
              <TeamPageLeft setEditMode={setEditMode} />
              <TeamPageRight teamForm={teamForm} />
            </>
          )}
        </div>
      </section>
      {teamEdit && <TeamEditModal setTeamEdit={setTeamEdit} />}
      {coachEdit && <CoachEditModal setCoachEdit={setCoachEdit} />}
      <Footer varient="transparent" />
      <ChatBot />
    </>
  );
};

export default TeamPage;
