import {EpicGamesInterface} from "./interfaces/epic-games.interface";
import axios, {AxiosResponse} from "axios";
import * as config from '../config.json';

export const getEpicGames = async (country: string) => {
    if (!country) {
        throw new Error('Country is required')
    }

    const games = await axios.get(
        config.epic_games_api_url + country
    ).then(response => response.data);

    return await filter(games);
}


async function filter(data: AxiosResponse) {
    const gamesObj = await data?.data?.Catalog?.searchStore?.elements;

    const filteredGames = await gamesObj?.filter(
        (filteredObj: { offerType: string; promotions: { promotionalOffers: string | any[]; upcomingPromotionalOffers: string | any[]; }; }) =>
            filteredObj?.offerType === "BASE_GAME" &&
            filteredObj?.promotions?.promotionalOffers?.length !== 0 &&
            Date.parse(
                filteredObj?.promotions?.promotionalOffers[0].promotionalOffers[0]?.startDate
            ) < Date.now()
    )

    if (await filteredGames.length > 0) {
        return filteredGames.map((game: any) => {
            return <EpicGamesInterface["games"]> {
                id: game.id,
                title: game.title,
                description: game.description,
                mainImage: game.keyImages[1].url ?? game.keyImages[1].url,
                urlSlug: game.urlSlug
            }
        })
    }

    return [];
}