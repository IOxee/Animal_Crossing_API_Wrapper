// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

export const API_ACNH = {
  baseUrl: "http://acnhapi.com/v1",
  villagersEndpoint: "/villagers",
  fishEndpoint: "/fish",
  seaCreaturesEndpoint: "/sea",
  bugsEndpoint: "/bugs",
  fossilsEndpoint: "/fossils",

  iconsFishEndpoint: "/icons/fish",
  iconsBugsEndpoint: "/icons/bugs",
  iconsVillagersEndpoint: "/icons/villagers",
  iconsArtEndpoint: "/icons/art",

  imagesFishEndpoint: "/images/fish",
  imagesBugsEndpoint: "/images/bugs",
  imagesVillagersEndpoint: "/images/villagers",
  imagesFossilsEndpoint: "/images/fossils",
  imagesSongsEndpoint: "/images/songs",
  imagesFurnitureEndpoint: "/images/furniture",

  songsEndpoint: "/songs",
  musicEndpoint: "/music",
  artEndpoint: "/art",
  hourlyEndpoint: "/hourly",
  bgmEndpoint: "/backgroundmusic",
  itemsEndpoint: "/houseware",
}

// DESCATADO FALTA DE X-API-KEY
// export const API_NOOKPEDIA = {
//   baseUrl: "https://api.nookipedia.com",
//   villagersEndpoint: "/villagers",
// }
