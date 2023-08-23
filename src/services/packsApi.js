import api from "./api";

export async function getPacks(){
    const response = await api.get("/packs");
    return response.data;
}

// export async function clientsPack()