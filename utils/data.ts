import data from "./axiosConfig";
import type {
  Sessions,
  Session,
  Players,
  Player,
  Npcs,
  Npc,
  MapLocations,
  MapLocation,
  SessionNpcs,
  SessionNpc,
  SessionMapLocations,
  SessionMapLocation,
  PlayerNote,
  PlayerNotes,
  SessionComment,
  SessionComments,
  MapImages,
} from "./types";

// ================================
// Sessions
// ================================

const getSessions = async (): Promise<Sessions> => {
  const sessions = await data.get("/sessions.json");
  return Object.values(sessions.data);
};

const getSingleSession = async (id: string | null): Promise<Session> => {
  const singleSession = await data.get(`/sessions/${id}.json`);
  return singleSession.data;
};

const createSession = async (payload: Session): Promise<{ name: string }> => {
  const session = await data.post("/sessions.json", payload);
  return session.data;
};

const updateSession = async (id: string, payload: any): Promise<any> => {
  const session = await data.patch(`/sessions/${id}.json`, payload);
  return session.data;
};

// ================================
// Players
// ================================

const getPlayers = async (): Promise<Players> => {
  const players = await data.get("/players.json");
  return Object.values(players.data);
};

const getSinglePlayer = async (id: string | null): Promise<Player> => {
  const singlePlayer = await data.get(`/players/${id}.json`);
  return singlePlayer.data;
};

const getSinglePlayerByUid = async (uid: string | null): Promise<Player> => {
  const singlePlayer = await data.get(
    `/players.json?orderBy="uid"&equalTo="${uid}"`
  );
  return singlePlayer.data;
};

const createPlayer = async (payload: Player): Promise<{ name: string }> => {
  const player = await data.post("/players.json", payload);
  return player.data;
};

const updatePlayer = async (id: string, payload: any): Promise<any> => {
  const player = await data.patch(`/players/${id}.json`, payload);
  return player.data;
};

// ================================
// NPCs
// ================================

const getNpcs = async (): Promise<Npcs> => {
  const npcs = await data.get("/npcs.json");
  return Object.values(npcs.data);
};

const getSingleNpc = async (id: string | null): Promise<Npc> => {
  const singleNpc = await data.get(`/npcs/${id}.json`);
  return singleNpc.data;
};

const createNpc = async (payload: Npc): Promise<{ name: string }> => {
  const npc = await data.post("/npcs.json", payload);
  return npc.data;
};

const updateNpc = async (id: string, payload: any): Promise<any> => {
  const npc = await data.patch(`/npcs/${id}.json`, payload);
  return npc.data;
};

// ================================
// Map Locations
// ================================

const getMapLocations = async (): Promise<MapLocations> => {
  const mapLocations = await data.get("/mapLocations.json");
  return Object.values(mapLocations.data);
};

const getSingleMapLocation = async (
  id: string | null
): Promise<MapLocation> => {
  const singleMapLocation = await data.get(`/mapLocations/${id}.json`);
  return singleMapLocation.data;
};

const createMapLocation = async (
  payload: MapLocation
): Promise<{ name: string }> => {
  const mapLocation = await data.post("/mapLocations.json", payload);
  return mapLocation.data;
};

const updateMapLocation = async (id: string, payload: any): Promise<any> => {
  const mapLocation = await data.patch(`/mapLocations/${id}.json`, payload);
  return mapLocation.data;
};

// Map Images

const getMapImages = async (
  mapLocationId: string | null
): Promise<MapImages> => {
  const mapImages = await data.get(
    `/mapImages.json?orderBy="mapLocationId"&equalTo="${mapLocationId}"`
  );
  return Object.values(mapImages.data);
};

// ================================
// Session NPCs & Map Locations
// ================================

const getSessionNpcs = async (
  sessionId: string | undefined
): Promise<SessionNpcs> => {
  const npcs = await data.get(
    `/sessionNpcs.json?orderBy="sessionId"&equalTo="${sessionId}"`
  );
  return Object.values(npcs.data);
};

const createSessionNpc = async (
  payload: SessionNpc
): Promise<{ name: string }> => {
  const sessionNpc = await data.post("/sessionNpcs.json", payload);
  return sessionNpc.data;
};

const getSessionMapLocations = async (
  sessionId: string | undefined
): Promise<SessionMapLocations> => {
  const sessionMapLocations = await data.get(
    `/sessionLocations.json?orderBy="sessionId"&equalTo="${sessionId}"`
  );
  return Object.values(sessionMapLocations.data);
};

const createSessionMapLocation = async (
  payload: SessionMapLocation
): Promise<{ name: string }> => {
  const sessionMapLocation = await data.post("/sessionLocations,json", payload);
  return sessionMapLocation.data;
};

// ================================
// Player Notes
// ================================

const getPlayerNotes = async (uid: string): Promise<PlayerNotes> => {
  const playerNotes = await data.get(
    `/playerNotes.json?orderBy="uid"&equalTo="${uid}"`
  );
  return Object.values(playerNotes.data);
};

const getSinglePlayerNote = async (id: string): Promise<PlayerNote> => {
  const playerNote = await data.get(`/playerNotes/${id}.json`);
  return playerNote.data;
};

const createPlayerNote = async (
  note: PlayerNote
): Promise<{ name: string }> => {
  const playerNote = await data.post("/playerNotes.json", note);
  return playerNote.data;
};

const updatePlayerNote = async (id: string, note: any): Promise<any> => {
  const playerNote = await data.patch(`/playerNotes/${id}.json`, note);
  return playerNote.data;
};

const deletePlayerNote = async (id: string): Promise<any> => {
  const note = await data.delete(`/playerNotes/${id}.json`);
  return note.data;
};

// ================================
// Session Comments
// ================================

const getSingleSessionComment = async (
  id: string | undefined
): Promise<SessionComment> => {
  const sessionComment = await data.get(`/sessionComments/${id}.json`);
  return sessionComment.data;
};

const getSessionComments = async (
  sessionId: string | undefined
): Promise<SessionComments> => {
  const sessionComments = await data.get(
    `/sessionComments.json?orderBy="sessionId"&equalTo="${sessionId}"`
  );
  return Object.values(sessionComments.data);
};

const createSessionComment = async (
  comment: SessionComment
): Promise<{ name: string }> => {
  const sessionComment = await data.post("/sessionComments.json", comment);
  return sessionComment.data;
};

const updateSessionComment = async (id: string, comment: any): Promise<any> => {
  const sessionComment = await data.patch(
    `/sessionComments/${id}.json`,
    comment
  );
  return sessionComment.data;
};

const deleteSessionComment = async (id: string): Promise<any> => {
  const comment = await data.delete(`/sessionComments/${id}.json`);
  return comment.data;
};

export {
  getSessions,
  getSingleSession,
  createSession,
  updateSession,
  getPlayers,
  getSinglePlayer,
  getSinglePlayerByUid,
  createPlayer,
  updatePlayer,
  getNpcs,
  getSingleNpc,
  createNpc,
  updateNpc,
  getMapLocations,
  getSingleMapLocation,
  createMapLocation,
  updateMapLocation,
  getMapImages,
  getSessionNpcs,
  createSessionNpc,
  getSessionMapLocations,
  createSessionMapLocation,
  getPlayerNotes,
  getSinglePlayerNote,
  createPlayerNote,
  updatePlayerNote,
  deletePlayerNote,
  getSessionComments,
  getSingleSessionComment,
  createSessionComment,
  updateSessionComment,
  deleteSessionComment,
};
