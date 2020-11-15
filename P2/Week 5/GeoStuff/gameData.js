const gameArea = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [12.576191425323486, 55.667504736350445],
        [12.571728229522705, 55.663692417950294],
        [12.577371597290039, 55.659782893112144],
        [12.583208084106445, 55.65972237108254],
        [12.586941719055176, 55.66567729038088],
        [12.576191425323486, 55.667504736350445],
      ],
    ],
  },
};

const players = [
  {
    type: "Feature",
    properties: {"name":"lokationUdenfor1"},
    geometry: {
      type: "Point",
      coordinates: [12.589473724365234, 55.665241595300024],
    },
  },
  {
    type: "Feature",
    properties: {"name":"lokationUdenfor2"},
    geometry: {
      type: "Point",
      coordinates: [12.585182189941406, 55.65952869995898],
    },
  },
  {
    type: "Feature",
    properties: {"name":"lokationIndenforPolygon1"},
    geometry: {
      type: "Point",
      coordinates: [12.582972049713135, 55.66440649950343],
    },
  },
  {
    type: "Feature",
    properties: {"name":"lokationIndenforPolygon2"},
    geometry: {
      type: "Point",
      coordinates: [12.578401565551758, 55.66545944344676],
    },
  },
];



module.exports = {
    gameArea,players
  };
  