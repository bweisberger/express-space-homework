// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server
const marsMissions = [
  {
    name: "Curiosity",
    launchDate: "26 Nov 2011",
    operator: "NASA",
    missionType: "Rover",
    img: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC8yOTUvb3JpZ2luYWwvY3VyaW9zaXR5LXJvdmVyLmpwZw=="
  },
  {
    name: "Opportunity",
    launchDate: "8 Jul 2003",
    operator: "NASA",
    missionType: "Rover",
    img: "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/16q3/669461/we-drive-the-mars-opportunity-rover-review-car-and-driver-photo-671067-s-original.jpg?fill=2:1&resize=480:*"
  },
  {
    name: "Spirit",
    launchDate: "10 Jun 2003",
    operator: "NASA",
    missionType: "Rover",
    img: "https://i.ytimg.com/vi/hGiNRlmpids/maxresdefault.jpg"
  },
  {
    name: "Sojourner",
    launchDate: "4 Dec 1996",
    operator: "NASA",
    missionType: "Rover",
    img: "https://lightsinthedark.files.wordpress.com/2012/07/yogi-pres-col-2.jpg"
  },
  {
    name: "Rosetta",
    launchDate: "2 Mar 2004",
    operator: "ESA",
    missionType: "Gravity Assist",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Rosetta_and_Philae_at_comet_%2811206660686%29.jpg/170px-Rosetta_and_Philae_at_comet_%2811206660686%29.jpg"
  }
];

module.exports = marsMissions
