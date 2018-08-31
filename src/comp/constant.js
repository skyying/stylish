
export const API = {
    hostName: "https://appworks-school-stylish.firebaseapp.com",
    path:
        "/exe/product/list",
    pagePath:
        "https://appworks-school-stylish.firebaseapp.com/exe/product/list?page=",
    keyVisual: "/exe/keyvisual/list",
    checkoutPath: "/exe/order/checkout",
};

export const TAPPAY = {
    id: 12348,
    token: "app_pa1pQcKoY22IlnSXq5m5WP5jFKzoRG58VEXpT7wU62ud7mMbDOGzCYIlzzLF",
};

export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyB8bXw1Xco2dzjTwI1RvjJsMalLXtr8gYo",
    projectId: "appworks-school-stylish",
    storageBucket: "appworks-school-stylish.appspot.com",
};

export const imageRef = {
    extension: "jpg",
    main: "main",
    supplement: Array.from({length: 2})
        .fill(0)
        .map((name, i) => i),
};
