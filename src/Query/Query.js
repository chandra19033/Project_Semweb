/* 
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import qs from "qs";
*/
export const BASE_URL = "http://localhost:3030/dataBrand/query";

export const headers = {
  Accept: "application/sparql-results+json,*/*;q=0.9",
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
};

export const getDataQuery = (value) => {
    return {
    query: `PREFIX data: <https://brandcek.com/data#>
    PREFIX id: <https://brandcek.com/cek#>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    SELECT ?name ?birth ?contact ?age ?job ?HP ?Laptop ?TV
    WHERE
    { 
        ?id data:name ?name ;
            data:birth ?birth ;
            data:contact ?contact ;
            data:age ?age ;
            data:job ?job ;
            data:hasHP ?nameHP ;
            data:hasLaptop ?nameLaptop ;
            data:hasTV ?nameTV .
            
            ?nameHP data:hpBrand ?HP .
            ?nameLaptop data:laptopBrand ?Laptop .
            ?nameTV data:tvBrand ?TV .
          
          FILTER (
            regex(?id, "${value}", "i") ||
            regex(?name, "${value}", "i") ||
            regex(?birth, "${value}", "i") ||
            regex(?contact, "${value}", "i") ||
            regex(?age, "${value}", "i") ||
            regex(?job, "${value}", "i") ||
            regex(?HP, "${value}", "i") ||
            regex(?Laptop, "${value}", "i") ||
            regex(?TV, "${value}", "i") 
          )
    }`,
    }
  };

  export const getAllDataQuery = () => {
    return {
      query: `PREFIX data: <https://brandcek.com/data#>
      PREFIX id: <https://brandcek.com/cek#>
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      SELECT ?name ?birth ?contact ?age ?job ?HP ?Laptop ?TV 
      WHERE
      {
        ?id data:no ?no;
            data:name ?name ;
            data:birth ?birth ;
            data:contact ?contact ;
            data:age ?age ;
            data:job ?job ;
            data:hasHP ?nameHP ;
            data:hasLaptop ?nameLaptop ;
            data:hasTV ?nameTV .
            
            ?nameHP data:hpBrand ?HP .
            ?nameLaptop data:laptopBrand ?Laptop .
            ?nameTV data:tvBrand ?TV .
      }ORDER BY ASC(?no)`,
    }
  };

  export const getRandomDataQuery = () => {
    return {
      query: `PREFIX data: <https://brandcek.com/data#>
      PREFIX id: <https://brandcek.com/cek#>
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      SELECT ?name ?birth ?contact ?age ?job ?HP ?Laptop ?TV 
      WHERE
      {
        ?id data:name ?name ;
            data:birth ?birth ;
            data:contact ?contact ;
            data:age ?age ;
            data:job ?job ;
            data:hasHP ?nameHP ;
            data:hasLaptop ?nameLaptop ;
            data:hasTV ?nameTV .
            
            ?nameHP data:hpBrand ?HP .
            ?nameLaptop data:laptopBrand ?Laptop .
            ?nameTV data:tvBrand ?TV .
      }
      ORDER BY RAND()
      LIMIT 5`,
    }
  };

  export const getFromNewstQuery = () => {
    return {
      query: `PREFIX data: <https://brandcek.com/data#>
      PREFIX id: <https://brandcek.com/cek#>
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      SELECT ?name ?birth ?contact ?age ?job ?HP ?Laptop ?TV 
      WHERE
      {
        ?id data:no ?no;
            data:name ?name ;
            data:birth ?birth ;
            data:contact ?contact ;
            data:age ?age ;
            data:job ?job ;
            data:hasHP ?nameHP ;
            data:hasLaptop ?nameLaptop ;
            data:hasTV ?nameTV .
            
            ?nameHP data:hpBrand ?HP .
            ?nameLaptop data:laptopBrand ?Laptop .
            ?nameTV data:tvBrand ?TV .
      }
      ORDER BY DESC(?no)`,
    }
  };

  export const getDataAvancedQuery = (value) => {
    return {
      query: `PREFIX data: <https://brandcek.com/data#>
      PREFIX id: <https://brandcek.com/cek#>
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      SELECT ?name ?birth ?contact ?age ?job ?HP ?Laptop ?TV 
      WHERE
      {
        ?id data:no ?no;
            data:name ?name ;
            data:birth ?birth ;
            data:contact ?contact ;
            data:age ?age ;
            data:job ?job ;
            data:hasHP ?nameHP ;
            data:hasLaptop ?nameLaptop ;
            data:hasTV ?nameTV .
            
            ?nameHP data:hpBrand ?HP .
            ?nameLaptop data:laptopBrand ?Laptop .
            ?nameTV data:tvBrand ?TV .
            
            FILTER contains(lcase(str(?name)), lcase(str("${
              value.name ? value.name : ""
            }")))
            FILTER contains(lcase(str(?birth)), lcase(str("${
              value.birth ? value.birth : ""
            }")))
            FILTER contains(lcase(str(?age)), lcase(str("${
              value.age ? value.age : ""
            }")))
            FILTER contains(lcase(str(?job)), lcase(str("${
              value.job ? value.job : ""
            }")))
            FILTER contains(lcase(str(?HP)), lcase(str("${
              value.HP ? value.HP : ""
            }")))
            FILTER contains(lcase(str(?Laptop)), lcase(str("${
              value.Laptop ? value.Laptop : ""
            }")))
            FILTER contains(lcase(str(?TV)), lcase(str("${
              value.TV ? value.TV : ""
            }")))
      }
      ORDER BY ASC (?no)`,
    }
  };