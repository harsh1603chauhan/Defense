import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Table from "../components/Table";

const NdaEligi = () => {
  const ageCriteriaTable = {
    headers: ["Exam", "Date of Birth Criteria", "Maximum Age for NDA"],
    rows: [
      ["NDA (1) 2025", "July 2, 2005, to July 1, 2008", "19.5"],
      ["NDA (2) 2025", "July 2, 2005, to July 1, 2008", "19.5"],
    ],
  };

  const generalEligibilityTable = {
    headers: ["Criteria", "Details"],
    rows: [
      ["Age Limit for NDA Exam 2025", "16.5 to 19.5 years"],
      ["Eligibility Date", "Candidate must be within the age bracket as of July 1, 2025"],
      ["Applicable to", "Both male and female candidates"],
      ["Disqualification Criteria", "Not meeting the minimum (16.5) or maximum (19.5) age limit"],
    ],
  };
  const eduEligi = {
    headers:["Academy","Educational Qualification"],
    rows:[
    ["Nda Course (For Army Wing)","12th Class pass of the 10 + 2 education pattern or equivalent exam organized by the State Education Board or University."],
    ["NDA Course (For Air Force and Naval Wings)","12th Class pass in the 10+2 education pattern with the subjects of math, physics, and chemistry, or examinations equivalently conducted by a state education board or a university."]
    ],
  };
  const physicalCriteria = {
    headers:["Medical Criteria","Requirements"],
    rows:[
    ["Tattos","Limited to wrist to inside of elbow and back of the hand. Exceptions for tribal candidates with traditional face or body tattoos."],
    ["Chest Measurements","Not less than 81 cm during full expansion, with at least 5 cm expansion after inspiration."],
    ["Mental Fitness","No history of mental breakdowns. Average-sized liver and spleen."],
    ["Hernias","Untreated hernias result in disqualification. Operation should be performed one year prior to the final medical examination."],
    ["Heart and Blood Vessels","Free of biological or functional diseases."],
    ["Bones and Joints","No impairements, appropriate development required."],
    ["Blood Pressure","Must be within normal range."],
    ["Skin and Other Conditions","No skin diseases, hydrocele, varicocele, piles."],
    ["Abdominal Organs and Urine","No ailments affecting internal abdominal organs. Abnormalities in urine lead to disqualification."],
    ["Dental Health","Sufficient healthy and natural teeth, with at least 14 dental points."],
    ["USG Abdomen","Mandatory for all candidates."]
    ]
  }

  return (
    <div className="nda-eligi">
      <Navbar />
      <div className="entry-content">
        <Section title="NDA Eligibility Criteria 2025">
          <p>
            The Union Public Service Commission (UPSC) has established strict age criteria for the NDA 2025 exam. As per the eligibility requirements, only unmarried male and female candidates aged between 
            <strong> 16.5 and 19.5 years</strong> are eligible to apply. This age limit applies to all categories, including OBC. Refer to the official UPSC notification for updates on eligibility.
          </p>
          <Table data={ageCriteriaTable} />
        </Section>

        <Section title="NDA Age Limit 2025">
          <p>
            According to the official NDA 2025 notification, candidates born between July 2, 2005, and July 1, 2008, are eligible. Reserved categories follow the same age limit.
          </p>
          <Table data={generalEligibilityTable} />
        </Section>

        <Section title="NDA Age Limit for Girls">
          <ul>
            <li>Girls must be within the age bracket of 16.5 to 19.5 years on July 1, 2025.</li>
            <li>Upper and lower limits apply equally to both boys and girls.</li>
            <li>Disqualification occurs if the minimum or maximum age limits are not met.</li>
          </ul>
        </Section>
        {/* Add more sections as necessary */}
        <Section title="NDA Nationality Criteria 2025">
            <p>According to the UPSC NDA notification 2025, eligibility for the NDA exam extends to Indian citizens meeting specific criteria as outlined by the Commission:</p>
            <h5>Candidates who qualify as:</h5>
          <ul>
            <li>Citizens of India</li>
            <li>Subjects of Nepal</li>
            <li>Subjects of Bhutan</li>
            <li>Individuals of Indian origin who migrated from Zaire, Ethiopia, East African Countries of Kenya, the United Republic of Tanzania, Malawi, Uganda, Burma, Pakistan, Zambia, Sri Lanka, and Vietnam to settle in India</li>
            <li>Tibetan refugees who arrived in India and settled before January 1, 1962</li>
          </ul>
        </Section>
        <Section title="NDA Educational Qualifications 2025">
          <p>
          To take the NDA exam and proceed in the recruiting process, candidates must have the necessary qualifications. The table below illustrates the specifics of the candidates’ educational requirements.
          </p>
          <Table data={eduEligi} />
        </Section>
        <Section title="NDA Physical Eligibility Criteria 2025">
          <Table data={physicalCriteria} />
        </Section>
        
      </div>
      <style>
                {`
                    .nda-eligi {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                    }

                    .nda-eligi .entry-content {
                        padding: 20px;
                        background-color: #f9f9f9;
                        border-radius: 5px;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    }

                    .nda-eligi .entry-content h2 {
                        color: Black;
                        margin-top: 20px;
                        font-size: 1.5em;
                    }

                    .nda-eligi .entry-content table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                        background-color: #fff;
                    }

                    .nda-eligi .entry-content table th,
                    .nda-eligi .entry-content table td {
                        border: 1px solid #ddd;
                        padding: 10px;
                        text-align: left;
                    }

                    .nda-eligi .entry-content table th {
                        background-color: ;
                    }

                    .nda-eligi .entry-content p {
                        margin: 10px 0;
                    }

                    .nda-eligi .entry-content ul {
                        margin: 10px 0;
                        padding-left: 20px;
                    }

                    .nda-eligi .entry-content ul li {
                        margin-bottom: 5px;
                    }
                `}
            </style>
    </div>
    
  );
};

export default NdaEligi;
