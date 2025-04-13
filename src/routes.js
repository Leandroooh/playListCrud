import { Router } from "express";
import {
	playlistIndexRoute,
	playlistCreateRoute,
	playlistsShowByIdRoute,
	playlistsShowRoute,
	playlistDeleteRoute,
	playlistUpdateRoute,
} from "./controllers/PlayListRoutes.js";
import {
	musicCreateRoute,
	musicDeleteRoute,
	musicUpdateRoute,
} from "./controllers/MusicRoutes.js";

const router = Router();

router.get("/", playlistIndexRoute);
router.get("/playlists/", playlistsShowRoute);
router.get("/playlists/:id", playlistsShowByIdRoute);
router.post("/playlists/create", playlistCreateRoute);
router.patch("/playlists/update/:id", playlistUpdateRoute);
router.delete("/playlists/delete/:id", playlistDeleteRoute);

router.post("/playlists/musics/create", musicCreateRoute);
router.patch("/playlists/musics/update", musicUpdateRoute);
router.delete("/playlists/musics/delete", musicDeleteRoute);

export default router;
