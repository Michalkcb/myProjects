export function getCustomProperty(element, property){
    return parseFloat(getComputedStyle(element).getPropertyValue(property)) || 0
}

export function setCustomProperty(element, property, value){
    element.style.setProperty(property, value)
}

export function incrementCustomProperty(element, property, increment){
    setCustomProperty(element, property, getCustomProperty(element, property) + increment)
}