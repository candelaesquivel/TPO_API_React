// Ask the Time Complexity of startsWith in terms of O(n)
export default function prefixStr(source, target){
    if (target.lenght === 0)
        return true;
    
    console.log(target);

    return source.startsWith(target);
}