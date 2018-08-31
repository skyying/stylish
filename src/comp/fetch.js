import {FIREBASE_CONFIG} from "./constant.js";
var firebase = require("firebase");

export const initFirebase = () => {
    firebase.initializeApp({
        apiKey: FIREBASE_CONFIG.apiKey,
        projectId: FIREBASE_CONFIG.projectId,
        storageBucket: FIREBASE_CONFIG.storageBucket,
    });
    return firebase.storage();
};


