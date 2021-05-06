//dropdown select (0) [list of elements] allow text fill
//number slider (1) [min,max,step,default]
//color wheel (2) [none]

//tilde index replaced with that type value

import GetList from "./LongLists";

function Style(value, selectors){
    this.value = value;
    this.selectors = selectors;
}

function Selector(name,types,format,data,labels){
    this.name = name;
    this.types = types;
    this.format = format;
    this.data = data;
    this.labels = labels;
}

const paddingRanges = [0,300,1,0]


const colorWheelSelector = new Selector("Color wheel picker",[2],"#~0",[[]],["Color:"]);
const colorPickerSelector = new Selector("Color name dropdown",[0],"~0",[GetList('colorNames')],["Color:"]);

const fontSizePxSelector = new Selector("Font size slider in px",[1],"~0px",[[0,144,0.5,14]],["Font size"]);
const fontSizePercentSelector = new Selector("Font size slider in %",[1],"~0%",[[0,500,1,100]],["Font size"]);
const fontSizePickerSelector = new Selector("Font size selector",[0],"~0",[GetList('fontSizeNames')],["Font size"]);

const fontFamilySelector = new Selector("Font selector",[0,0],"~0,~1",[GetList('fontFamilies'),GetList('fontGenerics')],["Font name:","Font style:"]);

const widthPxSelector = new Selector("Width slider in px",[1],"~0px",[[0,3000,1,300]],["Width:"]);
const widthPercentSelector = new Selector("Width slider in %",[1],"~0%",[[0,100,1,100]],["Width:"]);
const widthPickerSelector = new Selector("Width selector",[0],"~0",[GetList('sizes')],["Width:"]);

const lengthPxSelector = new Selector("Length slider in px",[1],"~0px",[[0,1800,1,300]],["Length:"]);
const lengthPercentSelector = new Selector("Length slider in %",[1],"~0%",[[0,100,1,100]],["Length:"]);
const lengthPickerSelector = new Selector("Length selector",[0],"~0",[GetList('sizes')],["Length:"]);

const paddingPxSelector = new Selector("Padding selector in px",[1,1,1,1],"~0px ~1px ~2px ~3px",[paddingRanges,paddingRanges,paddingRanges,paddingRanges],["Top:","Right:","Bottom:","Left:"]);
const paddingPercentSelector = new Selector("Padding selector in px",[1,1,1,1],"~0% ~1% ~2% ~3%",[paddingRanges,paddingRanges,paddingRanges,paddingRanges],["Top:","Right:","Bottom:","Left:"]);

const backgroundColorWheelSelector = new Selector("Background color wheel",[2],"#~0",[[]],["Background color"]);
const backgroundColorPickerSelector = new Selector("Background color name dropdown",[0],"~0",[GetList('colorNames')],["Background color:"]);


const options = {
    'Color': new Style('color',[colorWheelSelector,colorPickerSelector]),
    'Font size': new Style('font-size',[fontSizePxSelector,fontSizePercentSelector,fontSizePickerSelector]),
    'Font': new Style('font-family',[fontFamilySelector]),
    'Width': new Style('width',[widthPxSelector,widthPercentSelector,widthPickerSelector]),
    'Length': new Style('length',[lengthPxSelector,lengthPercentSelector,lengthPickerSelector]),
    'Padding':new Style('padding',[paddingPxSelector,paddingPercentSelector]),
    'Background color':new Style('background-color',[backgroundColorWheelSelector,backgroundColorPickerSelector]),
}
