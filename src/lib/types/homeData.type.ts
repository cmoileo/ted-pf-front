interface MusiqueType {
    id: number;
    id_musique: string
}
interface ImgType {
    data: {
        id: number;
        attributes: {
            name: string;
            alternativeText: null | string;
            caption: null | string;
            width: number;
            height: number;
            formats: {
                thumbnail: {
                    name: string;
                    hash: string;
                    ext: string;
                    mime: string;
                    path: null | string;
                    width: number;
                    height: number;
                    size: number;
                    url: string;
                };
                small: {
                    name: string;
                    hash: string;
                    ext: string;
                    mime: string;
                    path: null | string;
                    width: number;
                    height: number;
                    size: number;
                    url: string;
                };
            };
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: null | string;
            provider: string;
            provider_metadata: null | string;
            createdAt: string;
            updatedAt: string;
        };
    };
}
export interface HomeDataType {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Label_projets: string;
    Titre_projets: string;
    Outils: {
        id: number;
        Label: string;
        Titre: string;
    };
    Reseau_sociaux: {
        id: number;
        Lien: string;
    }[];
    Photo_bloc_1: ImgType;
    Photo_bloc_2: ImgType
    Photo_bloc_3: ImgType
    Photo_bloc_4: ImgType
    Images_films: {
        data: ImgType[]
    };
    a_propos: {
        Label: string;
        Titre: string;
        Image: ImgType;
    }
    spotify: {
        id: number;
        lien_playlist: string;
        musiques: MusiqueType[];
    }
}