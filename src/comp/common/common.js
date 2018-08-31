export const getKey = (n=3) => {
    let letter = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ";
    return Array.from({length: n})
        .fill(0)
        .map(w => letter[Math.floor(Math.random() * (letter.length - 1))])
        .join("");
};
