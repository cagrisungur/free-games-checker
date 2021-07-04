import {EpicGamesInterface} from "./interfaces/epic-games.interface";
import axios, {AxiosResponse} from "axios";
import * as config from '../config.json';
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const AdBlockerPlugin = require('puppeteer-extra-plugin-adblocker')
puppeteer.use(AdBlockerPlugin({ blockTrackers: true }))

export const getEpicGames = async (country: string) => {
    if (!country) {
        throw new Error('Country is required')
    }

    const games = await axios.get(
        config.epic_games_api_url + country
    ).then(response => response.data);

    return await filter(games);
}

export const getSteamGames = async () => {
    puppeteer.launch({
        headless: false,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        'ignoreHTTPSErrors': true
    }).then(async (browser: { newPage: () => any; close: () => any; }) => {
        const page = await browser.newPage()
        // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36');
        await page.setViewport({ width: 800, height: 600 })

        // console.log(`Testing adblocker plugin..`)
        // await page.goto('https://steamdb.info/upcoming/free/')
        // await page.waitForTimeout(7000)
        // await page.screenshot({ path: 'adblocker.png', fullPage: true })

        console.log(`Testing the stealth plugin..`)
        await page.goto('https://steamdb.info/upcoming/free/')
        await page.waitForTimeout(7000)
        await page.screenshot({ path: 'stealth.png', fullPage: true })

        console.log(`All done, check the screenshots. ✨`)
        await browser.close()
    })
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
                url: game.urlSlug
            }
        })
    }

    return [];
}