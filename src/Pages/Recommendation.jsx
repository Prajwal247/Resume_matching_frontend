import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Recommendation = () => {
  const location = useLocation();
  const receivedData = location.state;
  const [keys, setKeys] = useState([]);
  const [values, setValues] = useState([]);
  const [resumeType, setResumeType] = useState(null);
  const [recommendedJobs, setRecommendedJobs] = useState([]);


  useEffect(() => {
    setKeys(Object.keys(receivedData.data.personal_details));
    setValues(Object.values(receivedData.data.personal_details));
    setResumeType(receivedData.data.resume_type)
    setRecommendedJobs(receivedData.data.recommended_jobs)
    console.log(receivedData.data.recommended_jobs)
  }, [receivedData]);

  return (
    <div className="job-list-container">
      <div className="category">{`Your resume is categorized as ${resumeType}`}</div>
      <div className="personal-details">
        <h2>Personal Details</h2>
        <table>
          {keys.map((item, i) => (
          <tr>
            <td className="information">{keys[i]}:</td>
            <td className="values">{values[i].substring(0, 400)}</td>
          </tr>
           
          ))}
        </table>
      </div>
      <h1 className="title-relevant">{`Relevant Jobs for ${resumeType}`}</h1>
      <ul className="job-list">
        {recommendedJobs.map((job) => (
          <li key={job.id} className="job-item">
            <h2>{job.job['Job Title']}</h2>
            <p>{job.job['Industry']}</p>
            <p>{job.job['Key Skills']}</p>
            <p>{job.job['Role']}</p>
            <p>{job.job['Job Experience Required']}</p>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;
