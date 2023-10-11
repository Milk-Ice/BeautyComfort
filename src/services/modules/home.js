import MYrequest from "..";

export function getHomeGoodPriceData() {
    return MYrequest.get({
        url: "/home/goodprice"
    })
}