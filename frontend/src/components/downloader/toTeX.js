// import { CONC, CROS, NEST } from './rnaInteraction'


let stringfiedTree = ''


function scanTree(node) {
    stringfiedTree = stringfiedTree.concat('{$').concat(`${node.name}`).concat('$}')
    if (node.children) {
        node.children.forEach(node => {
            stringfiedTree = stringfiedTree.concat('[')
            scanTree( node )
            stringfiedTree = stringfiedTree.concat(']')
        });
    }
    else {
        return null
    }

}

export default function converter(jsonTree) {
    const texTree = '\\documentclass[border=10pt]{standalone} \\usepackage{forest} \\usepackage{amssymb} \\begin{document} \\begin{forest} for tree={draw, semithick, rounded corners, font = \\sffamily, top color = white, bottom color = white, grow = south, s sep = 4mm, l sep = 8mm,} ['
    const texClosure = ']; \\end{forest} \\end{document}'
    scanTree(jsonTree)
    return texTree.concat(stringfiedTree).concat(texClosure)
}
