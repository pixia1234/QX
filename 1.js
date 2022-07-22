/*
 *
 *

*******************************
[rewrite_local]
# > fj jkm
^https?:\/\/fjjkm1\.nebulabd\.cn\/ebus\/jkm\/health-code\/healthcode\/healthcode\/getNucleicAcidInfoList$ url script-response-body https://raw.githubusercontent.com/pixia1234/QX/main/1.js
[mitm] 
hostname = fjjkm1.nebulabd.cn
*
*
*/

var body = $response.body;
var objc = JSON.parse(body);

objc.items["NucleicAcidInfoList"] = {
    "ResultTime" : "2022-07-21 01:31:25",
    "SamplingTime" : "2022-07-20 19:04:46",
    "CheckOrgName" : "三明市中西医结合医院",
    "Result" : "2",
    "CardName" : "魏*云"
};

body = JSON.stringify(objc);
$done({ body });
