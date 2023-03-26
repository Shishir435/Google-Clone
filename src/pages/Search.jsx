// import Button from '@mui/icons-material/SmartButton';
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";
import { useStateValue } from "../StateProvider";
import { actionType } from "../reducer";



const Search = ({ hideButtons = false }) => {

  const [{}, dispatch ] =useStateValue()
  const [input, setInput] = useState("");
  let navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    console.log("heh he  he search", input);

    dispatch({
      type: actionType.SET_SEARCH_TERM,
      term: input,
    })
    navigate("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <button type="submit" onClick={search}>
            Google Search
          </button>
          <button>I'm Feeling Lucky</button>
        </div>
      ) : (
        <div className="search__buttons">
          <button
            className="search__buttonHindden"
            type="submit"
            onClick={search}
          >
            Google Search
          </button>
          <button className="search__buttonHindden">I'm Feeling Lucky</button>
        </div>
      )}
    </form>
  );
};

export default Search;
