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
export function getHomeDiscountData() {
    return MYrequest.get({
        url: "/home/discount"
    })
}
export function getHomeHotRecommandData() {
    return MYrequest.get({
        url: "/home/hotrecommenddest"
    })
}
export function getHomeLongforData() {
    return MYrequest.get({
        url: "/home/longfor"
    })
}
export function getHomePlusData() {
    return MYrequest.get({
        url: "/home/plus"
    })
}