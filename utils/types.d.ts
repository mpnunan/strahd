import { UrlWithStringQuery } from "url";

type Npc = {
  id: string;
  name: string;
  details: string;
  alive: boolean;
  reachable: boolean;
}

type Player = {
  id: string;
  name: string;
  metaName: string;
  alive: boolean;
  bio: string;
}

type MapLocation = {
  id: string;
  name: string;
  details: string;
}

type Session = {
  id: string;
  title: string;
  session: number;
  date: string;
  summary: string;
}

type JoinSession = {
  date: string;
  id: string;
  session: number;
  title: string;
}

type JoinNpc = {
  id: string;
  name: string;
}

type JoinMapLocation = {
  id: string;
  name: string;
}

type SessionNpc = {
  id: string;
  sessionId: string;
  session: JoinSession;
  npc: JoinNpc;
  npcId: string;
}

type SessionMapLocation = {
  id: string;
  sessionId: string;
  session: JoinSession;
  mapLocationId: string;
  mapLocation: JoinMapLocation;
}

type Npcs =  Array<Npc>
type Players = Array<Player>;
type MapLocations =  Array<MapLocation>;
type Sessions = Array<Session>;
type SessionNpcs = Array<SessionNpc>;
type SessionMapLocations = Array<SessionMapLocation>;

type PlayerNote = {
  id: string;
  note: string;
  uid: string;
}

type PlayerNotes = Array<PlayerNote>;

type SessionComment = {
  id: string;
  comment: string;
  sessionId: string;
  sessionTitle: string;
  uid: string;
  playerName: string;
}

type SessionComments = Array<SessionComment>

export type {
  Npc,
  Player,
  MapLocation,
  Session,
  Npcs,
  Players,
  MapLocations,
  Sessions,
  JoinSession,
  JoinNpc,
  JoinSession,
  SessionMapLocation,
  SessionMapLocations,
  SessionNpc,
  SessionNpcs,
  PlayerNote,
  PlayerNotes,
  SessionComment,
  SessionComments,
}
