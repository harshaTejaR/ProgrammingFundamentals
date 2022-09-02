export default function strings() {
    const string = "This is a sentence without spaces"
    const noSpaceStr = string.replace(/ /g,"-");
    console.log(noSpaceStr);
    }