/*

[rewrite_local]
# > fj jkm
^https?:\/\/fjjkm1\.nebulabd\.cn\/ebus\/jkm\/health-code\/healthcode\/healthcode\/getNucleicAcidInfoList$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/WallCraftFProCrack.js
^https?:\/\/billing-ios\.wallpaperscraft\.com\/verify_receipt\/remove_ads$ url script-response-body https://raw.githubusercontent.com/pixia1234/QX/master/1.js
[mitm] 
hostname = fjjkm1.nebulabd.cn


*/


var body = $response.body;



body = {
  "Response" : {
    "Data" : {
      "NucleicAcidInfoList" : [
        {
          "ResultTime" : "2022-07-22 01:31:25",
          "SamplingTime" : "2022-07-21 19:04:46",
          "CheckOrgName" : "三明市中西医结合医院",
          "Result" : "2",
          "CardName" : "魏*云"
        },
        {
          "ResultTime" : "2022-07-16 22:30:32",
          "SamplingTime" : "2022-07-16 13:46:25",
          "CheckOrgName" : "三明市中西医结合医院",
          "Result" : "2",
          "CardName" : "魏*云"
        }
      ],
      "CaidStatus" : "2"
    },
    "RequestId" : "315c3f0cbcbb6756"
  }
};
body = JSON.stringify(body);
$done({ body });
