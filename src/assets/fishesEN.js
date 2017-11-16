var forms = document.querySelector(".flex-2").children

fishesPl.map((f, index) => {
	var form = forms[index];
	Object.keys(f).map((key, i) => {
		form.children[0].querySelector("[data-id="" + key + ""]").value = f[key];
	});
});

export const fishesPl = [
  {
    "id": 62, "fishId": "pike",
    "name": "pike",
    "protectedSize": 50,
    "protectedPeriod": "from January 1 till April 30",
    "protectedLimit": 2,
    "description": null, "lang": "en",
    "family": "pikes (esocidae)"
  },
  {
    "id": 63, "fishId": "carp",
    "name": "carp",
    "protectedSize": 0,
    "protectedPeriod": "",
    "protectedLimit": 3,
    "description": null, "lang": "en",
    "family": "carps (cyprinidae)"
  },
  {
    "id": 64, "fishId": "zander",
    "name": "zander",
    "protectedSize": 50,
    "protectedPeriod": "from January 1 till May 31",
    "protectedLimit": 2,
    "description": null, "lang": "en",
    "family": "perches (percidae)"
  },
  {
    "id": 65, "fishId": "bream",
    "name": "bream",
    "protectedSize": 0,
    "protectedPeriod": "",
    "protectedLimit": 0,
    "description": null, "lang": "en",
    "family": "carps (cyprinidae)"
  },
  {
    "id": 66, "fishId": "perch",
    "name": "perch",
    "protectedSize": 15,
    "protectedPeriod": "",
    "protectedLimit": 0,
    "description": null, "lang": "en",
    "family": "perches (percidae)"
  },
  {
    "id": 67, "fishId": "crucian",
    "name": "crucian",
    "protectedSize": 0,
    "protectedPeriod": "",
    "protectedLimit": 0,
    "description": null, "lang": "en",
    "family": "carps (cyprinidae)"
  },
  {
    "id": 68, "fishId": "catfish",
    "name": "catfish",
    "protectedSize": 70,
    "protectedPeriod": "from November 1 till June 30",
    "protectedLimit": 1,
    "description": null, "lang": "en",
    "family": "catfishes (siluridae)"
  },
  {
    "id": 69, "fishId": "amur",
    "name": "amur",
    "protectedSize": 0,
    "protectedPeriod": "",
    "protectedLimit": 3,
    "description": null, "lang": "en",
    "family": "carps (cyprinidae)"
  },
  {
    "id": 70, "fishId": "asp",
    "name": "asp",
    "protectedSize": 40,
    "protectedPeriod": "from January 1 till April 3",
    "protectedLimit": 2,
    "description": null, "lang": "en",
    "family": "carps (cyprinidae)"
  },
  {
    "id": 71, "fishId": "roach",
    "name": "roach",
    "protectedSize": 0,
    "protectedPeriod": "",
    "protectedLimit": 0,
    "description": null, "lang": "en",
    "family": "carps (cyprinidae)"
  },
  {
    "id": 72, "fishId": "chub",
    "name": "chub",
    "protectedSize": 25,
    "protectedPeriod": "",
    "protectedLimit": 10,
    "description": null, "lang": "en",
    "family": "carps (cyprinidae)"
  },
  {
    "id": 73, "fishId": "white-bream",
    "name": "white-bream",
    "protectedSize": 0,
    "protectedPeriod": "",
    "protectedLimit": 0,
    "description": null, "lang": "en",
    "family": "carps (cyprinidae)"
  },
  {
    "id": 74, "fishId": "cod",
    "name": "codfish",
    "protectedSize": 0,
    "protectedPeriod": "-",
    "protectedLimit": 0,
    "description": null, "lang": "en",
    "family": "codfishes (gadidae)"
  },
  {
    "id": 75, "fishId": "tench",
    "name": "tench",
    "protectedSize": 25,
    "protectedPeriod": "",
    "protectedLimit": 4,
    "description": null, "lang": "en",
    "family": "carps (cyprinidae)"
  },
  {
    "id": 76, "fishId": "grayling",
    "name": "grayling",
    "protectedSize": 30,
    "protectedPeriod": "from March 1 till May 31",
    "protectedLimit": 3,
    "description": null, "lang": "en",
    "family": "salmons (salmonidae)"
  },
  {
    "id": 77, "fishId": "silver-carp",
    "name": "silver-carp",
    "protectedSize": 0,
    "protectedPeriod": "",
    "protectedLimit": 0,
    "description": null, "lang": "en",
    "family": "carps (cyprinidae)"
  },
  {
    "id": 78, "fishId": "trout",
    "name": "trout",
    "protectedSize": 25,
    "protectedPeriod": "from September 1 till January 31",
    "protectedLimit": 3,
    "description": null, "lang": "en",
    "family": "salmons (salmonidae)"
  },
  {
    "id": 79, "fishId": "salmon",
    "name": "salmon",
    "protectedSize": 35,
    "protectedPeriod": "from October 1 till December 31",
    "protectedLimit": 2,
    "description": null, "lang": "en",
    "family": "salmons (salmonidae)"
  },
  {
    "id": 80, "fishId": "barbel",
    "name": "barbel",
    "protectedSize": 40,
    "protectedPeriod": "from January 1 till June 30",
    "protectedLimit": 3,
    "description": null, "lang": "en",
    "family": "carps (cyprinidae)"
  },
  {
    "id": 81, "fishId": "ide",
    "name": "ide",
    "protectedSize": 25,
    "protectedPeriod": "",
    "protectedLimit": 10,
    "description": null, "lang": "en",
    "family": "carps (cyprinidae)"
  },
  {
    "id": 82, "fishId": "bleak",
    "name": "bleak",
    "protectedSize": 0,
    "protectedPeriod": "",
    "protectedLimit": 0,
    "description": null, "lang": "en",
    "family": "carps (cyprinidae)"
  },
  {
    "id": 83, "fishId": "rudd",
    "name": "rudd",
    "protectedSize": 15,
    "protectedPeriod": "-",
    "protectedLimit": 0,
    "description": null, "lang": "en",
    "family": "carps (cyprinidae)"
  },
  {
    "id": 84, "fishId": "burbot",
    "name": "burbot",
    "protectedSize": 25,
    "protectedPeriod": "from December 1 till the end of February",
    "protectedLimit": 0,
    "description": null, "lang": "en",
    "family": "burbots (lota lota)"
  },
  {
    "id": 85, "fishId": "certa",
    "name": "certa",
    "protectedSize": 30,
    "protectedPeriod": "from September 1 till November 30",
    "protectedLimit": 5,
    "description": null, "lang": "en",
    "family": "carps (cyprinidae)"
  },
  {
    "id": 86, "fishId": "dace",
    "name": "dace",
    "protectedSize": 15,
    "protectedPeriod": "from September 1 till November 30",
    "protectedLimit": 0,
    "description": "quota 5kg",
    "lang": "en",
    "family": "carps (cyprinidae)"
  },
  {
    "id": 87, "fishId": "eel",
    "name": "eel",
    "protectedSize": 50,
    "protectedPeriod": "from June 15 till July 15",
    "protectedLimit": 2,
    "description": null, "lang": "en",
    "family": "eels (anguilliformes)"
  },
  {
    "id": 88, "fishId": "pigfish",
    "name": "pigfish",
    "protectedSize": 25,
    "protectedPeriod": "from January 1 till May 15",
    "protectedLimit": 5,
    "description": null, "lang": "en",
    "family": "carps (cyprinidae)"
  },
  {
    "id": 89, "fishId": "whitefish",
    "name": "whitefish",
    "protectedSize": 35,
    "protectedPeriod": "from October 15 till December 31",
    "protectedLimit": 4,
    "description": null, "lang": "en",
    "family": "salmons (salmonidae)"
  },
  {
    "id": 90, "fishId": "garfish",
    "name": "garfish",
    "protectedSize": 0,
    "protectedPeriod": "",
    "protectedLimit": 0,
    "description": null, "lang": "en",
    "family": "garfishes (belone belone)"
  },
  {
    "id": 91, "fishId": "danube",
    "name": "danube",
    "protectedSize": 70,
    "protectedPeriod": "from March 1 till May 31",
    "protectedLimit": 0,
    "description": "weekly quota from Monday till Sunday",
    "lang": "en",
    "family": "salmons (salmonidae)"
  }
];



