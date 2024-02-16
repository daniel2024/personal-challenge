import Day from "../assets/animated/day.svg";
import CloudyDay from "../assets/animated/cloudy-day-2.svg";
import Cloudy from "../assets/animated/cloudy.svg";
import RainySun from "../assets/animated/rainy-3.svg";
import Thunder from "../assets/animated/thunder.svg";
import Rainy from "../assets/animated/rainy-6.svg";

export const weatherCodes = [
    {
    "type":"Clear",
    "icon": Day,
    "codes":[800]
    },
    {
        "type":"CloudsFew",
        "icon": CloudyDay,
        "codes":[801]
    },
    {
        "type":"Clouds",
        "icon":Cloudy,
        "codes":[803,802,804]
    },
    {
        "icon":RainySun,
        "codes":[500,501,502,503,504,511,520,521,522,531]
    },
    {
        "icon":Rainy,
        "codes":[300,301,302,310,311,312,313,314,321]
    },
    {
        "type":"Thunderstorm",
        "icon": Thunder,
        "codes":[200,201,202,211,212,221,230,231,232]
    }

]