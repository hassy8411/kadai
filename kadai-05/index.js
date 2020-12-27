const profile = {
    名前: '橋本格',
    年齢:19,
    趣味: '読書',
    専攻: '文学部',
}
const keys = Object.keys(profile)
console.log(keys)

for (let index = 0; index < keys.length; index = index + 1) {
    const key = keys[index]
    const value = profile[key]
    console.log('私の ' + key + ' は ' + value + ' です。')
}
