import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../../style/season_display.css';

const getSeason = (lat,month) => {
if(month>2 && month>9) {
 return  lat<0 ? 'summer' : 'winter';
}
else {
  return  lat>0 ? 'winter' : 'summer';
}
}

const seasonConfig = {
  summer: {
    text: "let's Hit the Beach",
    iconName: 'sun'
  },
  winter: {
    text: "Brr it's Cold",
    iconName : 'snowflake'
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const {text,iconName} = seasonConfig [season]; //{text, iconName}
  return (
    <div className="season">
    <i className={`massive icon-left ${iconName} icon`} />
    <h1>{text}</h1>
  <i className={`massive icon-right ${iconName} icon`} />
    </div>
  );
}
export default SeasonDisplay;
