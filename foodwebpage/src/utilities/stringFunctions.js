// Ask the Time Complexity of startsWith in terms of O(n)
export function prefixStr(source, target){
    if (target.lenght === 0)
        return true;

    const srcLower = source.toLowerCase();
    const targetLower = target.toLowerCase();
    
    return srcLower.startsWith(targetLower);
}