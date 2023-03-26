import {backend} from "../apis";

function fullImagePath(link, base) {
    if (!link) return ""

    if (base) {
        return base + "/" + link
    } else {
        return backend + "/" + link
    }
}

export default fullImagePath