type Color = {
    percentage: number;
    hex: string;
  }
  
type PrincipalMaker = {
name: string;
unFixedName: string;
placeOfBirth: string;
dateOfBirth: string;
dateOfDeath: string;
placeOfDeath: string;
occupation: string[];
roles: string[];
nationality: string;
productionPlaces: string[];
}

type WebImage = {
guid: string;
offsetPercentageX: number;
offsetPercentageY: number;
width: number;
height: number;
url: string;
}

type Dimension = {
unit: string;
type: string;
value: string;
}

type ArtObject = {
id: string;
title: string;
objectNumber: string,
description: string;
webImage: WebImage;
colors: Color[];
normalizedColors: Color[];
normalized32Colors: Color[];
materials: string[];
techniques: string[];
productionPlaces: string[];
titles: string[];
principalMakers: PrincipalMaker[];
acquisition: {
    method: string;
    date: string;
    creditLine: string;
};
dating: {
    presentingDate: string;
    yearEarly: number;
    yearLate: number;
    period: number;
};
dimensions: Dimension[];
physicalMedium: string;
longTitle: string;
label: {
    title: string;
    description: string;
    makerLine: string;
};
historicalPersons: string[],
documentation: string[],
location: string;
}
  

export default ArtObject