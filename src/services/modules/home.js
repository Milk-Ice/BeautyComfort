import MYrequest from "..";

export function getHomeGoodPriceData() {
    return MYrequest.get({
        url: "/home/goodprice"
    })
}
export function getHomeHighScoreData() {
    return MYrequest.get({
        url: "/home/highscore"
    })
}