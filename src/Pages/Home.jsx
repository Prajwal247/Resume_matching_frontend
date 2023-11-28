import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from 'react-js-loader';


const Home = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleSubmit = async (e) => {
      setLoading(true)
        e.preventDefault();
        if (file) {
          const formData = new FormData();
          formData.append('pdfFile', file);
    
          try {
            const response = await axios.post('http://localhost:8000/api/matcher/', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            if(response.status === 200){
              navigate('/recommendation', { state: response.data });
            } // Handle the response from the Django backend
          } catch (error) {
            alert('Error:', "Unable to process, Try again");
          }
        }
        setLoading(false)
      };

  return (
    <div className="home-main">
      <div>
        <h1 style={{ fontSize: "2.5em", marginBottom: "20px" }} className="title">Job Matcher</h1>
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "1.5em" }}>Upload Resume:</h2>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="upload"
            onChange={handleFileChange}
            style={{ fontSize: "1em" }}
          />
        </div>

        <div>
          <button
            onClick={handleSubmit}
            className="search-button"
          >
            {loading?<Loader type="bubble-scale" bgColor='green' size={50} />:"Search Jobs"}
          </button>
        </div>
        <div className="note">
            <p><span className="note-head">Note:</span>Upload your Resume in the upload section and click the search jobs button to obtain the relevant jobs</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
