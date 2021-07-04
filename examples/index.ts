import { getEpicGames, getSteamGames } from "../src/index";


async function main() {
    const data = await getSteamGames()

    console.log(data)
}

main()
