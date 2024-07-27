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
}

type MapLocation = {
  id: string;
  name: string;
  npcs: Array<string>;
}

type Session = {
  id: string;
  session: number;
  date: string;
  summary: string;
  mapLocations: Array<string>;
  npcs: Array<string>
}

type Npcs =  Array<Npc>
type Players = Array<Player>;
type MapLocations =  Array<MapLocation>;
type Sessions = Array<Session>

export type {
  Npc,
  Player,
  MapLocation,
  Session,
  Npcs,
  Players,
  MapLocations,
  Sessions,
}
