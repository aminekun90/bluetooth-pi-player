export const CONFIG = {
  apiURL:"http://localHost:8000/",
  getSoCoDevice:"devices",
  getBleDevices:"bluetoothScan",
  getPrayers:"timings",
  getAzanList:"azanList",
  saveSettings:"saveSettings",
  getSettings:"getSettings",
  playEsterEgg:"playEsterEgg",
  allTimings: "allTimings",
}

export interface PrayerTimeObject {
  [prayer: string]: Date;
}

