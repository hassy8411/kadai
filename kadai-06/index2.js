const str1 = "abc"
const str2 = "'abc'"
const str3 = '"abc"'
const str4 = '{"a" : undefined}'
const str5 = '{"a" : 123}'
const str6 = '{a : 123}'
const str7 = '{"func" : () => console.log("Hi!")}'
try {
    JSON.parse(str1)
} catch (error) {
    console.log(error)
}

try {
    JSON.parse(str2)
} catch (error) {
    console.log(error)
}

JSON.parse(str3)

try {
    JSON.parse(str4)
} catch (error) {
    console.log(error)
}

JSON.parse(str5)

try {
    JSON.parse(str6)
} catch (error) {
    console.log(error)
}

try {
    JSON.parse(str7)
} catch (error) {
    console.log(error)
}
str1 //できない(文字列だけのJSONは「""」で囲む必要がある)
str2 //できない(同上。「''」で囲んでしまっている)
str3 //できる
str4 //できない(JSONでは「undefined」は値として使えない)
str5 //できる
str6 //できない(「a」を「""」で囲まなければならない)
str7 //できない(JSONでは関数は値として使えない)