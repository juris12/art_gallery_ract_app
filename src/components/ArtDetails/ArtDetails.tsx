import React from 'react';
import ArtObject from './ArtDetailsType';
import './ArtDetails.styles.scss'

type ArtObjectDetailsProps = {
  artObject: ArtObject | undefined;
}

const ArtObjectDetails: React.FC<ArtObjectDetailsProps> = ({ artObject }) => {
  if (!artObject) {
    return <p>Error no data available</p>;
  }
  const {
    description,
    colors,
    principalMakers,
    dimensions,
    physicalMedium,
    dating,
    historicalPersons,
    acquisition,
    label,
    location,
    documentation,
  } = artObject;

  return (
    <div className='art_details' id="details">
      <h1>Detailed info about artwork</h1>
      <h2>Artist Information:</h2>
      {principalMakers.length != 0 ? principalMakers.map((maker, index) => (
        <div key={index}>
          <p><strong>Name:</strong> {maker.name}</p>
          <p><strong>Birth:</strong> {maker.placeOfBirth} ({maker.dateOfBirth})</p>
          <p><strong>Death:</strong> {maker.placeOfDeath} ({maker.dateOfDeath})</p>
          <p><strong>Occupation:</strong> {maker.occupation.join(', ')}</p>
          <p><strong>Roles:</strong> {maker.roles.join(', ')}</p>
        </div>
      )): "No info"}

      <h2>Description:</h2>
      <p>{description ?? "No info"}</p>

      <h2>Acquisition:</h2>
      <p><strong>Method:</strong> {acquisition?.method  ?? "No info"}</p>
      <p><strong>Date:</strong> {new Date(acquisition?.date).toLocaleDateString() ?? "No info"}</p>
      <p><strong>Credit:</strong> {acquisition?.creditLine  ?? "No info"}</p>

      <h2>historical persons:</h2>
      <ul>
        {historicalPersons.length != 0 ? historicalPersons.map(val => (
          <li>{val}</li>
        )) : "No info"}
      </ul>

      <h2>Documentation:</h2>
      <ul>
        {documentation.length != 0 ? documentation.map(val => (
          <li>{val}</li>
        )) : "No info"}
      </ul>

      <h2>Dimensions</h2>
      <ul>
        {dimensions.length != 0 ? dimensions.map((dimension, index) => (
          <li key={index}>
            {dimension.type}: {dimension.value} {dimension.unit}
          </li>
        )): ("No info")}
      </ul>

      <h2>Colors</h2>
      <div style={{ display: 'flex' }}>
        {colors.length != 0 ? colors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color.hex,
              width: '50px',
              height: '50px',
              marginRight: '5px'
            }}
            title={`Percentage: ${color.percentage}%`}
          />
        )): 'No color info'}
      </div>

      <h2>Physical Medium</h2>
      <p>{physicalMedium ?? "No info"}</p>

      <h2>Date of Artwork</h2>
      <p>{dating?.presentingDate ?? "No info"} (Period: {dating?.period  ?? "No info"})</p>

      <h2>Label</h2>
      <p><strong>Title:</strong> {label?.title ?? "No info"}</p>
      <p><strong>Description:</strong> {label?.description ?? "No info"}</p>
      <p><strong>Maker:</strong> {label?.makerLine ?? "No info"}</p>

      <h2>Location</h2>
      <p>{location  ?? "No info"}</p>
    </div>
  );
};

export default ArtObjectDetails;
