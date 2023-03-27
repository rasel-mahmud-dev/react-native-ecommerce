import {backend} from "../apis";

function fullImagePath(link, base) {
    if (!link) return ""

    if(link.startsWith("http")) return  link

    if (base) {
        return base + "/" + link
    } else {
        return backend + "/" + link
    }
}

export default fullImagePath

