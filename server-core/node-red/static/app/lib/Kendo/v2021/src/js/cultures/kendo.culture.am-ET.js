/** 
 * Kendo UI v2021.2.616 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/

(function(f){
    if (typeof define === 'function' && define.amd) {
        define(["kendo.core"], f);
    } else {
        f();
    }
}(function(){
(function( window, undefined ) {
    kendo.cultures["am-ET"] = {
        name: "am-ET",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ",",
            ".": ".",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "Ethiopian Birr",
                abbr: "ETB",
                pattern: ["-$n","$n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "ብር"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["እሑድ","ሰኞ","ማክሰኞ","ረቡዕ","ሐሙስ","ዓርብ","ቅዳሜ"],
                    namesAbbr: ["እሑድ","ሰኞ","ማክሰ","ረቡዕ","ሐሙስ","ዓርብ","ቅዳሜ"],
                    namesShort: ["እ","ሰ","ማ","ረ","ሐ","ዓ","ቅ"]
                },
                months: {
                    names: ["ጃንዩወሪ","ፌብሩወሪ","ማርች","ኤፕሪል","ሜይ","ጁን","ጁላይ","ኦገስት","ሴፕቴምበር","ኦክቶበር","ኖቬምበር","ዲሴምበር"],
                    namesAbbr: ["ጃንዩ","ፌብሩ","ማርች","ኤፕሪ","ሜይ","ጁን","ጁላይ","ኦገስ","ሴፕቴ","ኦክቶ","ኖቬም","ዲሴም"]
                },
                AM: ["ጥዋት","ጥዋት","ጥዋት"],
                PM: ["ከሰዓት","ከሰዓት","ከሰዓት"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "yyyy MMMM d, dddd",
                    F: "yyyy MMMM d, dddd h:mm:ss tt",
                    g: "dd/MM/yyyy h:mm tt",
                    G: "dd/MM/yyyy h:mm:ss tt",
                    m: "MMMM d",
                    M: "MMMM d",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy",
                    Y: "MMMM yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 0
            }
        }
    }
})(this);
}));