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
    kendo.cultures["yi"] = {
        name: "yi",
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
                name: "",
                abbr: "",
                pattern: ["-$ n","$ n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "XDR"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["זונטיק","מאָנטיק","דינסטיק","מיטוואך","דאנערשטיק","פֿרײַטיק","שבת"],
                    namesAbbr: ["זונטיק","מאָנטיק","דינסטיק","מיטוואך","דאנערשטיק","פֿרײַטיק","שבת"],
                    namesShort: ["זונטיק","מאָנטיק","דינסטיק","מיטוואך","דאנערשטיק","פֿרײַטיק","שבת"]
                },
                months: {
                    names: ["יאַנואַר","פֿעברואַר","מערץ","אַפּריל","מיי","יוני","יולי","אויגוסט","סעפּטעמבער","אקטאבער","נאוועמבער","דעצעמבער"],
                    namesAbbr: ["יאַנ","פֿעב","מערץ","אַפּר","מיי","יוני","יולי","אויג","סעפּ","אקט","נאוו","דעצ"]
                },
                AM: ["פֿאַרמיטאָג","פֿאַרמיטאָג","פֿאַרמיטאָג"],
                PM: ["נאָכמיטאָג","נאָכמיטאָג","נאָכמיטאָג"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dטן MMMM yyyy",
                    F: "dddd, dטן MMMM yyyy HH:mm:ss",
                    g: "dd/MM/yyyy HH:mm",
                    G: "dd/MM/yyyy HH:mm:ss",
                    m: "MMMM d",
                    M: "MMMM d",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy",
                    Y: "MMMM yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 1
            }
        }
    }
})(this);
}));