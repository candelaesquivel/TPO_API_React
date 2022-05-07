// Ask the Time Complexity of startsWith in terms of O(n)
export function prefixStr(source, target){
    if (target.lenght === 0)
        return true;
    
    return source.startsWith(target);
}