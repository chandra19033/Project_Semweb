import React, { useState } from "react";
import { scroller } from "react-scroll";
import {BASE_URL, headers, getDataAvancedQuery} from "../Query/Query";
import axios from "axios";
import qs from "qs";

const scrollToSection = (flag) => {
  scroller.scrollTo(flag, {
    duration: 800,
    offset:-70,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

function Advanced() {

  const initialState = {
    dataBrand: [], // // Save the Result
    // Save the Keyword
    name: "",
    age: "",
    job: "",
    HP: "",
    Laptop: "",
    TV: "",
  }

  const [value, setValue] = useState(initialState);
  const clearState = () => {
    setValue({ ...initialState });
  };

  const [searching, setSearching] = useState(false);

  const getData = async () => {

    // Query to get Data
    const queryData = getDataAvancedQuery(value);

    setSearching(true);

    scrollToSection("codes");
    console.log(searching);

    try {
      const { data } = await axios(BASE_URL, {
        method: "POST",
        headers,
        data: qs.stringify(queryData),
      });
      console.log(data);

      // Convert Data
      const formatted_data = data.results.bindings.map((temp, index) =>
        formatter(temp, index)
      );
      console.log(formatted_data);

      setValue({
        ...value,
        dataBrand: formatted_data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const formatter = (temp, index) => {
    return {
      id: index,
      name: temp.name.value,
      birth: temp.birth.value,
      contact: temp.contact.value,
      age: temp.age.value,
      job: temp.job.value,
      HP: temp.HP.value,
      Laptop: temp.Laptop.value,
      TV: temp.TV.value,
    };
  };

  const handleChangeName = (event) => {
    setValue({
      ...value,
      name: event.target.value,
    });
  };

  const handleChangeAge = (event) => {
    setValue({
      ...value,
      age: event.target.value,
    });
  };

  const handleChangeJob = (event) => {
    setValue({
      ...value,
      job: event.target.value,
    });
  };

  const handleChangeHP = (event) => {
    setValue({
      ...value,
      HP: event.target.value,
    });
  };

  const handleChangeLaptop = (event) => {
    setValue({
      ...value,
      Laptop: event.target.value,
    });
  };

  const handleChangeTV = (event) => {
    setValue({
      ...value,
      TV: event.target.value,
    });
  };

  const content = value.dataBrand.map((brand) => (
    <div key={brand.id} className="codes_list_container text-justify">
      <ul>
        <li >
        <div className="d-flex flex-row align-items-start justify-content-start"></div>
          <div className="code_info"></div>
          <table>
            <tr>
              <th>Name</th>
              <th>:&emsp;</th>
              <th>{brand.name}</th>
            </tr>
            <tr>
              <th>Birth</th>
              <th>:&emsp;</th>
              <th>{brand.birth}</th>
            </tr>
            <tr>
              <th>Contact</th>
              <th>:&emsp;</th>
              <th>{brand.contact}</th>
            </tr>
            <tr>
              <th>Age</th>
              <th>:&emsp;</th>
              <th>{brand.age}</th>
            </tr>
            <tr>
              <th>Job</th>
              <th>:&emsp;</th>
              <th>{brand.job}</th>
            </tr>
            <tr>
              <th>HP Brand</th>
              <th>:&emsp;</th>
              <th>{brand.HP}</th>
            </tr>
            <tr>
              <th>Laptop Brand&emsp;</th>
              <th>:&emsp;</th>
              <th>{brand.Laptop}</th>
            </tr>
            <tr>
              <th>TV Brand</th>
              <th>:&emsp;</th>
              <th>{brand.TV}</th>
            </tr>
          </table>
          <hr className="line-style"></hr>
          <div className="margin-style"></div>
        </li>
      </ul>
      <ul className="codes_list"></ul>
    </div>
  ));

  const temp = () => {
    scrollToSection("home");
  }

  function showKeyword () {
    return([
      value.name !== "" ?(<h4 className="result2-text "> - Name : " {value.name} "</h4>):(<></>),
      value.age !== "" ?(<h4 className="result2-text "> - Age : " {value.age} "</h4>):(<></>), 
      value.job !== "" ?(<h4 className="result2-text "> - Job : " {value.job} "</h4>):(<></>),
      value.HP !== "" ?(<h4 className="result2-text "> - HP Brand : " {value.HP} "</h4>):(<></>),
      value.Laptop !== "" ?(<h4 className="result2-text "> - Laptop Brand : " {value.Laptop} "</h4>):(<></>),
      value.TV !== "" ?(<h4 className="result2-text "> - TV Brand : " {value.TV} "</h4>):(<></>)
    ])   
  }

  return (
    <div className="super_container">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="header_content d-flex flex-row align-items-center justify-content-center">
                <div className="logo mr-auto">
                  <div className="d-flex flex-row align-items-end justify-content-start">
                    <span className="logo_text_1 logo_text_style">
                    <a href="/">
                    <img src="/images/logo.png" className="img-logo mb-4"/>
                    </a>
                    </span>
                  </div>
                </div>
                <div className="ml-auto">
                  <div className="d-flex flex-row align-items-end justify-content-end">
                    <span className="nav_about_text">
                      <a href="/advanced">Advanced Search</a>
                    </span>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Home */}
      <div className="home" id="home">
        <div className="home_slider_container">
          <div className="owl-carousel owl-theme home_slider">
            <div className="slide">
              <div
                className="background_image"
                style={{ backgroundImage: "url(images/image1.jpg)" }}
              />
              <div className="home_container">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="home_content">
                        <div className="home_title_container text-center">
                          <div className="home_title islive text-center">
                            <img src="/images/logo.png" className="img-notfound mb-4"/> 
                          </div>
                        </div>
                        <div className="code_form_container">
                          <form
                            className="code_form"
                            onSubmit={(e) => e.preventDefault()}
                          >
                            <div className="align-items-center justify-content-center">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="code_form_inputs align-items-center justify-content-center">
                                    <input
                                      id="myInput"
                                      type="text"
                                      className="code_form_input"
                                      placeholder="Name"
                                      setvalue={value.name}
                                      onChange={handleChangeName}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="code_form_inputs align-items-center justify-content-center">
                                    <input
                                      type="text"
                                      className="code_form_input"
                                      placeholder="HP Brand"
                                      setvalue={value.hp}
                                      onChange={handleChangeHP}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="code_form_inputs align-items-center justify-content-center">
                                    <input
                                      id="myInput"
                                      type="text"
                                      className="code_form_input"
                                      placeholder="Age"
                                      setvalue={value.age}
                                      onChange={handleChangeAge}
                                      /> 
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="code_form_inputs align-items-center justify-content-center">
                                  <input
                                      id="myInput"
                                      type="text"
                                      className="code_form_input"
                                      placeholder="Laptop Brand"
                                      setvalue={value.laptop}
                                      onChange={handleChangeLaptop}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                    <div className="code_form_inputs align-items-center justify-content-center">
                                    <input
                                      id="myInput"
                                      type="text"
                                      className="code_form_input"
                                      placeholder="Job"
                                      setvalue={value.job}
                                      onChange={handleChangeJob}
                                    />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="code_form_inputs align-items-center justify-content-center">
                                  <input
                                      id="myInput"
                                      type="text"
                                      className="code_form_input"
                                      placeholder="TV Brand"
                                      setvalue={value.TV}
                                      onChange={handleChangeTV}
                                    />
                                  </div>
                                </div>   
                              </div>
                              <div className="row">
                                <div className="col-md-12">
                                  <button
                                    type="button"
                                    className="custom_button code_form_button button"
                                    value="Search"
                                    onClick={getData}
                                  >
                                    <span>Search</span>
                                  </button>
                               
                                  <button
                                    type="reset"
                                    className="custom_button2 code_form_button button"
                                    onClick={clearState}
                                  >
                                    <span>Reset</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Codes */}
      <div className="codes">
        <button
            type="button"
            className="buttonUp code_form_button button"
            onClick={temp}
        >
          <span style={{top:0}}><img class="back_to_search" src="images/image4.png"></img></span>
        </button>
        <div className="container">
          <div className="row row-lg-eq-height">
  
            <div className="content_container col-lg-8 order-lg-2 order-1">
              <div className="codes_content">
                <div className="section_title">
                  <h1 className="result-text">Search Result</h1>
                  <div className="margin-style"></div>
                </div>
                <div>
                {(() => {
                    if (content.length === 0) {
                      return (
                        <div>
                            {
                              searching === false ?(
                                <>
                                <img src="/images/image2.png" className="img-notfound_1 mb-4" alt="Waiting to Search"/>
                                <p className="text-notfound">Enter Keyword to Search Data</p>
                                </> 
                              ):(
                                <>
                                {showKeyword()}
                                <img src="/images/image3.png" className="img-notfound_1 mb-4" alt="Waiting to Search"/>
                                <p className="text-notfound">Data Not Found!!! Please Re-enter the Keyword</p>
                                </>
                              )
                            }
                         
                        </div>
                      );
                    } else {
                      return (
                      
                      <div>
                        <h3 className="result2-text ">Result : {content.length} data</h3>
                        <h3 className="result2-text ">Keyword : </h3>
                        {showKeyword()}
                        {content}</div>);
                    }
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer_content">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="logo">
                  <div className="d-flex flex-row align-items-end justify-content-start">
                    <p className="logo_text">BrandCek</p>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-end justify-content-start">
                    <p className="footer_content_text text-center">Searching Data to See Electronics Brand Around Cukanggenteng Village</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Advanced;
