const str1 = 'Aaabbbbbcccccddddaaaa';
const str2 = 'abbBAccc';
const str3 = '1222233';
const compressString = (str) => {
    let res = '';
    let count = 1;
    for (let i in str) {
        let cur = str[i];
        let next = str[i + 1];
        if (cur === next) {
            count++;
        } else {
            res += cur + String(count);
            count = 1;
        };
    }
    if(res.length < str.length) {
        console.log(res)
    } else {
        console.log(str)
    }
};
