export interface SteamGamesInterface {
    games: {
        id: number
        title: string
        offerType: string
        mainImage: string
        originalPrice: string
        description: string
        productSlug: string
        url: string
        startDate: string,
        endDate: string
    }
}